import React from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { firebaseApp } from "../store";
const LoginPage: React.FunctionComponent = () => {
  React.useEffect(() => {
    const uiConfig: firebaseui.auth.Config = {
      signInOptions: [
        {
          provider: firebaseApp.auth.PhoneAuthProvider.PROVIDER_ID,
          whitelistedCountries: ["ID"],
        },
      ],
      signInSuccessUrl: "/", //This URL is used to return to that page when we got success response for phone authentication.
      tosUrl: "/tos",
      privacyPolicyUrl: "/privacyPolicy",
    };
    var ui = new firebaseui.auth.AuthUI(firebaseApp.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }, []);
  return (
    <div
      id="firebaseui-auth-container"
      style={{
        backgroundImage: "url(/TN-Bantaimurung.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    />
  );
};
export default LoginPage;
