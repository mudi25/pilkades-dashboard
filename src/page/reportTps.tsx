import React from "react";
import MaterialTable from "material-table";
import { getMetadata } from "../store";
import LinearProgress from "@material-ui/core/LinearProgress";
import { CoreServicePromiseClient } from "../proto/core_grpc_web_pb";
import { Tps } from "../proto/core_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
type LokasiModel = {
  [key: string]: string;
};
type UserModel = {
  [key: string]: {
    nama: string;
    cp: string;
  };
};
interface TpsReportModel extends Tps.AsObject {
  namasaksi: string;
  cpsaksi: string;
}
type ReportTpsModel = {
  user: UserModel;
  lokasi: LokasiModel;
  tps: TpsReportModel[];
  loading: boolean;
};
const PageReportTps: React.FunctionComponent = () => {
  const [data, setData] = React.useState<ReportTpsModel>({
    loading: true,
    lokasi: {},
    tps: [],
    user: {},
  });
  React.useEffect(() => {
    const unsub = async () => {
      try {
        const service = new CoreServicePromiseClient(
          process.env.REACT_APP_API_ENDPOINT!!
        );
        const metadata = await getMetadata();
        const [userResult, lokasiResult, tpsResult] = await Promise.all([
          service.userFindAll(new Empty(), metadata),
          service.lokasiFindAll(new Empty(), metadata),
          service.tpsFindAll(new Empty(), metadata),
        ]);
        const userValue: UserModel = userResult
          .getItemsList()
          .map((it) => it.toObject())
          .reduce(
            (obj, items) => ({
              ...obj,
              [items.idscope]: {
                nama: items.dispalyname,
                cp: items.phonenumber,
              },
            }),
            {}
          );
        const lokasiValue: LokasiModel = lokasiResult
          .getItemsList()
          .map((it) => it.toObject())
          .reduce(
            (obj, items) => ({
              ...obj,
              [items.id]: items.nama,
            }),
            {}
          );
        const tpsValue = tpsResult
          .getItemsList()
          .map((it) => it.toObject())
          .map((it) => ({
            ...it,
            idkota: lokasiValue[it.idkota],
            idkecamatan: lokasiValue[it.idkecamatan],
            idkelurahan: lokasiValue[it.idkelurahan],

            namasaksi: userValue[it.id] ? userValue[it.id].nama : "-",
            cpsaksi: userValue[it.id] ? userValue[it.id].cp : "-",
          }));
        setData({
          loading: false,
          user: userValue,
          lokasi: lokasiValue,
          tps: tpsValue,
        });
      } catch (error) {
        alert(error.message);
        setData({
          loading: false,
          user: {},
          lokasi: {},
          tps: [],
        });
      }
    };
    unsub();
  }, []);

  return (
    <React.Fragment>
      {data.loading && <LinearProgress />}
      <MaterialTable
        title="TPS"
        options={{
          pageSize: 20,
          exportButton: true,
          exportAllData: true,
        }}
        columns={[
          {
            title: "Kecamatan",
            field: "idkecamatan",
          },
          {
            title: "Kelurahan",
            field: "idkelurahan",
          },
          {
            title: "TPS",
            field: "nama",
            searchable: false,
          },
          {
            title: "Nama Saksi",
            field: "namasaksi",
          },
          {
            title: "CP Saksi",
            field: "cpsaksi",
          },

          {
            title: "Pemilih P",
            field: "pemilihperempuan",
            type: "numeric",
            searchable: false,
          },
          {
            title: "Pemilih Total",
            field: "pemilihtotal",
            type: "numeric",
            editable: "never",
            searchable: false,
          },
          {
            title: "NO 1",
            field: "nomorurut1",
            type: "numeric",
            searchable: false,
          },
          {
            title: "NO 2",
            field: "nomorurut2",
            type: "numeric",
            searchable: false,
          },
          {
            title: "NO 3",
            field: "nomorurut3",
            type: "numeric",
            searchable: false,
          },
          {
            title: "NO 4",
            field: "nomorurut4",
            type: "numeric",
            searchable: false,
          },
          {
            title: "Pemilih L",
            field: "pemilihlaki",
            type: "numeric",
            searchable: false,
          },
          {
            title: "Pengguna Hak Pilih L",
            field: "penggunahakpilihlaki",
            type: "numeric",
            editable: "never",
            searchable: false,
          },
          {
            title: "Pengguna Hak Pilih P",
            field: "penggunahakpilihperempuan",
            type: "numeric",
            editable: "never",
            searchable: false,
          },
          {
            title: "Suara Sah",
            field: "suarasah",
            type: "numeric",
            editable: "never",
            searchable: false,
          },
          {
            title: "Suara Tidak Sah",
            field: "suaratidaksah",
            type: "numeric",
            editable: "never",
            searchable: false,
          },
          {
            title: "Verifikasi",
            field: "isinput",
            editable: "never",
            searchable: false,
          },
        ]}
        data={data.tps}
      />
    </React.Fragment>
  );
};
export default PageReportTps;
