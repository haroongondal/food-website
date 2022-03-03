import '../styles/Filter_Page_Item.css'
import restaurentImage from '../images/restaurant.jpg'
import bookmarkIcon from '../images/bookmark.png'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

export default function Filter_Page_Item({data = ""}) {

    // const cusinesList = data.ListOfRestaurantCusine;

    // var cusines = "";
    // for (let c in cusinesList) {
    //     cusines += c.
    // }

    return (
        
           
            
           <div className="filter-page-box">

                            <Link to = {`/RestaurentDetailsPage/${data.Id}`}>
                            {/* img-box */}
                            <div className="filter-P-restaurent-image">
                            <img alt="restaurent-pic" src={restaurentImage}/>
                            
                            {/* rating */}
                        <div className="rating">
                            <div className="content-rating-stars">
                                <div className="rate-for-ratings-section">
                                <ReactStars
                                    count={5}
                                    size={30}
                                    value={Math.round(data.AverageRating * 100) / 100}
                                    edit={false}
                                    half={true}
                                    color2={"#439548"}
                                />
                                </div>
                            </div>
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
   
                            <span className="filter-P-restaurent-location">Rs. {data.CostOfTwo == null ? "00" : data.CostOfTwo} for 2 | Multi-Cuisine, North Indian Multi-Cuisne, North </span>

                            <span className="filter-P-offer">1 offer avaiable</span>

                            <div className='booked-box' style={{marginTop: "5px"}}>
                                <span><img alt="bookmark-icon" src={bookmarkIcon} height="13px" width="13px"/></span>
                                <span className="filter-P-text-booked">Booked 1 time today</span>
                            </div>
                            </div>
                                
                            </div>
                     </Link>
                            
            </div>   
            
            
       
    )
}