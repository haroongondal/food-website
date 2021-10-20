
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from './pages/ConsumerLandingPage';
import FilterPage from './pages/FilterPage';
import NavBar from './components/NavBar';



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
    
    
    
    </Router>
    </body>
    </div>
  );
}

export default App;

  
