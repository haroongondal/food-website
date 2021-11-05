import React from 'react'
import TimingsItemPS from "../components/TimingsItemPS";
import UploadSvgIcon from "../components/UploadSvgIcon";

export default function TimingsPS() {
    return (
        <div>
            {/* Restaurant Timings */}
            <div className="border-back-white" style={{ padding: "14px 0px" }}>
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

              {/* Save Button */}
              <div className="Section-PS row mb-0 mt-5">
                <div className="col-md-12">
                  <button className="green-btn-S">Save</button>
                </div>
              </div>
            </div>

            {/* Restaurant Documents */}
            <div
              className="border-back-white"
              style={{ padding: "14px 0px" }}
              id="margin-20-T"
            >
              <div className="header-PS" style={{ padding: "0px 26px" }}>
                <h6 className="title-header-PS">Restaurant Documents</h6>
                <h6 className="title-details-PS">
                  Please provide the required documents of your restaurent
                </h6>
              </div>

              <hr />

              <div className="Section-PS row">
                
                  
                    {/* SMES */}
                    <div className="col-md-6 " >
                      <div className="d-flex justify-content-between">
                      <div className="label-PS">SMES</div>
                      <div className="text-imageSize-PS">Image size: 2MB</div>
                      </div>
                      <div className="dropdown-PS">
                        <input
                          type="text"
                          placeholder="Upload image"
                          className="input-PS"
                        />
                        <span className="upload-img-PS">
                          <UploadSvgIcon />
                        </span>
                      </div>
                    </div>

                    {/* Restaurants License */}
                    <div className="col-md-6 " >
                      <div className="d-flex justify-content-between">
                      <div className="label-PS">Restaurants License</div>
                      <div className="text-imageSize-PS">Image size: 2MB</div>
                      </div>
                      <div className="dropdown-PS">
                        <input
                          type="text"
                          placeholder="Upload image"
                          className="input-PS"
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
                    />

                    
                  </div>

                  </div>

              </div>

              {/* Save Button */}
              <div className="Section-PS row mb-0 mt-5">
                <div className="col-md-12">
                  <button className="green-btn-S">Save</button>
                </div>
              </div>
            </div>
        </div>
    )
}
