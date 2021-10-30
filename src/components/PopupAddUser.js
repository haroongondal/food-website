import React from "react";
import "../styles/PopupAddUser.css";

function PopupAddUser() {
  return (
    <div>
      <div className="border-popup-city">
        {/* Name */}
        <div className="col-md-12 m_t_20 d-flex ET-Flex">
          <label className="col-md-3 label-ET-Flex">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="col-md-7 input-ET-Flex"
          />
        </div>

        {/* Phone */}
        <div className="col-md-12 m_t_20 d-flex ET-Flex">
          <label className="col-md-3 label-ET-Flex">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            className="col-md-7 input-ET-Flex"
          />
        </div>

        {/* Email */}
        <div className="col-md-12 m_t_20 d-flex ET-Flex">
          <label className="col-md-3 label-ET-Flex">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="col-md-7 input-ET-Flex"
          />
        </div>

        {/* Outlet Name */}
        <div className="col-md-12 m_t_20 d-flex ET-Flex">
          <label className="col-md-3 label-ET-Flex">Outlet Name</label>
          <input
            type="text"
            placeholder="Outlet Name"
            className="col-md-7 input-ET-Flex"
          />
        </div>

        {/* Role */}
        <div className="col-md-12 m_t_20 d-flex ET-Flex">
          <label className="col-md-3 label-ET-Flex">Role</label>
          <input
            type="text"
            placeholder="Role"
            className="col-md-7 input-ET-Flex"
          />
        </div>

        {/* Role */}
        <div className="col-md-12 m_t_20 d-flex ET-Flex">
          <label className="col-md-3 label-ET-Flex">Access Pin</label>
          <input type="text" maxlength="1" className="pin_text_box" />
          <input type="text" maxlength="1" className="pin_text_box" />
          <input type="text" maxlength="1" className="pin_text_box" />
          <input type="text" maxlength="1" className="pin_text_box" />
        </div>
      </div>

      {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-2 pr-0">
          <button
            type="submit"
            className="blue-btn"
            style={{ marginRight: "20px" }}
          >
            Save
          </button>
          <button className="green-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PopupAddUser;
