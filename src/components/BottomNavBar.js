import React from "react";
import "../styles/BottomNavBar.css";

export default function BottomNavBar() {
  return (
    <div>
      <div className="bottom-navBar">
        <ul>
          <li>
            <a href="/?hometype=home" aria-label="Home">
            <i className='bx bx-home-smile'></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/bangalore/dineout-passport" aria-label="Passport">
            <i className='bx bx-podcast'></i>
              <span>
                Passport
              </span>
            </a>
          </li>
          <li className="">
            <a href aria-label="predictandWin">
            <i className='bx bx-tennis-ball center-top-box'></i>
              <span className=" "></span>
            </a>
          </li>
          <li>
            <a href="https://dineout.co.in/blog/bangalore" aria-label="Blog">
            <i className='bx bx-message-square-dots'></i>
              <span>
                Blog
              </span>
            </a>
          </li>
          <li>
            <a href="/bangalore-stories" aria-label="Stories">
            <i className='bx bx-video'></i>
              <span>
                Stories
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
