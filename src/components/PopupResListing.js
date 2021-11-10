import React from "react";
import "../styles/PopupResListing.css";

import PopupResListing1 from "./PopupResListing1";
import PopupResListing2 from "./PopupResListing2";
import PopupResListing3 from "./PopupResListing3";

export default function PopupResListing() {
  return (
    <div>
      <div className="title-popup-listing">
        <h6>Claim Your FREE Listing</h6>
      </div>

      <div className="text-webkit-center">
        <div className="border-popup-listing">
          
          <PopupResListing3/>

          {/* Next Button */}
          <div className="Sec-row-RL mb-0 pt-4">
            <div className="col-md-12">
              <button className="black-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
