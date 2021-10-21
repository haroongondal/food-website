import React from 'react'
import kadai from '../images/kadai_chicken.jpg'
import triangle from '../images/triangle-right-arrow.svg'
import '../styles/OrderProductHistory.css'
function OrderHistoryProduct() {
    return (
        <div>
             <div className="div-border-order-history-box moreBox">
                    <div className="div-kadai-chicken">
                        <h6 className="text-kadai-chicken">Kadai Chicken</h6>
                        <h6 className="text-dish-price">Rs 179.24</h6>
                    </div>
                    <hr className="hr-order-history"/>
                    <div className="for-3-sections-order-history">
                        <div style={{display: "flex",position: "relative"}}>
                            <div className="section-1-image-order-history">  
                                <img src={kadai} alt="Avatar" style={{width: "140px",height: "125px"}}/>
                            </div>
                            <div className="section-2-user-details" style={{marginLeft: "20px"}}>

                                <div style={{position: "absolute",width: "100%"}}>
                                <div className="div-for-butter-chicken-part-1">
                                <h4>Butter Chicken Factory</h4>
                                <h6>Section 43. Gurgaoin</h6>
                                </div>
                                <div className="div-for-delivery-rating-part-2">
                                <div style={{display: "-webkit-inline-box"}}>
                                <h6 style={{color: "#656565",fontSize: "0.75rem",marginTop: "9px"}}>Delivery Rating</h6>
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" value="5"/>
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4"/>
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3"/>
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2"/>
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1"/>
                                    <label for="star1" title="text">1 star</label>
                                </div>
                                </div>
                                <h6 style={{color: "#656565",fontSize: "0.75rem"}}>Delivery on 23 March 2021</h6>
                                </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div className="
                        
                        i" style={{display: "flex",marginBottom: "10px", alignItems: "flex-end"}}>
                            <div>
                                <div className="button-order-history" style={{margin: "20px 0px"}}>
                                    <a style={{backgroundColor: "#E40E0E",color: "white"}}
                                    >Re-order<span style={{marginLeft: "33px"}}><img className="image-triangle-arrow" src={triangle} alt=""/></span></a>
                                </div>
                                <div className="button-order-history">
                                    <a style={{backgroundColor: "#1D1D1D",color: "white"}}>View details<span style={{marginLeft: "10px"}}><img className="image-triangle-arrow" src={triangle} alt=""/></span></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default OrderHistoryProduct
