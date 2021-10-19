
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

  async function getHomeData() {
    
    await fetch("https://api.masairapp.com/api/Restaurant/GetRestaurants")
    .then(res =>  res.json())
    .then(r => {
      console.log(r)
    })
    .catch(e => console.log(e));
  
}
