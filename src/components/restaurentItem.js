import React from 'react'
import '../styles/RestaurentItem.css'
import restaurentImage from '../images/restaurant.jpg'

export default function RestaurentItem() {


    return (
        <div>
           
            
           <div class="box-restaurent">

                
                    {/* img-box */}
                    <div class="img-restaurent">
                    <img alt="4" src={restaurentImage}/>

                    {/* heart-icon */}
                    <section class="ac-footer">
                    <div class="ac-footer-container ac-footer-brand">
                         <span class="ac-icon ac-icon-love-dark"></span> 
                    </div>
  
                    </section>

                    {/* rating */}
                <div class="rating">	
                    <a href="#abc" class="restaurent-rating">4.5</a>	
                    </div>
                    </div>

                    {/* detail-box */}
                    <div class="detail-box-restaurent">

                    {/* restaurent-name */}
                    <div class="restaurent-details">
                    <a href="#abc">Nostalgia</a>
                    <span class="restaurent-location">Margao, South Goa</span>
                    <span class="restaurent-discount">Flat 25% Off the Total bill</span>
                    </div>

                    {/* distance */}
                    <a href="#abc" class="restaurent-distance">0.5 km</a>
                        
                    </div>
                    
                    </div>
                
            
        </div>
    )
}