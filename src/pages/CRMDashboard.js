import {React,useEffect} from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import AdminMenuPage from "./AdminMenuPage";
import MenuDashboard from "./MenuDashboard";
import OutletsPage from "./OutletsPage";
import AddOutletItem from "./AddOutletItem";
import UserManagementPage from "./UserManagementPage";
import FeedbackPage from "./FeedbackPage";
import ProfileSettings from "./ProfileSettings";
import BottomNavBarCRM from "../components/BottomNavbarCRM";

import useFetch from "../Utils/useFetch";

function CRMDashboard(props) {
  const { path } = useRouteMatch();
  useEffect(function () {
    props.showHeader(false);
    props.showBottomNav(false);
  });
  return (
    <div>
      <AdminSidebar />
      <section id="content">
        <AdminNavbar />
        <main>
          <Switch>
            <Route exact path={`${path}/Add-Menu`}>
              <AdminMenuPage />
            </Route>

            <Route exact path={`${path}/`}>
              <MenuDashboard />
            </Route>

            <Route exact path={`${path}/My-Outlets`}>
              <OutletsPage />
            </Route>
            <Route exact path={`${path}/Add-Outlet`}>
              <AddOutletItem />
            </Route>
            <Route exact path={`${path}/Users-Management`}>
              <UserManagementPage />
            </Route>

            <Route exact path={`${path}/Feedback`}>
              <FeedbackPage />
            </Route>

            <Route exact path={`${path}/Profile-Settings`}>
              <ProfileSettings />
            </Route>
          </Switch>
          <BottomNavBarCRM />
        </main>
      </section>
    </div>
  );
}

export default CRMDashboard;
