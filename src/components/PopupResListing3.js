import React from "react";
import arrow from "../images/down_arrow.svg";
import resImage from "../images/kadai_chicken.jpg";

export default function PopupResListing3() {
  return (
    <div>
      <div className="res-name-image-RL">
        <img className="resImage-RL" alt="restaurant-pic" src={resImage} />
        <h6 className="res-name-listing mb-0">Goldden Duck Restaurant</h6>
      </div>

      <hr />

      <div className="pt-2">
        <div className="col-md-12 mb-5">
          <h6 className="text-confirm-Phone-no">Confirm Phone Number</h6>
        </div>
        <div className="col-md-12 Sec-row-RL">
          <div className="label-RL text-lg-start">
            We will call or text this phone number
          </div>
          <input type="text" placeholder="+923234567890" className="input-RL" />
        </div>
        <div className="col-md-12 Sec-row-RL mb-3">
          <div className="label-RL text-lg-start">
            How do you want to receive the code?
          </div>
          <div className="dropdown-RL">
            <select>
              <option className="option">Phone</option>
              <option className="option">SMS</option>
            </select>
            <span className="Darrow">
              <img alt="down-arrow" src={arrow} />
            </span>
          </div>
        </div>
        <div className="col-md-12 Sec-row-RL mt-0">
          <input
            type="text"
            placeholder="Extension (optional)"
            className="input-RL"
          />
        </div>
      </div>
    </div>
  );
}
