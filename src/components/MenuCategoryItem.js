import React from "react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import PopupMenu from "../components/PopupMenu";
import CancelSvgIcon from "../components/CancelSvgIcon";
import dishImg from "../images/kadai_chicken.jpg";
import "../styles/MenuCategoryItem.css";
import { ForDevice } from "media-query-react";

function MenuCategoryItem(props) {
  // Popup Close-icon
  const closeIcon = <CancelSvgIcon />;

  const [isAddMenuItemPopupShowing, setMenuItemPopupShowing] = useState(false);

  const handleMenuItemPopup = (e) => {
    e.preventDefault();
    setMenuItemPopupShowing(true);
    setOpened(IsOpened);
  };

  const closeAddMenuItemPopup = () => {
    setMenuItemPopupShowing(false);
  };

  const closeAddMenuItemBtn = (e) => {
    e.preventDefault();
    setMenuItemPopupShowing(false);
  };

  const [IsOpened, setOpened] = useState(false);

  const handdleToggle = () => setOpened(!IsOpened);
  return (
    <div>
      <div
        className={IsOpened ? "Category-item is-open" : "Category-item"}
        onClick={handdleToggle}
      >
        <div className="left-tools-category">
          <h6>{props.data.Name}</h6>
        </div>

        <div className="right-tools-category">
          <div className="add-category-btn" onClick={handleMenuItemPopup}>
            <button type="submit" className="blue-plus-btn">
              <i className="bx bx-plus-circle"></i>
            </button>
            <span>Add</span>
          </div>
          {/* <button type="submit" className="options-btn">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button> */}
        </div>
      </div>
      {/* <hr className="line-categoryItem" /> */}

      {props.data.MenuItemsBySubCusine.map((m) => (
        <div className="hello" style={{ maxHeight: "-webkit-fill-available" }} >
          <div className={IsOpened ? "abc" : "hello-hide"}>
            <div className="align-content-categoryItem">
              <div className="left-tools-category">
                <button className="egg-btn-categoryItem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                    className="svg-edit-categoryItem"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#000000">
                        <path d="M86,16.125c-16.125,0 -30.6375,12.3625 -41.3875,27.95c-10.75,15.5875 -17.7375,34.9375 -17.7375,52.675c0,18.8125 6.45,33.8625 17.2,44.075c11.2875,9.675 25.8,15.05 41.925,15.05c16.125,0 30.6375,-4.8375 41.925,-15.05c11.2875,-10.2125 17.2,-25.2625 17.2,-44.075c0,-17.7375 -6.9875,-37.0875 -17.7375,-52.675c-10.75,-15.5875 -25.2625,-27.95 -41.3875,-27.95zM86,26.875c10.2125,0 22.575,9.1375 32.25,23.1125c9.675,13.975 16.125,32.25 16.125,46.7625c0,16.6625 -5.375,28.4875 -13.975,36.0125c-8.6,8.0625 -20.425,12.3625 -34.4,12.3625c-13.975,0 -25.8,-4.3 -34.4,-12.3625c-8.6,-8.0625 -13.975,-19.8875 -13.975,-36.0125c0,-15.05 6.45,-32.7875 16.125,-46.7625c9.675,-13.975 22.0375,-23.1125 32.25,-23.1125z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
                <h6>{m.MenuName}</h6>
              </div>

              <div className="right-tools-category">
                <h6>Rs {m.Price}</h6>

                <div>
                  <img
                    className="dish-img-categoryItem"
                    alt="dish-pic"
                    src={dishImg}
                  />
                </div>

                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
                {/* <button type="submit" className="options-btn">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      <ForDevice deviceName={["tablet", "desktop"]}>
      <Modal
        open={isAddMenuItemPopupShowing}
        onClose={closeAddMenuItemPopup}
        center
        className="add-menu-modal"
        closeIcon={closeIcon}
        styles={{
          modal: {
            "margin-top": "80px",
            "max-width": "815px",
            width: "100%",
            padding: "0px",
            borderRadius: "23px",
          },
        }}
      >
        <PopupMenu click={closeAddMenuItemBtn} subCuisineId={props.data.Id} />
      </Modal>
      </ForDevice>

      <ForDevice deviceName="mobile">
      <Modal
        open={isAddMenuItemPopupShowing}
        onClose={closeAddMenuItemPopup}
        center
        closeIcon={closeIcon}
        styles={{
          modal: {
            width: "100%",
            height:"100%",
            padding: "0px",
            margin:"0",
          },
        }}
      >
        <PopupMenu click={closeAddMenuItemBtn} subCuisineId={props.data.Id} />
      </Modal>
      </ForDevice>
    </div>
  );
}

export default MenuCategoryItem;
