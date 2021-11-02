import React from "react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import PopupCityOutlet from "./PopupCityOutlet";

export default function FeedbackComponents() {
  //   PopupCityOutlet
  const [isCityOutletShowing, setCityOutletShowing] = useState(false);

  const handleCityOutletPop = (e) => {
    e.preventDefault();
    setCityOutletShowing(true);
  };

  const closeCityOutletPop = () => {
    setCityOutletShowing(false);
  };

  const closeIcon = <CancelSvgIcon />;
  return (
    <div className="top-tools">
      <div className="left-tools">
        <button className="dark-blue-btn">Feedback</button>
      </div>
      <div className="right-tools-catch">
        <button className="catch-btn" onClick={handleCityOutletPop}>
          <i class="bi bi-geo-alt" style={{ marginRight: "5px" }}></i>
          Catch22-...+(4 more)
        </button>
        <button className="catch-btn">10/13/21-10/13/21</button>
      </div>
      {/* PopupCityOutlet */}
      <Modal
        open={isCityOutletShowing}
        onClose={closeCityOutletPop}
        center
        closeIcon={closeIcon}
        styles={{
          modal: {
            "margin-top": "80px",
            "max-width": "955px",
            width: "100%",
            padding: "0px",
          },
        }}
      >
        <PopupCityOutlet />
      </Modal>
    </div>
  );
}
