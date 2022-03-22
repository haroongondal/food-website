import "../styles/AdminSidebar2.css";
import { React, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

function AdminSidebar2(props) {
  const { path } = useRouteMatch();
  const [showUserPopup, setShowUserPopup] = useState(false);
  function showPopup() {
    showUserPopup ? setShowUserPopup(false) : setShowUserPopup(true);
  }
   function closeSidebar() {
    document.getElementById('header-toggle').click();
  };
  const showNavbar = () => {
    const toggle = document.getElementById("header-toggle"),
      nav = document.getElementById("nav-bar"),
      adminBody = props.adminBody.current,
      headerpd = document.getElementById("admin-header");
    // Validate that all variables exist
    // toggle.addEventListener("click", () => {
    // show navbar
    nav.classList.toggle("show");
    // change icon
    toggle.classList.toggle("bx-x");
    // add padding to body
    adminBody.classList.toggle("adminBody");
    // add padding to header
    headerpd.classList.toggle("adminBody");
    // });
  };
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
  return (
    <div>
      <header className="admin-header" id="admin-header">
        <div className="header_toggle" onClick={showNavbar}>
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="right-nav d-flex align-items-center">
          <i className="fa fa-calendar me-2 d-sm-inline d-none"></i>
          <div className="me-4 d-sm-inline d-none">Mar 13, 2022 - 12:05 PM</div>
          <div className="notificaton_icon me-4">
            <i className="bx bx-bell"></i>
            <div className="red-dot"></div>
          </div>
          <div className="border user_profile" onClick={showPopup}>
            {showUserPopup ? (
              <i className="fa fa-angle-up me-2 px-1"></i>
            ) : (
              <i className="fa fa-angle-down me-2 px-1"></i>
            )}

            <div className="d-inline header_img">
              <img
                src="https://i.imgur.com/hczKIze.jpg"
                alt="user"
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div className="nav-inner">
          <Link to={`${path}/`}>
            <a href={`${path}/`} className="nav_logo">
              {/* <i className="bx bx-layer nav_logo-icon"></i> */}
              <span className="collapsed-logo">
                <span className="nav_logo-D">D</span>
                <span className="nav_logo-A">A</span>
              </span>
              <span className="full-logo">
                <span className="nav_logo-D">Dease</span>
                <span className="nav_logo-A">App</span>
              </span>
            </a>
            </Link>
            <div className="nav_list">
            <Link to={`${path}/`}>
              <a href={`${path}/`} className="nav_link active" onClick={closeSidebar}>
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </a>
              </Link>
              <Link to={`${path}/Add-Menu`}>
              <a href={`${path}/Add-Menu`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-dish nav_icon"></i>
                <span className="na_name">Add Menu</span>
              </a>
              </Link>
              <Link to={`${path}/My-Outlets`}>
              <a href={`${path}/My-Outlets`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-store nav_icon"></i>
                <span className="nav_name">My Outlets</span>
              </a>
              </Link>
              <Link to={`${path}/`}>
              <a href={`${path}/`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-heart nav_icon"></i>
                <span className="nav_name">Loyality Program</span>
              </a>
              </Link>
            </div>
            <div className="nav_list">
              <Link to={`${path}/`}>
              <a href={`${path}/`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-book-alt nav_icon"></i>
                <span className="nav_name">Booking</span>
              </a>
              </Link>
              <Link to={`${path}/`}>
              <a href={`${path}/`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-dollar nav_icon"></i>
                <span className="nav_name">Payments</span>
              </a>
              </Link>
              <Link to={`${path}/`}>
              <a href={`${path}/`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-receipt nav_icon"></i>
                <span className="nav_name">Coupons</span>
              </a>
              </Link>
            </div>
            <div className="nav_list">
              <Link to={`${path}/`}>
              <a href={`${path}/`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-list-ul nav_icon"></i>
                <span className="nav_name">Customer's List</span>
              </a>
              </Link>
              <Link to={`${path}/Feedback`}>
              <a href={`${path}/Feedback`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-like nav_icon"></i>
                <span className="nav_name">Feedback</span>
              </a>
              </Link>
              <Link to={`${path}/`}>
              <a href={`${path}/`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-notepad nav_icon"></i>
                <span className="nav_name">Reports</span>
              </a>
              </Link>
              <Link to={`${path}/Feedback`}>
              <a href={`${path}/Feedback`} className="nav_link" onClick={closeSidebar}>
                <i className="bx bx-group nav_icon"></i>
                <span className="nav_name">Users Management</span>
              </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {showUserPopup && (
        <div className="user_info-popup py-3 px-4">
          <div className="d-flex justify-content-center">
            <div className="img-container">
              <img
                src="https://i.imgur.com/hczKIze.jpg"
                alt="user"
                className="rounded-circle"
              />
              <div className="green-dot"></div>
            </div>
          </div>
          <h4 className="mt-2">Ali</h4>
          <hr />
          <div className="user-info-nav">
            <i className="bx bx-user me-2"></i>
            <a>Profile Settings</a>
          </div>
          <div className="user-info-nav">
            <i className="bx bx-log-out me-2 "></i>
            <a>Logout</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminSidebar2;
