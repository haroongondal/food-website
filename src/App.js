
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import FilterPage from './pages/FilterPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {

  return (
    <div>
       <body className="App-body">
    <Router>
    
    <NavBar/>
     <Switch>

        <Route exact path = "/">
        <ConsumerLandingPage/>
        </Route>

        <Route path = "/FilterPage">
        <FilterPage/>
        
        </Route>

      </Switch>
    <Footer/>
    
    
    </Router>
    </body>
    </div>
  );
}

export default App;

  
