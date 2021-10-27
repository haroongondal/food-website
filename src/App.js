
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import TestPage from './pages/TestPage';
import BusinessLandingPage from './pages/BusinessLandingPage';
import AdminMenuPage from './pages/AdminMenuPage';
import FilterPage from './pages/FilterPage';
import RestaurentDetailsPage from './pages/RestaurentDetailsPage';
import MyProfilePage from './pages/MyProfilePage';




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


      </Switch>
    
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
