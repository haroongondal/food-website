import '../styles/CuisinesItem.css'
import restaurentImage from '../images/restaurant.jpg'
import bookmarkIcon from '../images/bookmark.png'

export default function Filter_Page_Item() {

    return (
        <div>
           
            
           <div className="box-restaurent-2nd-page">

                
                            {/* img-box */}
                            <div className="slide-img-restaurent-2nd-page">
                            <img alt="restaurent-pic" src={restaurentImage}/>
                            
                            {/* rating */}
                        <div className="over-rating-2nd-page">	
                            <h6 href="#" className="buy-btn-restaurent-2nd-page">4.5</h6>
                            </div>
                            </div>
                            {/* detail-box */}
                            <div className="detail-box-restaurent-2nd-page">
                            {/* restaurent-name */}
                            <div className="type-restaurent-2nd-page">
                            <a href="#abc">JW Kitchen</a>
                            <span className="margao-details-2nd-page">JW Marriott Hotel, Vital Mallya Road, Central Multi-Cuisne, North 
                                ₹ 2,500 for 2 | Multi-Cuisine, North Indian</span>
                            <span className="flat-off-2nd-page">1 offer avaiable</span>

                            <div style={{marginTop: "5px"}}>
                                <span><img alt="bookmark-icon" src={bookmarkIcon} height="13px" width="13px"/></span>
                                <span className="text-booked">Booked 1 time today</span>
                            </div>
                            </div>
                                
                            </div>
                            
                            </div>   
                
            
        </div>
    )
}