import React from "react";
import { useState } from "react";
import "../styles/UserManagementPage.css";
import EditSvgIcon from "../components/EditSvgIcon";
import CancelSvgIcon from "../components/CancelSvgIcon";
import Modal from "react-responsive-modal";
import PopupAddUser from "../components/PopupAddUser";


function UserManagementPage() {

  //   Cancel Icon
  const closeIcon = <CancelSvgIcon />;

   //   PopupAddUser
   const [isAddUserShowing, setAddUserShowing] = useState(false);

   const handleAddUserPop = (e) => {
     e.preventDefault();
     setAddUserShowing(true);
   };
 
   const closeAddUserPop = () => {
     setAddUserShowing(false);
   };
 
   const closeAddUserBtn = (e) => {
     setAddUserShowing(false);
   };
  return (
    <div>
          <div className="top-tools">
            <div className="left-tools">
              <button className="dark-blue-btn">User Management</button>
            </div>
          </div>
          <div className="most-like-items" style={{ paddingBottom: "36px" }}>
            <div className="outlets-header" style={{ padding: "14px 26px" }}>
              <h6 className="title-outlets-header">User Management</h6>

              <div className="right-outlets-header">
                <div className=" align-checkbox-city">
                  <label className="main-city-CB">
                    <h6 className="text-DeaseApp-city-CB">
                      Show inactive employees
                    </h6>
                    <input type="checkbox" />
                    <span className="w3docs-city-CB"></span>
                  </label>
                </div>
                <div className="add-context-btn" onClick={handleAddUserPop}>
                  <button type="submit" className="blue-plus-btn">
                    <i class="bx bx-plus-circle"></i>
                  </button>
                  <span>Add User</span>
                </div>
              </div>
            </div>

            <div className="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th
                      className="mr-5"
                      style={{ color: "#06386C", fontWeight: "bold" }}
                    >
                      Sl No
                    </th>
                    <th
                      className="mr-5"
                      style={{ color: "#06386C", fontWeight: "bold" }}
                    >
                      Empolyee
                    </th>
                    <th
                      className="mr-5"
                      style={{ color: "#06386C", fontWeight: "bold" }}
                    >
                      Email
                    </th>
                    <th
                      className="mr-5"
                      style={{ color: "#06386C", fontWeight: "bold" }}
                    ></th>
                    <th
                      className="mr-5"
                      style={{ color: "#06386C", fontWeight: "bold" }}
                    >
                      Phone
                    </th>
                    <th
                      className="mr-5"
                      style={{ color: "#06386C", fontWeight: "bold" }}
                    >
                      Role
                    </th>
                    <th
                      className="mr-5"
                      style={{ color: "#06386C", fontWeight: "bold" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      Barsha@dukin.com
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "300",
                      }}
                    >
                      maghna.verma@DeaseApp.co.in
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    ></td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      909090909
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                     <u> View Role </u>
                    </td>
                    <td
                      style={{
                        padding: "22px 15px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <div className="EditIcon-Switch clearfix float-end float-sm-start pe-sm-0 pe-3">
                        <EditSvgIcon />
                        <label className="switch-S">
                          <input type="checkbox" />
                          <span className="slider-S round-S"></span>
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      Barsha@dukin.com
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "300",
                      }}
                    >
                      maghna.verma@DeaseApp.co.in
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    ></td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      909090909
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <u> View Role </u>
                    </td>
                    <td
                      style={{
                        padding: "22px 15px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <div className="EditIcon-Switch clearfix float-end float-sm-start pe-sm-0 pe-3">
                        <EditSvgIcon />
                        <label className="switch-S">
                          <input type="checkbox" />
                          <span className="slider-S round-S"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      Barsha@dukin.com
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "300",
                      }}
                    >
                      maghna.verma@DeaseApp.co.in
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    ></td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      909090909
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <u> View Role </u>
                    </td>
                    <td
                      style={{
                        padding: "22px 15px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <div className="EditIcon-Switch clearfix float-end float-sm-start pe-sm-0 pe-3">
                        <EditSvgIcon />
                        <label className="switch-S">
                          <input type="checkbox" />
                          <span className="slider-S round-S"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      Barsha@dukin.com
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "300",
                      }}
                    >
                      maghna.verma@DeaseApp.co.in
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    ></td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      909090909
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <u> View Role </u>
                    </td>
                    <td
                      style={{
                        padding: "22px 15px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <div className="EditIcon-Switch clearfix float-end float-sm-start pe-sm-0 pe-3">
                        <EditSvgIcon />
                        <label className="switch-S">
                          <input type="checkbox" />
                          <span className="slider-S round-S"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      Barsha@dukin.com
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "300",
                      }}
                    >
                      maghna.verma@DeaseApp.co.in
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    ></td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      909090909
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <u> View Role </u>
                    </td>
                    <td
                      style={{
                        padding: "22px 15px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <div className="EditIcon-Switch clearfix float-end float-sm-start pe-sm-0 pe-3">
                        <EditSvgIcon />
                        <label className="switch-S">
                          <input type="checkbox" />
                          <span className="slider-S round-S"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      Barsha@dukin.com
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "300",
                      }}
                    >
                      maghna.verma@DeaseApp.co.in
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    ></td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      909090909
                    </td>
                    <td
                      style={{
                        padding: "22px 40px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <u> View Role </u>
                    </td>
                    <td
                      style={{
                        padding: "22px 15px",
                        color: "#06386C",
                        fontWeight: "bold",
                      }}
                    >
                      <div className="EditIcon-Switch clearfix float-end float-sm-start pe-sm-0 pe-3">
                        <EditSvgIcon />
                        <label className="switch-S">
                          <input type="checkbox" />
                          <span className="slider-S round-S"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* PopupAddUser */}
          <Modal
              open={isAddUserShowing}
              onClose={closeAddUserPop}
              center
              closeIcon={closeIcon}
              styles={{
                modal: {
                  "margin-top": "80px",
                  "max-width": "535px",
                  width: "100%", padding: "0px",
                  borderRadius:"23px"
                },
              }}
            >
              <PopupAddUser click={closeAddUserBtn}/>
            </Modal>
    </div>
  );
}

export default UserManagementPage;
