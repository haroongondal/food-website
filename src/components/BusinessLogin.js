import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import "../styles/BusinessLogin.css";
import useFetch from "../Utils/useFetch";
import BusinessNavbar from "./BusinessNavbar";
import "../styles/BuissnessSignUp.css";
// import BusinessNavbar from "./BusinessNavbar";
import betaTestImage from "../images/betaTest.png";
import Footer from "../components/Footer";
function BusinessLogin(props) {
  const history = useHistory();

  const routeChange = () => {
    let path = `CRM-Dashboard`;
    history.push(path);
  };

  useEffect(function () {
    props.showBottomNav(false);
  });
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
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });

    const { data, isPending, error } = useFetch(
      "https://api.masairapp.comapi/User/UserInformation?username=" + username
    );

    if (!isPending) {
      if (!error) {
        if (data) {
          localStorage.setItem("userObj", data);
          localStorage.setItem("isLogedin", true);
          routeChange();
        }
      }
    }
  }

  return (
    // <div>
    //   <BusinessNavbar />

    //   <div className="background-BL"></div>

    //   <div className="Main-Sec-Login">
    //     <div className="heading-signup">
    //       <h3>Login</h3>
    //     </div>
    //     <hr />
    //     <div className="SecRow-BL">
    //       <div className="col-md-12 Sec-BS">
    //         <input
    //           className="input-BS"
    //           type="text"
    //           placeholder="Enter Email Address"
    //           value={username}
    //           onChange={(e) => setUserName(e.target.value)}
    //           required
    //         />
    //       </div>
    //     </div>

    //     <div className="SecRow-BL">
    //       <div className="col-md-12 Sec-BS">
    //         <input
    //           className="input-BS"
    //           type="text"
    //           placeholder="Enter Password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //       </div>
    //     </div>

    //     {error && <h6 className="title">{error}</h6>}

    //     <div className="forget-pass-BL">
    //       <h6>Forget Password</h6>
    //     </div>

    //     {/* Save Button */}
    //     <div className="Section-PS pb-4" id="padding-top-40">
    //       <div className="col-md-12">
    //         <button className="black-btn" onClick={(e) => Login(e)}>
    //           Log in
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
              <h3>Log In</h3>
            </div>
            <hr />
            <div className="SecRow-BL">
              <div className="col-md-12 Sec-BS position-relative">
              <i className="fa fa-envelope input-icon"></i>
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
            </div>

            {/* Save Button */}
            <div className="Section-PS pb-4 pt-4">
              <div className="col-md-12">
                <button className="black-btn" onClick={(e) => Login(e)}>
                  Log In
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

export default BusinessLogin;
