import React from "react";
import { DashboardPage, LoginPage } from "./page";
import { firebaseApp, RootState, setUser } from "./store";
import { PrivateRoute } from "./components";
import { Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import TosPage from "./page/tos";
import PrivacyPolicyPage from "./page/privacyPolicy";
const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.authState);

  React.useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdTokenResult();
        const uid = user.uid;
        const displayName = user.displayName !== null ? user.displayName : uid;
        const phoneNumber = user.phoneNumber !== null ? user.phoneNumber : uid;
        const idScope = idToken.claims["idScope"];
        const roles = idToken.claims["roles"];
        if (roles === 0) {
          dispatch(
            setUser({
              user: { phoneNumber, displayName, uid, idScope, roles },
              isLoading: false,
            })
          );
        } else {
          await firebaseApp.auth().signOut();
        }
        return;
      } else {
        dispatch(setUser({ isLoading: false, user: null }));
        return;
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      {authState.isLoading === true && (
        <div
          style={{
            backgroundImage: "url(/loginbg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        />
      )}
      {authState.isLoading === false && (
        <Switch>
          <Route component={LoginPage} exact={true} path="/login" />
          <Route component={TosPage} exact={true} path="/tos" />
          <Route
            component={PrivacyPolicyPage}
            exact={true}
            path="/privacyPolicy"
          />
          <PrivateRoute
            component={DashboardPage}
            exact={false}
            path="/"
            user={authState.user}
          />
        </Switch>
      )}
    </div>
  );
};

export default App;
