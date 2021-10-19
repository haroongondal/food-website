import '../styles/ConsumerLandingPage.css';
import React, { useState, useEffect } from 'react';
import NearMe from './NearMeItem';
import CuisinesItem from './CuisinesItem';
import RestaurentItem from './RestaurentItem';
import MobileAppSection from './MobileAppSection';
import Footer from './Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavBar from './NavBar';
import DashboardConsumer from './DashboardConsumer';
import CarouselNearMe from '../styles/Carousel_NearMe';
import HeadingHiFoodie from './Heading_Hi_Foodie';
import CarouselRestaurent from '../styles/Carousel_Restaurent';
import HeadingRestaurentNear from './Heading_Restaurent_Near';
import CarouselCuisines from '../styles/Carousel_Cuisines';
import HeadingWhyBook from './Section_Why_Book';

function ConsumerLandingPage() {

  const [array, setArray] = useState([]);

  useEffect(() => {
     fetch("https://api.masairapp.com/api/Restaurant/GetRestaurants")
    .then(res =>  res.json())
    .then(r => setArray(r))
    .catch(e => console.log(e));
  }, []);
  
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
      {array.map((rest) => <RestaurentItem key = {rest.Id} data = {rest}/>)}
      </Carousel>
     

      <HeadingRestaurentNear heading = {"Featured Restaurants"}/>

      <Carousel responsive={CarouselRestaurent}>
      {array.map((rest) => <RestaurentItem key = {rest.Id} data = {rest}/>)}
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
      {array.map((rest) => <RestaurentItem key = {rest.Id} data = {rest}/>)}
      </Carousel>

      <HeadingWhyBook/>

      </div>
      
      <MobileAppSection></MobileAppSection>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default ConsumerLandingPage;

  
