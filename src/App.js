
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
import BuissnessSignUP from './components/BuissnessSignUP';
import ProtectedRoutes from './Utils/ProtectedRoutes';



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


        <ProtectedRoutes path = "/Dashboard" component = {MyProfilePage}/>
        


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

        <Route exact path = "/BuissnessSignUP">
          <BuissnessSignUP/>
        </Route>

      </Switch>
    
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
