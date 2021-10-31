import React from "react";
import "../styles/PopupMenuItem.css";
import arrow from "../images/down_arrow.svg";

function PopupMenuItem() {
  return (
    <div>
      <div className="border-popup">
        <div className="align-dropDown">
          <div className="dropDown-checkBox">
            <div className="dropDown-item">
              <span className="label-dropDown">Select food type</span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Veg</option>
                    <option className="option">Fast Food</option>
                    <option className="option">Meat</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="main-popup-CB">
                <h6 className="text-dineout-popup-CB">Customer facing</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>

              <label className="main-popup-CB">
                <h6 className="text-dineout-popup-CB">Recommended</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "12px" }}>
                Select Category
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Category</option>
                    <option className="option">Category</option>
                    <option className="option">Category</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown">Select Notes</span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Notes</option>
                    <option className="option">Notes</option>
                    <option className="option">Notes</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "44px" }}>
                Item Name <br />
                (Default)
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Category</option>
                    <option className="option">Category</option>
                    <option className="option">Category</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "20px" }}>
                Description <br />
                (Default)
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Description</option>
                    <option className="option">Description</option>
                    <option className="option">Description</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "84px" }}>
                Price
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="0" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "27px" }}>
                Cost Price
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="0" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="dropDown-checkBox">
            <div>
              <label className="main-popup-CB">
                <h6 className="text-dineout-popup-CB">Tax Group</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>
            </div>
          </div>

          <div className="add-tax-sec">
            <div className="dropDown">
              <div className="dropDown-item">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "52px" }}
                >
                  Tax Name
                </span>
                <div className="border-dropDown">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown">
                      <div className="form-input-dropDown">
                        <input type="search" placeholder="Tax Name" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="dropDown-item">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "29px" }}
                >
                  Tax Value
                </span>
                <div className="border-DD-small">
                  <div className="content-dropDown">
                    <form
                      action="#"
                      className="form-dropDown"
                      style={{ maxWidth: "185px" }}
                    >
                      <div className="form-input-dropDown">
                        <input type="search" placeholder="GST" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="add-tax-btn">
              <button type="submit" className="blue-plus-btn-tax">
                <i className="bx bx-plus-circle"></i>
              </button>
            </div>
          </div>

          <div className="add-tax-sec">
            <div className="dropDown">
              <div className="dropDown-item">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "52px" }}
                >
                  Tax Name
                </span>
                <div className="border-dropDown">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown">
                      <div className="form-input-dropDown">
                        <input type="search" placeholder="Tax Name" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="dropDown-item">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "29px" }}
                >
                  Tax Value
                </span>
                <div className="border-DD-small">
                  <div className="content-dropDown">
                    <form
                      action="#"
                      className="form-dropDown"
                      style={{ maxWidth: "185px" }}
                    >
                      <div className="form-input-dropDown">
                        <input type="search" placeholder="GST" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="delete-tax-btn">
              <button type="submit" className="blue-minus-btn-tax">
                <i className="bx bx-minus-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-popup">
        <div className="align-dropDown">
          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "67px" }}>
                Gif URL
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter Gif URL" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "24px" }}>
                Video URL
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter Video URL" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "66px" }}>
                AR URL
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter AR URL" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "21px" }}>
                Image URL
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter Image URL" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "71px" }}>
                Station
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Station</option>
                    <option className="option">Station</option>
                    <option className="option">Station</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "27px" }}>
                Prep Time <br />
                (mins)
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Prep Time" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "84px" }}>
                Price
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="0" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "27px" }}>
                Cost Price
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="0" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-popup">
        <div className="align-dropDown">
          <div className="dropDown">
            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "40px" }}>
                Assign Tags
              </span>
              <div className="border-DD-large">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Station</option>
                    <option className="option">Station</option>
                    <option className="option">Station</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons-CheckBox */}

          <div className="checkBox-addBtn">
            <label className="main-popup-CB">
              <h6 className="text-dineout-popup-CB">Add-ons</h6>
              <input type="checkbox" />
              <span className="w3docs-popup-CB"></span>
            </label>

            <div className="add-CB-group">
              <button type="submit" className="blue-plus-btn-CB">
                <i className="bx bx-plus-circle"></i>
              </button>
            </div>
          </div>

          <div className="border-CB-group">
            <div className="dropDown-checkBox">
              <div className="dropDown-item">
                <span className="label-dropDown">Add-on group Name</span>
                <div className="border-dropDown">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown">
                      <div className="form-input-dropDown">
                        <input
                          type="search"
                          placeholder="Eg. Regular,Premium"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <label className="main-popup-CB-3">
                <h6 className="text-dineout-popup-CB-3">Default</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>

              <label className="main-popup-CB-3">
                <h6 className="text-dineout-popup-CB-3">Conditional</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>

              <label className="main-popup-CB-3">
                <h6 className="text-dineout-popup-CB-3">Multiple</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>
            </div>

            <div className="dropDown-small-G">
              <div className="dropDown-item">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "71px" }}
                >
                  Description
                </span>
                <div className="border-dropDown">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown">
                      <div className="form-input-dropDown">
                        <input type="search" placeholder="Veg/Non-Veg/Extra" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="min-max">
                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Min.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Max.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Min QTY.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Max QTY.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "48px" }}>
                Select Add-on.
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Veg</option>
                    <option className="option">Fast Food</option>
                    <option className="option">Meat</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons-CheckBox-Delete */}

          <div className="CheckBox-Delete">
            <div className="checkBox-deleteBtn">
              <div className="add-CB-group">
                <button type="submit" className="blue-plus-btn-CB">
                  <i className="bx bx-minus-circle"></i>
                </button>
              </div>
            </div>

            <div className="border-CB-group">
              <div className="dropDown-checkBox">
                <div className="dropDown-item">
                  <span className="label-dropDown">Add-on group Name</span>
                  <div className="border-dropDown">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown">
                        <div className="form-input-dropDown">
                          <input
                            type="search"
                            placeholder="Eg. Regular,Premium"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <label className="main-popup-CB-3">
                  <h6 className="text-dineout-popup-CB-3">Default</h6>
                  <input type="checkbox" />
                  <span className="w3docs-popup-CB"></span>
                </label>

                <label className="main-popup-CB-3">
                  <h6 className="text-dineout-popup-CB-3">Conditional</h6>
                  <input type="checkbox" />
                  <span className="w3docs-popup-CB"></span>
                </label>

                <label className="main-popup-CB-3">
                  <h6 className="text-dineout-popup-CB-3">Multiple</h6>
                  <input type="checkbox" />
                  <span className="w3docs-popup-CB"></span>
                </label>
              </div>

              <div className="dropDown-small-G">
                <div className="dropDown-item">
                  <span
                    className="label-dropDown"
                    style={{ marginRight: "71px" }}
                  >
                    Description
                  </span>
                  <div className="border-dropDown">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown">
                        <div className="form-input-dropDown">
                          <input
                            type="search"
                            placeholder="Veg/Non-Veg/Extra"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="min-max">
                  <div className="dropDown-item-small-G">
                    <span className="label-dropDown-small-G">Min.</span>
                    <div className="border-dropDown-small-G">
                      <div className="content-dropDown">
                        <form action="#" className="form-dropDown-small-G">
                          <div className="form-input-dropDown-small-G">
                            <input type="search" placeholder="0" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="dropDown-item-small-G">
                    <span className="label-dropDown-small-G">Max.</span>
                    <div className="border-dropDown-small-G">
                      <div className="content-dropDown">
                        <form action="#" className="form-dropDown-small-G">
                          <div className="form-input-dropDown-small-G">
                            <input type="search" placeholder="0" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="dropDown-item-small-G">
                    <span className="label-dropDown-small-G">Min QTY.</span>
                    <div className="border-dropDown-small-G">
                      <div className="content-dropDown">
                        <form action="#" className="form-dropDown-small-G">
                          <div className="form-input-dropDown-small-G">
                            <input type="search" placeholder="0" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="dropDown-item-small-G">
                    <span className="label-dropDown-small-G">Max QTY.</span>
                    <div className="border-dropDown-small-G">
                      <div className="content-dropDown">
                        <form action="#" className="form-dropDown-small-G">
                          <div className="form-input-dropDown-small-G">
                            <input type="search" placeholder="0" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropDown-item">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "48px" }}
                >
                  Select Add-on.
                </span>
                <div className="border-dropDown">
                  <div className="content-dropDown">
                    <select>
                      <option className="option">Veg</option>
                      <option className="option">Fast Food</option>
                      <option className="option">Meat</option>
                    </select>
                    <span>
                      <img alt="down-arrow" src={arrow} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customizations-CheckBox */}

          <div className="checkBox-addBtn">
            <label className="main-popup-CB">
              <h6 className="text-dineout-popup-CB">Customizations</h6>
              <input type="checkbox" />
              <span className="w3docs-popup-CB"></span>
            </label>

            <div className="add-CB-group">
              <button type="submit" className="blue-plus-btn-CB">
                <i className="bx bx-plus-circle"></i>
              </button>
            </div>
          </div>

          <div className="border-CB-group">
            <div className="dropDown-checkBox">
              <div className="dropDown-item">
                <span className="label-dropDown">Add-on group Name</span>
                <div className="border-dropDown">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown">
                      <div className="form-input-dropDown">
                        <input
                          type="search"
                          placeholder="Eg. Regular,Premium"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <label className="main-popup-CB-3">
                <h6 className="text-dineout-popup-CB-3">Default</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>

              <label className="main-popup-CB-3">
                <h6 className="text-dineout-popup-CB-3">Conditional</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>

              <label className="main-popup-CB-3">
                <h6 className="text-dineout-popup-CB-3">Multiple</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-CB"></span>
              </label>
            </div>

            <div className="dropDown-small-G">
              <div className="dropDown-item">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "71px" }}
                >
                  Description
                </span>
                <div className="border-dropDown">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown">
                      <div className="form-input-dropDown">
                        <input type="search" placeholder="Veg/Non-Veg/Extra" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="min-max">
                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Min.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Max.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Min QTY.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="dropDown-item-small-G">
                  <span className="label-dropDown-small-G">Max QTY.</span>
                  <div className="border-dropDown-small-G">
                    <div className="content-dropDown">
                      <form action="#" className="form-dropDown-small-G">
                        <div className="form-input-dropDown-small-G">
                          <input type="search" placeholder="0" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropDown-item">
              <span className="label-dropDown" style={{ marginRight: "48px" }}>
                Select Add-on.
              </span>
              <div className="border-dropDown">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Veg</option>
                    <option className="option">Fast Food</option>
                    <option className="option">Meat</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations-CheckBox */}

          <div className="checkBox-addBtn">
            <label className="main-popup-CB">
              <h6 className="text-dineout-popup-CB">Recommendations</h6>
              <input type="checkbox" />
              <span className="w3docs-popup-CB"></span>
            </label>
          </div>

          {/* Custom KOT messages */}

          <div className="checkBox-addBtn">
            <label className="main-popup-CB">
              <h6 className="text-dineout-popup-CB">Custom KOT messages</h6>
              <input type="checkbox" />
              <span className="w3docs-popup-CB"></span>
            </label>
          </div>

          {/* Tab-Switch */}

          <div className="tab-switch">
            <div className="align-tab-switch">
              <button className="tab-switch-btn">Catch22</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupMenuItem;
