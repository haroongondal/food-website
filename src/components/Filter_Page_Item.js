import '../styles/Filter_Page_Item.css'
import restaurentImage from '../images/restaurant.jpg'
import bookmarkIcon from '../images/bookmark.png'
import { Link } from 'react-router-dom'

export default function Filter_Page_Item({data = ""}) {

    return (
        
           
            
           <div className="filter-page-box">

                    <Link to = "/">
                            {/* img-box */}
                            <div className="filter-P-restaurent-image">
                            <img alt="restaurent-pic" src={restaurentImage}/>
                            
                            {/* rating */}
                        <div className="filter-P-rating-box">	
                            <h6 href="#" className="filter-P-rating">4.5</h6>
                            </div>
                            </div>
                            {/* detail-box */}
                            <div className="filter-P-restaurent-detail-box">
                            {/* restaurent-name */}
                            <div className="filter-P-restaurent-name">
                            <p>{data.RestaurantName}</p>
                            <span className="filter-P-restaurent-location">
                            {data.PrimaryAreaOfOutlet == null ? (data.PrimaryLocation == null ? "Address not Available" : data.PrimaryLocation)
                          : (data.PrimaryLocation == null ? data.PrimaryAreaOfOutlet
                           : data.PrimaryAreaOfOutlet + ", " + data.PrimaryLocation)}</span>
                            <span className="filter-P-offer">1 offer avaiable</span>

                            <div style={{marginTop: "5px"}}>
                                <span><img alt="bookmark-icon" src={bookmarkIcon} height="13px" width="13px"/></span>
                                <span className="filter-P-text-booked">Booked 1 time today</span>
                            </div>
                            </div>
                                
                            </div>
                     </Link>
                            
            </div>   
            
            
       
    )
}