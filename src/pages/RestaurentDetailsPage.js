import React from 'react'
import { useParams } from 'react-router'
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
import useFetch from '../Utils/useFetch'

function RestaurentDetailsPage() {

    const { id } = useParams();
    
    // const { query, search } = useLocation(); 
    // console.log(id, query.backUrl, new URLSearchParams(search).get('id'))

    const { data, isPending, error } = useFetch('https://api.masairapp.com/api/Restaurant/GetRestaurantById?id=' + id);
  
    
    const getCusines = () => {
        var e = "";
        for (var i in data.ListOfRestaurantCusine) {
            e += i.Cusine + ", "
        }
        return e.substring(0, e.length - 2);;
    }

    return (
        <div>
            <Breadcrumb/>
            <BannerResturant/>
            <div className="merge-section">

              <div className="section-left-restaurent-details">
                  {error && console.log(error)}
                  {isPending && console.log("Data coming in a moment")}
                  {data && 
              <SecResDetails 
              RestaurantName = {data.RestaurantName}
              CostOfTwo = {data.CostOfTwo}
              Cusines = {getCusines()}
              PrimaryAreaOfOutlet = {data.PrimaryAreaOfOutlet}
              PrimaryLocation = {data.PrimaryLocation}
              />
            }
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
