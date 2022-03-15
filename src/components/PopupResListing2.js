import { React, useState, useEffect } from "react";
import resImage from "../images/kadai_chicken.jpg";

export default function PopupResListing2(props) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
  });
  const [showEmailOTPField, setShowtEmailOTPField] = useState(false);
  const [showPhoneOTPField, setShowPhoneOTPField] = useState(false);
  // let showEmailOTPField = false;
  // let showPhoneOTPField = false;
  function showEmailOTP() {
    setShowtEmailOTPField( true);
  }
  function showPhoneOTP() {
    setShowPhoneOTPField( true);
  }
  useEffect(() => {
    props.addUser(userInfo);
  }, [userInfo]);
  useEffect(() => {
    
  });
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="res-name-image-RL">
        <img className="resImage-RL" alt="restaurant-pic" src={resImage} />
        <h6 className="res-name-listing mb-0">Goldden Duck Restaurant</h6>
      </div>

      <hr />

      <div className="pt-1 row">
        <div className="col-9 Sec-row-RL">
          <div className="label-RL text-lg-start">Email</div>
          <input
            type="email"
            placeholder="name@mail.com"
            className="input-RL"
            value={userInfo.firstNname}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="col-3">
          <a
            onClick={showEmailOTP}
            className=" btn text-light verify-btn"
            type="none"
            style={{
              background: "#439548",
              margin: "30px 0 0 0",
              width: "100%",
            }}
          >
            Verify
          </a>
        </div>
        {showEmailOTPField && 
          <div className="col-12 Sec-row-RL">
            <div className="label-RL text-lg-start">OTP</div>
            <input
              type="nu,ber"
              placeholder="Type OTP here"
              className="input-RL"
              // value={userInfo.firstNname}
              // onChange={handleChange}
              name="email"
            />
          </div>
        }
        <div className="col-9 Sec-row-RL">
          <div className="label-RL text-lg-start">Phone Number</div>
          <input
            type="text"
            placeholder="03_________"
            className="input-RL"
            value={userInfo.firstNname}
            onChange={handleChange}
            name="phone"
            // oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            // maxLength = "11"
          />
        </div>
        <div className="col-3">
          <a
            onClick={showPhoneOTP}
            className="btn text-light verify-btn"
            type="none"
            style={{
              background: "#439548",
              margin: "30px 0 0 0",
              width: "100%",
            }}
          >
            Verify
          </a>
        </div>
        {showPhoneOTPField && 
          <div className="col-12 Sec-row-RL">
            <div className="label-RL text-lg-start">OTP</div>
            <input
              type="nu,ber"
              placeholder="Type OTP here"
              className="input-RL"
              // value={userInfo.firstNname}
              // onChange={handleChange}
              name="email"
            />
          </div>
        }
      </div>
    </div>
  );
}
