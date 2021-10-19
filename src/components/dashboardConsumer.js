import React from 'react'
import '../styles/DashboardConsumer.css'
import dashboardImage from '../images/dashboard_image.jpg'
import searchIcon from '../images/search_icon.png'


export default function DashboardConsumer() {


    return (
        <div>
           
           <div class="dashboard_image">

<img alt="dashboard_image" src={dashboardImage}/>

<div class="div_Its_now_safe_to">

    <h1 class="heading_Its_now_safe_to">It's Now Safe To <span class="crave">Crave!</span></h1>

</div>

<div class="wrap-top-search">
    <div class="search-top-search search-bar" id="searchBar_mid">
       <input type="text" class="searchTerm-top-search" placeholder="Search for Restaurants, Cuisines, Location "/>
       <button type="submit" class="searchButton-top-search">
         <span class="text-search-link-top-search"><img alt="search-icon" src={searchIcon} style={{width: "25px",height: "25px"}}/></span>
      </button>
    </div>
 </div>

</div>
                
            
        </div>
    )
}