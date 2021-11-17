import React from "react";
import { useState } from "react";
import "../styles/BuissnessSignUp.css";
import BusinessNavbar from "./BusinessNavbar";

function BusinessSignup() {

  const [restName, setRestName] = useState("");
    const [city, setCity] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [whatsNo, setWhatsNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function validate() {
        
      
      if (password !== confirmPassword) {
          console.log(" Password Mismatch")
          return false
      }
          return true;

  }

  function handleSignUp(e) {
    e.preventDefault();
    if(validate()) {
        console.log("validated")
        const values = {
            restName: restName,
            ownerName: ownerName,
            email: email,
            password: password,
            AccountTypeId: 2,
        }
        fetch("/User/Signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                
            },
            body:JSON.stringify(values)
         
        }).then((result)=>{
          
          return result.json()
        })
        .then((data) => {
         if (!data.ResponseMessage) {
            
         }
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
}

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
              value={restName}
              onChange={(e) => setRestName(e.target.value)}
            />
          </div>
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Enter city or town"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>

        

        

        <div className="row SecRow-BS">
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Business owner full name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="number"
              placeholder="Phone number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
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
              value={whatsNo}
              onChange={(e) => setWhatsNo(e.target.value)}
            />
          </div>
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row SecRow-BS">
          <div className="col-md-6 Sec-BS">
            <input
              className="input-BS"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-md-6 Sec-BS">
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
        <div className="Section-PS row pb-4 pt-4">
          <div className="col-md-12">
            <button className="black-btn" onClick = {(e) => handleSignUp(e)}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSignup;
