import React from "react";
import "../styles/BuissnessSignUp.css";
import BusinessNavbar from "./BusinessNavbar";
import backgroundImage from '../images/business-side-background.jpg'

function BusinessSignup() {
  return <div>
      <BusinessNavbar/>
      
    <div className="Main-Sec-SignUp">
            <div className="heading-signup">
                <h3>Sign Up</h3>
            </div>
            <hr/>
            <div className="col-md-12 Sec-BS">
            <input className="input-BS" placeholder="Restaurent Name"/>
            </div>
        </div>
  </div>;
}

export default BusinessSignup;
