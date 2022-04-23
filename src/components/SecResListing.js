import React from "react";
import { useState } from "react";
import "../styles/SecResListing.css";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import PopupResListing from "./PopupResListing";
import { ForDevice } from "media-query-react";

export default function SecResListing() {
  // Popup Close-icon
  const closeIcon = <CancelSvgIcon />;
  const close = false;
  const [isResListingShowing, setResListingShowing] = useState(false);


  const handleResListingPop = (e) => {
    e.preventDefault();
    setResListingShowing(true);
  };

  const closeResListingPop = () => {
    console.log('close modal called');
    setResListingShowing(false);
  };
  return (
    <div className="border-like-restaurents">
      <div className="content-like-restaurents">
        <h6>Is This Your Listing</h6>
        <h5 className="mb-1">
          Own or manage your this property? Claim your listing for free to
          respond to reviews, update your profile and much more.
        </h5>
        <span className="text-claim-listing" onClick={handleResListingPop}>
          Claim Your Free Listing
        </span>
        <div className="boxes-like-restaurents"></div>
      </div>

      {/* Popup-Res-Listing */}

      <ForDevice deviceName={["tablet", "desktop"]}>
        <Modal
          open={isResListingShowing}
          onClose={closeResListingPop}
          center
          className="colorBack"
          closeIcon={closeIcon}
          styles={{
            modal: {
              "margin-top": "80px",
              "max-width": "535px",
              width: "100%",
              padding: "0px",
              borderRadius: "21px",
            },
          }}
        >
          <PopupResListing closeModal={closeResListingPop}/>
        </Modal>
      </ForDevice>

      <ForDevice deviceName="mobile">
        <Modal
          open={isResListingShowing}
          onClose={closeResListingPop}
          center
          className="colorBack"
          closeIcon={closeIcon}
          styles={{
            modal: {
              height: "100%",
              width: "100%",
              padding: "0px",
              margin: "0px",
            },
          }}
        >
          <PopupResListing closeModal={closeResListingPop}/>
        </Modal>
      </ForDevice>
    </div>
  );
}
