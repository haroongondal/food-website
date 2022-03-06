import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConsumerLandingPage from "./pages/ConsumerLandingPage";
import TestPage from "./pages/TestPage";
import BusinessLandingPage from "./pages/BusinessLandingPage";
import FilterPage from "./pages/FilterPage";
import RestaurentDetailsPage from "./pages/RestaurentDetailsPage";
import MyProfilePage from "./pages/MyProfilePage";
import BusinessSignup from "./components/BusinessSignup";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import CRMDashboard from "./pages/CRMDashboard";
import MediaQueryReact from "media-query-react";
import BusinessLogin from "./components/BusinessLogin";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndCondPage from "./pages/TermsAndCondPage";
import NavBar from "./components/NavBar";
import BottomNavBar from "./components/BottomNavBar";
import MobileTopNavBar from "./components/MobileTopNavBar";
import { useState } from "react";
import { useRouteMatch } from "react-router";

function App() {
  // pass screenSize object with custom device name and width.
  const screenSize = {
    mobile: {
      // custom device name
      minWidth: 320,
      maxWidth: 480,
    },
    mobileLandscape: {
      minWidth: 481,
      maxWidth: 767,
    },
    tablet: {
      minWidth: 768,
      maxWidth: 1024,
    },
    desktop: {
      minWidth: 1025,
      maxWidth: 2500,
    },
  };
  const [headerShow, setHeaderShow] = useState(true);
  function showHeader(isShow) {
    setHeaderShow(isShow);
  }
  const [bottomNav, setBottomNav] = useState(true);
  function showBottomNav(isShow) {
    setBottomNav(isShow);
  }
  // const { path } = useRouteMatch();
  // console.log('path: ',path);
  // let navBar = '';
  // if (path != "CRM-Dashboard" && path != "filterPage") {
  //   navBar = <NavBar ShouldHideSearch={true} />;
  // }
  return (
    <div>
      <MediaQueryReact mediaQueries={screenSize}>
        <Router>
          {headerShow && (
            <NavBar showHeader={showHeader} ShouldHideSearch={true} />
          )}
          {headerShow && <MobileTopNavBar/>}
          <Switch>
            <Route exact path="/">
              <ConsumerLandingPage />
            </Route>

            <Route exact path="/FilterPage">
              <FilterPage  showHeader={showHeader} />
            </Route>

            <Route path="/RestaurentDetailsPage/:id">
              <RestaurentDetailsPage />
            </Route>

            <Route exact path="/TestPage">
              <TestPage />
            </Route>

            <ProtectedRoutes
              path="/Dashboard"
              component={MyProfilePage}
              _to="userDashboard"
            />

            <ProtectedRoutes
              path="/CRM-Dashboard"
              component={CRMDashboard}
              _to="crmDashboard"
              showHeader={showHeader}
              showBottomNav={showBottomNav}
            />

            <Route path="/BusinessLandingPage">
              <BusinessLandingPage />
            </Route>

            <Route exact path="/Business-Signup">
              <BusinessSignup showBottomNav={showBottomNav}/>
            </Route>

            <Route exact path="/Business-Login">
              <BusinessLogin showBottomNav={showBottomNav}/>
            </Route>

            <Route exact path="/About-Us">
              <AboutUsPage />
            </Route>

            <Route exact path="/Privacy-Policy">
              <PrivacyPolicyPage />
            </Route>

            <Route exact path="/Terms-And-Conditions">
              <TermsAndCondPage />
            </Route>
          </Switch>
        </Router>
        {bottomNav && <BottomNavBar />}
      </MediaQueryReact>
    </div>
  );
}

export default App;
