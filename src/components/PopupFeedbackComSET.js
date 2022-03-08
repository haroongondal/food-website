import React from "react";
import "../styles/PopupFeedbackComSET.css";
import arrow from "../images/down_arrow.svg";

export default function PopupFeedbackComSET() {
  return (
    <div>
      <div className="title-popup">
        <h6>Select Your Outlet</h6>
      </div>
      <div className="align-popup">
        <div className="col-md-12 m_t_20 d-flex ET-Flex align-center">
          <label className="col-md-3 label-ET-Flex">Select Outlet</label>
          <div className="border-DD-Flex">
            <div className="content-dropDown">
              <select>
                <option className="option">Catch22-Dubai</option>
                <option className="option">Catch22-Dubai</option>
                <option className="option">Catch22-Dubai</option>
              </select>
              <span>
                <img alt="down-arrow" src={arrow} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="title-popup">
        <h6>Feedback Messages</h6>
      </div>
      <div className="align-popup">
        <div className="Messages-sec">
          <div className="Switch-TextArea">
            <div className="msg-Text-Switch">
              <h6>Thank You Message Content</h6>
              <label className="switch-M">
                <input type="checkbox" />
                <span className="slider-M round-M"></span>
              </label>
            </div>
            <div className="Messages-text-area">
              <textarea
                placeholder="Dear [NAME], We are extremely pleased to have you dined with us. Your feedback matters a lot and we thank you for sharing your experience with us. Regards, [OUTLET] - Inresto"
                className="messages-textArea"
                rows="7"
                cols="44"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="row m-auto">
              <div className="col-md-12 d-flex pr-0">
                <button
                  type="submit"
                  className="green-btn"
                  style={{ marginRight: "20px", padding: "14px 30px" }}
                >
                  Test Sms
                </button>
                <button className="blue-btn">Reset</button>
              </div>
            </div>
            <div className="dontReceiveMsg">
                <span>Didn't receive test message?</span>
            </div>
          </div>
          <div className="col-md-7 m_t_20 d-flex ET-Flex align-right mb-auto mt-0">
            <label className="col-md-3 label-ET-Flex">Select Template</label>
            <div className="border-DD-Flex">
              <div className="content-dropDown">
                <select>
                  <option className="option">Thank you message</option>
                  <option className="option">Sorry message content</option>
                  <option className="option">
                    Negative rating alert message
                  </option>
                </select>
                <span>
                  <img alt="down-arrow" src={arrow} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "0px" }} />
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-4 mt-2 pr-0 justify-content-center">
          <button
            type="submit"
            className="green-btn"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
