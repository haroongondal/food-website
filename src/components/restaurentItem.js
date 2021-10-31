import React from 'react'
import '../styles/RestaurentItem.css'
import restaurentImage from '../images/restaurant.jpg'
import { Link } from 'react-router-dom'


export default function RestaurentItem({key = "", data = ""}) {

console.log(data.RestaurantName)
    return (
       
        
        <div className="link">
           <Link to = {`/RestaurentDetailsPage/${data.Id}`}>
                <div className="box-restaurent">
                    {/* img-box */}
                    <div className="img-restaurent">
                    <img alt="4" src={restaurentImage}/>

                    {/* heart-icon */}

                    <section className="ac-footer">
                    <div className="ac-footer-container ac-footer-brand">
                         <span className="ac-icon ac-icon-love-dark"></span> 

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
                
            </Link>
        </div>
        
    )
}