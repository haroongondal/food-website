import React from "react";
import { useState } from "react";
import "../styles/MenuComponent.css";
import downArrowWhite from "../images/down-arrow-white.png";
import Modal from "react-responsive-modal";
import PopupMenuADD from "./PopupMenuADD";
import CancelSvgIcon from "../components/CancelSvgIcon";
import { ForDevice } from "media-query-react";

function MenuComponent() {
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

  const [isSelectOutletShowing, setSelectOutletShowing] = useState(false);

  const handleSelectOutletPop = (e) => {
    e.preventDefault();
    setSelectOutletShowing(true);
  };

  const closeSelectOutletPop = () => {
    setSelectOutletShowing(false);
  };

  const handleSelectOutlet = (e) => {
    e.preventDefault();
    setSelectOutletShowing(false);
  }

  return (
    <div>
      <ForDevice deviceName={["tablet", "desktop"]}>
        <div className="top-tools">
          <div className="left-tools">
            <form className="search-menu" action="#">
              <div className="form-input">
                <input
                  type="search"
                  placeholder="Search items, categories, sub categories"
                />
                <button type="submit" className="search-btn">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </form>

            {/* <div className="Filters-menu">
            <button type="submit" className="filter-btn">
              <i className="bx bx-filter"></i>
            </button>
            <span>Filters</span>
            <button type="submit" className="downArrow-btn">
              <i className="bx bx-chevron-down"></i>
            </button>
          </div> */}
          </div>

          <div className="right-tools">
            <div className="menu-Components-DD">
              <div class="dropdown-menu-Components">
                <select>
                  <option class="option" value="1">
                    Savor Food
                  </option>
                  <option class="option" value="2">
                    Savor Food
                  </option>
                  <option class="option" value="10">
                    Savor Food
                  </option>
                </select>
                <span class="Darrow">
                  <img alt="down-arrow" src={downArrowWhite} />
                </span>
              </div>
            </div>

            <button className="addMenu-btn" onClick={handleAddMenuPop}>
              Add menu
            </button>

            {/* <button className="save-btn">Save</button> */}
          </div>
        </div>
        <Modal
          open={isAddMenuShowing}
          onClose={closeAddMenuPop}
          center
          closeIcon={closeIcon}
          styles={{
            modal: {
              "margin-top": "80px",
              "max-width": "535px",
              width: "100%",
              padding: "0px",
              borderRadius: "23px",
            },
          }}
        >
          <PopupMenuADD click={closeAddMenuPop} />
        </Modal>
      </ForDevice>

      <ForDevice deviceName="mobile">
        <div className="top-tools">
          <div className="Sec-search-filters p-0">
            <div
              className="search-topNavBar-M"
              style={{
                padding: "6px 1rem",
                marginBottom: "5px",
                boxShadow: "0px 0px 6px rgb(0 0 0 / 10%)",
              }}
            >
              <i>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4722 7.11106C13.4722 10.6242 10.6243 13.4721 7.11112 13.4721C3.59796 13.4721 0.75 10.6242 0.75 7.11106C0.75 3.59795 3.59796 0.75 7.11112 0.75C10.6243 0.75 13.4722 3.59795 13.4722 7.11106Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 16L12.1333 12.1334"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </i>
              <span>Search items, categories...</span>
            </div>
          </div>
          <div className="filters-btns">
            <div
              className="buttons-menu-components"
              onClick={handleSelectOutletPop}
            >
              <i class="bx bx-store"></i>
            </div>
            <div className="buttons-menu-components" onClick={handleAddMenuPop}>
              <i class="bx bx-dish"></i>
            </div>
          </div>
        </div>
        <Modal
          open={isAddMenuShowing}
          onClose={closeAddMenuPop}
          center
          closeIcon={closeIcon}
          classNames={{
            modalAnimationIn: "sortByEnterModalAnimation",
            modalAnimationOut: "sortByLeaveModalAnimation",
          }}
          animationDuration={800}
          styles={{
            modal: {
              width: "100%",
              padding: "0px",
              margin: "0px",
              borderRadius: "23px 23px 0px 0px",
              verticalAlign: "bottom",
            },
          }}
        >
          <PopupMenuADD click={closeAddMenuPop} />
        </Modal>

        <Modal
          open={isSelectOutletShowing}
          onClose={closeSelectOutletPop}
          center
          closeIcon={closeIcon}
          classNames={{
            modalAnimationIn: "sortByEnterModalAnimation",
            modalAnimationOut: "sortByLeaveModalAnimation",
          }}
          animationDuration={800}
          styles={{
            modal: {
              width: "100%",
              padding: "0px",
              margin: "0px",
              borderRadius: "23px 23px 0px 0px",
              verticalAlign: "bottom",
            },
          }}
        >
          <div className="title-popup">
            <h6>Select Outlet</h6>
          </div>

          <button className="btn-for-sortBy" onClick={(e) => handleSelectOutlet(e)}>Savor food</button>
          <button className="btn-for-sortBy" onClick={(e) => handleSelectOutlet(e)}>Burger Point</button>
          <button className="btn-for-sortBy" onClick={(e) => handleSelectOutlet(e)}>Pizza Hut</button>
        </Modal>
      </ForDevice>
    </div>
  );
}

export default MenuComponent;
