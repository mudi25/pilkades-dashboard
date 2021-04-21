import React from "react";
import MaterialTable from "material-table";
import { getMetadata } from "../store";
import { addLokasi, updateLokasi } from "../helper";
import { ComponentFullScreenDialogModel, ComponentSuara } from "../components";
import ComponentFullScreenDialog from "../components/fullScreenDialog";
import { useHistory } from "react-router-dom";
import { Lokasi, Perhitungan, Query } from "../proto/core_pb";
import { CoreServicePromiseClient } from "../proto/core_grpc_web_pb";
const PageKecamatan: React.FunctionComponent = () => {
  const history = useHistory();
  const [data, setData] = React.useState<Lokasi.AsObject[]>([]);
  const [dialogSuara, setDialogSuara] = React.useState<
    ComponentFullScreenDialogModel<Perhitungan.AsObject>
  >();

  React.useEffect(() => {
    const unsub = async () => {
      try {
        const service = new CoreServicePromiseClient(
          process.env.REACT_APP_API_ENDPOINT!!
        );
        const metadata = await getMetadata();
        const findKota = await service.lokasiFind(
          new Query().setValue(`${process.env.REACT_APP_ID_KOTA}`),
          metadata
        );
        setData(findKota.getItemsList().map((it) => it.toObject()));
      } catch (error) {
        alert(error.message);
      }
    };
    unsub();
  }, []);
  const Add = async (newData: Lokasi.AsObject) => {
    try {
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      newData.idparent = process.env.REACT_APP_ID_KOTA!!;
      const result = await service.lokasiAdd(addLokasi(newData), metadata);
      setData([result.toObject(), ...data]);
      return;
    } catch (error) {
      alert(error.message);
    }
  };
  const Update = async (
    oldData: Lokasi.AsObject | undefined,
    newData: Lokasi.AsObject
  ) => {
    try {
      if (!oldData) return;
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      await service.lokasiUpdate(updateLokasi(oldData, newData), metadata);
      setData(data.map((it) => (it.id === oldData.id ? newData : it)));
      return;
    } catch (error) {
      alert(error.message);
    }
  };

  const Delete = async (oldData: Lokasi.AsObject) => {
    try {
      if (!oldData) return;
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const checkParent = await service.lokasiFind(
        new Query().setValue(oldData.id),
        metadata
      );
      if (checkParent.getItemsList().length !== 0)
        throw new Error(
          "anda harus menghapus semua kelurahan dalam " + oldData.nama
        );
      await service.lokasiDelete(new Query().setValue(oldData.id), metadata);
      setData(data.filter((it) => it.id !== oldData.id));
      return;
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <ComponentFullScreenDialog
        title={dialogSuara?.title}
        close={() => setDialogSuara(undefined)}
      >
        {dialogSuara && <ComponentSuara {...dialogSuara.selectedData} />}
      </ComponentFullScreenDialog>
      <MaterialTable
        title="Kecamatan"
        options={{ pageSize: 20 }}
        columns={[
          {
            title: "Kecamatan",
            field: "nama",
          },
        ]}
        data={data}
        editable={{
          onRowAdd: (newData) => Add(newData),
          onRowUpdate: (newData, oldData) => Update(oldData, newData),
          onRowDelete: (oldData) => Delete(oldData),
        }}
        actions={[
          {
            icon: "bar_chart",
            tooltip: "Survey",
            onClick: async (event, rowData) => {
              if (!Array.isArray(rowData)) {
                try {
                  const metadata = await getMetadata();
                  const result = await new CoreServicePromiseClient(
                    process.env.REACT_APP_API_ENDPOINT!!
                  ).findSuara(
                    new Query().setValue(`kecamatan/${rowData.id}`),
                    metadata
                  );
                  setDialogSuara({
                    title: rowData.nama,
                    selectedData: result.toObject(),
                  });
                } catch (error) {
                  alert(error.message);
                }
              }
            },
          },
          {
            icon: "location_on",
            tooltip: "Kelurahan",
            onClick: (event, rowData) => {
              if (!Array.isArray(rowData))
                history.push("/kelurahan/" + rowData.id);
              return;
            },
          },
        ]}
      />
    </div>
  );
};

export default PageKecamatan;
