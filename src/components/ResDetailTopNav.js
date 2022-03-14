import React from "react";
import { useEffect } from "react";
import '../styles/ResDetailTopNav.css'
import Scrollspy from 'react-scrollspy'

export default function ResDetailTopNav() {

  const Header = () => {
    
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.res-detail-top-nav');
                const scrollTop = window.scrollY;
                scrollTop >= 250 ? header.classList.add('dashboard-res-detail-M-fixed') : header.classList.remove('dashboard-res-detail-M-fixed');
            };  
}
  return (
    <div>
      <section className="res-detail-top-nav">
        <div class="dashboard-res-detail-M" id="scroll-header">
          <img
            src="https://im1.DeaseApp.co.in/images/uploads/restaurant/sharpen/1/w/o/p13437-1635482277617b7aa51ce75.jpg?tr=tr:n-large"
            alt="JW Kitchen"
            title="JW Kitchen"
            class="no-img"
          />
          {/* <div class="back-btn-res-detail-M">
            <a>
              <img
                src="https://im1.DeaseApp.co.in/images/uploads/misc/2021/Feb/5/vector_(3).png"
                alt="DeaseApp"
                title="DeaseApp"
                class="no-img"
              />
            </a>
          </div> */}
          
          
          <div class="right-tools-res-detail-M">
            <ul>
              <li>
                <img
                  src="https://im1.DeaseApp.co.in/images/uploads/misc/2021/Feb/5/vector.png"
                  alt="Share"
                  title="Share"
                  class="no-img"
                  width="15"
                  height="13"
                />
              </li>
              <li class="">
                <img
                  src="https://im1.DeaseApp.co.in/images/uploads/misc/2021/Feb/5/vector_(1).png"
                  alt="Favourite"
                  title="Favourite"
                  width="15"
                  height="13"
                />
              </li>
            </ul>
          </div>
          {/* <div class="rating-res-detail-M">
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
          </div> */}
        </div>
        <div style={{margin:"0px 12px"}}>
        <div className="topSec-res-detail-M">
          <div className="overview-res-detail-M">
            <Scrollspy
        items={ ['top-section', 'about-section', 'menu-section', 'rating-review-section'] }
        currentClassName="activeTab" className="">
              <li className="bottom-color-res-detail-M">
                <a href="#top-section">Overview</a>
              </li>
              <li className=" bottom-color-res-detail-M">
                <a href="#about-section">About</a>
              </li>
              <li className="bottom-color-res-detail-M ">
                <a href="#menu-section">Menu</a>
              </li>
              <li className=" bottom-color-res-detail-M">
                <a href="#rating-review-section">Reviews</a>
              </li>
            </Scrollspy>
          </div>
          
          
        </div>
        </div>
      </section>
    </div>
  );
}
