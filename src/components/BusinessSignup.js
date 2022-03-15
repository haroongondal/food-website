import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/BuissnessSignUp.css";
import BusinessNavbar from "./BusinessNavbar";
import betaTestImage from "../images/betaTest.png";
import Footer from "../components/Footer";

function BusinessSignup(props) {
  const [restName, setRestName] = useState("");
  const [city, setCity] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [whatsNo, setWhatsNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useEffect(function () {
  //   props.showHeader(false);
  // },[])
  useEffect(function () {
    props.showBottomNav(false);
  });
  function validate() {
    if (password !== confirmPassword) {
      console.log(" Password Mismatch");
      return false;
    }
    return true;
  }
  const [showOTPField, setShowOTPField] = useState(false);
  function veryPhoneOTP() {
    setShowOTPField(true);
  }
  function handleSignUp(e) {
    e.preventDefault();
    if (validate()) {
      console.log("validated");
      const values = {
        restName: restName,
        ownerName: ownerName,
        email: email,
        password: password,
        AccountTypeId: 2,
      };
      fetch("https://api.masairapp.com/api/User/Signup", {
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
      <BusinessNavbar />

      {/* <div className="background-BS"></div> */}
      <div className="row">
        <div className="col-md-1 col-12 d-md-block d-none"></div>
        <div className="col-md-5 col-12 d-md-block d-none">
          <div class="row align-items-center beta-section">
            <div class="col-md-4 col-12 d-md-block d-none">
              <img src={betaTestImage} alt="beta-test" class="beta-img" />
            </div>
            <div class="col-md-8 col-12">
              <div className="beta-heading">
                DeaseApp Extended <br /> <span>Beta</span><br /><span> Program</span>
              </div>
            </div>
            <div className="col-12">
              <div class="beta-text">
                DeaseApp. Beta Program We are currently in closed beta to gather
                user feedback and improve the app for everyone. You can sign up
                and be amongst the first users to experience DeaseApp. As a
                member of the DeaseApp Beta community, you will get exclusive,
                early access to test drive new features, tell us what you like,
                what you don't like and what you would want to see next. Join
                the Beta Program. We'll reach out to you as soon as it's your
                turn.
              </div>
            </div>
          </div>
          <div class="symbols-pulse active">
            <div class="pulse-1"></div>
            <div class="pulse-2"></div>
            <div class="pulse-3"></div>
            <div class="pulse-4"></div>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div className="Main-Sec-SignUp">
            <div className="heading-signup">
              <h3>Sign Up</h3>
            </div>
            <hr />
            <div className="SecRow-BS">
              <div className=" Sec-BS position-relative">
                <i className="fa fa-cutlery input-icon"></i>
                <input
                  className="input-BS"
                  type="text"
                  placeholder="Enter restaurent name"
                  value={restName}
                  onChange={(e) => setRestName(e.target.value)}
                />
              </div>
              <div className=" Sec-BS position-relative">
              <i className="fa fa-home input-icon"></i>
                <input
                  className="input-BS"
                  type="text"
                  placeholder="Enter city or town"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="SecRow-BS">
              <div className="Sec-BS position-relative">
              <i className="fa fa-user input-icon"></i>
                <input
                  className="input-BS"
                  type="text"
                  placeholder="Business owner full name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </div>
              <div className="Sec-BS position-relative">
              <i className="fa fa-phone input-icon"></i>
                <input
                  className="input-BS"
                  type="number"
                  placeholder="Phone number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
                {/* Verify Button */}
                <button
                  onClick={veryPhoneOTP}
                  className="verify-btn"
                  style={{ background: "#2d2d2d" }}
                >
                  Verify
                </button>
              </div>
            </div>

            {showOTPField ? (
              <div className="SecRow-BS">
                <div className=" Sec-BS position-relative">
                <i className="fa fa-key input-icon"></i>
                  <input
                    className="input-BS"
                    type="number"
                    placeholder="Enter OTP here"
                    // value={whatsNo}
                    // onChange={(e) => setWhatsNo(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="SecRow-BS">
              <div className=" Sec-BS position-relative">
              <i className="fa fa-whatsapp input-icon"></i>
                <input
                  className="input-BS"
                  type="number"
                  placeholder="WhatsApp number"
                  value={whatsNo}
                  onChange={(e) => setWhatsNo(e.target.value)}
                />
              </div>
              <div className="Sec-BS position-relative">
              <i className="fa fa-envelope input-icon"></i>
                <input
                  className="input-BS"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="SecRow-BS">
              <div className="Sec-BS position-relative">
              <i className="fa fa-lock input-icon"></i>
                <input
                  className="input-BS"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="Sec-BS position-relative">
              <i className="fa fa-check input-icon"></i>
                <input
                  className="input-BS"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="Section-PS pb-4 pt-4">
              <div className="col-md-12">
                <button className="black-btn" onClick={(e) => handleSignUp(e)}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-1 d-md-block d-none"></div> */}
      </div>
      <div className="d-md-block d-none">
        <Footer className="d-md-block d-none"></Footer>
      </div>
    </div>
  );
}

export default BusinessSignup;
