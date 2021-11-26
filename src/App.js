
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import TestPage from './pages/TestPage';
import BusinessLandingPage from './pages/BusinessLandingPage';
import FilterPage from './pages/FilterPage';
import RestaurentDetailsPage from './pages/RestaurentDetailsPage';
import MyProfilePage from './pages/MyProfilePage';
import BusinessSignup from './components/BusinessSignup';
import ProtectedRoutes from './Utils/ProtectedRoutes';
import CRMDashboard from "./pages/CRMDashboard"
import MediaQueryReact from 'media-query-react';
import BusinessLogin from './components/BusinessLogin';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndCondPage from './pages/TermsAndCondPage';



function App() {

  // pass screenSize object with custom device name and width.
  const screenSize = {
    mobile: { // custom device name
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

  return (
    <div>

<MediaQueryReact mediaQueries={screenSize}>
        
      
    <Router>
    
    
     <Switch>


        <Route exact path = "/">
        <ConsumerLandingPage/>
        </Route>

        <Route exact path = "/FilterPage">
        <FilterPage/>
        </Route>

        <Route path = "/RestaurentDetailsPage/:id">
        <RestaurentDetailsPage/>
        </Route>

        

        <Route exact path = "/TestPage">
        <TestPage/>
        </Route>


        <ProtectedRoutes path = "/Dashboard" component = {MyProfilePage} _to = "userDashboard"/>

        <ProtectedRoutes path = "/CRM-Dashboard" component = {CRMDashboard} _to = "crmDashboard"/>
        
        <Route path = "/BusinessLandingPage">
        <BusinessLandingPage/>
        </Route>

        <Route exact path = "/Business-Signup" >
        <BusinessSignup/>
        </Route>

        <Route exact path = "/Business-Login" >
        <BusinessLogin/>
        </Route>

        <Route exact path = "/About-Us" >
        <AboutUsPage/>
        </Route>

        <Route exact path = "/Privacy-Policy" >
        <PrivacyPolicyPage/>
        </Route>

        <Route exact path = "/Terms-And-Conditions" >
        <TermsAndCondPage/>
        </Route>

      </Switch>
    
    
    
    </Router>

    
      </MediaQueryReact>
    
    </div>
  );
}

export default App;

  
