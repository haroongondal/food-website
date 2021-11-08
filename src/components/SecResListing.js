import React from "react";
import { useState } from "react";
import "../styles/SecResListing.css";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import PopupResListing from "./PopupResListing";

export default function SecResListing() {
  // Popup Close-icon
  const closeIcon = <CancelSvgIcon />;

  const [isResListingShowing, setResListingShowing] = useState(false);

  const handleResListingPop = (e) => {
    e.preventDefault();
    setResListingShowing(true);
  };

  const closeResListingPop = () => {
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
        <span className="text-claim-listing" onClick={handleResListingPop}>Claim Your Free Listing</span>
        <div className="boxes-like-restaurents"></div>
      </div>

      {/* Popup-Res-Listing */}
      <Modal
        open={isResListingShowing}
        onClose={closeResListingPop}
        center
        closeIcon={closeIcon}
        styles={{
          modal: { "margin-top": "80px","max-width": "500px", width: "100%",padding:"0px", borderRadius:"21px" },
        }}
      >
        <PopupResListing />
      </Modal>
    </div>
  );
}
