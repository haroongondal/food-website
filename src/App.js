
import './App.css';

import NearMe from '../src/components/nearMeItem';
import DealsItem from '../src/components/dealsItem';
import CuisinesItem from '../src/components/cuisinesItem';
import RestaurentItem from './components/restaurentItem';
import MobileAppSection from '../src/components//mobileAppSection';
import Footer from './components/footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/navBar';
import DashboardConsumer from './components/dashboardConsumer';
import Carousel_Responsive from './styles/Carousel_Responsive';


function App() {

 
  getHomeData();
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      <DashboardConsumer></DashboardConsumer>
      <div className="margin">
      <Carousel responsive={Carousel_Responsive}>

      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      </Carousel>
      <Carousel responsive={responsive}>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      </Carousel>
      <CuisinesItem></CuisinesItem>
      <DealsItem></DealsItem>
      </div>

      </Carousel>
      <DeaksItem></DeaksItem>
      <CuisinesItem name = {"Ali"}/>

      <MobileAppSection></MobileAppSection>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;

  async function getHomeData() {
    
    await fetch("https://api.masairapp.com/api/Restaurant/GetRestaurants")
    .then(res =>  res.json())
    .then(r => {
      console.log(r)
    })
    .catch(e => console.log(e));
  
}

