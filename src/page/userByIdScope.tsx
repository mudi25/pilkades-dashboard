import React from "react";
import MaterialTable from "material-table";
import { getMetadata, PageWithIdAndRolesProps } from "../store";
import { AddUser, Query, UserRoles, User as UserModel } from "../proto/core_pb";
import { RouteComponentProps } from "react-router-dom";
import { CoreServicePromiseClient } from "../proto/core_grpc_web_pb";
const PageUserByIdScope: React.FunctionComponent<
  RouteComponentProps<PageWithIdAndRolesProps>
> = ({ match }) => {
  const [data, setData] = React.useState<UserModel.AsObject[]>([]);
  const [rolesName, setRolesName] = React.useState("");
  React.useEffect(() => {
    switch (match.params.roles) {
      case UserRoles.VIEWERS.toString():
        setRolesName("VIEWERS");
        break;
      case UserRoles.SAKSI.toString():
        setRolesName("SAKSI");
        break;
    }
    const unsub = async () => {
      try {
        const service = new CoreServicePromiseClient(
          process.env.REACT_APP_API_ENDPOINT!!
        );
        const metadata = await getMetadata();
        const find = await service.userFindSaksi(
          new Query().setValue(match.params.id),
          metadata
        );
        setData(find.getItemsList().map((it) => it.toObject()));
      } catch (error) {
        alert(error.message);
      }
    };
    unsub();
  }, [match.params.id, match.params.roles]);
  const Add = async (newData: UserModel.AsObject) => {
    try {
      const service = new CoreServicePromiseClient(
        process.env.REACT_APP_API_ENDPOINT!!
      );
      if (!match.params.roles) throw new Error("roles required");
      const metadata = await getMetadata();
      const result = await service.userAdd(
        new AddUser()
          .setIdscope(match.params.id)
          .setRoles(parseInt(match.params.roles))
          .setDispalyname(newData.dispalyname)
          .setPhonenumber(newData.phonenumber),

        metadata
      );
      const mData = result.toObject();
      setData([mData, ...data]);
      return;
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
    <MaterialTable
      title="PANITIA"
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
      ]}
      data={data}
      editable={{
        onRowAdd: (newData) => Add(newData),
        onRowDelete: (oldData) => Delete(oldData),
      }}
    />
  );
};
export default PageUserByIdScope;
