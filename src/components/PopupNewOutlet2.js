import React from "react";
import { useState } from "react";
import arrow from "../images/down_arrow.svg";
import "../styles/PopupNewOutlet.css";
import TimingsItemPS from "./TimingsItemPS";
import TimingsPS from "./TimingsPS";
import { ForDevice } from "media-query-react";

function PopupNewOutlet2(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [gstn, setGstn] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");

  const [mondayST, setMondayST] = useState("");
  const [mondayET, setMondayET] = useState("");

  const [tuesdayST, setTuesdayST] = useState("");
  const [tuesdayET, setTuesdayET] = useState("");

  const [wednesdayST, setWednesdayST] = useState("");
  const [wednesdayET, setWednesdayET] = useState("");

  const [thursdayST, setThursdayST] = useState("");
  const [thursdayET, setThursdayET] = useState("");

  const [fridayST, setFridayST] = useState("");
  const [fridayET, setFridayET] = useState("");

  const [saturdayST, setSaturdayST] = useState("");
  const [saturdayET, setSaturdayET] = useState("");

  const [sundayST, setSundayST] = useState("");
  const [sundayET, setSundayET] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      const values = {
        email: email,
        password: password,
        pin: pin,
        gstn: gstn,
        address: address,
        area: area,
        city: city,
        pincode: pincode,
        country: country,
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
      <div className="title-popup">
        <h6>Add New Outlet</h6>
      </div>
      <div className="align-Popup">
        <div
          className="border-popup-city"
          style={{ borderBottom: "1px solid #00000026" }}
        >
          {/* Outlet-Name */}
          {/* <div className="dropDown-block">
            <span className="label-dropDown-block">Outlet Name</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter Company Group" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}

          {/* Company */}
          {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Company</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Company</option>
                    <option className="option">Company</option>
                    <option className="option">Company</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Brand */}
          {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Brand</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Brand</option>
                    <option className="option">Brand</option>
                    <option className="option">Brand</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Email */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Email</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Password</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-popup-city"
          style={{ borderBottom: "1px solid #00000026" }}
        >
          {/* Logo */}
          {/* <div className="dropDown-block">
            <span className="label-dropDown-block">Add Logo</span>
            <div className="border-dropDown-block" id="margin-10-T">
              <div className="content-dropDown">
                <div className="block-border">
                  <h6>Upload logo</h6>
                </div>
                <span className="border-upload-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                    className="svg-upload"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#ffffff">
                        <path d="M85.92302,21.5c-1.39872,0.02045 -2.73437,0.58534 -3.72331,1.57471l-21.5,21.5c-1.40412,1.34815 -1.96971,3.35005 -1.47866,5.23364c0.49105,1.88359 1.96202,3.35456 3.84561,3.84561c1.88359,0.49105 3.88549,-0.07455 5.23364,-1.47866l12.32471,-12.32471v76.60775c-0.02741,1.93842 0.99102,3.74144 2.66532,4.71865c1.6743,0.97721 3.74507,0.97721 5.41937,0c1.6743,-0.97721 2.69273,-2.78023 2.66532,-4.71865v-76.60775l12.32471,12.32471c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-21.5,-21.5c-1.02666,-1.02708 -2.4252,-1.59508 -3.87728,-1.57471zM41.20833,60.91667c-10.82086,0 -19.70833,8.88748 -19.70833,19.70833v50.16667c0,10.82086 8.88748,19.70833 19.70833,19.70833h89.58333c10.82086,0 19.70833,-8.88748 19.70833,-19.70833v-50.16667c0,-10.82086 -8.88748,-19.70833 -19.70833,-19.70833h-7.16667c-1.93842,-0.02741 -3.74144,0.99102 -4.71865,2.66532c-0.97721,1.6743 -0.97721,3.74507 0,5.41937c0.97721,1.6743 2.78023,2.69273 4.71865,2.66532h7.16667c5.01031,0 8.95833,3.94802 8.95833,8.95833v50.16667c0,5.01031 -3.94802,8.95833 -8.95833,8.95833h-89.58333c-5.01031,0 -8.95833,-3.94802 -8.95833,-8.95833v-50.16667c0,-5.01031 3.94802,-8.95833 8.95833,-8.95833h7.16667c1.93842,0.02741 3.74144,-0.99102 4.71865,-2.66532c0.97721,-1.6743 0.97721,-3.74507 0,-5.41937c-0.97721,-1.6743 -2.78023,-2.69273 -4.71865,-2.66532z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div> */}

          {/* Image */}
          {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Or</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter image url" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}

          {/* PIN */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">PIN</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input
                        type="number"
                        placeholder="Enter PIN"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* GSTN */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">GSTN</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input
                        type="number"
                        placeholder="Enter GSTN"
                        value={gstn}
                        onChange={(e) => setGstn(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-popup-city">
          {/* Address */}
          <div className="dropDown-block">
            <span className="label-dropDown-block">Address</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input
                        type="text"
                        placeholder="Enter Street Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Area */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Area</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input
                        type="text"
                        placeholder="Enter Area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Zone */}
          {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Zone</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter Zone" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}

          {/* City */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">City</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <select onChange={(e) => setCity(e.target.value)}>
                    <option className="option">City</option>
                    <option className="option">City</option>
                    <option className="option">City</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Zip/Pincode */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Zip/Pincode</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input
                        type="number"
                        placeholder="Enter Zip/Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Country</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <select onChange={(e) => setCountry(e.target.value)}>
                    <option className="option">Country</option>
                    <option className="option">Country</option>
                    <option className="option">Country</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* --------DESKTOP TIMIMGS------- */}
        <ForDevice deviceName={["tablet", "desktop"]}>
          <div className="title-popup">
            <h6>Outlet Timings</h6>
          </div>
          <div className="border-popup-city">
            {/* --------Monday------- */}
            <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Monday</span>
                </div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={mondayST}
                  onChange={(e) => setMondayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={mondayET}
                  onChange={(e) => setMondayET(e.target.value)}
                />
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            {/* --------Tuesday------- */}
            <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Tuesday</span>
                </div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={tuesdayST}
                  onChange={(e) => setTuesdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={tuesdayET}
                  onChange={(e) => setTuesdayET(e.target.value)}
                />
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            {/* --------Wednesday------- */}
            <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Wednesday</span>
                </div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={wednesdayST}
                  onChange={(e) => setWednesdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={wednesdayET}
                  onChange={(e) => setWednesdayET(e.target.value)}
                />
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            {/* --------Thursday------- */}
            <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Thursday</span>
                </div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={thursdayST}
                  onChange={(e) => setThursdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={thursdayET}
                  onChange={(e) => setThursdayET(e.target.value)}
                />
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>
            
            {/* --------Friday------- */}
            <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Friday</span>
                </div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={fridayST}
                  onChange={(e) => setFridayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={fridayET}
                  onChange={(e) => setFridayET(e.target.value)}
                />
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            {/* --------Saturday------- */}
            <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Saturday</span>
                </div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={saturdayST}
                  onChange={(e) => setSaturdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={saturdayET}
                  onChange={(e) => setSaturdayET(e.target.value)}
                />
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            {/* --------Sunday------- */}
            <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Sunday</span>
                </div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={sundayST}
                  onChange={(e) => setSundayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={sundayET}
                  onChange={(e) => setSundayET(e.target.value)}
                />
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>
          </div>
        </ForDevice>

        {/* --------MOBILE TIMIMGS------- */}
        <ForDevice deviceName="mobile">
          <div className="title-popup">
            <h6>Outlet Timings</h6>
          </div>
          <div className="border-timings-M">

          {/* --------Monday------- */}
            <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
              <div className="align-days-act-inact">
                {/* Days */}
                <div className="width-24">
                  <div class="border-days">
                    <span>Monday</span>
                  </div>
                </div>

                {/* Active / Inactive */}
                <div className="">
                  <label className="switch-S">
                    <input type="checkbox" />
                    <span className="slider-S round-S"></span>
                  </label>
                </div>
              </div>

              <div className="align-timings">
                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={mondayST}
                    onChange={(e) => setMondayST(e.target.value)}
                  />
                </div>

                {/* Text "to" */}
                <div className="text-center align-self-center m-0">
                  <div className="label-PS  m-0">to</div>
                </div>

                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={mondayET}
                    onChange={(e) => setMondayET(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* --------Tuesday------- */}
            <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
              <div className="align-days-act-inact">
                {/* Days */}
                <div className="width-24">
                  <div class="border-days">
                    <span>Tuesday</span>
                  </div>
                </div>

                {/* Active / Inactive */}
                <div className="">
                  <label className="switch-S">
                    <input type="checkbox" />
                    <span className="slider-S round-S"></span>
                  </label>
                </div>
              </div>

              <div className="align-timings">
                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={tuesdayST}
                    onChange={(e) => setTuesdayST(e.target.value)}
                  />
                </div>

                {/* Text "to" */}
                <div className="text-center align-self-center m-0">
                  <div className="label-PS  m-0">to</div>
                </div>

                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={tuesdayET}
                    onChange={(e) => setTuesdayET(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* --------Wednesday------- */}
            <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
              <div className="align-days-act-inact">
                {/* Days */}
                <div className="width-24">
                  <div class="border-days">
                    <span>Wednesday</span>
                  </div>
                </div>

                {/* Active / Inactive */}
                <div className="">
                  <label className="switch-S">
                    <input type="checkbox" />
                    <span className="slider-S round-S"></span>
                  </label>
                </div>
              </div>

              <div className="align-timings">
                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={wednesdayST}
                    onChange={(e) => setWednesdayST(e.target.value)}
                  />
                </div>

                {/* Text "to" */}
                <div className="text-center align-self-center m-0">
                  <div className="label-PS  m-0">to</div>
                </div>

                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={wednesdayET}
                    onChange={(e) => setWednesdayET(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* --------Thursday------- */}
            <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
              <div className="align-days-act-inact">
                {/* Days */}
                <div className="width-24">
                  <div class="border-days">
                    <span>Thursday</span>
                  </div>
                </div>

                {/* Active / Inactive */}
                <div className="">
                  <label className="switch-S">
                    <input type="checkbox" />
                    <span className="slider-S round-S"></span>
                  </label>
                </div>
              </div>

              <div className="align-timings">
                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={thursdayST}
                    onChange={(e) => setThursdayST(e.target.value)}
                  />
                </div>

                {/* Text "to" */}
                <div className="text-center align-self-center m-0">
                  <div className="label-PS  m-0">to</div>
                </div>

                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={thursdayET}
                    onChange={(e) => setThursdayET(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* --------Friday------- */}
            <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
              <div className="align-days-act-inact">
                {/* Days */}
                <div className="width-24">
                  <div class="border-days">
                    <span>Friday</span>
                  </div>
                </div>

                {/* Active / Inactive */}
                <div className="">
                  <label className="switch-S">
                    <input type="checkbox" />
                    <span className="slider-S round-S"></span>
                  </label>
                </div>
              </div>

              <div className="align-timings">
                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={fridayST}
                    onChange={(e) => setFridayST(e.target.value)}
                  />
                </div>

                {/* Text "to" */}
                <div className="text-center align-self-center m-0">
                  <div className="label-PS  m-0">to</div>
                </div>

                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={fridayET}
                    onChange={(e) => setFridayET(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* --------Saturday------- */}
            <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
              <div className="align-days-act-inact">
                {/* Days */}
                <div className="width-24">
                  <div class="border-days">
                    <span>Saturday</span>
                  </div>
                </div>

                {/* Active / Inactive */}
                <div className="">
                  <label className="switch-S">
                    <input type="checkbox" />
                    <span className="slider-S round-S"></span>
                  </label>
                </div>
              </div>

              <div className="align-timings">
                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={saturdayST}
                    onChange={(e) => setSaturdayST(e.target.value)}
                  />
                </div>

                {/* Text "to" */}
                <div className="text-center align-self-center m-0">
                  <div className="label-PS  m-0">to</div>
                </div>

                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={saturdayET}
                    onChange={(e) => setSaturdayET(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* --------Sunday------- */}
            <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
              <div className="align-days-act-inact">
                {/* Days */}
                <div className="width-24">
                  <div class="border-days">
                    <span>Sunday</span>
                  </div>
                </div>

                {/* Active / Inactive */}
                <div className="">
                  <label className="switch-S">
                    <input type="checkbox" />
                    <span className="slider-S round-S"></span>
                  </label>
                </div>
              </div>

              <div className="align-timings">
                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={sundayST}
                    onChange={(e) => setSundayST(e.target.value)}
                  />
                </div>

                {/* Text "to" */}
                <div className="text-center align-self-center m-0">
                  <div className="label-PS  m-0">to</div>
                </div>

                {/* Time */}
                <div className="width-24">
                  <input
                    className="time-input"
                    type="time"
                    id="appt"
                    name="appt"
                    placeholder="12:00AM"
                    value={sundayET}
                    onChange={(e) => setSundayET(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </ForDevice>
      </div>

      {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-2 pr-0 justify-content-center">
          <button
            type="submit"
            className="blue-btn"
            onClick={(e) => handleSubmit(e)}
            style={{ marginRight: "20px" }}
          >
            Save
          </button>
          <button className="green-btn" onClick={(e) => props.click(e)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupNewOutlet2;
