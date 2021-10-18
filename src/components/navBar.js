import React from 'react'
import '../styles/NavBar.css'
import logo from '../images/logo.png'
import locationIcon from '../images/location_pin.svg'
import downArrowIcon from '../images/down_arrow.svg'

export default function NavBar() {


    return (
        <div>
           
            
           <div class="header">
        <nav class="navbar">
                <div class="logo_image">
                    <a href="https://www.food_app.com">
                        <img alt="food_app" style={{maxWidth: "145px"}} src={logo}/>
                    </a>
                </div>
    
        


      {/* Location-Box */}

      <a href="#abc" class="section-location">
              <div class="details-location">
                  <span class="image-location"><img alt="Location pin" src={locationIcon}  style={{height: "20px", width: "20px"}}/></span>
                  <span class="city-loaction">
                      <span class="text-main-city">Delhi</span>
                      <span class="text-city-details">Connaught Place (C..</span>
                  </span>
                  <span class="image-arrow"><img alt="down-arrow" src={downArrowIcon} style={{width: "10px",height: "10px"}}/></span>

              </div>
      </a>


      {/* Search-bar */}

    <div class="parent">
      <div class="search-box sticky-search" id="searchBar" style={{display: "none"}}>
        <input type="text" class="searchTerm-top" placeholder="Search for Restaurants, Cuisines, Location "/>
        <button type="submit" class="searchButton-top">
          <span class="text-search-button-top">Search</span>
       </button>
      </div>
    </div>


    {/* Top-right-navigation-buttons */}

            <ul class="desktop-list">
                <li><a href="#abc">786 100 4444</a></li>
                <li><a href="#abc">Help</a></li>
                <li><a href="#abc">Login</a></li>
                <li><a class="signup_buton" href="#abc">SignUp</a></li>
            </ul>
        
        </nav>
    
    </div> 
                
            
        </div>
    )
}