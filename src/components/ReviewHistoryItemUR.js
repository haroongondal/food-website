import React from 'react'
import '../styles/ReviewHistoryItemUR.css'
import kitchen from '../images/kadai_chicken.jpg'

function ReviewHistoryItemUR() {
    return (
        <div className="div-border-review-history-box moreBox">
                    <div className="div-kadai-chicken-review-history">
                        <h6 className="text-kadai-chicken-review-history">Kadai Chicken</h6>
                    </div>
                    <hr className="hr-review-history"/>
                    <div className="for-3-sections-review-history">
                        <div style={{display: "flex",position: "relative"}}>
                            <div className="section-1-image-review-history">  
                                <img src={kitchen} alt="Avatar" style={{width: "140px",height: "125px"}}/>
                            </div>
                            <div className="section-2-user-details-review-history " style={{marginLeft: "20px"}}>

                                <div style={{position: "absolute",width: "100%"}}>
                                <div className="div-for-butter-chicken-part-1-review-history">
                                <h4>Butter Chicken Factory</h4>
                                </div>
                                <div className="div-for-delivery-rating-part-2-review-history">
                                <div className="section-restaurent-location">
                                <h4>Coffe,Tea Juices,Fast Food</h4>
                                <p>Sector 43, Gulf Course Road, Gulberg</p>
                                </div>
                                </div>
                                <h6 className="been-there"><span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pin-map" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"></path>
                                    <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"></path>
                                  </svg></span>Been There</h6>
                                </div>
                            </div>
                        </div>
                        <div className="section-write-a-review">
                            <div className="text-duration">
                                <h6>4 months ago</h6>
                            </div>
                            <div className="button-write-a-review">
                                <button>Write a review</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ReviewHistoryItemUR
