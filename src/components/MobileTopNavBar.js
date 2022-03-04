import React from "react";
import { useState } from "react";
import '../styles/MobileTopNavBar.css'
import profile from '../images/profile_pic.jpg'


export default function MobileTopNavBar() {

  return (
    <div>
      <div className="topNavBar-M">
        <div className="align-topNavBar-M">
          <div className="upSec-topNavBar-M">
            <div className="location-topNavBar-M">
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
            <div className="rightSec-topNavBar-M">
              <div className="qrCode-topNavBar-M">
                <a href="/scan_qr_to_pay" aria-label="Scan QR">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M1.46484 1.46484H5.85938V0H0V5.85938H1.46484V1.46484Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M19.1406 0V1.46484H23.5352V5.85938H25V0H19.1406Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M23.5352 23.5352H19.1406V25H25V19.1406H23.5352V23.5352Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M1.46484 19.1406H0V25H5.85938V23.5352H1.46484V19.1406Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M2.97852 2.92969V10.2539H10.3027V5.85938H11.7676V4.39453H10.3027V2.92969H2.97852ZM8.83789 8.78906H4.44336V4.39453H8.83789V8.78906Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M22.0215 21.9727V14.6484H19.0918V13.1836H17.627V14.6484H13.2324V16.1133H14.6973V17.5781H13.2324V19.043H14.6973V21.9727H22.0215ZM16.1621 16.1133H20.5566V20.5078H16.1621V16.1133Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M7.37305 13.1836H10.3027V11.7188H2.97852V13.1836H5.9082V14.6484H4.44336V16.1133H5.9082V19.043H4.44336V20.5078H5.9082V21.9727H13.2324V20.5078H11.7676V19.043H10.3027V20.5078H7.37305V19.043H8.83789V17.5781H7.37305V13.1836Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M5.9082 5.85938H7.37305V7.32422H5.9082V5.85938Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M17.627 5.85938H19.0918V7.32422H17.627V5.85938Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M19.0918 10.2539H22.0215V2.92969H14.6973V10.2539H17.627V11.7188H19.0918V10.2539ZM16.1621 8.78906V4.39453H20.5566V8.78906H16.1621Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M22.0215 13.1836V11.7188C21.6671 11.7188 19.4487 11.7188 19.0918 11.7188V13.1836H22.0215Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M17.627 17.5781H19.0918V19.043H17.627V17.5781Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M11.7676 16.1133H13.2324V17.5781H11.7676V16.1133Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M8.83789 17.5781H10.3027C10.3027 17.2237 10.3027 15.0053 10.3027 14.6484H8.83789V17.5781Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M10.3027 13.1836H11.7676V14.6484H10.3027V13.1836Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M4.44336 16.1133H2.97852V19.043H4.44336C4.44336 18.6886 4.44336 16.4701 4.44336 16.1133Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M2.97852 20.5078H4.44336V21.9727H2.97852V20.5078Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M11.7676 2.92969H13.2324V4.39453H11.7676V2.92969Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M11.7676 8.78906H13.2324C13.2324 8.43468 13.2324 6.21624 13.2324 5.85938H11.7676V8.78906Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M13.2324 11.7188V10.2539H11.7676V13.1836H17.627V11.7188H13.2324Z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="profileImage-topNavBar-M">
                <img alt="user-pic" src={profile} />
              </div>
            </div>
          </div>
          {/* <div className="search-topNavBar-M" onClick={handleSearchPop}>
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
            <span>Search anything...</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
