import React from 'react'
import "../styles/FeedbackReviewSec.css";
import profile from "../images/profile_pic.jpg";
import reviews from "../images/review.svg";
import ReactStars from 'react-stars'

export default function FeedbackReviewSec() {
    return (
        <div className="feedback-reviews">
                <div className="content-review-section">
                  <div className="for-two-sections">
                    <div className="left-profile-image">
                      <img
                        className="profile-image"
                        src={profile}
                        alt="Avatar"
                      />
                      <p className="text-user-name">Nadeem</p>
                      <p className="text-city-name">New York</p>
                      <div className="profile-review">
                        <img
                          alt="review-pic"
                          className="review-image"
                          src={reviews}
                        />
                        <p>
                          <span>1</span> review
                        </p>
                      </div>
                    </div>
                    <div className="review-details">
                      <div className="section-review-details">
                        <div className="section-rating-star">
                          <div className="section-rating-stars-dined-a-day">
                          <ReactStars
                    count={5}
                    size={22}
                    value={4}
                    edit={false}
                    half={true}
                    color2={"#439548"}
                  />
                            <span className="black-circle-reviewSec">●</span>
                            <p className="text-dined-a-day"> Dined a day</p>
                          </div>
                          <div className="section-overall-review">
                            <div className="div-overall-review">
                              <p className="text-overall-review">Overall</p>
                              <p className="text-number-review">2</p>
                              <span className="black-circle-overall-review">
                                ●
                              </span>
                            </div>
                            <div className="div-overall-review">
                              <p className="text-overall-review">Overall</p>
                              <p className="text-number-review">2</p>
                              <span className="black-circle-overall-review">
                                ●
                              </span>
                            </div>
                            <div className="div-overall-review">
                              <p className="text-overall-review">Overall</p>
                              <p className="text-number-review">2</p>
                              <span className="black-circle-overall-review">
                                ●
                              </span>
                            </div>
                            <div className="div-overall-review">
                              <p className="text-overall-review">Overall</p>
                              <p className="text-number-review">2</p>
                            </div>
                          </div>
                        </div>

                        <div
                          
                          className="comment-section-feedback"
                        >
                          <div className="paragraph-comment">
                            <p rows="4" cols="50" name="comment" form="usrform">
                              Not bad, not great. Given my experience at other
                              locations, competition and prices, I expect better
                              than mediocre. Not bad, not great. Given my experience at other
                              locations, competition and prices, I expect better
                              than mediocre.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="like-replay-btns">
                    <div>
                      <button className="like-btn">
                        <i className="btn-margin bi bi-heart-fill"></i>Like
                      </button>
                    </div>
                    <div>
                      <button className="reply-btn">
                        <i className="btn-margin bi bi-reply-fill"></i>Replay
                      </button>
                    </div>
                  </div>
                </div>

                <div className="reply-text-area">
                  <textarea
                    placeholder="Write a Reply!"
                    className="feedback-textArea"
                    rows="4"
                    cols="95"
                  ></textarea>
                </div>
              </div>
    )
}
