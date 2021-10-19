import React from 'react'
import '../styles/RestaurentItem.css'
import restaurentImage from '../images/restaurant.jpg'
import heartIcon from '../images/heart.png'

export default function RestaurentItem({key = "", data = ""}) {


console.log(data.RestaurantName)
    return (
        <div>
           <div class="box-restaurent">
                    {/* img-box */}
                    <div class="img-restaurent">
                    <img alt="4" src={restaurentImage}/>

                    {/* heart-icon */}
                    <div class="heart-icon">
                        <img alt="heart-icon" src={heartIcon}/>
                    </div>

                    {/* rating */}
                <div class="rating">	
                    <a href="#abc" class="restaurent-rating">4.5</a>	
                    </div>
                    </div>

                    {/* detail-box */}
                    <div class="detail-box-restaurent">

                    {/* restaurent-name */}
                    <div class="restaurent-details">
                    <a href="#abc">{data.RestaurantName}</a>
                    <span class="restaurent-location">Islamabad, Pakistan</span>
                    <span class="restaurent-discount">Flat 25% Off the Total bill</span>
                    </div>

                    {/* distance */}
                    <a href="#abc" class="restaurent-distance">0.5 km</a>
                        
                    </div>
                    
                    </div>
                
            
        </div>
    )
}