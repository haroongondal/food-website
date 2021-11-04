import React from 'react'
import '../styles/RatingNReviews.css'
import ReactStars from 'react-stars'
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
                            <ReactStars
                                count={5}
                                size={30}
                                value={Math.round(props.data * 100) / 100}
                                edit={false}
                                half={true}
                                color2={'#439548'} />
                            </div>
                            <h2><span>109</span> Rank amongst restaurants in Delhi NCR</h2>
                        </div>
                        </div>
        </div>
    )
}

export default RatingNReviews
