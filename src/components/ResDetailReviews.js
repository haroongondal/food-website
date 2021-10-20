import React from 'react'
import '../styles/ResDetailReviews.css'
import profile from '../images/profile_pic.jpg'
import reviews from '../images/review.svg'
import thumbs from '../images/thumbs.svg'
import blackflag from '../images/black-flag.svg'
function ResDetailReviews() {
    return (
        <div>
            <div className="content-review-section">
                            <div className="for-two-sections">
                                <div className="left-profile-image">  
                                    <img className="profile-image" src={profile} alt="Avatar"/>
                                    <p className="text-user-name">Nadeem</p>
                                    <p className="text-city-name">New York</p>
                                    <div className="profile-review">
                                        <img className="review-image" src={reviews}/>
                                        <p><span>1</span> review</p>
                                    </div>
                                </div>
                                <div className="review-details">
    
                                    <div className="section-review-details">
                                    <div className="section-rating-star">
                                        <div className="section-rating-stars-dined-a-day">
                                            <div className="rate-review-section">
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
                                            <p className="text-dined-a-day"> Dined a day</p> 
                                        </div>
                                    <div className="section-overall-review">
                                        <div className="div-overall-review">
                                            <p className="text-overall-review">Overall</p>
                                            <p className="text-number-review">2</p>
                                            <span className="black-circle-overall-review">●</span>
                                        </div>
                                        <div className="div-overall-review">
                                            <p className="text-overall-review">Overall</p>
                                            <p className="text-number-review">2</p>
                                            <span className="black-circle-overall-review">●</span>
                                        </div>
                                        <div className="div-overall-review">
                                            <p className="text-overall-review">Overall</p>
                                            <p className="text-number-review">2</p>
                                            <span className="black-circle-overall-review">●</span>
                                        </div>
                                        <div className="div-overall-review">
                                            <p className="text-overall-review">Overall</p>
                                            <p className="text-number-review">2</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    <div style={{display: "-webkit-inline-box"}} className="comment-section">
                                    <div className="paragraph-comment">
                                        <p rows="4" cols="50" name="comment" form="usrform">
                                            Not bad, not great.
                                            Given my experience at other locations, competition and prices, I expect better than mediocre.
                                        </p>
                                        
                                    </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="report-section">
                                <div className="helpful-review">
                                <img src={thumbs}/>
                                <p>Helpful review</p>
                                </div>
                                <div className="report-review">
                                    <img className="report-image" src={blackflag}/>
                                    <p>Report</p>
                                    </div>
                                
                            </div>
                        </div>
        </div>
    )
}

export default ResDetailReviews
