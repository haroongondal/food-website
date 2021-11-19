import React from "react";
import { useState } from "react";
import TimingsItemPS from "../components/TimingsItemPS";


export default function TimingsPS() {
  

  return (
    <div>
      {/* Restaurant Timings */}
      <div
        className="border-back-white"
        id="margin-20-TB"
        style={{ padding: "14px 0px" }}
      >
        <div className="header-PS" style={{ padding: "0px 26px" }}>
          <h6 className="title-header-PS">Restaurant Timings</h6>
          <h6 className="title-details-PS">
            Set you restaurant timings to help your customers
          </h6>
        </div>

        <hr />

        <TimingsItemPS />
        <TimingsItemPS />
        <TimingsItemPS />
        <TimingsItemPS />
        <TimingsItemPS />
        <TimingsItemPS />
        <TimingsItemPS />

        {/* Save Button */}
        <div className="Section-PS row mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S">Save</button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
