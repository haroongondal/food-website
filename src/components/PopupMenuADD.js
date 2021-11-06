import React from "react";
import arrow from "../images/down_arrow.svg";

export default function PopupMenuADD() {
  return (
    <div>
      <div className="title-popup">
        <h6>Add Menu</h6>
      </div>

      <div style={{textAlign:"-webkit-center"}}>
      <div className="border-menu">
        <div className="col-md-12 Sec-menu mb-4">
          <div className="label-PS text-lg-start">Cuisines</div>
          <div className="dropdown-PS">
            <select>
              <option className="option">Multi-Cuisine</option>
              <option className="option">Multi-Cuisine</option>
              <option className="option">Multi-Cuisine</option>
            </select>
            <span className="Darrow">
              <img
                alt="down-arrow"
                src="/static/media/down_arrow.5b0512cf.svg"
              />
            </span>
          </div>
        </div>

        <div className="col-md-12 Sec-menu">
          
            <div className="label-PS text-lg-start">Category Name</div>
            <input type="text" placeholder="Pizza" className="input-PS" />
          </div>
        </div>
      </div>
      </div>
    
  );
}
