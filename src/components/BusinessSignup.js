import React from "react";
import "../styles/BuissnessSignUp.css";
import BusinessNavbar from "./BusinessNavbar";

function BusinessSignup() {
  return (
    <div>
      <BusinessNavbar />

      <div className="background-BS"></div>

      <div className="Main-Sec-SignUp">
        <div className="heading-signup">
          <h3>Sign Up</h3>
        </div>
        <hr />
        <div className="row SecRow-BS">
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Enter restaurent name"
            />
          </div>
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Enter city or town"
            />
          </div>
        </div>

        <div className="row SecRow-BS">
          <div className="col-md-12 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Please place the pin accurately at your location on the map"
            />
            <span className="text-detect-BS">
              <h6>Detect</h6>
            </span>
          </div>
        </div>

        <div className="row SecRow-BS">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="100%"
            height="200"
            frameborder="0"
            aria-hidden="false"
            tabindex="0"
            style={{ marginBottom: "10px" }}
            title="Google Map"
          ></iframe>
        </div>

        <div className="row SecRow-BS">
          <h6>Or directly enter the co-ordinates</h6>
        </div>

        <div className="row SecRow-BS">
          <div className="col-md-6 Sec-BS">
            <input className="input-BS" type="number" placeholder="Latitude" />
          </div>
          <div className="col-md-6 Sec-BS">
            <input className="input-BS" type="number" placeholder="Logitude" />
          </div>
        </div>

        <div className="row SecRow-BS">
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Business owner full name"
            />
          </div>
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="number"
              placeholder="Phone number"
            />
            {/* Verify Button */}
            <button className="verify-btn" style={{ background: "#2d2d2d" }}>
              Verify
            </button>
          </div>
        </div>

        <div className="row SecRow-BS">
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="number"
              placeholder="WhatsApp number"
            />
          </div>
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="email"
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="row SecRow-BS">
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="password"
              placeholder="Confirm password"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="Section-PS row pb-4 pt-4">
          <div className="col-md-12">
            <button className="black-btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSignup;
