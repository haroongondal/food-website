import React from "react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import PopupCityOutlet from "./PopupCityOutlet";
import downArrow from "../images/down_arrow.svg";

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
      <div className="left-tools-catch">
        <button className="dark-blue-btn">Feedback</button>
      </div>
      <div className="right-tools-catch">
      <div className="feedback-Components-DD">
          <div class="dropdown-feedback-Components">
            <select>
              <option class="option" value="1">
                Catch 22
              </option>
              <option class="option" value="2">
              Catch 22
              </option>
              <option class="option" value="10">
              Catch 22
              </option>
            </select>
            <span class="Darrow">
              <img
                alt="down-arrow"
                src={downArrow}
              />
            </span>
          </div>
          </div>
        {/* <button className="catch-btn">10/13/21-10/13/21</button> */}
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
