import React from "react";
import MaterialTable from "material-table";
import { getMetadata } from "../store";
import { RouteComponentProps, useHistory } from "react-router-dom";
import {
  ComponentTextField,
  ComponentSelectPropsValue,
  ComponentSelect,
  ComponentSuara,
} from "../components";
import ImagePicker from "../components/imagePicker";
import { uploadFile } from "../store";
import { extname } from "path";
import LinearProgress from "@material-ui/core/LinearProgress";
import ComponentFullScreenDialog, {
  ComponentFullScreenDialogModel,
} from "../components/fullScreenDialog";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { CoreServicePromiseClient } from "../proto/core_grpc_web_pb";
import {
  AddTps,
  Perhitungan,
  Query,
  Tps,
  UpdateImageUrl,
  UpdateTps,
  UserRoles,
} from "../proto/core_pb";
type PageTpsProps = {
  idKelurahan: string;
  idKecamatan: string;
};
const PageTps: React.FunctionComponent<RouteComponentProps<PageTpsProps>> = ({
  match,
}) => {
  const verifikasi: ComponentSelectPropsValue[] = [
    { label: "Ya", value: true },
    { label: "Tidak", value: false },
  ];
  const history = useHistory();
  const { control, handleSubmit } = useForm<Tps.AsObject>();
  const [data, setData] = React.useState<Tps.AsObject[]>([]);
  const [progress, setProgress] = React.useState<boolean>(false);
  const [dialogSuara, setDialogSuara] = React.useState<
    ComponentFullScreenDialogModel<Perhitungan.AsObject>
  >();
  const [dialogManipulasiTps, setDialogManipulasiTps] = React.useState<
    ComponentFullScreenDialogModel<Tps.AsObject>
  >();
  React.useEffect(() => {
    const unsub = async () => {
      try {
        const service = new CoreServicePromiseClient(
          process.env.REACT_APP_API_ENDPOINT!!
        );
        const metadata = await getMetadata();
        const find = await service.tpsFind(
          new Query().setValue(match.params.idKelurahan),
          metadata
        );
        setData(find.getItemsList().map((it) => it.toObject()));
      } catch (error) {
        alert(error.message);
      }
    };
    unsub();
  }, [match.params.idKelurahan]);
  const Add = async (newData: Tps.AsObject) => {
    try {
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const result = await service.tpsAdd(
        new AddTps()
          .setIdkota(process.env.REACT_APP_ID_KOTA!!)
          .setIdkecamatan(match.params.idKecamatan)
          .setIdkelurahan(match.params.idKelurahan)
          .setNama(newData.nama)
          .setPemilihlaki(newData.pemilihlaki)
          .setPemilihperempuan(newData.pemilihperempuan),
        metadata
      );
      setData([result.toObject(), ...data]);
      return;
    } catch (error) {
      alert(error.message);
    }
  };
  const Delete = async (oldData: Tps.AsObject) => {
    try {
      if (!oldData) return;
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      await service.tpsDelete(new Query().setValue(oldData.id), metadata);
      setData(data.filter((it) => it.id !== oldData.id));
      return;
    } catch (error) {
      alert(error.message);
    }
  };
  const onSubmit = handleSubmit(async (datax) => {
    if (progress || !dialogManipulasiTps) return;
    const defaultData = dialogManipulasiTps.selectedData;
    const newData = datax;
    const title = dialogManipulasiTps.title;
    setDialogManipulasiTps(undefined);
    setProgress(true);
    try {
      const api = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const mData = new UpdateTps()
        .setId(defaultData.id)
        .setNama(defaultData.nama)
        .setPemilihlaki(Number(newData.pemilihlaki))
        .setPemilihperempuan(Number(newData.pemilihperempuan))
        .setPenggunahakpilihlaki(Number(newData.penggunahakpilihlaki))
        .setPenggunahakpilihperempuan(Number(newData.penggunahakpilihperempuan))
        .setNomorurut1(Number(newData.nomorurut1))
        .setNomorurut2(Number(newData.nomorurut2))
        .setNomorurut3(Number(newData.nomorurut3))
        .setNomorurut4(Number(newData.nomorurut4))
        // .setSuarasah(
        //   Number(newData.nomorurut1) +
        //     Number(newData.nomorurut2) +
        //     Number(newData.nomorurut3) +
        //     Number(newData.nomorurut4)
        // )
        .setIsinput((newData.isinput as any).value);

      if (title === "Ubah") {
        await api.tpsUpdate(mData, metadata);
        const o = mData.toObject();
        setData(data.map((it) => (it.id === o.id ? { ...it, ...o } : it)));
      }
    } catch (error) {
      alert(error.message);
    }
    setProgress(false);
  });
  const UploadImagePlano = async (
    event: React.ChangeEvent<HTMLInputElement>,
    oldData: Tps.AsObject
  ) => {
    if (progress) return;
    setProgress(true);
    try {
      const files = event.target.files;
      if (!files) {
        setProgress(false);
        return;
      }
      const file = files.item(0);
      if (!file) {
        setProgress(false);
        return;
      }
      const api = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const tpsResult = await api.myTps(
        new Query().setValue(oldData.id),
        metadata
      );
      const tps = tpsResult.toObject();

      const path = await uploadFile(
        file,
        `${tps.idkecamatan}/${tps.idkelurahan}/${tps.nama}/formPleno-${
          Date.now().toString() + extname(file.name)
        }`
      );

      const result = await api.tpsUpdateImageUrlPlano(
        new UpdateImageUrl()
          .setId(oldData.id)
          .setDestination(path)
          .setOldurl(oldData.imageurlplano),
        metadata
      );
      setData(
        data.map((it) =>
          it.id === oldData.id
            ? {
                ...it,
                imageurlplano: result.getValue(),
              }
            : it
        )
      );
    } catch (error) {
      alert(error.message);
    }
    setProgress(false);
  };
  const UploadImageC1kwk = async (
    event: React.ChangeEvent<HTMLInputElement>,
    oldData: Tps.AsObject
  ) => {
    if (progress) return;
    setProgress(true);
    try {
      const files = event.target.files;
      if (!files) {
        setProgress(false);
        return;
      }
      const file = files.item(0);
      if (!file) {
        setProgress(false);
        return;
      }
      const api = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const tpsResult = await api.myTps(
        new Query().setValue(oldData.id),
        metadata
      );
      const tps = tpsResult.toObject();

      const path = await uploadFile(
        file,
        `${tps.idkecamatan}/${tps.idkelurahan}/${tps.nama}/c1kwk-${
          Date.now().toString() + extname(file.name)
        }`
      );

      const result = await api.tpsUpdateImageUrlC1Kwk(
        new UpdateImageUrl()
          .setId(oldData.id)
          .setDestination(path)
          .setOldurl(oldData.imageurlc1kwk),
        metadata
      );
      setData(
        data.map((it) =>
          it.id === oldData.id
            ? {
                ...it,
                imageurlc1kwk: result.getValue(),
              }
            : it
        )
      );
    } catch (error) {
      alert(error.message);
    }
    setProgress(false);
  };
  const UploadImageHasil = async (
    event: React.ChangeEvent<HTMLInputElement>,
    oldData: Tps.AsObject
  ) => {
    if (progress) return;
    setProgress(true);
    try {
      const files = event.target.files;
      if (!files) {
        setProgress(false);
        return;
      }
      const file = files.item(0);
      if (!file) {
        setProgress(false);
        return;
      }
      const api = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const tpsResult = await api.myTps(
        new Query().setValue(oldData.id),
        metadata
      );
      const tps = tpsResult.toObject();

      const path = await uploadFile(
        file,
        `${tps.idkecamatan}/${tps.idkelurahan}/${tps.nama}/hasil-${
          Date.now().toString() + extname(file.name)
        }`
      );

      const result = await api.tpsUpdateImageUrlHasil(
        new UpdateImageUrl()
          .setId(oldData.id)
          .setDestination(path)
          .setOldurl(oldData.imageurlhasil),
        metadata
      );
      setData(
        data.map((it) =>
          it.id === oldData.id
            ? {
                ...it,
                imageurlhasil: result.getValue(),
              }
            : it
        )
      );
    } catch (error) {
      alert(error.message);
    }
    setProgress(false);
  };
  const UploadImageNotaKeberatan = async (
    event: React.ChangeEvent<HTMLInputElement>,
    oldData: Tps.AsObject
  ) => {
    if (progress) return;
    setProgress(true);
    try {
      const files = event.target.files;
      if (!files) {
        setProgress(false);
        return;
      }
      const file = files.item(0);
      if (!file) {
        setProgress(false);
        return;
      }
      const api = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const tpsResult = await api.myTps(
        new Query().setValue(oldData.id),
        metadata
      );
      const tps = tpsResult.toObject();

      const path = await uploadFile(
        file,
        `${tps.idkecamatan}/${tps.idkelurahan}/${tps.nama}/notakeberatan-${
          Date.now().toString() + extname(file.name)
        }`
      );

      const result = await api.tpsUpdateImageUrlHasil(
        new UpdateImageUrl()
          .setId(oldData.id)
          .setDestination(path)
          .setOldurl(oldData.imageurlnotakeberatan),
        metadata
      );
      setData(
        data.map((it) =>
          it.id === oldData.id
            ? {
                ...it,
                imageurlnotakeberatan: result.getValue(),
              }
            : it
        )
      );
    } catch (error) {
      alert(error.message);
    }
    setProgress(false);
  };
  return (
    <React.Fragment>
      {progress && <LinearProgress />}
      <ComponentFullScreenDialog
        title={dialogSuara?.title}
        close={() => setDialogSuara(undefined)}
      >
        {dialogSuara && <ComponentSuara {...dialogSuara.selectedData} />}
      </ComponentFullScreenDialog>
      <ComponentFullScreenDialog
        close={() => setDialogManipulasiTps(undefined)}
        title={dialogManipulasiTps?.title}
      >
        <form onSubmit={onSubmit}>
          <Grid container spacing={3} style={{ padding: 10 }}>
            <Grid item xs={3}>
              <ComponentTextField
                name="nomorurut1"
                label="Nomor Urut 1"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.nomorurut1
                    : ""
                }
              />
            </Grid>
            <Grid item xs={3}>
              <ComponentTextField
                name="nomorurut2"
                label="Nomor Urut 2"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.nomorurut2
                    : ""
                }
              />
            </Grid>
            <Grid item xs={3}>
              <ComponentTextField
                name="nomorurut3"
                label="Nomor Urut 3"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.nomorurut3
                    : ""
                }
              />
            </Grid>
            <Grid item xs={3}>
              <ComponentTextField
                name="nomorurut4"
                label="Nomor Urut 4"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.nomorurut4
                    : ""
                }
              />
            </Grid>

            <Grid item xs={4}>
              <ComponentTextField
                name="pemilihlaki"
                label="Pemilih Laki Laki"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.pemilihlaki
                    : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <ComponentTextField
                name="pemilihperempuan"
                label="Pemilih Perempuan"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.pemilihperempuan
                    : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <ComponentTextField
                name="pemilihtotal"
                label="Total Pemilih"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.pemilihtotal
                    : ""
                }
                disabled={true}
              />
            </Grid>

            <Grid item xs={4}>
              <ComponentTextField
                name="penggunahakpilihlaki"
                label="Pengguna Hak Pilih Laki Laki"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.penggunahakpilihlaki
                    : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <ComponentTextField
                name="penggunahakpilihperempuan"
                label="Pengguna Hak Pilih Perempuan"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.penggunahakpilihperempuan
                    : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <ComponentTextField
                name="penggunahakpilihtotal"
                label="Total Pengguna Hak Pilih"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.penggunahakpilihtotal
                    : ""
                }
                disabled={true}
              />
            </Grid>

            <Grid item xs={4}>
              <ComponentTextField
                name="suarasah"
                label="Suara Sah"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.suarasah
                    : ""
                }
                disabled={true}
              />
            </Grid>
            <Grid item xs={4}>
              <ComponentTextField
                name="suaratidaksah"
                label="Suara Tidak Sah"
                required={true}
                control={control}
                inputType="number"
                defaultValue={
                  dialogManipulasiTps
                    ? dialogManipulasiTps.selectedData.suaratidaksah
                    : ""
                }
                disabled={true}
              />
            </Grid>
            <Grid item xs={4}>
              <ComponentSelect
                name="isinput"
                label="Verifikasi"
                required={true}
                control={control}
                value={verifikasi}
                defaultValue={
                  dialogManipulasiTps
                    ? verifikasi.find(
                        (it) =>
                          it.value === dialogManipulasiTps.selectedData.isinput
                      )
                    : verifikasi.find((it) => it.value === false)
                }
              />
            </Grid>

            <Grid item xs={12}>
              {dialogManipulasiTps && dialogManipulasiTps.title === "Ubah" && (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  {dialogManipulasiTps ? dialogManipulasiTps.title : ""}
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </ComponentFullScreenDialog>

      <MaterialTable
        title="TPS"
        options={{
          pageSize: 20,
          rowStyle: (rowData) => ({
            backgroundColor: rowData.isinput ? "#10f500" : "#ff0303",
          }),
        }}
        columns={[
          {
            title: "TPS",
            field: "nama",
            cellStyle: () => ({ color: "#ffffff" }),
          },
          {
            title: "Pemilih L",
            field: "pemilihlaki",
            type: "numeric",
            cellStyle: () => ({ color: "#ffffff" }),
          },
          {
            title: "Pemilih P",
            field: "pemilihperempuan",
            type: "numeric",
            cellStyle: () => ({ color: "#ffffff" }),
          },
          {
            title: "Pemilih Total",
            field: "pemilihtotal",
            type: "numeric",
            editable: "never",
            cellStyle: () => ({ color: "#ffffff" }),
          },
          {
            title: "Plano",
            editable: "never",
            render: (value) => (
              <ImagePicker
                imageUrl={value.imageurlplano}
                onChange={(e) => UploadImagePlano(e, value)}
                id={value.id + "-plano"}
              />
            ),
          },
          {
            title: "C1 Kwk",
            editable: "never",
            render: (value) => (
              <ImagePicker
                imageUrl={value.imageurlc1kwk}
                onChange={(e) => UploadImageC1kwk(e, value)}
                id={value.id + "-c1kwk"}
              />
            ),
          },
          {
            title: "Hasil",
            editable: "never",
            render: (value) => (
              <ImagePicker
                imageUrl={value.imageurlhasil}
                onChange={(e) => UploadImageHasil(e, value)}
                id={value.id + "-hasil"}
              />
            ),
          },
          {
            title: "Nota Keberatan",
            editable: "never",
            render: (value) => (
              <ImagePicker
                imageUrl={value.imageurlnotakeberatan}
                onChange={(e) => UploadImageNotaKeberatan(e, value)}
                id={value.id + "-nota-keberatan"}
              />
            ),
          },
          // {
          //   title: "Masuk",
          //   field: "isinput",
          //   lookup: { true: "Ya", false: "Tidak" },
          //   editable: "never",
          // },
        ]}
        data={data}
        actions={[
          {
            icon: "bar_chart",
            tooltip: "Lihat Suara",
            onClick: async (event, rowData) => {
              if (!Array.isArray(rowData)) {
                try {
                  const metadata = await getMetadata();
                  const result = await new CoreServicePromiseClient(
                    process.env.REACT_APP_API_ENDPOINT!!
                  ).findSuara(
                    new Query().setValue(`tps/${rowData.id}`),
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
            icon: "info",
            tooltip: "Detail",
            onClick: async (event, rowData) => {
              if (!Array.isArray(rowData)) {
                setDialogManipulasiTps({
                  title: "Detail",
                  selectedData: rowData,
                });
              }
            },
          },
          {
            icon: "how_to_reg",
            tooltip: "Tambah User Saksi",
            onClick: (event, rowData) => {
              if (!Array.isArray(rowData))
                history.push(`/user/${rowData.id}/${UserRoles.SAKSI}`);
              return;
            },
          },
          {
            icon: "created",
            tooltip: "Ubah",
            onClick: async (event, rowData) => {
              if (!Array.isArray(rowData)) {
                setDialogManipulasiTps({
                  title: "Ubah",
                  selectedData: rowData,
                });
              }
            },
          },
        ]}
        editable={{
          onRowAdd: (newData) => Add(newData),
          onRowDelete: (oldData) => Delete(oldData),
        }}
      />
    </React.Fragment>
  );
};
export default PageTps;
