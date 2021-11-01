import React from "react";
import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/OutletsPage.css";
import Modal from "react-responsive-modal";
import arrow from "../images/down_arrow.svg";
import PopupCompanyGroup from "../components/PopupCompanyGroup";
import PopupNewBrand from "../components/PopupNewBrand";
import PopupNewOutlet from "../components/PopupNewOutlet";
import EditSvgIcon from "../components/EditSvgIcon";
import star from '../images/star.png';
export default function OutletsPage() {
  //   Open-Close-OutletBox
  const [IsOpened, setOpened] = useState(false);

  const handdleToggle = () => setOpened(!IsOpened);

  //   PopupCompanyGroup
  const [isCompanyGroupShowing, setCompanyGroupShowing] = useState(false);

  const handleCompanyGroupPop = (e) => {
    e.preventDefault();
    setCompanyGroupShowing(true);
  };

  const closeCompanyGroupPop = () => {
    setCompanyGroupShowing(false);
  };

  //   PopupNewBrand
  const [isNewBrandShowing, setNewBrandShowing] = useState(false);

  const handleNewBrandPop = (e) => {
    e.preventDefault();
    setNewBrandShowing(true);
  };

  const closeNewBrandPop = () => {
    setNewBrandShowing(false);
  };

  //   PopupNewOutlet
  const [isNewOutletShowing, setNewOutletShowing] = useState(false);

  const handleNewOutletPop = (e) => {
    e.preventDefault();
    setNewOutletShowing(true);
  };

  const closeNewOutletPop = () => {
    setNewOutletShowing(false);
  };

  return (
    <div>
      <AdminSidebar />
      <section id="content">
        <AdminNavbar />
        <main>
          <div className="top-tools">
            <div className="left-tools">
              <button className="dark-blue-btn">Outlets</button>
            </div>
          </div>
          <div className="Content-graph-boxes">
            <div className="border-back-white">
              <div className="header-catch22">
                <h6>Catch22</h6>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={handleCompanyGroupPop}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="64"
                    height="64"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                    className="svg-edit-icon"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#06386c">
                        <path d="M137.61693,22.25848c-2.18077,0.03425 -4.26289,0.91462 -5.80673,2.45523l-3.56277,3.56277l15.8199,15.8199l3.56278,-3.56343c3.27402,-3.28195 3.27402,-8.59463 0,-11.87657l-3.94267,-3.94267c-1.60854,-1.60516 -3.79834,-2.49084 -6.07049,-2.45523zM38.71089,28.60652c-9.27228,0.01055 -16.78632,7.52459 -16.79687,16.79688v87.54255c0.01055,9.27228 7.52459,16.78632 16.79687,16.79688h94.26131c9.27228,-0.01055 16.78632,-7.52459 16.79688,-16.79687v-29.82823c0.00017,-0.89108 -0.35368,-1.74572 -0.98371,-2.37586c-0.63002,-0.63015 -1.48459,-0.98417 -2.37567,-0.98417c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938v29.82823c-0.00629,5.56339 -4.51474,10.07183 -10.07812,10.07813h-94.26131c-5.56339,-0.00629 -10.07183,-4.51474 -10.07812,-10.07812v-87.5419c0.00629,-5.56339 4.51474,-10.07183 10.07812,-10.07812h29.82823c1.85533,0 3.35938,-1.50404 3.35938,-3.35938c0,-1.85533 -1.50404,-3.35938 -3.35938,-3.35938zM123.49443,33.02751l-49.05147,49.05212l15.8199,15.81924l49.05147,-49.05147zM71.28305,88.42046l-4.84288,17.48253l17.48187,-4.84288z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="border-back-white-outlet">
              <div className="outlets-header">
                <h6>Outlets</h6>

                <div className="right-outlets-header">
                  <div className="d-flex ET-Flex-M">
                    <label className="col-md-3 label-ET-Flex-M">View By</label>
                    <div className="border-DD-Flex-M">
                      <div className="content-dropDown">
                        <select>
                          <option className="option">Company</option>
                          <option className="option">Company</option>
                          <option className="option">Company</option>
                        </select>
                        <span>
                          <img alt="down-arrow" src={arrow} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="add-context-btn" onClick={handleNewBrandPop}>
                    <button type="submit" className="blue-plus-btn">
                      <i class="bx bx-plus-circle"></i>
                    </button>
                    <span>Add Brand</span>
                  </div>
                  <div className="add-context-btn" onClick={handleNewOutletPop}>
                    <button type="submit" className="blue-plus-btn">
                      <i class="bx bx-plus-circle"></i>
                    </button>
                    <span>Add Outlet</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              className={IsOpened ? "outlet-box is-open" : "outlet-box"}
              style={{ outline: "0px auto -webkit-focus-ring-color" }}
              onClick={handdleToggle}
            >
              <div className="col-md-11 left-tools-outlet-box">
                <h6 className="col-md-3">Dunkin Brands</h6>
                <h6>5 Outlets</h6>
              </div>
              <div className="right-tools-outlet-box">
                <EditSvgIcon />
                <span>
                  <img alt="down-arrow" src={arrow} style={{margin: "0px 14px"}}/>
                </span>
              </div>
            </button>

            <div
              className="content-outlet-box"
              style={{ maxHeight: "-webkit-fill-available" }}
            >
              <div className={IsOpened ? "abc" : "content-outlet-box-hide"}>
              <table class="table">
              <tbody>
                    <tr className="tr-table">
                      <th className="px-5 pt-3" >Logo</th>
                      <th className="pt-3">Outlets</th>
                      <th className="pt-3"></th>
                      
                      <th className="pt-3">Company</th>
                      <th className="pt-3">Area</th>
                      <th className="pt-3">City</th>
                      <th className="px-5 pt-3"></th>
                    </tr>
                  
                  
                    <tr className="table-body">
                      <td className="px-5"><img src={star} alt="" className="star-logo"/></td>
                      <td >Catch22-Dubai</td>
                      <td></td>
                      <td>Dukin Brands</td>
                      <td>Dubai-United Arab Emirates</td>
                      <td>Dubai</td>
                      <td className="px-5">
                        <EditSvgIcon/> 
                      </td>
                    </tr>
                    <tr className="table-body">
                    <td className="px-5"><img src={star} alt="" className="star-logo"/></td>
                      <td>Catch22-Dubai</td>
                      <td></td>
                      <td>Dukin Brands</td>
                      <td>Dubai-United Arab Emirates</td>
                      <td>Dubai</td>
                      <td className="px-5">
                        <EditSvgIcon/> 
                      </td>
                    </tr>
                    <tr className="table-body">
                    <td className="px-5"><img src={star} alt="" className="star-logo"/></td>
                      <td>Catch22-Dubai</td>
                      <td></td>
                      <td>Dukin Brands</td>
                      <td>Dubai-United Arab Emirates</td>
                      <td>Dubai</td>
                      <td className="px-5">
                        <EditSvgIcon/> 
                      </td>
                    </tr>
                    <tr className="table-body">
                    <td className="px-5"><img src={star} alt="" className="star-logo"/></td>
                      <td>Catch22-Dubai</td>
                      <td></td>
                      <td>Dukin Brands</td>
                      <td>Dubai-United Arab Emirates</td>
                      <td>Dubai</td>
                      <td className="px-5">
                        <EditSvgIcon/> 
                      </td>
                    </tr>
                    <tr className="table-body">
                    <td className="px-5"><img src={star} alt="" className="star-logo"/></td>
                      <td>Catch22-Dubai</td>
                      <td></td>
                      <td>Dukin Brands</td>
                      <td>Dubai-United Arab Emirates</td>
                      <td>Dubai</td>
                      <td className="px-5">
                        <EditSvgIcon/> 
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* PopupCompanyGroup */}
            <Modal
              open={isCompanyGroupShowing}
              onClose={closeCompanyGroupPop}
              center
              styles={{
                modal: {
                  "margin-top": "80px",
                  "max-width": "955px",
                  width: "100%",
                },
              }}
            >
              <PopupCompanyGroup />
            </Modal>

            {/* PopupNewBrand */}
            <Modal
              open={isNewBrandShowing}
              onClose={closeNewBrandPop}
              center
              styles={{
                modal: {
                  "margin-top": "80px",
                  "max-width": "955px",
                  width: "100%",
                },
              }}
            >
              <PopupNewBrand />
            </Modal>

            {/* PopupNewOutlet */}
            <Modal
              open={isNewOutletShowing}
              onClose={closeNewOutletPop}
              center
              styles={{
                modal: {
                  "margin-top": "80px",
                  "max-width": "955px",
                  width: "100%",
                },
              }}
            >
              <PopupNewOutlet />
            </Modal>
          </div>
        </main>
      </section>
    </div>
  );
}
