import React from "react";
import '../styles/Banner.css'
import dashboardImg from '../images/dashboard_image.jpg'
import searchIcon from '../images/search_icon.png'


export default function Banner() {
    return (
       
    <div className="dashboard_image">

    <img alt="dashboard_image"   src={dashboardImg}/>

    <div className="div_Its_now_safe_to">

        <h1 className="heading_Its_now_safe_to">It's Now Safe To <span class="crave">Crave!</span></h1>

    </div>

    <div className="wrap-top-search">
        <div className="search-top-search search-bar" id='searchBar_mid'>
           <input type="text" className="searchTerm-top-search" placeholder="Search for Restaurants, Cuisines, Location "/>
           <button type="submit" class="searchButton-top-search">
             <span className="text-search-link-top-search"><img alt = "seachicon" src={searchIcon} style={{width: "25px", height: "25px"}}/></span>
          </button>
        </div>
     </div>

     </div>



    )
}