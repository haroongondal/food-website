import React from "react";
import { useState } from "react";
import "../styles/FeedbackPage.css";
import Modal from "react-responsive-modal";
import dislikeThumb from "../images/dislike-thumb.svg";
import likeThumb from "../images/like-thumb.svg";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import FeedbackReviewSec from "../components/FeedbackReviewSec";
import PopupFeedbackComSET from "../components/PopupFeedbackComSET";
import FeedbackComponents from "../components/FeedbackComponents";
import CancelSvgIcon from "../components/CancelSvgIcon";

function FeedbackPage() {
  //   PopupCommSetting
  const [isCommSettingShowing, setCommSettingShowing] = useState(false);

  const handleCommSettingPop = (e) => {
    e.preventDefault();
    setCommSettingShowing(true);
  };

  const closeCommSettingPop = () => {
    setCommSettingShowing(false);
  };

  const closeIcon = <CancelSvgIcon />;

  return (
    <div>
      <AdminSidebar />
      <section id="content">
        <AdminNavbar />
        <main>
          <FeedbackComponents />
          <div className="Content-graph-boxes">
            <div className="border-back-white">
              <div className="toggle-brands">
                <div className="brands-context-btn">
                  <span>Catch22-Dubai</span>
                  <button type="submit" className="blue-cross-btn">
                    <i class="bx bx-x-circle"></i>
                  </button>
                </div>
                <div className="brands-context-btn">
                  <span>Catch22-Dubai</span>
                  <button type="submit" className="blue-cross-btn">
                    <i class="bx bx-x-circle"></i>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="border-back-white"
              id="margin-20-TB"
              style={{ padding: "14px 0px" }}
            >
              <div className="outlets-header" style={{ padding: "0px 26px" }}>
                <h6 className="title-outlets-header">
                  Summary <span>(5 Outlets selected)</span>
                </h6>

                <div className="right-outlets-header">
                  <span className="text-allTime">All Time</span>
                  <label className="switch-M">
                    <input type="checkbox" />
                    <span className="slider-M round-M"></span>
                  </label>
                  <button
                    type="submit"
                    className="blue-setting-btn"
                    onClick={handleCommSettingPop}
                  >
                    <i class="bx bx-cog"></i>
                  </button>
                </div>
              </div>
              <hr />
              <div className="like-dislike">
                <div className="d-flex like-sec" style={{ width: "50.00%" }}>
                  <img src={likeThumb} alt="" />
                  <h2>
                    &nbsp; 13 <span>(50.00%)</span>
                  </h2>
                </div>
                <div className="d-flex dislike-sec" style={{ width: "50.00%" }}>
                  <h2>
                    &nbsp; 10 <span>(50.00%)</span>
                  </h2>
                  <img src={dislikeThumb} alt="" />
                </div>
              </div>
              <div className="feedback-boxes">
                <div className="feedback-box">
                  <div className="content-feedback-box">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="96"
                        height="96"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}
                        className="feedback-boxImg"
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
                            <path d="M14.33333,0c-7.90153,0 -14.33333,6.4283 -14.33333,14.33333v43c0,7.90503 6.4318,14.33333 14.33333,14.33333h12.12174l2.58952,5.17903c1.21777,2.42855 5.19303,2.42855 6.41081,0l2.58952,-5.17903h40.78841l4.2972,5.73893c1.35775,1.80566 4.38119,1.80566 5.73894,0l4.2972,-5.73893h40.78841l2.58952,5.17903c0.60889,1.21428 1.84766,1.98763 3.20541,1.98763c1.35775,0 2.59652,-0.77336 3.20541,-1.98763l2.58952,-5.17903h12.12174c7.90153,0 14.33333,-6.4283 14.33333,-14.33333v-43c0,-7.90503 -6.4318,-14.33333 -14.33333,-14.33333zM14.33333,7.16667h143.33333c3.95427,0 7.16667,3.2159 7.16667,7.16667v43c0,3.95076 -3.2124,7.16667 -7.16667,7.16667h-14.33333c-1.35775,0 -2.59652,0.77336 -3.20541,1.98763l-0.37793,0.74186l-0.37793,-0.75586c-0.60889,-1.21427 -1.84766,-1.97363 -3.20541,-1.97363h-44.79167c-1.12679,0 -2.19059,0.5249 -2.86947,1.42773l-2.50553,3.34538l-2.50553,-3.34538c-0.67888,-0.90283 -1.74268,-1.42773 -2.86947,-1.42773h-44.79167c-1.35775,0 -2.59652,0.77336 -3.2054,1.98763l-0.37793,0.74186l-0.37793,-0.74186c-0.60889,-1.21427 -1.84766,-1.98763 -3.2054,-1.98763h-14.33333c-3.95426,0 -7.16667,-3.2159 -7.16667,-7.16667v-43c0,-3.95076 3.2124,-7.16667 7.16667,-7.16667zM32.25,21.5c-1.98063,0 -3.58333,1.6027 -3.58333,3.58333c0,1.98063 1.6027,3.58333 3.58333,3.58333h107.5c1.98063,0 3.58333,-1.6027 3.58333,-3.58333c0,-1.98063 -1.6027,-3.58333 -3.58333,-3.58333zM32.25,43c-1.98063,0 -3.58333,1.6027 -3.58333,3.58333c0,1.98063 1.6027,3.58333 3.58333,3.58333h86c1.98063,0 3.58333,-1.6027 3.58333,-3.58333c0,-1.98063 -1.6027,-3.58333 -3.58333,-3.58333zM32.25,86c-9.88216,0 -17.91667,8.038 -17.91667,17.91667c0,9.87866 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.038 17.91667,-17.91667c0,-9.87866 -8.03451,-17.91667 -17.91667,-17.91667zM139.75,86c-9.88216,0 -17.91667,8.038 -17.91667,17.91667c0,9.87866 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.038 17.91667,-17.91667c0,-9.87866 -8.03451,-17.91667 -17.91667,-17.91667zM32.25,93.16667c5.9279,0 10.75,4.82211 10.75,10.75c0,5.92789 -4.8221,10.75 -10.75,10.75c-5.9279,0 -10.75,-4.82211 -10.75,-10.75c0,-5.92789 4.8221,-10.75 10.75,-10.75zM139.75,93.16667c5.92789,0 10.75,4.82211 10.75,10.75c0,5.92789 -4.82211,10.75 -10.75,10.75c-5.92789,0 -10.75,-4.82211 -10.75,-10.75c0,-5.92789 4.82211,-10.75 10.75,-10.75zM86,96.75c-9.88216,0 -17.91667,8.038 -17.91667,17.91667c0,9.87866 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.038 17.91667,-17.91667c0,-9.87866 -8.03451,-17.91667 -17.91667,-17.91667zM86,103.91667c5.92789,0 10.75,4.82211 10.75,10.75c0,5.92789 -4.82211,10.75 -10.75,10.75c-5.92789,0 -10.75,-4.82211 -10.75,-10.75c0,-5.92789 4.82211,-10.75 10.75,-10.75zM32.25,125.41667c-9.88216,0 -18.78451,4.01725 -24.50944,7.39063c-4.77311,2.81697 -7.74056,8.28996 -7.74056,14.27735v2.29557c0,4.57015 3.45036,8.28646 7.68457,8.28646h43c-0.28738,1.21821 -0.5179,2.46136 -0.5179,3.75131v2.29557c0,4.57015 3.67432,8.28646 8.18848,8.28646h55.28971c4.51416,0 8.18848,-3.71631 8.18848,-8.28646v-2.29557c0,-1.28995 -0.23052,-2.53309 -0.51791,-3.75131h43c4.23422,0 7.68457,-3.71631 7.68457,-8.28646v-2.29557c0,-5.98739 -2.96745,-11.46037 -7.74056,-14.27735c-5.72493,-3.37337 -14.62728,-7.39063 -24.50944,-7.39063c-9.88216,0 -18.78451,4.01725 -24.50944,7.39063c-4.07062,2.4023 -6.69513,6.77955 -7.41862,11.71582c-5.97952,-2.52785 -13.6024,-4.77311 -21.82194,-4.77311c-8.21954,0 -15.84243,2.24527 -21.82194,4.77311c-0.72349,-4.93627 -3.348,-9.31352 -7.41862,-11.71582c-5.72493,-3.37337 -14.62728,-7.39063 -24.50944,-7.39063zM32.25,132.58333c8.27246,0 15.91504,3.47836 20.87012,6.39681c2.56152,1.51172 4.21322,4.69263 4.21322,8.1045l0.014,1.00781c-1.04762,0.70818 -2.00206,1.49335 -2.84147,2.40756h-46.82129c-0.08398,0 -0.5179,-0.37443 -0.5179,-1.11979v-2.29557c0,-3.41187 1.65169,-6.59277 4.21322,-8.1045c4.95508,-2.91845 12.59766,-6.39681 20.87012,-6.39681zM139.75,132.58333c8.27246,0 15.91504,3.47836 20.87011,6.39681c2.56152,1.51172 4.21322,4.69263 4.21322,8.1045v2.29557c0,0.74536 -0.43392,1.11979 -0.51791,1.11979h-46.82129c-0.83416,-0.90852 -1.78772,-1.68844 -2.82747,-2.39355v-1.02181c0,-3.41187 1.65169,-6.59277 4.21322,-8.1045c4.95508,-2.91845 12.59765,-6.39681 20.87011,-6.39681zM86,146.91667c9.49024,0 18.21761,3.52035 23.86556,6.4808c2.96745,1.55371 4.80111,4.62964 4.80111,8.02051v2.29557c0,0.61589 -0.45492,1.11979 -1.02181,1.11979h-55.28971c-0.56689,0 -1.02181,-0.5039 -1.02181,-1.11979v-2.29557c0,-3.39087 1.83366,-6.4668 4.80111,-8.02051c5.64795,-2.96045 14.37532,-6.4808 23.86556,-6.4808z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <div className="details-feedback-box">
                      <h1>23</h1>
                      <h2>Total Feebacks</h2>
                    </div>
                  </div>
                </div>
                <div className="feedback-box">
                  <div className="content-feedback-box">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}
                        className="feedback-boxImg"
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
                            <path d="M51.6,24.08c-24.57719,0 -44.72,20.14281 -44.72,44.72c0,50.78031 57.43188,75.84125 76.97,92.1275c1.26313,1.00781 3.03688,1.00781 4.3,0c19.53813,-16.28625 76.97,-41.34719 76.97,-92.1275c0,-24.57719 -20.14281,-44.72 -44.72,-44.72c-7.76687,0 -14.86187,1.92156 -21.1775,5.2675c-0.91375,0.44344 -1.58562,1.27656 -1.8275,2.2575l-4.4075,19.2425c-0.22844,1.02125 0.01344,2.08281 0.65844,2.88906c0.65844,0.81969 1.63938,1.29 2.67406,1.30344h7.6325l-10.535,26.23c-0.43,1.06156 -0.29562,2.27094 0.34938,3.225c0.645,0.95406 1.72,1.51844 2.87562,1.505h2.795l-14.2975,23.1125l4.1925,-18.92c0.22844,-1.02125 -0.01344,-2.08281 -0.65844,-2.88906c-0.65844,-0.81969 -1.63938,-1.29 -2.67406,-1.30344h-6.5575l9.1375,-26.445c0.33594,-1.03469 0.17469,-2.17687 -0.47031,-3.07719c-0.63156,-0.88688 -1.65281,-1.42438 -2.75469,-1.43781h-10.32l3.655,-19.35c0.22844,-1.26312 -0.26875,-2.55312 -1.29,-3.3325c-7.14875,-5.2675 -16.15187,-8.2775 -25.8,-8.2775zM51.6,30.96c7.48469,0 14.24375,2.2575 19.8875,5.9125l-3.9775,20.9625c-0.18812,0.99438 0.06719,2.02906 0.71219,2.82188c0.645,0.77937 1.59906,1.24969 2.62031,1.26312h9.675l-9.1375,26.445c-0.33594,1.03469 -0.17469,2.17688 0.47031,3.07719c0.63156,0.88688 1.65281,1.42438 2.75469,1.43781h7.095l-7.6325,34.2925c-0.3225,1.6125 0.5375,3.225 2.05594,3.84313c1.51844,0.63156 3.26531,0.09406 4.17906,-1.26313l28.2725,-45.365c0.67188,-1.075 0.69875,-2.43219 0.06719,-3.53406c-0.61812,-1.10187 -1.81406,-1.77375 -3.07719,-1.73344h-3.7625l10.4275,-26.23c0.43,-1.06156 0.29563,-2.27094 -0.34937,-3.225c-0.645,-0.95406 -1.72,-1.51844 -2.87563,-1.505h-8.385l3.1175,-13.33c5.03906,-2.44562 10.49469,-3.87 16.6625,-3.87c20.82813,0 37.84,17.01188 37.84,37.84c0,44.37063 -49.5575,67.33531 -72.24,85.2475c-22.6825,-17.91219 -72.24,-40.87687 -72.24,-85.2475c0,-20.82812 17.01188,-37.84 37.84,-37.84z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <div className="details-feedback-box">
                      <h1>2.71</h1>
                      <h2>Average Rating</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-back-white" style={{ padding: "14px 0px" }}>
              <div className="outlets-header" style={{ padding: "0px 26px" }}>
                <h6 className="title-outlets-header">Feedback List</h6>

                <div className="right-outlets-header">
                  <button type="submit" className="blue-setting-btn">
                    <i class="bx bx-filter-alt"></i>
                  </button>

                  {/* Search-bar */}
                  <form class="search-feedback" action="#">
                    <div className="form-input-feedback">
                      <input type="search" placeholder="Search by Name" />
                      <button type="submit" className="search-btn-feedback">
                        <i className="bx bx-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <hr />

              <FeedbackReviewSec />
              <FeedbackReviewSec />
              <FeedbackReviewSec />
            </div>
          </div>
        </main>
      </section>

      {/* PopupCommSetting */}
      <Modal
        open={isCommSettingShowing}
        onClose={closeCommSettingPop}
        center
        closeIcon={closeIcon}
        styles={{
          modal: {
            "margin-top": "80px",
            "max-width": "955px",
            width: "100%",
            padding: "0px",
          },
        }}
      >
        <PopupFeedbackComSET />
      </Modal>
    </div>
  );
}

export default FeedbackPage;
