import React from "react";
import MaterialTable from "material-table";
import { getMetadata, PageWithIdProps } from "../store";
import { addLokasi, listLokasi, updateLokasi } from "../helper";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { ComponentFullScreenDialogModel, ComponentSuara } from "../components";
import ComponentFullScreenDialog from "../components/fullScreenDialog";
import { Lokasi, Perhitungan, Query } from "../proto/core_pb";
import { CoreServicePromiseClient } from "../proto/core_grpc_web_pb";
const PageKelurahan: React.FunctionComponent<
  RouteComponentProps<PageWithIdProps>
> = ({ match }) => {
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
        const result = await service.lokasiFind(
          new Query().setValue(`${match.params.id}`),
          metadata
        );
        setData(listLokasi(result));
      } catch (error) {
        alert(error.message);
      }
    };
    unsub();
  }, [match.params.id]);
  const Add = async (newData: Lokasi.AsObject) => {
    try {
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      newData.idparent = match.params.id;
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
      const checkParent = await service.tpsFind(
        new Query().setValue(oldData.id),
        metadata
      );
      if (checkParent.getItemsList().length !== 0)
        throw new Error("anda harus menghapus semua TPS dalam " + oldData.nama);
      await service.lokasiDelete(new Query().setValue(oldData.id), metadata);
      setData(data.filter((it) => it.id !== oldData.id));
      return;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <React.Fragment>
      <ComponentFullScreenDialog
        title={dialogSuara?.title}
        close={() => setDialogSuara(undefined)}
      >
        {dialogSuara && <ComponentSuara {...dialogSuara.selectedData} />}
      </ComponentFullScreenDialog>
      <MaterialTable
        title="Kelurahan"
        options={{ pageSize: 20 }}
        columns={[
          {
            title: "Kelurahan",
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
                  ).findSuara(new Query().setValue(rowData.id), metadata);
                  setDialogSuara({
                    title: rowData.nama,
                    selectedData: result.toObject(),
                  });
                } catch (error) {
                  alert(error.message);
                }
              }
            },
            // Do save operation
          },
          {
            icon: "location_on",
            tooltip: "TPS",
            onClick: async (event, rowData) => {
              if (!Array.isArray(rowData))
                history.push("/tps/" + rowData.idparent + "/" + rowData.id);
              // Do save operation
            },
          },
        ]}
      />
    </React.Fragment>
  );
};
export default PageKelurahan;
