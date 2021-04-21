import React from "react";
import MaterialTable from "material-table";
import { getMetadata } from "../store";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { AddUser, Query, User as UserModel, UserRoles } from "../proto/core_pb";
import { CoreServicePromiseClient } from "../proto/core_grpc_web_pb";
const PageUser: React.FunctionComponent = () => {
  const [data, setData] = React.useState<UserModel.AsObject[]>([]);
  const find = async () => {
    try {
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      const find = await service.userFindAll(new Empty(), metadata);
      setData(find.getItemsList().map((it) => it.toObject()));
    } catch (error) {
      alert(error.message);
    }
  };
  React.useEffect(() => {
    const unsub = async () => {
      await find();
    };
    unsub();
  }, []);

  const Add = async (newData: UserModel.AsObject) => {
    try {
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      if (newData.roles.toString() === UserRoles.SUPER.toString()) {
        const result = await service.userAdd(
          new AddUser()
            .setRoles(UserRoles.SUPER)
            .setDispalyname(newData.dispalyname)
            .setPhonenumber(newData.phonenumber)
            .setIdscope(""),
          metadata
        );
        setData([result.toObject(), ...data]);
        return;
      } else if (newData.roles.toString() === UserRoles.VIEWERS.toString()) {
        const result = await service.userAdd(
          new AddUser()
            .setRoles(UserRoles.VIEWERS)
            .setDispalyname(newData.dispalyname)
            .setPhonenumber(newData.phonenumber)
            .setIdscope(""),
          metadata
        );
        setData([result.toObject(), ...data]);
        return;
      }
      throw new Error("roles harus super atau Viewer");
    } catch (error) {
      alert(error.message);
    }
  };
  const Delete = async (oldData: UserModel.AsObject) => {
    try {
      if (!oldData) return;
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      const metadata = await getMetadata();
      await service.userDelete(new Query().setValue(oldData.id), metadata);
      setData(data.filter((it) => it.id !== oldData.id));
      return;
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <React.Fragment>
      <MaterialTable
        title="User"
        options={{ pageSize: 20 }}
        columns={[
          {
            title: "Nama",
            field: "dispalyname",
          },
          {
            title: "Nomor Hp",
            field: "phonenumber",
          },
          {
            title: "Roles",
            field: "roles",
            lookup: {
              [UserRoles.SUPER]: "SUPER",
              [UserRoles.VIEWERS]: "VIEWERS",
              [UserRoles.SAKSI]: "PANITIA",
            },
          },
        ]}
        data={data}
        editable={{
          onRowAdd: (newData) => Add(newData),
          onRowDelete: (oldData) => Delete(oldData),
        }}
        actions={[
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => find(),
          },
        ]}
      />
    </React.Fragment>
  );
};
export default PageUser;
