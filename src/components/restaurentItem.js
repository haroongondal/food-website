import React from 'react'
import '../styles/RestaurentItem.css'
import restaurentImage from '../images/restaurant.jpg'


export default function RestaurentItem({key = "", data = ""}) {

console.log(data.RestaurantName)
    return (
       
        <div>
           <div className="box-restaurent">
                    {/* img-box */}
                    <div className="img-restaurent">
                    <img alt="4" src={restaurentImage}/>

                    {/* heart-icon */}

                    <section class="ac-footer">
                    <div class="ac-footer-container ac-footer-brand">
                         <span class="ac-icon ac-icon-love-dark"></span> 

                    </div>
  
                    </section>

                    {/* rating */}
                <div className="rating">	
                    <a href="#abc" className="restaurent-rating">4.5</a>	
                    </div>
                    </div>

                    {/* detail-box */}
                    <div className="detail-box-restaurent">

                    {/* restaurent-name */}
                    <div className="restaurent-details">
                    <a href="#abc">{data.RestaurantName}</a>
                    <span className="restaurent-location">
                        {data.PrimaryAreaOfOutlet == null ? (data.PrimaryLocation == null ? "Address not Available" : data.PrimaryLocation)
                      : (data.PrimaryLocation == null ? data.PrimaryAreaOfOutlet
                      : data.PrimaryAreaOfOutlet + ", " + data.PrimaryLocation)}</span>
                    <span className="restaurent-discount">Flat 25% Off the Total bill</span>
                    </div>

                    {/* distance */}
                    <a href="#abc" className="restaurent-distance">0.5 km</a>
                        
                    </div>
                    
                    </div>
                
            
        </div>
      
    )
}