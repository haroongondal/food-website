import React from "react";
import "../styles/FilterTopNavbar.css";

export default function FilterTopNavbar() {
  return (
    <div>
      <div className="topNavBar-F">
        <div className="align-topNavBar-F">
          <div>
            <a href aria-label="Back" className="sM7rz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 42 42"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#666666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4.5"
                    d="M12 6L27.455 21 12 36"
                    transform="matrix(-1 0 0 1 39.455 0)"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="location-topNavBar-M" style={{ marginLeft: "auto" }}>
            <span>
              Lahore
              <i className="_3sKP_">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4 4L7 1"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </i>
            </span>
          </div>
        </div>
        <div className="Sec-search-filters">
          <div
            className="search-topNavBar-M"
            style={{ padding: "8px 1rem", marginBottom: "5px" }}
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
            <span>search anything...</span>
          </div>
          <div className="filters-btns">
            <div className="sort-btn-F">
              <i class="bx bx-filter-alt"></i>
            </div>
            <div className="sort-btn-F">
              <i class="bx bx-filter-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
