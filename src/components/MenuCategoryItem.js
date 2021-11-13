import React from "react";
import { useState } from "react";
import "../styles/MenuCategoryItem.css";

function MenuCategoryItem(props) {
  const [IsOpened, setOpened] = useState(false);

  const handdleToggle = () => setOpened(!IsOpened);
  return (
    <div>
      <div className={IsOpened ? "Category-item is-open" : "Category-item"} onClick={handdleToggle}>
        <div className="left-tools-category">
          <button type="submit" className="drag-btn">
            <i className="bx bx-dots-vertical-rounded"></i>
            <i className="bx bx-dots-vertical-rounded"></i>
          </button>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <h6>{props.data.Name}</h6>
        </div>

        <div className="right-tools-category">
          {/* <h6>Rs 200</h6> */}
          <button type="submit" className="options-btn">
            <i className="bx bx-dots-vertical-rounded"></i>
          </button>
        </div>
      </div>
      <hr className="line-categoryItem"/>

      
      <div
        className="hello"
        style={{ maxHeight: "-webkit-fill-available" }}
      >
        <div className={IsOpened ? "abc" : "hello-hide"}>
          <div className="align-content-categoryItem">
        
            
            hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCategoryItem;
