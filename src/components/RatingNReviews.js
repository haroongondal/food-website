import React from 'react'
import '../styles/RatingNReviews.css'
function RatingNReviews(props) {
    return (
        <div>
            <div className="ratings-bars-rating-stars">
                          <div className="content-rating-bars"> 
                           <div className="bar">         
                           <div className="side">
                           <div>5</div>
                           </div>
                           <div className="middle">
                           <div className="bar-container">
                           <div className="bar-alignment bar5"></div>
                           </div>
                           </div>
                           </div>
                           <div className="bar">         
                            <div className="side">
                            <div>4</div>
                            </div>
                            <div className="middle">
                            <div className="bar-container">
                            <div className="bar-alignment bar4"></div>
                            </div>
                            </div>
                            </div>
                            <div className="bar">         
                           <div className="side">
                           <div>3</div>
                           </div>
                           <div className="middle">
                           <div className="bar-container">
                           <div className="bar-alignment bar3"></div>
                           </div>
                           </div>
                           </div>
                           <div className="bar">         
                            <div className="side">
                            <div>2</div>
                            </div>
                            <div className="middle">
                            <div className="bar-container">
                            <div className="bar-alignment bar2"></div>
                            </div>
                            </div>
                            </div>
                            <div className="bar">         
                           <div className="side">
                           <div>1</div>
                           </div>
                           <div className="middle">
                           <div className="bar-container">
                           <div className="bar-alignment bar1"></div>
                           </div>
                           </div>
                           </div>
                           
                        </div>
                       
                        <div className="content-rating-stars">
                            <h3 className="rating-number">{Math.round(props.data * 100) / 100}</h3>
                            <div className="rate-for-ratings-section">
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
                            <h2><span>109</span> Rank amongst restaurants in Delhi NCR</h2>
                        </div>
                        </div>
        </div>
    )
}

export default RatingNReviews
