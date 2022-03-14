import React from "react";
import "../styles/Sort_by.css";
import { ForDevice } from "media-query-react";
import Types from "../Utils/Types.json";
function Sort_by(props) {
  return (
    <div style={{ width: "31%" }}>
      <ForDevice deviceName={["tablet", "desktop"]}>
        <div className="div-sort-by alignment">
          <div className="input-group">
            <span className="text-sort-by">Sort By</span>
            <div className="dropdown-FilterPage">
              <select
                name="sort"
                id="res-sort"
                onChange={(e) => props.getSortType(e, e.target.value)}
              >
                <option value={Types.SortType.Popularity}>Popularity</option>
                <option value={Types.SortType.Ratings}>Rating</option>
                <option value={Types.SortType.LowPrice}>
                  Price: Low to High
                </option>
                <option value={Types.SortType.HighPrice}>
                  Price: High to Low
                </option>
              </select>
              {/* <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="text-city-details text-left">Sort By</span>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div class="location-item-wrapper">
                    <a
                      class="dropdown-item px-3 py-2"
                      href="#"
                      onClick={(e) =>
                        props.getSortType(
                          e,
                          e.target.getAttribute("data-sortBy")
                        )
                      }
                      data-sortBy={Types.SortType.Popularity}
                    >
                      Popular
                    </a>
                  </div>
                  <div class="location-item-wrapper">
                    <a
                      class="dropdown-item px-3 py-2"
                      href="#"
                      onClick={(e) =>
                        props.getSortType(
                          e,
                          e.target.getAttribute("data-sortBy")
                        )
                      }
                      data-sortBy={Types.SortType.Ratings}
                    >
                      Rating
                    </a>
                  </div>
                  <div class="location-item-wrapper">
                    <a
                      class="dropdown-item px-3 py-2"
                      href="#"
                      onClick={(e) =>
                        props.getSortType(
                          e,
                          e.target.getAttribute("data-sortBy")
                        )
                      }
                      data-sortBy={Types.SortType.LowPrice}
                    >
                      Price: Low to High
                    </a>
                  </div>
                  <div class="location-item-wrapper">
                    <a
                      class="dropdown-item px-3 py-2"
                      href="#"
                      onClick={(e) =>
                        props.getSortType(
                          e,
                          e.target.getAttribute("data-sortBy")
                        )
                      }
                      data-sortBy={Types.SortType.HighPrice}
                    >
                      Price: High to Low
                    </a>
                  </div>
                </div>
              </div> */}
              <span className="Darrow">
                <img
                  alt="down-arrow"
                  src="/static/media/down_arrow.5b0512cf.svg"
                />
              </span>
            </div>
          </div>
        </div>
      </ForDevice>
    </div>
  );
}

export default Sort_by;
