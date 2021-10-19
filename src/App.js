
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

  function getHomeData() {
  fetch("http://18.135.67.49/api/Vendor/GetBookingCountsByUser?userId=491fb4a9-ea49-4ae8-9d78-a556dc863457")
  .then((res) => {
    
    console.log(res)
    return res;
  })
  .catch((e) => {
    console.log(e)
    return e;
  });
  
}

