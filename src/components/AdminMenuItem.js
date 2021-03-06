import React from "react";
import { useState } from "react";
import "../styles/AdminMenuItem.css";
import dishImage from "../images/food_plate.png";
import MenuCategoryItem from "../components/MenuCategoryItem";
import useFetch from "../Utils/useFetch";
import Skeleton from "react-loading-skeleton";

function AdminMenuItem(props) {
  // Popup Close-icon
 

  const [IsOpened, setOpened] = useState(false);
  const [cusineId, setcusineId] = useState("");

  const handdleToggle = (id) => {
    setcusineId(id);
    setOpened(!IsOpened);
  };

  {
    /* const [IsOpened1, setOpened1] = useState(false);

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
              <i className="bx bx-right-arrow-alt"></i>
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
            <i className="bx bxs-down-arrow"></i>
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
                    <i className="bx bx-right-arrow-alt"></i>
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
            <i className="bx bxs-down-arrow"></i>
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
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );}

    const Results3 = () => (
      <div>
        <MenuCategoryItem />
        <MenuCategoryItem />
        <MenuCategoryItem />
      </div>
    );*/
  }


  return (
    <div className="item-menu" >
      <button
        className={IsOpened ? "accordion-menu is-open" : "accordion-menu"}
        style={{ outline: "0px auto -webkit-focus-ring-color" }}
        onClick={() => handdleToggle(props.data.Id)}
      >
        <div className="left-menu-items">
          <img className="dish-img-menu" alt="dish-img" src={dishImage} />
          <div className="menu-item-title">
            <h6>{props.data.Cusine}</h6>
            <span >Regular - Food or Drinks</span>
          </div>
        </div>

        <div className="right-menu-items">
          {/* <h6>7:30 am - 11: 30 am</h6> */}
          {/* <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label> */}
        </div>
      </button>

      <div
        className="accordion-content-menu"
        style={{ maxHeight: "-webkit-fill-available" }} 
        
      >
        <div className={IsOpened ? "abc" : "accordion-content-menu-hide"}>
          <div className="align-content-menu">
            {/* {showResults ? (
              <Results />
            ) : (
              <div className="add-category-btn" onClick={onClick}>
                <button type="submit" className="blue-plus-btn">
                  <i className="bx bx-plus-circle"></i>
                </button>
                <span>Add Menu Category</span>
              </div>
            )
          }  */}
            {props.data.SubCusinesListByCusine && props.data.SubCusinesListByCusine.map((c) => <MenuCategoryItem data={c} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMenuItem;
