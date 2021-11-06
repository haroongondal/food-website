import React from "react";
import "../styles/DashboardConsumer.css";
import dashboardImage from "../images/dashboard_image.jpg";
import searchIcon from "../images/search_icon.png";
import SearchBoxItem from "./SearchBoxItem";

export default function DashboardConsumer() {
  return (
    <div>
      <div className="dashboard_image">
        <img alt="dashboard_image" src={dashboardImage} />

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
          <SearchBoxItem/>
        </div>
      </div>
    </div>
  );
}
