import React from 'react'
import kitchen from '../images/kadai_chicken.jpg'
import triangle from '../images/triangle-right-arrow.svg'
import '../styles/ReviewHistoryItem.css'
function ReviewHistoryItem() {
    return (
        
            <div className="div-border-review-history-box moreBox">
                    <div className="div-kadai-chicken-review-history">
                        <h6 className="text-kadai-chicken-review-history">Kadai Chicken</h6>
                        <div style={{display: "flex"}}>
                            <div className="rate-review-history">
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
                            <span className="black-circle">●</span>
                            <h6 style={{fontSize: "0.75rem", marginLeft: "8px",
                            marginTop: "1px"}}> Dined a day</h6> 
                        </div>
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
                                <div className="section-overall">
                                    <div className="div-overall">
                                        <h6 className="text-overall">Overall</h6>
                                        <h6 className="text-number">2</h6>
                                        <span className="black-circle-overall">●</span>
                                    </div>
                                    <div className="div-overall">
                                        <h6 className="text-overall">Overall</h6>
                                        <h6 className="text-number">2</h6>
                                        <span className="black-circle-overall">●</span>
                                    </div>
                                    <div className="div-overall">
                                        <h6 className="text-overall">Overall</h6>
                                        <h6 className="text-number">2</h6>
                                        <span className="black-circle-overall">●</span>
                                    </div>
                                    <div className="div-overall">
                                        <h6 className="text-overall">Overall</h6>
                                        <h6 className="text-number">2</h6>
                                    </div>
                                </div>
                                </div>
                                <div className="div-for-delivery-rating-part-2-review-history">
                                <div style={{display: "-webkit-inline-box"}}>
                                <div style={{width: "100%"}}>
                                    <textarea rows="4" cols="50" name="comment" form="usrform" id="edit">Not bad, not great.
                                        Given my experience at other locations, competition and prices, I expect better than mediocre.
                                    </textarea>
                                    
                                    
                                </div>
                                </div>
                                <h6 style={{color: "#656565",fontSize: "0.75rem"}}>Reviewed on 23 March 2021</h6>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-3-following-review-history" style={{display:"flex",marginBottom: "10px"}}>
                            <div>
                                <div className="button-order-history-review-history" style={{marginBottom: "20px"}} id="edit-button">
                                    <a href="#abc" style={{backgroundColor: "#1D1D1D",color: "white"}}>Edit Review<span style={{marginLeft: "10px"}}><img alt="down-arrow" class="image-triangle-arrow" src={triangle}/></span></a>
                                </div>
                                <div className="button-order-history-review-history" style={{float: "right"}} id="end-editing">
                                    <a href="#abc" style={{backgroundColor: "#1D1D1D",color: "white"}}>Done</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
    )
}

export default ReviewHistoryItem
