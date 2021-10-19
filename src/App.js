
import './App.css';
import Filter from '../src/components/Filter'
import FilterPageItem from './components/Filter_Page_Item';


function App() {

  return (
    <div className="App">
    <Filter filter_name = {"Dine Out"}/>     
    <FilterPageItem/>
    </div>
  );
}

export default App;

  
