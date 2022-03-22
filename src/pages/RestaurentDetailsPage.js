import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import BannerResturant from "../components/BannerResturant";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResDetailTopNav from "../components/ResDetailTopNav";
import ResTopNavbar from "../components/ResTopNavbar";
import ReservationItem from "../components/Reservation_Item";
import SecResAbout from "../components/SecResAbout";
import SecResDetails from "../components/SecResDetails";
import SecResLike from "../components/SecResLike";
import SecResListing from "../components/SecResListing";
import SecResMenu from "../components/SecResMenu";
import SecResMobileResveration from "../components/SecResMobileResveration";
import SecResNavbar from "../components/SecResNavbar";
import SecResRatingNReview from "../components/SecResRatingNReview";
import "../styles/RestaurentDetailsPage.css";
import useFetch from "../Utils/useFetch";
import Carousel from "react-multi-carousel";
import restaurentImage from "../images/restaurant.jpg";

function RestaurentDetailsPage(props) {
  const [isVisibleNavbar, setIsVisibleNavbar] = useState(false);
  const { id } = useParams();
  const responsive = {
    tablet: {
      // the naming can be any, depends on you.
      breakpoint: { max: 991, min: 577 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  useEffect(function () {
    props.showHeader(false);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // to limit setting state only the first time
        setIsVisibleNavbar(true);
    } else {
      setIsVisibleNavbar(false);
    }
  };
  // const { query, search } = useLocation();
  // console.log(id, query.backUrl, new URLSearchParams(search).get('id'))

  const restaurantDetails = useFetch(
    `https://api.masairapp.com/api/Restaurant/GetRestaurantById?id=${id}`
  );
  return (
    <div className="restaurent_detail_page">
      {isVisibleNavbar && <ResTopNavbar />}
      <NavBar ShouldHideSearch={false} />
      {/* <Breadcrumb/> */}
      <div className="d-lg-none d-block restaurent-detail-carousel">
        {/* <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          partialVisible={false}
          className="restaurent-img-carousel"
        >
          <div className="slide-img-restaurent-3rd-page">
            <img alt="res-img" src={restaurentImage} />
          </div>
          <div className="slide-img-restaurent-3rd-page">
            <img alt="res-img" src={restaurentImage} />
          </div>
          <div className="slide-img-restaurent-3rd-page">
            <img alt="res-img" src={restaurentImage} />
          </div>
        </Carousel> */}
      </div>
      <ResDetailTopNav />

      <BannerResturant />
      <div className="merge-section">
        <div className="section-left-restaurent-details">
          {restaurantDetails.error && console.log(restaurantDetails.error)}
          {restaurantDetails.isPending &&
            console.log("Data coming in a moment")}
          {restaurantDetails.data && (
            <SecResDetails
              RestaurantName={restaurantDetails.data.RestaurantName}
              CostOfTwo={restaurantDetails.data.CostOfTwo}
              Cusines={restaurantDetails.data.ListOfRestaurantCusine}
              PrimaryAreaOfOutlet={restaurantDetails.data.PrimaryAreaOfOutlet}
              PrimaryLocation={restaurantDetails.data.PrimaryLocation}
              NoOfReviews={restaurantDetails.data.NoOfReview}
              AverageRating={restaurantDetails.data.AverageRating}
              Timing={restaurantDetails.data.ListOfWorkingDays}
            />
          )}
          <SecResNavbar />

          {/* <SecResMobileResveration /> */}

          <div className="border-restaurent-details">
            <div className="content-restaurent-details reservation">
              <i className="fa fa-cutlery me-3"></i>
              <a href="/business-login">Reserve a Table</a>
            </div>
          </div>

          {restaurantDetails.error && console.log(restaurantDetails.error)}
          {restaurantDetails.isPending &&
            console.log("Data coming in a moment")}
          {restaurantDetails.data && (
            <SecResAbout
              Cusines={
                restaurantDetails.data.ListOfRestaurantCusine != null
                  ? restaurantDetails.data.ListOfRestaurantCusine
                  : null
              }
              Features={
                restaurantDetails.data.ListOfRestaurantFeature != null
                  ? restaurantDetails.data.ListOfRestaurantFeature
                  : null
              }
              description={restaurantDetails.data.Description}
            />
          )}
          <SecResMenu id={id} />
          <SecResListing />
          <SecResLike />
          {restaurantDetails.error && console.log(restaurantDetails.error)}
          {restaurantDetails.isPending &&
            console.log("Data coming in a moment")}
          {restaurantDetails.data && (
            <SecResRatingNReview
              ReviewsList={restaurantDetails.data.UserReviews}
              NoOfReviews={restaurantDetails.data.NoOfReview}
              AverageRating={restaurantDetails.data.AverageRating}
            />
          )}
        </div>
        <ReservationItem />
      </div>
      <div className="d-md-block d-none">
        <Footer />
      </div>
    </div>
  );
}

export default RestaurentDetailsPage;
