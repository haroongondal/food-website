
import './App.css';

import NearMe from './components/NearMeItem';
import CuisinesItem from './components/CuisinesItem';
import RestaurentItem from './components/RestaurentItem';
import MobileAppSection from './components/MobileAppSection';
import Footer from './components/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/NavBar';
import DashboardConsumer from './components/DashboardConsumer';
import CarouselNearMe from './styles/Carousel_NearMe';
import HeadingHiFoodie from './components/Heading_Hi_Foodie';
import CarouselRestaurent from './styles/Carousel_Restaurent';
import HeadingRestaurentNear from './components/Heading_Restaurent_Near';
import CarouselCuisines from './styles/Carousel_Cuisines';
import HeadingWhyBook from './components/Section_Why_Book';

function App() {

 
  getHomeData();
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      <DashboardConsumer></DashboardConsumer>
      <div className="marginMain">
      <HeadingHiFoodie></HeadingHiFoodie>
      <Carousel responsive={CarouselNearMe}>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      </Carousel>

      <HeadingRestaurentNear heading = {"Restaurants Near You"}/>
      
      <Carousel responsive={CarouselRestaurent}>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      </Carousel>

      <HeadingRestaurentNear heading = {"Featured Restaurants"}/>

      <Carousel responsive={CarouselRestaurent}>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      </Carousel>

      <HeadingRestaurentNear heading = {"Popular Cuisines"}/>

      <Carousel responsive={CarouselCuisines}>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      <CuisinesItem name = {"Ali"}/>
      </Carousel>
      
      <HeadingRestaurentNear heading = {"Popular Restaurants"}/>

      <Carousel responsive={CarouselRestaurent}>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      <RestaurentItem></RestaurentItem>
      </Carousel>

      <HeadingWhyBook/>

      </div>
      
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

