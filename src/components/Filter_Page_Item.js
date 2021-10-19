import '../styles/Filter_Page_Item.css'
import restaurentImage from '../images/restaurant.jpg'
import bookmarkIcon from '../images/bookmark.png'

export default function Filter_Page_Item() {

    return (
        <div>
           
            
           <div className="filter-page-box">

                
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
                            <a href="#abc">JW Kitchen</a>
                            <span className="filter-P-restaurent-location">JW Marriott Hotel, Vital Mallya Road, Central</span>
                            <span className="filter-P-offer">1 offer avaiable</span>

                            <div style={{marginTop: "5px"}}>
                                <span><img alt="bookmark-icon" src={bookmarkIcon} height="13px" width="13px"/></span>
                                <span className="filter-P-text-booked">Booked 1 time today</span>
                            </div>
                            </div>
                                
                            </div>
                            
                            </div>   
                
            
        </div>
    )
}