
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import FilterPage from './pages/FilterPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import RestaurentDetailsPage from './pages/RestaurentDetailsPage';

import TestPage from './pages/TestPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

import ReviewHistoryPage from './pages/ReviewHistoryPage';
import MyProfilePage from './pages/MyProfilePage';
import FollowersPage from './pages/FollowersPage';
import BookmarkPage from './pages/BookmarkPage';
import BusinessLandingPage from './pages/BusinessLandingPage';
import AdminMenuPage from './pages/AdminMenuPage';
import ConsumerRoute from './customRoutes/ConsumerRoute'
import UserDashboard from './customRoutes/ConsumerRoute'




function App() {

      
  return (
    <div>
      
    <Router>
    
    
     <Switch>

        <Route exact path = "/">
        <ConsumerRoute/>
        </Route>

        

        <Route exact path = "/TestPage">
        <TestPage/>
        </Route>


        <Route exact path = "/Dashboard">
        <UserDashboard/> 
        </Route>


        <Route exact path = "/BusinessLandingPage">
        <BusinessLandingPage/>
        </Route>

        <Route exact path = "/AdminMenuPage">
        <AdminMenuPage/>
        </Route>


      </Switch>
    
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
