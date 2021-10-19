
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      <DashboardConsumer></DashboardConsumer>

      <div className="margin">
      <Carousel responsive={responsive}>
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

      <MobileAppSection></MobileAppSection>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};