import React from 'react'
import { useParams } from 'react-router'
import BannerResturant from '../components/BannerResturant'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ResDetailTopNav from '../components/ResDetailTopNav'
import ReservationItem from '../components/Reservation_Item'
import SecResAbout from '../components/SecResAbout'
import SecResDetails from '../components/SecResDetails'
import SecResLike from '../components/SecResLike'
import SecResListing from '../components/SecResListing'
import SecResMenu from '../components/SecResMenu'
import SecResMobileResveration from '../components/SecResMobileResveration'
import SecResNavbar from '../components/SecResNavbar'
import SecResRatingNReview from '../components/SecResRatingNReview'
import '../styles/RestaurentDetailsPage.css'
import useFetch from '../Utils/useFetch'

function RestaurentDetailsPage() {

    const { id } = useParams();
    
    // const { query, search } = useLocation(); 
    // console.log(id, query.backUrl, new URLSearchParams(search).get('id'))

   
    const restaurantDetails = useFetch(`https://api.masairapp.com/api/Restaurant/GetRestaurantById?id=${id}`);
    return (
        <div className='restaurent_detail_page'>
           <NavBar ShouldHideSearch = {false}/>
            {/* <Breadcrumb/> */}

            <ResDetailTopNav/>

            <BannerResturant/>
            <div className="merge-section">

              <div className="section-left-restaurent-details">
                  {restaurantDetails.error && console.log(restaurantDetails.error)}
                  {restaurantDetails.isPending && console.log("Data coming in a moment")}
                  {restaurantDetails.data && 
              <SecResDetails 
              RestaurantName = {restaurantDetails.data.RestaurantName}
              CostOfTwo = {restaurantDetails.data.CostOfTwo}
              Cusines = {restaurantDetails.data.ListOfRestaurantCusine}
              PrimaryAreaOfOutlet = {restaurantDetails.data.PrimaryAreaOfOutlet}
              PrimaryLocation = {restaurantDetails.data.PrimaryLocation}
              NoOfReviews = {restaurantDetails.data.NoOfReview}
              AverageRating = {restaurantDetails.data.AverageRating}
              Timing = {restaurantDetails.data.ListOfWorkingDays}
              />
            }
              <SecResNavbar/>

              <SecResMobileResveration/>
                  
              {restaurantDetails.error && console.log(restaurantDetails.error)}
              {restaurantDetails.isPending && console.log("Data coming in a moment")}
              {restaurantDetails.data && 
              <SecResAbout 
              Cusines = {restaurantDetails.data.ListOfRestaurantCusine != null ?  restaurantDetails.data.ListOfRestaurantCusine : null}
              Features = {restaurantDetails.data.ListOfRestaurantFeature != null ?  restaurantDetails.data.ListOfRestaurantFeature : null}
              description = {restaurantDetails.data.Description}/>
              }
              <SecResMenu id = {id}/>
              <SecResListing/>
              <SecResLike/>
              {restaurantDetails.error && console.log(restaurantDetails.error)}
                  {restaurantDetails.isPending && console.log("Data coming in a moment")}
                  {restaurantDetails.data && 
              <SecResRatingNReview 
              ReviewsList = {restaurantDetails.data.UserReviews}
              NoOfReviews = {restaurantDetails.data.NoOfReview}
              AverageRating = {restaurantDetails.data.AverageRating}
              />
            }
              </div>
              <ReservationItem/>
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurentDetailsPage
