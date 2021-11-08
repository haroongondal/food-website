import React from "react";
import resImage from "../images/kadai_chicken.jpg";

export default function PopupResListing2() {
  return (
    <div>
      <div className="res-name-image-RL">
        <img className="resImage-RL" alt="restaurant-pic" src={resImage} />
        <h6 className="res-name-listing mb-0">Goldden Duck Restaurant</h6>
      </div>

      <hr />

      <div className="pt-1">
        <h6 className="text-confirm-No">
          To confirm your identity, the phone number listed for this business
          will receive a with a verification code.
        </h6>

        <div className="col-md-12 mt-4">
          <div className="phone-btn-RL">
            <i className="bx bx-phone phone-icon"></i>
            <h6 className="text-phone-RL">Phone</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
