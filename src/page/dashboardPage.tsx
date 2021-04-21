import React from "react";
import { getMetadata } from "../store";
import { ComponentSuara } from "../components";
import { Perhitungan, Query } from "../proto/core_pb";
import { CoreServicePromiseClient } from "../proto/core_grpc_web_pb";
const PageDashboard = () => {
  const [suara, setSuara] = React.useState<Perhitungan.AsObject>();
  React.useEffect(() => {
    const findSuara = async () => {
      try {
        const service = new CoreServicePromiseClient(
          process.env.REACT_APP_API_ENDPOINT!!
        );
        const metadata = await getMetadata();
        const kotaResult = await service.findSuara(
          new Query().setValue(`kota/${process.env.REACT_APP_ID_KOTA}`),
          metadata
        );
        setSuara(kotaResult.toObject());
      } catch (error) {
        alert(error.message);
      }
    };
    findSuara();
  }, []);
  return (
    <React.Fragment>{suara && <ComponentSuara {...suara} />}</React.Fragment>
  );
};
export default PageDashboard;
