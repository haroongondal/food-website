import React from 'react'
import CheckBoxPS from "../components/CheckBoxPS";
import UploadSvgIcon from "../components/UploadSvgIcon";

export default function RestaurentDetailsPS() {
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
                  />
                </div>

                {/* Email Address */}
                <div className="col-md-6">
                  <div className="label-PS">
                    Enter Outlet Owner email address
                  </div>
                  <input
                    type="text"
                    placeholder="muhammadHashir007@gmail.com"
                    className="input-PS"
                  />
                </div>
              </div>

              <div className="Section-PS row">

                {/* Radio Button */}
                <div className="col-md-6">
                  <div className="radio-PS">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
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
                    <label
                      className="content-CB-PS"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">
                        Yes, I would like to receive important updates and
                        notifications from FoodApp on my WhatsApp
                      </h6>
                      <input type="checkbox" />
                      <span className="checkbox-CB-PS"></span>
                    </label>
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

            {/* Restaurant Details */}
            <div
              className="border-back-white"
              id="margin-20-TB"
              style={{ padding: "14px 0px" }}
            >
              <div className="header-PS" style={{ padding: "0px 26px" }}>
                <h6 className="title-header-PS">Restaurant Details</h6>
                <h6 className="title-details-PS">Name, address, location</h6>
              </div>

              <hr />

              {/* Restaurent Name */}
              <div className="Section-PS row">
                <div className="col-md-6">
                  <div className="label-PS">Enter Restaurent Name</div>
                  <input
                    type="text"
                    placeholder="Restaurent Name"
                    className="input-PS"
                  />
                </div>

                {/* Restaurent complete address */}
                <div className="col-md-6">
                  <div className="label-PS">
                    Enter Restaurent complete address
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Restaurent complete address"
                    className="input-PS"
                  />
                </div>
              </div>

              {/* Average Price */}
              <div className="Section-PS row">
                <div className="col-md-6">
                  <div className="label-PS">Average Price For 2 persons</div>
                  <input type="text" placeholder="2500" className="input-PS" />
                </div>

                {/* Number of Outlets */}
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="col-md-6 " style={{ paddingRight: "7px" }}>
                      <div className="label-PS">Number of Outlets</div>
                      <input type="text" placeholder="3" className="input-PS" />
                    </div>

                    {/* Type of cuisines */}
                    <div className="col-md-6" style={{ paddingLeft: "7px" }}>
                      <div className="label-PS">Type of cuisines</div>
                      <div class="dropdown-PS">
                        <select>
                          <option class="option">Multi-Cuisine</option>
                          <option class="option">Multi-Cuisine</option>
                          <option class="option">Multi-Cuisine</option>
                        </select>
                        <span className="Darrow">
                          <img
                            alt="down-arrow"
                            src="/static/media/down_arrow.5b0512cf.svg"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Type */}
              <div className="Section-PS row">
                <div className="col-md-6">
                  <div className="label-PS">Delivery Type</div>
                  <div className="align-CB-PS">
                    <label
                      className="col-md-4 content-CB-PS"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Take Away</h6>
                      <input type="checkbox" />
                      <span className="checkbox-CB-PS"></span>
                    </label>

                    <label
                      className="col-md-4 content-CB-PS mx-1"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Home Delivery</h6>
                      <input type="checkbox" />
                      <span className="checkbox-CB-PS"></span>
                    </label>
                  </div>
                </div>

                {/* Establishment type */}
                <div className="col-md-6">
                  <div className="label-PS">Establishment type</div>
                  <div className="align-CB-PS">
                    <label
                      className="col-md-4 content-CB-PS"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Cafe</h6>
                      <input type="checkbox" />
                      <span className="checkbox-CB-PS"></span>
                    </label>

                    <label
                      className="col-md-4 content-CB-PS mx-1"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Restaurant</h6>
                      <input type="checkbox" />
                      <span className="checkbox-CB-PS"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="Section-PS row">
                <div className="col-md-12">
                  <div className="label-PS">Category</div>
                  <div className="align-CB-PS">
                    <CheckBoxPS name={"Afghanian"} />

                    <CheckBoxPS name={"Iranian"} />

                    <CheckBoxPS name={"BBQ"} />

                    <CheckBoxPS name={"Burgers"} />

                    <CheckBoxPS name={"Pizza"} />

                    <CheckBoxPS name={"Chinese"} />

                    <CheckBoxPS name={"Chicken"} />

                    <CheckBoxPS name={"Biryani"} />

                    <CheckBoxPS name={"Afghanian"} />

                    <CheckBoxPS name={"Iranian"} />

                    <CheckBoxPS name={"BBQ"} />

                    <CheckBoxPS name={"Burgers"} />

                    <CheckBoxPS name={"Pizza"} />

                    <CheckBoxPS name={"Chinese"} />

                    <CheckBoxPS name={"Chicken"} />

                    <CheckBoxPS name={"Biryani"} />
                  </div>
                </div>
              </div>

              {/* Restaurant Features */}
              <div className="Section-PS row">
                <div className="col-md-12">
                  <div className="label-PS">Restaurant Features</div>
                  <div className="align-CB-PS">
                    <CheckBoxPS name={"Smoking Area"} />

                    <CheckBoxPS name={"Air Conditioned"} />

                    <CheckBoxPS name={"DJ"} />

                    <CheckBoxPS name={"Valet Avaiable"} />

                    <CheckBoxPS name={"Home Delivery"} />

                    <CheckBoxPS name={"Lift"} />

                    <CheckBoxPS name={"Parking"} />

                    <CheckBoxPS name={"Take Away"} />

                    <CheckBoxPS name={"Live Performance"} />

                    <CheckBoxPS name={"Cards Accepted"} />

                    <CheckBoxPS name={"Dance Floor"} />

                    <CheckBoxPS name={"Outdoor Seating"} />

                    <CheckBoxPS name={"Full Bar Avaiable"} />

                    <CheckBoxPS name={"Screening"} />

                    <CheckBoxPS name={"Wallet Accepted"} />

                    <CheckBoxPS name={"Wifi"} />

                    <CheckBoxPS name={"Amex Accepted"} />

                    <CheckBoxPS name={"Abled Friendly"} />
                  </div>
                </div>
              </div>

              {/* Restaurant Description */}
              <div className="Section-PS row">
                <div className="col-md-12">
                  <div className="label-PS">Restaurant Description</div>
                  <textarea
                    placeholder="Remember, be nice!"
                    className="PS-textArea"
                    rows="5"
                    cols="95"
                  ></textarea>
                </div>
              </div>

              {/* Location */}
              <div className="Section-PS row">
                <div className="col-md-12">
                  <div className="label-PS">
                    Please place the pin accurately at your outlet’s location on
                    the map
                  </div>
                  <div className="dropdown-PS">
                    <input
                      type="text"
                      placeholder="Enter your restaurant's locality, eg. Sector 43, Gulburg"
                      className="input-PS"
                    />
                    <span className="detect-btn">
                      <h6>Detect</h6>
                    </span>
                  </div>
                  <iframe
                    style={{ marginTop: "20px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </div>
              </div>

              {/* Co-ordinates */}
              <div className="Section-PS row text-center mb-2">
                <div className="col-md-12">
                  <div className="label-PS">Or directly enter the co-ordinates</div>
                </div>
              </div>

              {/* Latitude */}
              <div className="Section-PS row">
                <div className="col-md-6">
                  <div className="label-PS">Latitude</div>
                  <input
                    type="text"
                    placeholder="Latitude"
                    className="input-PS"
                  />
                </div>

                {/* Logitude */}
                <div className="col-md-6">
                  <div className="label-PS">
                  Logitude
                  </div>
                  <input
                    type="text"
                    placeholder="Logitude"
                    className="input-PS"
                  />
                </div>
              </div>

              {/* Save Button*/}
              <div className="Section-PS row mb-0 mt-5">
                <div className="col-md-12">
                  <button className="green-btn-S">Save</button>
                </div>
              </div>
            </div>

            {/* Contact number at restaurent */}
            <div className="border-back-white" style={{ padding: "14px 0px" }}>
              <div className="header-PS" style={{ padding: "0px 26px" }}>
                <h6 className="title-header-PS">Contact number at restaurent</h6>
                <h6 className="title-details-PS">
                Your customer will  call  on this for general enquiries
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
                    />
                    
                    {/* Verify Button */}
                    <button className="verify-btn">Verify</button>
                  </div>
                </div>
              </div>

              {/* Save Button*/}
              <div className="Section-PS row mb-0 mt-5">
                <div className="col-md-12">
                  <button className="green-btn-S">Save</button>
                </div>
              </div>
            </div>
        </div>
    )
}
