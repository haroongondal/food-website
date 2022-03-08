import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import PopupCityOutlet from "./PopupCityOutlet";
import downArrow from "../images/down_arrow.svg";
import useFetch from "../Utils/useFetch";
import Skeleton from "react-loading-skeleton";

export default function FeedbackComponents(props) {
  //   PopupCityOutlet
  const [isCityOutletShowing, setCityOutletShowing] = useState(false);

  const handleCityOutletPop = (e) => {
    e.preventDefault();
    setCityOutletShowing(true);
  };

  const closeCityOutletPop = () => {
    setCityOutletShowing(false);
  };

  
  const {data, isPending, error} = useFetch("https://api.masairapp.com/api/Restaurant/GetOutLetsByRestaurantId?id=1")

  useEffect(() => {
    if (!isPending) {
      if(!error) {
        if (data) {
          props.setOutLetId(data[0].Id)
        }
      }
    }
  }, [data, isPending, error, props])
  
  const closeIcon = <CancelSvgIcon />;
  return (
    <div className="top-tools">
      <div className="left-tools-catch">
        <button className="dark-blue-btn">Feedback</button>
      </div>
      <div className="right-tools-catch">
      <div className="feedback-Components-DD">
          <div class="dropdown-feedback-Components">
            <select onChange = {(e) => props.setOutLetId(e.target.value)}>
            {isPending && (
        <div>
          <Skeleton />
        </div>
      )}
      {error && <div>{error}</div>} 
      {data && data.map((dt) =>  <option class="option" value={dt.Id}>
      {
                    dt.RestaurantName +
                    " " +
                    dt.PrimaryAreaOfOutlet +
                    ", " +
                    dt.PrimaryLocation 
                   }
      </option>)}
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
