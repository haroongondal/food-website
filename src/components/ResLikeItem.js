import '../styles/ResLikeItem.css'
import restaurentImage from '../images/restaurant.jpg'
import { Link } from 'react-router-dom'

export default function ResLikeItem() {

    return (


        <div className="box-restaurent-3rd-page">

                  <Link to = "/OrderHistoryPage">
                                {/* img-box */}
                                <div className="slide-img-restaurent-3rd-page">
                                <img alt="4" src={restaurentImage}/>
                                
                                {/* overlayer */}
                            <div className="over-rating-3rd-page">

                                {/* rating */}
                                <h6 href="#" className="buy-btn-restaurent-3rd-page">4.5</h6>
                                </div>
                                </div>

                                {/* detail-box */}
                                <div className="detail-box-restaurent-3rd-page">
                                {/* details */}
                                <div className="type-restaurent-3rd-page">
                                <p>JW Kitchen</p>
                                <span className="margao-details-3rd-page">JW Marriott Hotel, Vital Mallya Road, Central.</span>
                                <span className="flat-off-3rd-page">1 offer avaiable</span>
    
                               
                                </div>
                                    
                                </div>
                    </Link>
            </div>
    )
}