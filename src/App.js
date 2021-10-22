
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




function App() {
    
  return (
    <div>
      
    <Router>
    
    <NavBar/>
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


        <Route exact path = "/RestaurentDetailsPage">
        <RestaurentDetailsPage/> 
        </Route>

        <Route exact path = "/OrderHistoryPage">
        <OrderHistoryPage/> 
        </Route>

        <Route exact path = "/ReviewHistoryPage">
        <ReviewHistoryPage/> 
        </Route>

        <Route exact path = "/MyProfilePage">
        <MyProfilePage/>
        </Route>

      </Switch>
    <Footer/>
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
