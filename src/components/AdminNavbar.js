import React from "react";
import { useState } from "react";
import "../styles/AdminNavbar.css";
import profileImage from "../images/profile_pic.jpg";
import Modal from "react-responsive-modal";
import PopupMenuADD from "./PopupMenuADD";
import CancelSvgIcon from "../components/CancelSvgIcon";

import { Link, useRouteMatch } from "react-router-dom";

function AdminNavbar() {

	const { path } = useRouteMatch();
	// Popup Close-icon
	const closeIcon = <CancelSvgIcon />;

	const [isAddMenuShowing, setAddMenuShowing] = useState(false);

  const handleAddMenuPop = (e) => {
    e.preventDefault();
    setAddMenuShowing(true);
  };

  const closeAddMenuPop = () => {
    setAddMenuShowing(false);
  };

  const handleAddMenu = (e) => {
    e.preventDefault();
    setAddMenuShowing(false);
  };

  return (
    <nav>
      <i className="bx bx-menu" onClick={(e) => handleAddMenuPop(e)}></i>
      <h1 href="#" className="nav-link">
        Menu Dashboard
      </h1>
      <ul>
        {/* <li>
					<a href="#abc" className="notification">
						<i className="bx bxs-bell"></i>
						<span className="num">8</span>
					</a>
				</li> */}
        <li>
          <a href="#abc" className="profile">
            <img alt="profile-img" src={profileImage} />
          </a>
        </li>
      </ul>

	  <Modal
          open={isAddMenuShowing}
          onClose={closeAddMenuPop}
          center
          closeIcon={closeIcon}
          classNames={{
            modalAnimationIn: "sortByEnterModalAnimation",
            modalAnimationOut: "sortByLeaveModalAnimation",
          }}
          styles={{
            modal: {
              width: "100%",
              padding: "0px",
              margin: "0px",
              borderRadius: "23px 23px 0px 0px",
            },
          }}
        >
         <section id="sidebar-Mobile">
      <a href="#abcabc" className="brand">
        <span className="logo-text">FoodApp</span>
      </a>
      <ul className="sidebar-menu">
        <li>
          <span className="nav-section-title"></span>
        </li>
        
        <Link to={`${path}/Add-Menu`}>
          <li className="have-children">
            <a href="#abc">
              <span ><i className='bx bx-dish icon'></i></span>Add Menu
            </a>
            
          </li>
        </Link>

        <Link to={`${path}/My-Outlets`}>
        <li className="have-children" >
          <a href="#abc" >
            <span ><i className='bx bx-store icon'></i></span>My Outlets
          </a>
          
        </li>
        </Link>

        <Link to={`${path}/Users-Management`}>
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-group icon'></i></span>Users Management
          </a>
          
        </li>
        </Link>

        <Link to={`${path}/Feedback`} >
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-like icon'></i></span>Feedback
          </a>
          
        </li>
        </Link>

        <Link to={`${path}/Profile-Settings`}>
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-user-circle icon'></i></span>Profile Settings
          </a>
          
        </li>
        </Link>
        
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-power-off icon'></i></span>Logout
          </a>
          
        </li>
      </ul>
    </section>
        </Modal>
    </nav>
  );
}

export default AdminNavbar;
