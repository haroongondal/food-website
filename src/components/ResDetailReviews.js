import React from "react";
import "../styles/ResDetailReviews.css";
import profile from "../images/profile_pic.jpg";
import reviews from "../images/review.svg";
import thumbs from "../images/thumbs.svg";
import blackflag from "../images/black-flag.svg";
import ReactStars from 'react-stars'
import { ForDevice } from "media-query-react";
function ResDetailReviews(props) {
  return (
    <div>
    <ForDevice deviceName={["tablet", "desktop"]}>
      <div className="content-review-section">
        <div className="for-two-sections">
          <div className="left-profile-image">
            <img className="profile-image" src={profile} alt="Avatar" />
            <p className="text-user-name">
              {props.data.UserInformation.UserName}
            </p>
            <p className="text-city-name">New York</p>
            <div className="profile-review">
              <img alt="review-pic" className="review-image" src={reviews} />
              <p>
                <span>{props.data.NoOfReviewOfUser}</span> review(s)
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
                    value={Math.round(props.data * 100) / 100}
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

              <div className="comment-section">
                <div className="paragraph-comment">
                  <p rows="4" cols="50" name="comment" form="usrform">
                    {props.data.Feedback_Content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="report-section">
        <div className="helpful-review">
          <img alt="thumb-pic" src={thumbs} />
          <p>Helpful review</p>
        </div>
        <div className="report-review">
          <img alt="report-pic" className="report-image" src={blackflag} />
          <p>Report</p>
        </div>
      </div>
      </ForDevice>

      <ForDevice deviceName="mobile">
      
      <div className="review-res-detail-M">
      <div className="content-review-section">
        <div className="for-two-sections">
          <div className="left-profile-image">
            <img className="profile-image" src={profile} alt="Avatar" />
            <p className="text-user-name">
              {props.data.UserInformation.UserName}
            </p>
            <p className="text-city-name">New York</p>
            <div className="profile-review">
              <img alt="review-pic" className="review-image" src={reviews} />
              <p>
                <span>{props.data.NoOfReviewOfUser}</span> review(s)
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
                    value={Math.round(props.data.givenStars * 100) / 100}
                    edit={false}
                    half={true}
                    color2={"#439548"}
                  />
                  
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

              
            </div>
          </div>

          

        </div>
        
      </div>
      <div className="comment-section">
                <div className="paragraph-comment">
                  <p rows="4" cols="50" name="comment" form="usrform">
                    {props.data.Feedback_Content}
                  </p>
                </div>
              </div>
      <div className="report-section">
        <div className="helpful-review">
          <img alt="thumb-pic" src={thumbs} />
          <p>Helpful review</p>
        </div>
        <div className="report-review">
          <img alt="report-pic" className="report-image" src={blackflag} />
          <p>Report</p>
        </div>
      </div>
      </div>
      </ForDevice>

    </div>
  );
}

export default ResDetailReviews;
