import React from 'react'
import '../styles/RatingNReviews.css'
function RatingNReviews() {
    return (
        <div>
            <div class="ratings-bars-rating-stars">
                          <div class="content-rating-bars"> 
                           <div class="bar">         
                           <div class="side">
                           <div>5</div>
                           </div>
                           <div class="middle">
                           <div class="bar-container">
                           <div class="bar-alignment bar5"></div>
                           </div>
                           </div>
                           </div>
                           <div class="bar">         
                            <div class="side">
                            <div>4</div>
                            </div>
                            <div class="middle">
                            <div class="bar-container">
                            <div class="bar-alignment bar4"></div>
                            </div>
                            </div>
                            </div>
                            <div class="bar">         
                           <div class="side">
                           <div>3</div>
                           </div>
                           <div class="middle">
                           <div class="bar-container">
                           <div class="bar-alignment bar3"></div>
                           </div>
                           </div>
                           </div>
                           <div class="bar">         
                            <div class="side">
                            <div>2</div>
                            </div>
                            <div class="middle">
                            <div class="bar-container">
                            <div class="bar-alignment bar2"></div>
                            </div>
                            </div>
                            </div>
                            <div class="bar">         
                           <div class="side">
                           <div>1</div>
                           </div>
                           <div class="middle">
                           <div class="bar-container">
                           <div class="bar-alignment bar1"></div>
                           </div>
                           </div>
                           </div>
                           
                        </div>
                       
                        <div class="content-rating-stars">
                            <h3 class="rating-number">4.5</h3>
                            <div class="rate-for-ratings-section">
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
