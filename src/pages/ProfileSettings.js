import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import RestaurentDetailsPS from "../components/RestaurentDetailsPS";
import TimingsItemPS from "../components/TimingsItemPS";
import TimingsPS from "../components/TimingsPS";
import UploadSvgIcon from "../components/UploadSvgIcon";

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
