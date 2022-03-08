import "../styles/ConsumerLandingPage.css";
import NearMe from "../components/NearMeItem";
import CuisinesItem from "../components/CuisinesItem";
import RestaurentItem from "../components/restaurentItem";
import MobileAppSection from "../components/MobileAppSection";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "../components/NavBar";
import DashboardConsumer from "../components/DashboardConsumer";
import CarouselNearMe from "../styles/Carousel_NearMe";
import HeadingHiFoodie from "../components/Heading_Hi_Foodie";
import CarouselRestaurent from "../styles/Carousel_Restaurent";
import HeadingRestaurentNear from "../components/Heading_Restaurent_Near";
import CarouselCuisines from "../styles/Carousel_Cuisines";
import HeadingWhyBook from "../components/Section_Why_Book";
import useFetch from "../Utils/useFetch";
import Skeleton from "react-loading-skeleton";
import useGeoLocation from "../Utils/useGeoLocation";
import BottomNavBar from "../components/BottomNavBar";
import MobileTopNavBar from "../components/MobileTopNavBar";
import WhyBookItem from "../components/WhyBookItem";

function ConsumerLandingPage() {
  const location = useGeoLocation();

  const restaurants = useFetch(
    `https://api.masairapp.com/api/Restaurant/GetRestaurantsByCoordinate?latitude=${location.coordinates.lat}&longitude=${location.coordinates.lng}`
  );

  console.log("restaurents: ", restaurants);

  const popularCusines = useFetch(
    `https://api.masairapp.com/api/Lov/GetPopularCusine`
  );

  return (
    <div className="App">
      <header className="App-header">
        <MobileTopNavBar />
        <NavBar ShouldHideSearch={true} />
        <DashboardConsumer />
        <div className="marginMain">
          {/* <HeadingHiFoodie></HeadingHiFoodie> */}
          {/* <Carousel responsive={CarouselNearMe} removeArrowOnDeviceType={["tablet", "mobile"]} partialVisible={true}>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      <NearMe></NearMe>
      </Carousel> */}

          <HeadingRestaurentNear heading={"Restaurants Near You"} />

          <Carousel
            responsive={CarouselRestaurent}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            partialVisible={true}
            className="restaurentItem-carousel"
          >
            {restaurants.isPending && (
              <div>
                <Skeleton width={200} height={250} />
              </div>
            )}
            {restaurants.error && <div>{restaurants.error}</div>}
            {restaurants.data &&
              restaurants.data.map((r) => (
                <RestaurentItem key={r.Id} data={r} />
              ))}
          </Carousel>

          <HeadingRestaurentNear heading={"Featured Restaurants"} />

          <Carousel
            responsive={CarouselRestaurent}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            partialVisible={true}
            className="restaurentItem-carousel"
          >
            {restaurants.isPending && (
              <div>
                <Skeleton width={200} height={250} />
              </div>
            )}
            {restaurants.error && <div>{restaurants.error}</div>}
            {restaurants.data &&
              restaurants.data
                .filter((e) => e.IsFeature)
                .map((r) => <RestaurentItem key={r.Id} data={r} />)}
          </Carousel>

          <HeadingRestaurentNear heading={"Popular Cuisines"} />

          <Carousel
            responsive={CarouselCuisines}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            partialVisible={true}
          >
            {popularCusines.isPending && (
              <div>
                <Skeleton width={250} height={150} />
              </div>
            )}
            {popularCusines.error && <div>{popularCusines.error}</div>}
            {popularCusines.data &&
              popularCusines.data.map((c) => (
                <CuisinesItem key={c.Id} data={c} />
              ))}
          </Carousel>

          <HeadingRestaurentNear heading={"Popular Restaurants"} />
          <div className="restaurants-links">
            <Carousel
              responsive={CarouselRestaurent}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              partialVisible={true}
              className="restaurentItem-carousel"
            >
              {restaurants.isPending && (
                <div>
                  <Skeleton width={300} height={258} />
                </div>
              )}
              {restaurants.error && <div>{restaurants.error}</div>}
              {restaurants.data &&
                restaurants.data
                  .sort((e, d) => d.NoOfOrders - e.NoOfOrders)
                  .map((r) => <RestaurentItem key={r.Id} data={r} />)}
            </Carousel>
          </div>
          <HeadingWhyBook />
        </div>
        <div className="d-md-block d-none">
          <WhyBookItem className="d-md-block d-none" />
          <MobileAppSection className="d-md-block d-none"></MobileAppSection>
        </div>
        <BottomNavBar />
        <div className="d-md-block d-none">
          <Footer className="d-md-block d-none"></Footer>
        </div>
      </header>
    </div>
  );
}

export default ConsumerLandingPage;
