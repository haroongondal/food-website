import React from 'react'
import BannerResturant from '../components/BannerResturant'
import Breadcrumb from '../components/Breadcrumb'
import ReservationItem from '../components/Reservation_Item'
import SecResAbout from '../components/SecResAbout'
import SecResDetails from '../components/SecResDetails'
import SecResLike from '../components/SecResLike'
import SecResMenu from '../components/SecResMenu'
import SecResNavbar from '../components/SecResNavbar'
import SecResRatingNReview from '../components/SecResRatingNReview'
import '../styles/RestaurentDetailsPage.css'

function RestaurentDetailsPage() {
    return (
        <div>
            <Breadcrumb/>
            <BannerResturant/>
            <div className="merge-section">

              <div className="section-left-restaurent-details">
              <SecResDetails/>
              <SecResNavbar/>
              <SecResAbout/>
              <SecResMenu/>
              <SecResLike/>
              <SecResRatingNReview/>
              </div>
              
              <ReservationItem/>
            
            </div>
        </div>
    )
}

export default RestaurentDetailsPage
