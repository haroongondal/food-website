import React from "react";
import RestaurentDetailsPS from "../components/RestaurentDetailsPS";
import TimingsPS from "../components/TimingsPS";

import "../styles/ProfileSettings.css";

export default function ProfileSettings() {
  return (
    <div>
          <div className="top-tools">
            <div className="left-tools">
              <button className="dark-blue-btn">Timings</button>
            </div>
          </div>

          <div className="Content-graph-boxes">

          <RestaurentDetailsPS/>
          <TimingsPS/>          
          </div>
    </div>
  );
}
