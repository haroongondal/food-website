import { React, useState, useEffect } from "react";
import "../styles/PopupResListing.css";
import arrow from "../images/down_arrow.svg";

export default function PopupResListing1(props) {
  const [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Role: "",
    NotifiedByEmail: false,
    CertifyIAuthorized: true,
    ReadTermsCondition: true,
  });
  useEffect(() => {
    props.addUser(userInfo);
  }, [userInfo]);
  const handleChange = (event) => {
    setUserInfo(
      { ...userInfo, [event.target.name]: event.target.value }
    );
  };
  // const [lastName,setLastName] = useState('');
  // const [role,setRole] = useState('');
  // const [emailNotification,setEmailNotification] = useState(false);
  // const [certified,setCrtified] = useState(true);
  // const [termsAndConditions,setTermsAndConditions] = useState(true);

  return (
    <div>
      <h6 className="res-name-listing">Goldden Duck Restaurant</h6>
      <span className="res-loc-listing">
        Main G.T Road, Opposite Aalam Bakers, Near D.C Colony
      </span>
      <hr />

      <div className="pt-1">
        <div className="col-md-12 Sec-row-RL">
          <div className="label-RL text-lg-start">First Name</div>
          <input
            type="text"
            placeholder="Talha"
            className="input-RL"
            value={userInfo.FirstName}
            onChange={handleChange}
            name="FirstName"
          />
        </div>
        <div className="col-md-12 Sec-row-RL">
          <div className="label-RL text-lg-start">Last Name</div>
          <input
            type="text"
            placeholder="Khan"
            className="input-RL"
            value={userInfo.LastName}
            onChange={handleChange}
            name="LastName"
          />
        </div>
        <div className="col-md-12 Sec-row-RL mb-4">
          <div className="label-RL text-lg-start">Role at Business</div>
          <div className="dropdown-RL">
            <select name="Role" onChange={handleChange}>
              <option value="role" className="option">
                Role
              </option>
              <option value="admin" className="option">
                Admin
              </option>
              <option value="manager" className="option">
                Manager
              </option>
            </select>
            <span className="Darrow">
              <img alt="down-arrow" src={arrow} />
            </span>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className="CheckBox-RL checkbox">
            <input
              type="checkbox"
              value={true}
              name="NotifiedByEmail"
              onChange={handleChange}
            />
            <label>
              Get notified by email about new reviews, best practices, and more
              to help you improve your online reputation and build your
              business.
            </label>
          </div>
        </div>
        <div className="col-md-12 Sec-row-RL text-lg-start mb-0">
          <h1 className="text-click-statement">
            Please click the statements below to indicate you understand and
            accept these terms.
          </h1>
        </div>
        <div className="col-md-12 ">
          <div className="CheckBox-RL checkbox mt-2">
            <input
              type="checkbox"
              value={true}
              name="CertifyIAuthorized"
              onChange={handleChange}
            />
            <label>
              I certify that I am an authorized representative or affiliate of
              this establishment and have the authority ss representative. The
              information I have entered into this form is neither false nor
              fraudulent. I also understand that DeaseApp may disclose my name
              and affiliation to other verified representatives of this
              establishment.
            </label>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className="CheckBox-RL checkbox mt-2">
            <input
              type="checkbox"
              name="ReadTermsCondition"
              value={true}
              onChange={handleChange}
            />
            <label>
              I have read and accept DeaseApp's
              <span className="text-primary">Terms of Use</span> and
              <span className="text-primary">Privacy Policy</span>.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
