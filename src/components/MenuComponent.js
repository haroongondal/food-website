import React from "react";
import { useState } from "react";
import "../styles/MenuComponent.css";
import Modal from "react-responsive-modal";
import PopupMenu from "./PopupMenu";
import PopupCityOutlet from "./PopupCityOutlet";
import PopupAddUser from "./PopupAddUser";

function MenuComponent() {
  const [isAddMenuShowing, setAddMenuShowing] = useState(false);

  const handleAddMenuPop = (e) => {
    e.preventDefault();
    setAddMenuShowing(true);
  };

  const closeAddMenuPop = () => {
    setAddMenuShowing(false);
  };

  const [isCityOultetShowing, setCityOultetShowing] = useState(false);

  const handleCityOultetPop = (e) => {
    e.preventDefault();
    setCityOultetShowing(true);
  };

  const closeCityOultetPop = () => {
    setCityOultetShowing(false);
  };

  return (
    <div>
      <div className="top-tools">
        <div className="left-tools">
          <form class="search-menu" action="#">
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

          <div className="Filters-menu">
            <button type="submit" className="filter-btn">
              <i class="bx bx-filter"></i>
            </button>
            <span>Filters</span>
            <button type="submit" className="downArrow-btn">
              <i class="bx bx-chevron-down"></i>
            </button>
          </div>
        </div>

        <div className="right-tools">
          <button className="addMenuDetails-btn" onClick={handleCityOultetPop}>
            Add menu details
          </button>

          <button className="addMenu-btn" onClick={handleAddMenuPop}>
            Add menu
          </button>

          <button className="save-btn">Save</button>
        </div>
      </div>
      <Modal
        open={isAddMenuShowing}
        onClose={closeAddMenuPop}
        center
        styles={{
          modal: { "margin-top": "80px", "max-width": "955px", width: "100%" },
        }}
      >
        <PopupMenu />
      </Modal>

      <Modal
        open={isCityOultetShowing}
        onClose={closeCityOultetPop}
        center
        styles={{
          modal: { "margin-top": "80px", "max-width": "955px", width: "100%" },
        }}
      >
        <PopupAddUser/>
      </Modal>
    </div>
  );
}

export default MenuComponent;
