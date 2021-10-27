import React from "react";
import { useState } from "react";
import "../styles/AdminMenuItem.css";
import dishImage from "../images/food_plate.png";
import MenuCategoryItem from "../components/MenuCategoryItem";
import SignUp from "./SignUp";
import Modal from "react-responsive-modal";
import Login from "./Login";
import PopupMenuItem from "../components/PopupMenuItem";

function AdminMenuItem() {
  const [IsOpened, setOpened] = useState(false);

  const handdleToggle = () => setOpened(!IsOpened);

  const [IsOpened1, setOpened1] = useState(false);

  const handdleToggle1 = () => setOpened1(!IsOpened1);

  const [IsOpened2, setOpened2] = useState(false);

  const handdleToggle2 = () => setOpened2(!IsOpened2);

  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(!showResults);

  const [showResults1, setShowResults1] = useState(false);
  const onClick1 = () => setShowResults1(!showResults1);

  const [showResults2, setShowResults2] = useState(false);
  const onClick2 = () => setShowResults2(!showResults2);

  const [showResults3, setShowResults3] = useState(false);
  const onClick3 = () => setShowResults3(!showResults3);

  const Results = () => (
    <div id="results" className="search-results">
      {showResults1 ? (
        <Results1 />
      ) : (
        <form action="#" className="form-ET">
          <div className="form-input-ET">
            <input type="search" placeholder="Enter category name" />

            <button type="submit" className="search-btn" onClick={onClick1}>
              <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </form>
      )}
    </div>
  );

  const Results1 = () => (
    <div>
      <button
        className={
          IsOpened1
            ? "accordion-menu-category is-open"
            : "accordion-menu-category"
        }
        style={{ outline: "0px auto -webkit-focus-ring-color" }}
        onClick={handdleToggle1}
      >
        <div className="Category-name">
          <button type="submit" className="small-down-btn">
            <i class="bx bxs-down-arrow"></i>
          </button>
          <span>Starter</span>
        </div>
      </button>

      <div
        className="accordion-content-menu-category "
        style={{ maxHeight: "-webkit-fill-available" }}
      >
        <div
          className={IsOpened1 ? "abc" : "accordion-content-menu-category-hide"}
        >
          <hr />
          {showResults2 ? (
            <Results2 />
          ) : (
            <div>
              <form action="#" className="form-ET">
                <div className="form-input-ET">
                  <input type="search" placeholder="Example: Starters Veg" />

                  <button
                    type="submit"
                    className="search-btn"
                    onClick={onClick2}
                  >
                    <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Results2 = () => (
    <div>
      <button
        className={
          IsOpened2
            ? "accordion-menu-sub-category is-open"
            : "accordion-menu-sub-category"
        }
        style={{ outline: "0px auto -webkit-focus-ring-color" }}
        onClick={handdleToggle2}
      >
        <div className="Category-name">
          <button type="submit" className="small-down-btn">
            <i class="bx bxs-down-arrow"></i>
          </button>
          <span>Veg Starter</span>
        </div>
      </button>

      <div
        className="accordion-content-menu-sub-category "
        style={{ maxHeight: "-webkit-fill-available" }}
      >
        <div
          className={
            IsOpened2 ? "abc" : "accordion-content-menu-sub-category-hide"
          }
        >
          <hr />
          {showResults3 ? (
            <Results3 />
          ) : (
            <div className="dish-ET">
              <form action="#" className="form-ET">
                <div className="form-input-ET">
                  <input type="search" placeholder="Enter name" />
                </div>
              </form>
              <form action="#" className="form-ET">
                <div className="form-input-ET">
                  <input type="search" placeholder="Enter price" />

                  <button
                    type="submit"
                    className="search-btn"
                    onClick={onClick3}
                  >
                    <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Results3 = () => (
    <div>
      <MenuCategoryItem />
      <MenuCategoryItem />
      <MenuCategoryItem />
    </div>
  );

  const [isSignpShowing, setSignupShowing] = useState(false);

  const handleSignUpPop = (e) => {
    e.preventDefault();
    setSignupShowing(true);
  };

  const closeSignupPop = () => {
    setSignupShowing(false);
  };

  return (
    <div className="item-menu">
      <button
        className={IsOpened ? "accordion-menu is-open" : "accordion-menu"}
        style={{ outline: "0px auto -webkit-focus-ring-color" }}
        onClick={handdleToggle}
      >
        <div className="left-menu-items">
          <img className="dish-img-menu" alt="dish-img" src={dishImage} />
          <div className="menu-item-title">
            <h6>Breakfast Menu</h6>
            <span>Regular - Food or Drinks</span>
          </div>
        </div>

        <div className="right-menu-items">
          <h6>7:30 am - 11: 30 am</h6>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <div className="add-category-btn" onClick={handleSignUpPop}>
            <button type="submit" className="blue-plus-btn">
              <i class="bx bx-plus-circle"></i>
            </button>
            <span>Add</span>
          </div>
        </div>
      </button>

      <div
        className="accordion-content-menu"
        style={{ maxHeight: "-webkit-fill-available" }}
      >
        <div className={IsOpened ? "abc" : "accordion-content-menu-hide"}>
          <div className="align-content-menu">
            {showResults ? (
              <Results />
            ) : (
              <div className="add-category-btn" onClick={onClick}>
                <button type="submit" className="blue-plus-btn">
                  <i class="bx bx-plus-circle"></i>
                </button>
                <span>Add Menu Category</span>
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
      <Modal
        open={isSignpShowing}
        onClose={closeSignupPop}
        center
        styles={{
          modal: { "margin-top": "80px", "max-width": "1000px", width: "100%" },
        }}
      >
        <PopupMenuItem
         />
      </Modal>
    </div>
  );
}

export default AdminMenuItem;
