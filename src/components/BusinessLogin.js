import React from "react";
import { useState } from "react";
import { useHistory} from "react-router-dom";
import "../styles/BusinessLogin.css";
import BusinessNavbar from "./BusinessNavbar";

function BusinessLogin(props) {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `CRM-Dashboard`; 
    history.push(path);
  }


  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function Login(e) {
    e.preventDefault();

    const object = {
      grant_type: "password",
      Username: username,
      Password: password,
    };

    const formBody = Object.keys(object)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(object[key])
      )
      .join("&");

    fetch("https://api.masairapp.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          
          setError(res.error_description);
        } else {
          
          localStorage.setItem("jwt", res.access_token);
          localStorage.setItem("username", res.userName);
          localStorage.setItem("isLogedin", true);
          routeChange()
          console.log("okDone")
          // props.setLogedIn("true");
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }

  return (
    <div>
      <BusinessNavbar />

      <div className="background-BL"></div>

      <div className="Main-Sec-Login">
        <div className="heading-signup">
          <h3>Login</h3>
        </div>
        <hr />
        <div className="SecRow-BL">
          <div className="col-md-12 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Enter Email Address"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="SecRow-BL">
          <div className="col-md-12 Sec-BS">
            <input
              className="input-BS"
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {error && <h6 className="title">{error}</h6>}

        <div className="forget-pass-BL">
          <h6>Forget Password</h6>
        </div>

        {/* Save Button */}
        <div className="Section-PS pb-4" id="padding-top-40">
          <div className="col-md-12">
            <button className="black-btn" onClick={(e) => Login(e)}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessLogin;
