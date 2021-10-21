
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import FilterPage from './pages/FilterPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import RestaurentDetailsPage from './pages/RestaurentDetailsPage';

import TestPage from './pages/TestPage';
import OrderHistoryPage from './pages/OrderHistoryPage';




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


        <Route exact path = "/RestaurentDetailsPage/:id">
        <RestaurentDetailsPage/> 
        </Route>

        <Route path = "/Dashboard">
        <OrderHistoryPage/> 
        </Route>

      </Switch>
    <Footer/>
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
