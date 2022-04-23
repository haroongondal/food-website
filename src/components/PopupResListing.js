import {React,useState} from "react";
import "../styles/PopupResListing.css";

import PopupResListing1 from "./PopupResListing1";
import PopupResListing2 from "./PopupResListing2";
import PopupResListing3 from "./PopupResListing3";

export default function PopupResListing(props) {
  const [showNextTab,setShowNextTab] = useState(false);
  function nextTab() {
    setShowNextTab(true);
  }
  const [formData, setFormData] = useState({});
  const addUser = (userInfo) => {
    setFormData({...formData,...userInfo});
  };
  function submitForm(event) {
  event.preventDefault();
   console.log('form submitted: ',formData);
   fetch("https://api.masairapp.com/api/ClaimRestaurant/PostClaimRestaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((result) => {
          props.closeModal();
          return result.json();
        })
        .then((data) => {
          if (!data.ResponseMessage) {
          }
        })
        .catch((error) => {
          console.log(error);
        });

  }
  return (
    <div>
      <div className="title-popup-listing">
        <h6>Claim Your FREE Listing</h6>
      </div>

      <div className="text-webkit-center">
        <div className="border-popup-listing">
          <form onSubmit={submitForm}>
          {showNextTab ?  <PopupResListing2 addUser={addUser}/> : <PopupResListing1 addUser={addUser} />}
          {/* <PopupResListing1/> */}

          {/* Next Button */}
          <div className="Sec-row-RL mb-0 pt-4">
            <div className="col-md-12">
            {showNextTab ?   <button className="black-btn" type="submit">Submit</button> : <div> <button type="submit" className="d-none">Next</button>  <button type="hidden" className="black-btn" onClick={nextTab}>Next</button> </div>}
              {/* <button className="black-btn" onClick={nextTab}>Next</button> */}
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
