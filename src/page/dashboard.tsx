import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconLocationOn from "@material-ui/icons/LocationOn";
import IconSupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import IconReport from "@material-ui/icons/Storage";
import IconHome from "@material-ui/icons/Home";
import Copyright from "../components/copyright";
import { Switch, Route } from "react-router-dom";
import ListItemLink from "../components/listItemLink";
import { firebaseApp, RootState } from "../store";
import PageKecamatan from "./kecamatan";
import PageKelurahan from "./kelurahan";
import PageUser from "./user";
import PageUserByIdScope from "./userByIdScope";
import PageTps from "./tps";
import PageDashboard from "./dashboardPage";
import PageReportTps from "./reportTps";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "linear-gradient(to right bottom, #009245, #0071BC)",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "linear-gradient(to right bottom, #009245, #0071BC)",
      // backgroundColor: theme.palette.primary.main,
      // backgroundImage: "url(/dashboard.png)",
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(10),
      background: "linear-gradient(to right bottom, #009245, #0071BC)",
    },
  })
);
const DashboardPage: React.FunctionComponent = () => {
  const classes = useStyles();
  const authState = useSelector((state: RootState) => state.authState);

  const logout = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault();
      await firebaseApp.auth().signOut();
      return;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h6" noWrap>
              PILDES
            </Typography>
            <IconButton aria-label="delete" onClick={logout}>
              <LogoutIcon htmlColor="#ffffff" />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        {authState.user && authState.user.roles === 0 && (
          <div className={classes.drawerContainer}>
            <List>
              <ListItemLink
                text="Dashboard"
                icon={<IconHome htmlColor="#ffffff" />}
                link="/"
              />
              <ListItemLink
                text="Lokasi"
                icon={<IconLocationOn htmlColor="#ffffff" />}
                link="/kecamatan"
              />
              <ListItemLink
                text="User"
                icon={<IconSupervisedUserCircle htmlColor="#ffffff" />}
                link="/user"
              />
              <ListItemLink
                text="Report"
                icon={<IconReport htmlColor="#ffffff" />}
                link="/report"
              />
            </List>
          </div>
        )}
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        {authState.user && authState.user.roles === 0 && (
          <Switch>
            <Route exact={true} path="/" component={PageDashboard} />
            <Route exact={true} path="/kecamatan" component={PageKecamatan} />
            <Route
              exact={true}
              path="/kelurahan/:id"
              component={PageKelurahan}
            />
            <Route
              exact={true}
              path="/tps/:idKecamatan/:idKelurahan"
              component={PageTps}
            />
            <Route exact={true} path="/user" component={PageUser} />
            <Route
              exact={true}
              path="/user/:id/:roles"
              component={PageUserByIdScope}
            />
            <Route exact={true} path="/report" component={PageReportTps} />
          </Switch>
        )}

        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
};
export default DashboardPage;
