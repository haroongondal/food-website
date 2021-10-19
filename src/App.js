
import './App.css';
import React, { useState, useEffect } from 'react';
import NearMe from '../src/components/nearMeItem';
import DealsItem from '../src/components/DealsItem';
import CuisinesItem from '../src/components/CuisinesItem';
import RestaurentItem from './components/restaurentItem';
import MobileAppSection from '../src/components/mobileAppSection';
import Footer from './components/footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/navBar';
import DashboardConsumer from './components/dashboardConsumer';
import Carousel_Responsive from './styles/Carousel_Responsive';


function App() {

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
      <Carousel responsive={Carousel_Responsive}>
      {array.map((rest) => <RestaurentItem key = {rest.Id} data = {rest}/>)}
      </Carousel>
      <CuisinesItem></CuisinesItem>
      <DealsItem></DealsItem>
      </div>

      <DealsItem></DealsItem>
      <CuisinesItem/>

      <MobileAppSection></MobileAppSection>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;

  
