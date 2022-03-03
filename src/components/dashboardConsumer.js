import React, { useState } from "react";
import "../styles/DashboardConsumer.css";
import dashboardImage from "../images/dashboard_image.jpg";
import searchIcon from "../images/search_icon.png";
import SearchBoxItem from "./SearchBoxItem";
import useFetch from "../Utils/useFetch";
import Skeleton from "react-loading-skeleton";

export default function DashboardConsumer() {
  const [searchValues, setSearchValues] = useState("");
  // let data = [
  //   {
  //     Id: 1,
  //     RestaurantName: "Savour Food",
  //     AverageRating: 4.9,
  //   },
  //   {
  //     Id: 2,
  //     RestaurantName: "Chikachino Food",
  //     AverageRating: 4.5,
  //   },
  //   {
  //     Id: 3,
  //     RestaurantName: "Rehman Food",
  //     AverageRating: 4.3,
  //   },
  //   {
  //     Id: 4,
  //     RestaurantName: "Wil Wings",
  //     AverageRating: 4.6,
  //   },
  //   {
  //     Id: 5,
  //     RestaurantName: "KFC",
  //     AverageRating: 5.0,
  //   },
  //   {
  //     Id: 6,
  //     RestaurantName: "MC Donald",
  //     AverageRating: 4.9,
  //   },
  // ];
  const {data, isPending, error} = useFetch(`https://api.masairapp.com/api/Restaurant/GetRestaurantFromOpenSearch?search=${searchValues}`)
  console.log("search data: ", isPending);
  const [isResultShowing, setResultShowing] = useState(false);

  const handlechange = (value) => {
    setSearchValues(value);
    if (value !== null && value !== "") {
      setResultShowing(true);
    } else {
      setResultShowing(false);
    }
  };

  return (
    <div>
      <div className="dashboard_image">
        <img alt="dashboard_image" src={dashboardImage} />

        <div className="Sec-Crave-Search">
          <div className="div_Its_now_safe_to">
            <h1 className="heading_Its_now_safe_to">
              It's Now Safe To <span className="crave">Crave!</span>
            </h1>
          </div>

          <div className="wrap-top-search">
            <div className="search-top-search search-bar" id="searchBar_mid">
              <input
                type="text"
                className="searchTerm-top-search"
                placeholder="Search for Restaurants, Cuisines, Location "
                onChange={(e) => handlechange(e.target.value)}
              />
              <button type="submit" className="searchButton-top-search">
                <span className="text-search-link-top-search">
                  <img
                    alt="search-icon"
                    src={searchIcon}
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
              </button>
            </div>
            {isResultShowing && (
              <div className="box-searchBar">
                <ul class="align-box-searchBar">
                  {isPending && (
                    <div>
                      <Skeleton />
                    </div>
                  )}
                  {error && <div>{error}</div>}
                  {data && data.map((r) => <SearchBoxItem data={r} />)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
