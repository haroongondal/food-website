import {React, useState ,useEffect} from "react";
import resImage from "../images/kadai_chicken.jpg";

export default function PopupResListing2(props) {
  const [userInfo, setUserInfo] = useState({
    email:'',
    phone:''
  });
  useEffect(() => {
    props.addUser(userInfo);
  }, [userInfo]);
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

      <div className="pt-1">
      <div className="col-md-12 Sec-row-RL">
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
        <div className="col-md-12 Sec-row-RL">
          <div className="label-RL text-lg-start">Last Name</div>
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
      </div>
    </div>
  );
}
