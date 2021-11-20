import React from "react";
import { useState } from "react";

export default function ContactNoResPS() {
  const [restMobile, setRestMobile] = useState("");
  const [restLandline, setRestLandline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    {
      
      const values = {
        restMobile: restMobile,
        restLandline: restLandline,
      };
      console.log(values);

      // Please Add Link of API

      fetch("/User/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((result) => {
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
  }
  return (
    <div>
      {/* Contact number at restaurent */}
      <div className="border-back-white" style={{ padding: "14px 0px" }}>
        <div className="header-PS" style={{ padding: "0px 26px" }}>
          <h6 className="title-header-PS">Contact number at restaurent</h6>
          <h6 className="title-details-PS">
            Your customer will call on this for general enquiries
          </h6>
        </div>

        <hr />

        <div className="Section-PS row">
          {/* Mobile Number at Restaurent */}
          <div className="col-md-6">
            <div className="label-PS">Mobile Number at Restaurent</div>
            <div className="dropdown-PS">
              <span className="CountryCode-PS">
                <h6>+92</h6>
              </span>
              <input
                type="text"
                placeholder="312-34567890"
                className="input-PS"
                style={{ paddingLeft: "64px" }}
                value={restMobile}
                onChange={(e) => setRestMobile(e.target.value)}
                required
              />

              {/* Verify Button */}
              <button className="verify-btn">Verify</button>
            </div>
          </div>

          {/* Landline Number at Restaurent */}
          <div className="col-md-6">
            <div className="label-PS">Landline Number at Restaurent</div>
            <div className="dropdown-PS">
              <span className="CountryCode-PS">
                <h6>+92</h6>
              </span>
              <input
                type="text"
                placeholder="312-34567890"
                className="input-PS"
                style={{ paddingLeft: "64px" }}
                value={restLandline}
                onChange={(e) => setRestLandline(e.target.value)}
                required
              />

              {/* Verify Button */}
              <button className="verify-btn">Verify</button>
            </div>
          </div>
        </div>

        {/* Save Button*/}
        <div className="Section-PS row mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S" onClick={(e) => handleSubmit(e)}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
