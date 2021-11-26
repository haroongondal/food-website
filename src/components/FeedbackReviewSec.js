import React from "react";
import "../styles/FeedbackReviewSec.css";
import profile from "../images/profile_pic.jpg";
import reviews from "../images/review.svg";
import ReactStars from "react-stars";
import { useState } from "react";
import { ForDevice } from "media-query-react";

export default function FeedbackReviewSec({ data }) {

  const [IsOpened, setOpened] = useState(false);

  const handdleToggle = () => setOpened(!IsOpened);

  const [reply, setReply] = useState("");

  const [textArea, setTextArea] = useState("");

  const [editBtn, setEditBtn] = useState(true);

  const [doneBtn, setDoneBtn] = useState(false);

  const handdleEdit = () => {
    setEditBtn(!editBtn);
    setDoneBtn(!doneBtn);
  };

  function handleDone(e) {
    e.preventDefault();

    setDoneBtn(!doneBtn);
    setEditBtn(!editBtn);

    const values = {
      ReviewId: 4,
      User_id: null,
      Resturanet_id: null,
      givenStars: null,
      Feedback_Content: reply,
      ReviewDate: null,
      DaysAgo: null,
      NoOfReviewOfUser: null,
      RestaurantInformation: null,
      UserInformation: null,
      TagList: [],
      ParentReviewId: data.id,
      ResponseCode: 0,
      ResponseMessage: null,
    };
    console.log(values);

    fetch("https://api.masairapp.com/api/userReview/PostOrReplyReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify(values),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        if (!data.ResponseMessage) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <ForDevice deviceName={["tablet", "desktop"]}>
    <div className="feedback-reviews">
      <div className="content-review-section">
        <div className="for-two-sections">
          <div className="left-profile-image">
            <img className="profile-image" src={profile} alt="Avatar" />
            <p className="text-user-name">{data.UserInformation.UserName}</p>
            <p className="text-city-name">New York</p>
            <div className="profile-review">
              <img alt="review-pic" className="review-image" src={reviews} />
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
                    value={data.givenStars}
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

              <div className="comment-section-feedback">
                <div className="paragraph-comment">
                  <p rows="4" cols="50" name="comment" form="usrform">
                    {data.Feedback_Content}
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
            <button className="reply-btn" onClick={handdleToggle}>
              <i className="btn-margin bi bi-reply-fill"></i>Replay
            </button>
          </div>
        </div>
      </div>

      <div className={IsOpened ? "reply-text-area" : "replay-text-area-hide"}>
        <textarea 
          placeholder="Write a reply..."
          className=" feedback-textArea"
          rows="4"
          cols="12"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        ></textarea>
        <div className="done-btn-feedback">
          <button
            className={doneBtn ? "replay-text-area-hide" : "done-btn"}
            onClick={(e) => handleDone(e)}
          >
            <i className="btn-margin bi bi-check-circle-fill"></i>Done
          </button>

          <button
            className={editBtn ? "replay-text-area-hide" : "done-btn"}
            onClick={handdleEdit}
          >
            <i className="btn-margin bi bi-pencil-square"></i>Edit
          </button>
        </div>
      </div>
    </div>
    </ForDevice>

    <ForDevice deviceName="mobile">
    <div className="feedback-reviews">
            <div className="content-review-section">
              <div className="for-two-sections">
                <div className="left-profile-image">
                  <img className="profile-image" src={profile} alt="Avatar" />
                  <p className="text-user-name">{data.UserInformation.UserName}</p>
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
                          value={data.givenStars}
                          edit={false}
                          half={true}
                          color2={"#439548"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-section-feedback">
              <div className="paragraph-comment">
                <p rows="4" cols="50" name="comment" form="usrform">
                {data.Feedback_Content}
                </p>
              </div>
            </div>
            <div className="like-replay-btns">
              <div>
                <button className="like-btn">
                  <i className="btn-margin bi bi-heart-fill"></i>Like
                </button>
              </div>
              <div>
                <button className="reply-btn" onClick={handdleToggle}>
                  <i className="btn-margin bi bi-reply-fill"></i>Replay
                </button>
              </div>
            </div>

            <div
              className={IsOpened ? "reply-text-area" : "replay-text-area-hide"}
            >
              <textarea
                placeholder="Write a Reply!"
                className=" feedback-textArea"
                rows="4"
                cols="12"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              ></textarea>
              <div className="done-btn-feedback">
                <button
                  className={doneBtn ? "replay-text-area-hide" : "done-btn"}
                  onClick={(e) => handleDone(e)}
                >
                  <i className="btn-margin bi bi-check-circle-fill"></i>Done
                </button>

                <button
                  className={editBtn ? "replay-text-area-hide" : "done-btn"}
                  onClick={handdleEdit}
                >
                  <i className="btn-margin bi bi-pencil-square"></i>Edit
                </button>
              </div>
            </div>
          </div>
    </ForDevice>
    </div>
  );
}
