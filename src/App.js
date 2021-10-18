
import './App.css';
import NearMe from './components/NearMeItem';
import DeaksItem from './components/DealsItem';
import CuisinesItem from './components/CuisinesItem';
import MobileAppSection from './components/MobileAppSection';
import Footer from './components/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner'
import Carousel_Responsive from './styles/Carousel_Responsive';

function App() {
  getHomeData();
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      <Banner></Banner>
    
      <Carousel responsive={Carousel_Responsive}>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
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
