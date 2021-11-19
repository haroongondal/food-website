import React from "react";
import { useState } from "react";
import UploadSvgIcon from "../components/UploadSvgIcon";

export default function OwnerDetailsPS() {
  const [ownerFullName, setOwnerFullName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [uploadImgFront, setUploadImgFront] = useState("");
  const [uploadImgBack, setUploadImgBack] = useState("");
  const [sameAsBtn, setSameAsBtn] = useState(false);
  const [whatsAppCheckbox, setWhatsAppCheckbox] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    {
      
      const values = {
        ownerFullName: ownerFullName,
        ownerEmail: ownerEmail,
        ownerMobile: ownerMobile,
        uploadImgFront: uploadImgFront,
        uploadImgBack: uploadImgBack,
        sameAsBtn: sameAsBtn,
        whatsAppCheckbox: whatsAppCheckbox,
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
      {/* Outlet Owner Details */}
      <div className="border-back-white" style={{ padding: "14px 0px" }}>
        <div className="header-PS" style={{ padding: "0px 26px" }}>
          <h6 className="title-header-PS">Outlet Owner Details</h6>
          <h6 className="title-details-PS">
            This will be used to share revenue related communication
          </h6>
        </div>

        <hr />

        <div className="Section-PS row">
          {/* FullName */}
          <div className="col-md-6">
            <div className="label-PS">Enter Outlet Owner full name</div>
            <input
              type="text"
              placeholder="Muhammad Hashir"
              className="input-PS"
              value={ownerFullName}
              onChange={(e) => setOwnerFullName(e.target.value)}
              required
            />
          </div>

          {/* Email Address */}
          <div className="col-md-6">
            <div className="label-PS">Enter Outlet Owner email address</div>
            <input
              type="text"
              placeholder="muhammadHashir007@gmail.com"
              className="input-PS"
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="Section-PS row">
          {/* Radio Button */}
          <div className="col-md-6">
            <div className="radio-PS">
              <input type="radio" id="mobile" name="mobile" required
              onChange={(e) => setSameAsBtn(e.target.checked)}/> {" "}
              <label for="html">Same as restaurent mobile number</label>
            </div>

            {/* Mobile Number */}
            <div className="label-PS">Mobile Number of Owner</div>
            <div className="dropdown-PS">
              <span className="CountryCode-PS">
                <h6>+92</h6>
              </span>
              <input
                type="text"
                placeholder="312-34567890"
                className="input-PS"
                style={{ paddingLeft: "64px" }}
                value={ownerMobile}
                onChange={(e) => setOwnerMobile(e.target.value)}
                required
              />

              {/* Verify Button */}
              <button className="verify-btn">Verify</button>
            </div>
          </div>

          {/* Restaurant Owner ID card */}
          <div className="col-md-6 align-self-end">
            <div className="label-PS">Restaurant Owner ID card</div>
            <div className="d-flex">
              {/* (Front) */}
              <div className="col-md-6 " style={{ paddingRight: "7px" }}>
                <div className="label-PS">(Front)</div>
                <div className="dropdown-PS">
                  <input
                    type="text"
                    placeholder="Upload image"
                    className="input-PS"
                    value={uploadImgFront}
                    onChange={(e) => setUploadImgFront(e.target.value)}
                    required
                  />
                  <span className="upload-img-PS">
                    <UploadSvgIcon />
                  </span>
                </div>
              </div>

              {/* (Back) */}
              <div className="col-md-6" style={{ paddingLeft: "7px" }}>
                <div className="label-PS">(Back)</div>
                <div className="dropdown-PS">
                  <input
                    type="text"
                    placeholder="Upload image"
                    className="input-PS"
                    value={uploadImgBack}
                    onChange={(e) => setUploadImgBack(e.target.value)}
                    required
                  />
                  <span className="upload-img-PS">
                    <UploadSvgIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp checkbox */}
        <div className="Section-PS row">
          <div className="col-md-12">
            <div className=" align-checkbox-city">
              <label className="content-CB-PS" style={{ marginLeft: "0px" }}>
                <h6 className="label-CB-PS">
                  Yes, I would like to receive important updates and
                  notifications from FoodApp on my WhatsApp
                </h6>
                <input type="checkbox" onChange={(e) => setWhatsAppCheckbox(e.target.checked)} required/>
                <span className="checkbox-CB-PS"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="Section-PS row mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S" onClick={(e) => handleSubmit(e)}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
