import React from "react";
import "../styles/PopupCityOutlet.css";
import arrow from "../images/down_arrow.svg";

export default function PopupCityOutlet() {
  return (
    <div>
    <div className="title-popup">
        <h6>Select City / Outlet</h6>
      </div>
      <div className="border-popup-city">
        {/* Search-bar */}
        <form class="search-city" action="#">
          <div className="form-input-city">
            <input
              type="search"
              placeholder="Search Brands, Cities and Outlets"
            />
            <button type="submit" className="search-btn-city">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </form>

        {/* Three-Boxes */}
        <div className="city-boxes">
          {/* Brand-Box */}
          <div className="col-md-4 city-box-padding">
            <div className="border-city-box">
              <div className="title-city-box">
                <h3>Brand</h3>
                <p>
                  <a href className="select-all-none">
                    All
                  </a>
                  <span>|</span>
                  <a href className="select-all-none">
                    None
                  </a>
                </p>
              </div>
              <div className="content-city-box">
                <div className="margin-content-city-box">
                  <div className="section-city-box">
                    <div className="col-12 align-section-city-box">
                      <div className="col-11 align-checkbox-city">
                        <label className="main-city-CB">
                          <h6 className="text-dineout-city-CB">Dunkin Brands</h6>
                          <input type="checkbox" />
                          <span className="w3docs-city-CB"></span>
                        </label>
                      </div>
                      <div className="col-1 right-arrow-city">
                        <img alt="down-arrow" src={arrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="selectedCity"> 0 / 1 Brands Selected</span>
          </div>

          {/* Cities-Box */}
          <div className="col-md-4 city-box-padding">
            <div className="border-city-box">
              <div className="title-city-box">
                <h3>Cities</h3>
                <p>
                  <a href className="select-all-none">
                    All
                  </a>
                  <span>|</span>
                  <a href className="select-all-none">
                    None
                  </a>
                </p>
              </div>
              <div className="content-city-box">
                <div className="margin-content-city-box">
                  <div className="section-city-box">
                    <div className="col-12 align-section-city-box">
                      <div className="col-11 align-checkbox-city">
                        <label className="main-city-CB">
                          <h6 className="text-dineout-city-CB">Dunkin Brands</h6>
                          <input type="checkbox" />
                          <span className="w3docs-city-CB"></span>
                        </label>
                      </div>
                      <div className="col-1 right-arrow-city">
                        <img alt="down-arrow" src={arrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="selectedCity"> 0 / 1 Cities Selected</span>
          </div>

          {/* Outlets-Box */}
          <div className="col-md-4 city-box-padding">
            <div className="border-city-box">
              <div className="title-city-box">
                <h3>Outlets</h3>
                <p>
                  <a href className="select-all-none">
                    All
                  </a>
                  <span>|</span>
                  <a href className="select-all-none">
                    None
                  </a>
                </p>
              </div>
              <div className="content-city-box">
                <div className="margin-content-city-box">
                  <div className="section-city-box">
                    <div className="col-12 align-section-city-box">
                      <div className="col-11 align-checkbox-city">
                        <label className="main-city-CB">
                          <h6 className="text-dineout-city-CB">Dunkin Brands</h6>
                          <input type="checkbox" />
                          <span className="w3docs-city-CB"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="margin-content-city-box">
                  <div className="section-city-box">
                    <div className="col-12 align-section-city-box">
                      <div className="col-11 align-checkbox-city">
                        <label className="main-city-CB">
                          <h6 className="text-dineout-city-CB">Dunkin Brands</h6>
                          <input type="checkbox" />
                          <span className="w3docs-city-CB"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="margin-content-city-box">
                  <div className="section-city-box">
                    <div className="col-12 align-section-city-box">
                      <div className="col-11 align-checkbox-city">
                        <label className="main-city-CB">
                          <h6 className="text-dineout-city-CB">Dunkin Brands</h6>
                          <input type="checkbox" />
                          <span className="w3docs-city-CB"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="selectedCity"> 0 / 3 Outlets Selected</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex justify-content-end mb-2 pr-0">
          <button className="green-btn" style={{marginRight: "20px"}}>Reset</button>
          <button type="submit" className="blue-btn">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
