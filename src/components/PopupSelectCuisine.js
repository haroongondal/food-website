import React from "react";
import CheckBoxPS from "../components/CheckBoxPS";

function PopupSelectCuisine(props) {
  return (
    <div>
      <div className="title-popup">
        <h6>Select Cuisines</h6>
      </div>
      <div className="border-popup-city pb-0">
        {/* Search-bar */}
        <form class="search-city" action="#">
          <div className="form-input-city">
            <input
              type="search"
              placeholder="Search Cuisines"
            />
            <button type="submit" className="search-btn-city">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </form>

        {/* Category */}
        
          <div className="col-md-12">
            <div className="align-CB-PS">
              <CheckBoxPS name={"Afghanian"} />

              <CheckBoxPS name={"Iranian"} />

              <CheckBoxPS name={"BBQ"} />

              <CheckBoxPS name={"Burgers"} />

              <CheckBoxPS name={"Pizza"} />

              <CheckBoxPS name={"Chinese"} />

              <CheckBoxPS name={"Chicken"} />

              <CheckBoxPS name={"Biryani"} />

              <CheckBoxPS name={"Afghanian"} />

              <CheckBoxPS name={"Iranian"} />

              <CheckBoxPS name={"BBQ"} />

              <CheckBoxPS name={"Burgers"} />

              <CheckBoxPS name={"Pizza"} />

              <CheckBoxPS name={"Chinese"} />

              <CheckBoxPS name={"Chicken"} />

              <CheckBoxPS name={"Biryani"} />
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
