import {React,useState} from "react";
import "../styles/BottomNavBar.css";
import PopupSearch from "./PopupSearch";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";

export default function BottomNavBar() {
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
            <a href="/?hometype=home" aria-label="Home">
              <i className="bx bx-home-smile"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="/bangalore/DeaseApp-passport"
              aria-label="Booking"
            >
              <i className="bx bx-book-add"></i>
              <span>Booking</span>
            </a>
          </li>
          <li className="">
            <a href aria-label="predictandWin">
              <i className="bx bx-tennis-ball center-top-box"></i>
              <span className=" "></span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" aria-label="Search"  onClick={handleSearchPop}>
              <i className="bx bx-search"></i>
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="/bangalore-stories" aria-label="Profile">
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
