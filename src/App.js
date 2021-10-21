
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import FilterPage from './pages/FilterPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



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
        
        </Route>

      </Switch>
    <Footer/>
    
    
    </Router>
    
    </div>
  );
}

export default App;

  
