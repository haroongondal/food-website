
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import TestPage from './pages/TestPage';
import BusinessLandingPage from './pages/BusinessLandingPage';
import AdminMenuPage from './pages/AdminMenuPage';
import FilterPage from './pages/FilterPage';
import RestaurentDetailsPage from './pages/RestaurentDetailsPage';
import MyProfilePage from './pages/MyProfilePage';
import MenuDashboard from './pages/MenuDashboard';
import OutletsPage from './pages/OutletsPage';
import UserManagementPage from './pages/UserManagementPage';
import FeedbackPage from './pages/FeedbackPage';
import BusinessSignup from './components/BusinessSignup';
import ProfileSettings from './pages/ProfileSettings';



function App() {

  return (
    <div>
      
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


        <Route path = "/Dashboard">
        <MyProfilePage/> 
        </Route>


        <Route exact path = "/BusinessLandingPage">
        <BusinessLandingPage/>
        </Route>

        <Route exact path = "/AdminMenuPage">
        <AdminMenuPage/>
        </Route>

        <Route exact path = "/MenuDashboard">
          <MenuDashboard/>
        </Route>


        <Route exact path = "/OutletsPage">
          <OutletsPage/>
        </Route>

        <Route exact path = "/UserManagementPage">
          <UserManagementPage />
        </Route>

        <Route exact path = "/FeedbackPage">
          <FeedbackPage />
        </Route>

        <Route exact path = "/BusinessSignup">
          <BusinessSignup/>
        </Route>

        <Route exact path = "/ProfileSettings">
          <ProfileSettings/>
        </Route>

      </Switch>
    
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
