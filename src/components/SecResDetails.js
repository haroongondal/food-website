import React from 'react'
import '../styles/SecResDetails.css'
import downIcon from '../images/down_arrow.svg'
function SecResDetails(props) {

    return (
        
            <div id="top-section">
            <div className="border-restaurent-details">
                <div className="content-restaurent-details">
                       <div className="merge-text-rating" style={{display: "flex",
                       justifyContent: "space-between"}}>
                        <div className="text-section">
                            <h3 className="text-restaurent-title">{props.RestaurantName}</h3>
                            <h6 className="text-font-size">Rs {props.CostOfTwo} for 2 | <span style={{color:"gray"}}>{props.Cusines.map(c => c.Cusine + " ")}</span></h6>
                            <h6 className="text-font-size">
                            {props.PrimaryAreaOfOutlet == null ? (props.PrimaryLocation == null ? "Address not Available" : props.PrimaryLocation)
                            : (props.PrimaryLocation == null ? props.PrimaryAreaOfOutlet
                            : props.PrimaryAreaOfOutlet + ", " + props.PrimaryLocation)}<span style={{color: "#0083C7", fontWeight: "700"}}> Get Direction</span></h6>
                            <h6 className="text-font-size">Time: 12:00 PM to 12:00 AM <span style={{color: "#0083C7", fontWeight: "700"}}>(Open Now)</span>
                            <span><img alt="blue-arrow" src={downIcon} style={{height: "11px",width: "11px",marginLeft: "5px",marginBottom: "5px"}}/></span></h6>
                        </div>
                        <div className="rating-section">
                            <h6 className="rating-3rd-page">{Math.round(props.AverageRating * 100) / 100}</h6>
                            <h6 className="rating-reviews-3rd-page">{`${props.NoOfReviews} Reviews`}</h6>    
                        </div>
                       </div>
                    </div>
                </div>
            </div>
       
    )
}

export default SecResDetails
