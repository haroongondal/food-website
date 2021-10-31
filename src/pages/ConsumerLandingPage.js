import '../styles/ConsumerLandingPage.css';
import NearMe from '../components/NearMeItem';
import CuisinesItem from '../components/CuisinesItem';
import RestaurentItem from '../components/RestaurentItem';
import MobileAppSection from '../components/MobileAppSection';
import Footer from '../components/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavBar from '../components/NavBar';
import DashboardConsumer from '../components/DashboardConsumer';
import CarouselNearMe from '../styles/Carousel_NearMe';
import HeadingHiFoodie from '../components/Heading_Hi_Foodie';
import CarouselRestaurent from '../styles/Carousel_Restaurent';
import HeadingRestaurentNear from '../components/Heading_Restaurent_Near';
import CarouselCuisines from '../styles/Carousel_Cuisines';
import HeadingWhyBook from '../components/Section_Why_Book';
import useFetch from '../Utils/useFetch';
import Skeleton from 'react-loading-skeleton';
import useGeoLocation from '../Utils/useGeoLocation';

function ConsumerLandingPage() {
 
  const location = useGeoLocation();

  const { data, isPending, error } = useFetch(`https://api.masairapp.com/api/Restaurant/GetRestaurantsByCoordinate?latitude=${location.coordinates.lat}&longitude=${location.coordinates.lng}`);

  return (
    <div className="App">
      <header className="App-header">
      <NavBar ShouldHideSearch = {true}/>
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
        {isPending && <div><Skeleton width={200} height={250}/></div>}
        {error && <div>{error}</div>}
        {data && data.map((rest) => <RestaurentItem key = {rest.Id} data = {rest}/>)}
      
      </Carousel>
     

      <HeadingRestaurentNear heading = {"Featured Restaurants"}/>

      <Carousel responsive={CarouselRestaurent}>
      {isPending && <div><Skeleton width={200} height={250}/></div>}
        {error && <div>{error}</div>}
        {data && data.filter((e) => e.IsFeature).map((rest) => <RestaurentItem key = {rest.Id} data = {rest}/>)}
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
      {isPending && <div><Skeleton width={250} height={258}/></div>}
        {error && <div>{error}</div>}
        {data && data.map((rest) => <RestaurentItem key = {rest.Id} data = {rest}/>)}
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

  
