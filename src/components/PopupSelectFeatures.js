import React from "react";
import CheckBoxPS from "./CheckBoxPS";

function PopupSelectCuisine(props) {
  return (
    <div>
      <div className="title-popup">
        <h6>Select Features</h6>
      </div>
      <div className="border-popup-features pb-0">
        {/* Search-bar */}
        <form class="search-city" action="#">
          <div className="form-input-city">
            <input
              type="search"
              placeholder="Search Features"
            />
            <button type="submit" className="search-btn-city">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </form>

        {/* Features */}
        
          <div className="col-md-12">
          <div className="align-CB-PS">
              <CheckBoxPS name={"Smoking Area"} />

              <CheckBoxPS name={"Air Conditioned"} />

              <CheckBoxPS name={"DJ"} />

              <CheckBoxPS name={"Valet Avaiable"} />

              <CheckBoxPS name={"Home Delivery"} />

              <CheckBoxPS name={"Lift"} />

              <CheckBoxPS name={"Parking"} />

              <CheckBoxPS name={"Take Away"} />

              <CheckBoxPS name={"Live Performance"} />

              <CheckBoxPS name={"Cards Accepted"} />

              <CheckBoxPS name={"Dance Floor"} />

              <CheckBoxPS name={"Outdoor Seating"} />

              <CheckBoxPS name={"Full Bar Avaiable"} />

              <CheckBoxPS name={"Screening"} />

              <CheckBoxPS name={"Wallet Accepted"} />

              <CheckBoxPS name={"Wifi"} />

              <CheckBoxPS name={"Amex Accepted"} />

              <CheckBoxPS name={"Abled Friendly"} />
            </div>
          </div>

          {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-2 pr-0 justify-content-center">
          <button
            type="submit"
            className="blue-btn"
            style={{ marginRight: "20px" }}
          >
            Save
          </button>
          <button className="green-btn" onClick={(e) => props.click(e)}>Cancel</button>
        </div>
        
      </div>
        </div>
        


        
    </div>
  );
}

export default PopupSelectCuisine;
