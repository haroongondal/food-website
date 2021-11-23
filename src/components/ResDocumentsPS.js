import React from 'react'
import { useState } from 'react';
import UploadSvgIcon from "../components/UploadSvgIcon";

export default function ResDocumentsPS() {
    const [smes, setSmes] = useState("");
  const [license, setLicense] = useState("");
  const [gstNo, setGstNo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    {
      
      const values = {
        smes: smes,
        license: license,
        gstNo: gstNo,
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
            {/* Restaurant Documents */}
      <div className="border-back-white" id="margin-20-T" style={{ padding: "14px 0px" }}>
        <div className="header-PS" >
          <h6 className="title-header-PS">Restaurant Documents</h6>
          <h6 className="title-details-PS">
            Please provide the required documents of your restaurent
          </h6>
        </div>

        <hr />

        <div className="Section-PS row">
          {/* SMES */}
          <div className="col-md-6 ">
            <div className="d-flex justify-content-between">
              <div className="label-PS">SMES</div>
              <div className="text-imageSize-PS">Image size: 2MB</div>
            </div>
            <div className="dropdown-PS">
              <input
                type="text"
                placeholder="Upload image"
                className="input-PS"
                value={smes}
                onChange={(e) => setSmes(e.target.value)}
                required
              />
              <span className="upload-img-PS">
                <UploadSvgIcon />
              </span>
            </div>
          </div>

          {/* Restaurants License */}
          <div className="col-md-6" id="margin-top-5">
            <div className="d-flex justify-content-between">
              <div className="label-PS">Restaurants License</div>
              <div className="text-imageSize-PS">Image size: 2MB</div>
            </div>
            <div className="dropdown-PS">
              <input
                type="text"
                placeholder="Upload image"
                className="input-PS"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                required
              />
              <span className="upload-img-PS">
                <UploadSvgIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="Section-PS row">
          <div className="col-md-6">
            {/* Mobile Number */}
            <div className="label-PS">GST Number</div>
            <div className="dropdown-PS">
              <span className="CountryCode-PS">
                <h6>GST</h6>
              </span>
              <input
                type="text"
                placeholder="123456789"
                className="input-PS"
                style={{ paddingLeft: "64px" }}
                value={gstNo}
                onChange={(e) => setGstNo(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="Section-PS row mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S" onClick={(e)=> handleSubmit(e)}>Save</button>
          </div>
        </div>
      </div>
        </div>
    )
}
