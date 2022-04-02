import React from "react";
import { useState } from "react";
import "../styles/AdminSidebar.css";
import AdminMenuPage from "../pages/AdminMenuPage";
import { Link, useRouteMatch } from "react-router-dom";

function AdminSidebar() {
  const { path } = useRouteMatch();

  const [IsOpened, setOpened] = useState(false);

  const handdleToggle = () => {
    console.log("clicked");
    setOpened(!IsOpened);
  };

  return (
    
    <section id="sidebar">
      <a href="#abcabc" className="brand">
        <span className="logo-text">DeaseApp</span>
      </a>
      <ul className="sidebar-menu">
        <li>
          <span className="nav-section-title"></span>
        </li>
    <Link to={`${path}/`}>
          <li className="have-children">
            <a href="#abc">
              <span ><i className='bx bxs-dashboard icon'></i></span>Dashboard
            </a>
          </li>
        </Link>


        <Link to={`${path}/Add-Menu`}>
          <li className="have-children">
            <a href="#abc">
              <span ><i className='bx bx-dish icon'></i></span>Add Menu
            </a>
            {/* <ul>
        <li><a href="#abc">Add Category</a></li>
        <li><a href="#abc">View Categories</a></li>
      </ul> */}
          </li>
        </Link>

        <Link to={`${path}/My-Outlets`}>
        <li className="have-children">
          <a href="#abc">
            <span ><i className='bx bx-store icon'></i></span>My Outlets
          </a>
          {/* <ul>
        <li><a href="#abc">Add Award</a></li>
        <li><a href="#abc">View Awards</a></li>
      </ul> */}
        </li>
        </Link>

        <Link to={`${path}/Users-Management`}>
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-group icon'></i></span>Users Management
          </a>
          {/* <ul>
        <li><a href="#abc">Add Jury</a></li>
        <li><a href="#abc">View Juries</a></li>
      </ul> */}
        </li>
        </Link>

        <Link to={`${path}/Feedback`}>
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-like icon'></i></span>Feedback
          </a>
          {/* <ul>
        <li><a href="#abc">Add Author</a></li>
        <li><a href="#abc">View Authors</a></li>
      </ul> */}
        </li>
        </Link>

        <Link to={`${path}/Profile-Settings`}>
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-user-circle icon'></i></span>Profile Settings
          </a>
          {/* <ul>
        <li><a href="#abc">Add Author</a></li>
        <li><a href="#abc">View Authors</a></li>
      </ul> */}
        </li>
        </Link>
        
        <li className="have-children">
          <a href="#abc">
            <span><i className='bx bx-power-off icon'></i></span>Logout
          </a>
          {/* <ul>
        <li><a href="#abc">Add Author</a></li>
        <li><a href="#abc">View Authors</a></li>
      </ul> */}
        </li>
      </ul>
    </section>
  );
}

export default AdminSidebar;
