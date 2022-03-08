import {React,useState} from "react";
import "../styles/BottomNavBar.css";
import PopupSearch from "./PopupSearch";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";

export default function BottomNavbarCRM() {
  // Popup Close-icon
  const closeIcon = <CancelSvgIcon />;
  const [isSearchShowing, setSearchShowing] = useState(false);

  const handleSearchPop = (e) => {
    e.preventDefault();
    setSearchShowing(true);
  };

  const closeSearchPop = () => {
    setSearchShowing(false);
  };
  return (
    <div>
      <div className="bottom-navBar">
        <ul>
          <li>
            <a href="/CRM-Dashboard/" aria-label="Home">
              <i className="bx bx-home-smile"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/CRM-Dashboard/Add-Menu"
              aria-label="Booking"
            >
              <i className="bx bx-book-add"></i>
              <span>Menu</span>
            </a>
          </li>
          <li className="">
            <a href aria-label="predictandWin">
              <i className="bx bx-tennis-ball center-top-box"></i>
              <span className=" "></span>
            </a>
          </li>
          <li>
            <a href="/CRM-Dashboard/Feedback" aria-label="Search"  >
              <i className="bx bx-comment-detail"></i>
              <span>Feedback</span>
            </a>
          </li>
          <li>
            <a href="/CRM-Dashboard/Profile-Settings" aria-label="Profile">
              <i className="bx bx-user-circle"></i>
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </div>
      <Modal
        open={isSearchShowing}
        onClose={closeSearchPop}
        center
        classNames={{
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={1200}
        closeIcon={closeIcon}
        styles={{
          modal: {
            margin: "0px",
            padding: "0px",
            width: "100%",
            height: "100%",
          },
        }}
      >
        <PopupSearch />
      </Modal>
    </div>
  );
}
