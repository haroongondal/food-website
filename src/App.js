
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





function App() {
    
  return (
    <div>
      
    <Router>
    
    {/* <NavBar/> */}
     <Switch>

        <Route exact path = "/">
        <ConsumerLandingPage/>
        </Route>

        <Route exact path = "/FilterPage">
        <FilterPage/>
        </Route>

        <Route exact path = "/TestPage">
        <TestPage/>
        </Route>


        <Route exact path = "/RestaurentDetailsPage/:id">
        <RestaurentDetailsPage/> 
        </Route>

        <Route path = "/Dashboard">
        <OrderHistoryPage/> 
        </Route>


        <Route exact path = "/ReviewHistoryPage">
        <ReviewHistoryPage/> 
        </Route>

        <Route exact path = "/MyProfilePage">
        <MyProfilePage/>
        </Route>

        <Route exact path = "/FollowersPage">
        <FollowersPage/>
        </Route>

        <Route exact path = "/BookmarkPage">
        <BookmarkPage/>
        </Route>

        <Route exact path = "/BusinessLandingPage">
        <BusinessLandingPage/>
        </Route>


      </Switch>
    <Footer/>
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
