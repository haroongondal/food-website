import React from "react";
import ContactNoResPS from "../components/ContactNoResPS";
import OwnerDetailsPS from "../components/OwnerDetailsPS";
import ResDocumentsPS from "../components/ResDocumentsPS";
import RestaurentDetailsPS from "../components/RestaurentDetailsPS";
import TimingsPS from "../components/TimingsPS";

import "../styles/ProfileSettings.css";

export default function ProfileSettings() {
  return (
    <div>
          <div className="top-tools">
            <div className="left-tools">
              <button className="dark-blue-btn">Profile Settings</button>
            </div>
          </div>

          <div className="Content-graph-boxes">

          <OwnerDetailsPS/>
          <RestaurentDetailsPS/>
          <ContactNoResPS/>
          <TimingsPS/> 
          <ResDocumentsPS/>         
          </div>
    </div>
  );
}
