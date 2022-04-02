import React from "react";
import { useEffect, useState } from "react";
import "../styles/ResDetailTopNav.css";
import "../styles/MobileTopNavBar.css";
import restaurentImage from "../images/restaurant.jpg";
import Scrollspy from "react-scrollspy";
import Carousel from "react-multi-carousel";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";

export default function ResDetailTopNav() {
  // Sticky Menu Area
  const [isVisibleNavbar, setIsVisibleNavbar] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const closeIcon = <CancelSvgIcon />;  const responsive = {
    largeScreen: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 1,
    },
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1200, min: 577 },
      items: 1,
    },

    mobile_tablet: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
function setTab1() {
  setactiveTab(1);
}
function setTab2() {
  setactiveTab(2);
}
function setTab3() {
  setactiveTab(3);
}
function setTab4() {
  setactiveTab(4);
}

 function openModal(){
  setisModalOpen(true);
  }
  function closeModal(){
    setisModalOpen(false);
    }
  useEffect(function () {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // to limit setting state only the first time
      setIsVisibleNavbar(true);
    } else {
      setIsVisibleNavbar(false);
    }
  };
  return (
    <div>
      {isVisibleNavbar && (
        <div className="resTop-navbar pt-2 px-3 d-lg-none d-block">
          <div className="d-flex justify-content-between mb-3 mt-2">
            <div>
              <i className="fa fa-angle-left me-3 fs-3"></i>
              <span className="fw-bold">Savour Food</span>
            </div>
            <div>
              <i className="fa fa-share-square-o me-3"></i>
              <i className="fa fa-heart-o"></i>
            </div>
          </div>
          <div className="d-flex justify-content-between top-navList">
            <div className={`top-navItem  ${activeTab == 1 ? 'active' : ''}`} onClick={setTab1}><a href="#top-section">Overview</a></div>
            <div className={`top-navItem  ${activeTab == 2 ? 'active' : ''}`} onClick={setTab2}><a href="#about-section">About</a></div>
            <div className={`top-navItem  ${activeTab == 3 ? 'active' : ''}`} onClick={setTab3}><a href="#menu-section">Menu</a></div>
            <div className={`top-navItem  ${activeTab == 4 ? 'active' : ''}`} onClick={setTab4}><a href="#rating-review-section">Reviews</a></div>
          </div>
        </div>
      )}

      <section className="res-detail-top-nav">
        <div class="dashboard-res-detail-M" id="scroll-header" onClick={openModal}>
          <img
            src={restaurentImage}
            alt="JW Kitchen"
            title="JW Kitchen"
            class="no-img"
          />
          <div className="position-absolute px-4 text-light top-0 w-100 top-nav-secondary">
            <div className="d-flex justify-content-between mb-3 mt-2">
              <div>
                <i className="fa fa-angle-left me-3 fs-3"></i>
              </div>
              <div>
                <i className="fa fa-share-square-o me-3"></i>
                <i className="fa fa-heart-o"></i>
              </div>
            </div>
          </div>
          <div className="showImages position-absolute p-2" onClick={openModal}>
            <i className="fa fa-image me-2"></i>All Photos (19)
          </div>
          <div class="rating-res-detail-M">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="13"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.40834 7.56611C5.27175 7.50068 5.11286 7.50068 4.97628 7.56611L2.87321 8.57366C2.50384 8.75061 2.09005 8.43275 2.16581 8.03025L2.54378 6.02203C2.57627 5.8494 2.51579 5.67239 2.38446 5.55573L0.817313 4.16369C0.497195 3.87934 0.659265 3.3504 1.08373 3.29419L3.33514 2.99607C3.49386 2.97505 3.63292 2.8793 3.70917 2.73851L4.75265 0.811802C4.94176 0.462621 5.44286 0.462622 5.63197 0.811803L6.67545 2.73851C6.75169 2.8793 6.89075 2.97505 7.04947 2.99607L9.30088 3.29419C9.72535 3.3504 9.88742 3.87934 9.5673 4.16369L8.00015 5.55573C7.86882 5.67239 7.80834 5.8494 7.84083 6.02203L8.21881 8.03025C8.29456 8.43275 7.88077 8.75061 7.51141 8.57366L5.40834 7.56611Z"
                fill="#FFF"
              ></path>
            </svg>
            4.4<span>(780)</span>
          </div>
        </div>
        <div style={{ margin: "0px 12px" }}>
          <div className="topSec-res-detail-M">
            <div className="overview-res-detail-M">
              <Scrollspy
                items={[
                  "top-section",
                  "about-section",
                  "menu-section",
                  "rating-review-section",
                ]}
                
                className=""
              >
                <li className={`bottom-color-res-detail-M  ${activeTab == 1 ? 'activeTab' : ''}`} onClick={setTab1}>
                  <a href="#top-section">Overview</a>
                </li>
                <li className={`bottom-color-res-detail-M  ${activeTab == 2 ? 'activeTab' : ''}`} onClick={setTab2}>
                  <a href="#about-section">About</a>
                </li>
                <li className={`bottom-color-res-detail-M  ${activeTab == 3 ? 'activeTab' : ''}`} onClick={setTab3}>
                  <a href="#menu-section">Menu</a>
                </li>
                <li className={`bottom-color-res-detail-M  ${activeTab == 4 ? 'activeTab' : ''}`} onClick={setTab4}>
                  <a href="#rating-review-section">Reviews</a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        center
        closeIcon={closeIcon}
        classNames={{
          root: "detail-page-modal",
          modalAnimationIn: "sortByEnterModalAnimation",
          modalAnimationOut: "sortByLeaveModalAnimation",
        }}
        animationDuration={300}
        styles={{
          modal: {
            verticalAlign: "center",
            width: "100%",
            height: "100%",
            padding: "0px",
            margin: "0px",
          },
        }}
      >
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {/* {restaurants.isPending && <div><Skeleton width={200} height={250}/></div>}
        {restaurants.error && <div>{restaurants.error}</div>} */}
          {/* {restaurants.data && restaurants.data.map((r) => <RestaurentItem key = {r.Id} data = {r}/>)} */}
          <div className="img-slider-modal">
            <img alt="res-img" src={restaurentImage} />
          </div>
          <div className="img-slider-modal">
            <img alt="res-img" src={restaurentImage} />
          </div>
          <div className="img-slider-modal">
            <img alt="res-img" src={restaurentImage} />
          </div>
        </Carousel>
      </Modal>
    </div>
  );
}
