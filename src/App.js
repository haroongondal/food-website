
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Filter from '../src/components/Filter'
import FilterPageItem from './components/Filter_Page_Item';
import ConsumerLandingPage from './pages/ConsumerLandingPage';


function App() {

  return (
    <Router>
    <div className="App">

      <Switch>

        <Route exact path = "/">
        <ConsumerLandingPage/>
        </Route>

        <Route path = "/FilterPage">
        <Filter filter_name = {"Dine Out"}/>     
        <FilterPageItem/> 
        </Route>

      </Switch>
   
    
    </div>
    </Router>
  );
}

export default App;

  
