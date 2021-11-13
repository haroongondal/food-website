import React from 'react'
import "../styles/BusinessLogin.css";
import BusinessNavbar from "./BusinessNavbar";

function BusinessLogin() {
    return (
        <div>
            <BusinessNavbar />

<div className="background-BL"></div>

<div className="Main-Sec-Login">
  <div className="heading-signup">
    <h3>Login</h3>
  </div>
  <hr />
  <div className="row SecRow-BL">
    <div className="col-md-12 Sec-BS">
      <input
        className="input-BS"
        type="text"
        placeholder="Enter Email Address"
      />
    </div>
  </div>

  <div className="row SecRow-BL">
    <div className="col-md-12 Sec-BS">
      <input
        className="input-BS"
        type="text"
        placeholder="Enter Password"
      />
    </div>
  </div>

  <div className="forget-pass-BL">
      <h6>Forget Password</h6>
  </div>

  

  {/* Save Button */}
  <div className="Section-PS row pb-4 pt-4">
    <div className="col-md-12">
      <button className="black-btn">Log in</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default BusinessLogin
