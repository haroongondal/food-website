import React from "react";
import "../styles/PopupMenu.css";
import arrow from "../images/down_arrow.svg";
import addImage from "../images/add-image.png";
import { useState } from "react/cjs/react.development";
import EditSvgIcon from "./EditSvgIcon";
import CancelSvgIcon from "./CancelSvgIcon";
import ImageUpload from "image-upload-react";
import { findByLabelText } from "@testing-library/dom";

function PopupMenu() {
  const [image, setImage] = useState(addImage);

  const OnImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [imageSrc, setImageSrc] = useState();

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className="title-popup">
        <h6>Add Something</h6>
      </div>

      {/* Edit-text-Item-Name */}
      <div className="ET-item-name">
        <div className="border-back">
          <div className="dropDown">
            <div className="dropDown-item">
              <div className="border-dropDown-add-menu">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter item name" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text-Item-Name */}
      {/* <div className="border-back">
        <h6 className="item-name">Hara Bhara kehbab</h6>
      </div> */}

      {/* Category */}
      {/* <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "105px" }}>
              Category
            </span>
            <div className="border-dropDown-add-menu">
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
        </div>
      </div> */}

      {/* Food-Type */}
      <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "87px" }}>
              Food Type
            </span>
            <div className="content-dropDown">
              <button className="egg-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                  className="svg-edit"
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
                    <g fill="#000000">
                      <path d="M86,16.125c-16.125,0 -30.6375,12.3625 -41.3875,27.95c-10.75,15.5875 -17.7375,34.9375 -17.7375,52.675c0,18.8125 6.45,33.8625 17.2,44.075c11.2875,9.675 25.8,15.05 41.925,15.05c16.125,0 30.6375,-4.8375 41.925,-15.05c11.2875,-10.2125 17.2,-25.2625 17.2,-44.075c0,-17.7375 -6.9875,-37.0875 -17.7375,-52.675c-10.75,-15.5875 -25.2625,-27.95 -41.3875,-27.95zM86,26.875c10.2125,0 22.575,9.1375 32.25,23.1125c9.675,13.975 16.125,32.25 16.125,46.7625c0,16.6625 -5.375,28.4875 -13.975,36.0125c-8.6,8.0625 -20.425,12.3625 -34.4,12.3625c-13.975,0 -25.8,-4.3 -34.4,-12.3625c-8.6,-8.0625 -13.975,-19.8875 -13.975,-36.0125c0,-15.05 6.45,-32.7875 16.125,-46.7625c9.675,-13.975 22.0375,-23.1125 32.25,-23.1125z"></path>
                    </g>
                  </g>
                </svg>
                Egg
              </button>

              <button className="veg-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                  className="svg-edit-veg"
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
                    <g fill="#000000">
                      <path d="M30.96,13.76c-9.45834,0 -17.2,7.74166 -17.2,17.2v110.08c0,9.45834 7.74166,17.2 17.2,17.2h110.08c9.45834,0 17.2,-7.74166 17.2,-17.2v-110.08c0,-9.45834 -7.74166,-17.2 -17.2,-17.2zM30.96,20.64h3.44c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0.03896 3.47159,-1.46959 3.51055,-3.36945c0.03896,-1.89986 -1.46959,-3.47159 -3.36945,-3.51055h20.4989c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0.03896 3.47159,-1.46959 3.51055,-3.36945c0.03896,-1.89986 -1.46959,-3.47159 -3.36945,-3.51055h20.4989c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0.03896 3.47159,-1.46959 3.51055,-3.36945c0.03896,-1.89986 -1.46959,-3.47159 -3.36945,-3.51055h20.4989c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0.03896 3.47159,-1.46959 3.51055,-3.36945c0.03896,-1.89986 -1.46959,-3.47159 -3.36945,-3.51055h20.4989c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0.03896 3.47159,-1.46959 3.51055,-3.36945c0.03896,-1.89986 -1.46959,-3.47159 -3.36945,-3.51055h20.4989c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0.03896 3.47159,-1.46959 3.51055,-3.36945c0.03896,-1.89986 -1.46959,-3.47159 -3.36945,-3.51055h3.2989c5.73958,0 10.32,4.58042 10.32,10.32v3.33922v20.64v20.64v20.64v20.64v20.64v3.54078c0,5.73958 -4.58042,10.32 -10.32,10.32h-3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-1.89986,-0.03896 -3.47159,1.46959 -3.51055,3.36945c-0.03896,1.89986 1.46959,3.47159 3.36945,3.51055h-20.4989c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-1.89986,-0.03896 -3.47159,1.46959 -3.51055,3.36945c-0.03896,1.89986 1.46959,3.47159 3.36945,3.51055h-20.4989c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-1.89986,-0.03896 -3.47159,1.46959 -3.51055,3.36945c-0.03896,1.89986 1.46959,3.47159 3.36945,3.51055h-20.4989c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-1.89986,-0.03896 -3.47159,1.46959 -3.51055,3.36945c-0.03896,1.89986 1.46959,3.47159 3.36945,3.51055h-20.4989c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-1.89986,-0.03896 -3.47159,1.46959 -3.51055,3.36945c-0.03896,1.89986 1.46959,3.47159 3.36945,3.51055h-20.4989c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-1.89986,-0.03896 -3.47158,1.46959 -3.51055,3.36945c-0.03896,1.89986 1.46959,3.47158 3.36945,3.51055h-3.29891c-5.73958,0 -10.32,-4.58042 -10.32,-10.32v-3.33922v-20.64v-20.64v-20.64v-20.64v-20.64v-3.54078c0,-5.73958 4.58042,-10.32 10.32,-10.32zM20.64,34.50078c0.05453,1.86039 1.57881,3.34002 3.44,3.33922c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-0.93008,-0.0004 -1.82068,0.37583 -2.46878,1.04292c-0.6481,0.66709 -0.99846,1.56818 -0.97122,2.49786zM20.64,55.14078c0.05453,1.86039 1.57881,3.34002 3.44,3.33922c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-0.93008,-0.0004 -1.82068,0.37583 -2.46878,1.04292c-0.6481,0.66709 -0.99846,1.56818 -0.97122,2.49786zM20.64,75.78078c0.05453,1.86039 1.57881,3.34002 3.44,3.33922c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-0.93008,-0.0004 -1.82068,0.37583 -2.46878,1.04292c-0.6481,0.66709 -0.99846,1.56818 -0.97122,2.49786zM20.64,96.42078c0.05453,1.86039 1.57881,3.34002 3.44,3.33922c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-0.93008,-0.0004 -1.82068,0.37583 -2.46878,1.04292c-0.6481,0.66709 -0.99846,1.56818 -0.97122,2.49786zM20.64,117.06078c0.05453,1.86039 1.57881,3.34002 3.44,3.33922c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-0.93008,-0.0004 -1.82068,0.37583 -2.46878,1.04292c-0.6481,0.66709 -0.99846,1.56818 -0.97122,2.49786zM20.64,137.70078c0.05453,1.86039 1.57881,3.34002 3.44,3.33922c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44c-0.93008,-0.0004 -1.82068,0.37583 -2.46878,1.04292c-0.6481,0.66709 -0.99846,1.56818 -0.97122,2.49786zM151.36,137.49922c-0.05453,-1.86039 -1.57881,-3.34002 -3.44,-3.33922c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c0.93008,0.0004 1.82068,-0.37583 2.46878,-1.04292c0.6481,-0.66709 0.99846,-1.56818 0.97122,-2.49786zM151.36,116.85922c-0.05453,-1.86039 -1.57881,-3.34002 -3.44,-3.33922c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c0.93008,0.0004 1.82068,-0.37583 2.46878,-1.04292c0.6481,-0.66709 0.99846,-1.56818 0.97122,-2.49786zM151.36,96.21922c-0.05453,-1.86039 -1.57881,-3.34002 -3.44,-3.33922c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c0.93008,0.0004 1.82068,-0.37583 2.46878,-1.04292c0.6481,-0.66709 0.99846,-1.56818 0.97122,-2.49786zM151.36,75.57922c-0.05453,-1.86039 -1.57881,-3.34002 -3.44,-3.33922c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c0.93008,0.0004 1.82068,-0.37583 2.46878,-1.04292c0.6481,-0.66709 0.99846,-1.56818 0.97122,-2.49786zM151.36,54.93922c-0.05453,-1.86039 -1.57881,-3.34002 -3.44,-3.33922c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c0.93008,0.0004 1.82068,-0.37583 2.46878,-1.04292c0.6481,-0.66709 0.99846,-1.56818 0.97122,-2.49786zM151.36,34.29922c-0.05453,-1.86039 -1.57881,-3.34002 -3.44,-3.33922c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c0.93008,0.0004 1.82068,-0.37583 2.46878,-1.04292c0.6481,-0.66709 0.99846,-1.56818 0.97122,-2.49786zM44.72,30.96c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,30.96c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,30.96c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM106.64,30.96c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM127.28,30.96c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,41.28c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM55.04,41.28c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,41.28c-24.65626,0 -44.72,20.06374 -44.72,44.72c0,24.65626 20.06374,44.72 44.72,44.72c24.65626,0 44.72,-20.06374 44.72,-44.72c0,-24.65626 -20.06374,-44.72 -44.72,-44.72zM116.96,41.28c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM137.6,41.28c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,48.16c20.9375,0 37.84,16.9025 37.84,37.84c0,20.9375 -16.9025,37.84 -37.84,37.84c-20.9375,0 -37.84,-16.9025 -37.84,-37.84c0,-20.9375 16.9025,-37.84 37.84,-37.84zM44.72,51.6c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM127.28,51.6c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,61.92c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM137.6,61.92c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,82.56c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM137.6,82.56c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,103.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM137.6,103.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM44.72,113.52c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM127.28,113.52c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM34.4,123.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM55.04,123.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM116.96,123.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM137.6,123.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM44.72,134.16c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,134.16c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,134.16c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM106.64,134.16c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM127.28,134.16c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z"></path>
                    </g>
                  </g>
                </svg>
                Veg
              </button>

              <button className="non-veg-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                  className="svg-edit-veg"
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
                    <g fill="#000000">
                      <path d="M30.96,13.76c-9.45834,0 -17.2,7.74166 -17.2,17.2v110.08c0,9.45834 7.74166,17.2 17.2,17.2h110.08c9.45834,0 17.2,-7.74166 17.2,-17.2v-110.08c0,-9.45834 -7.74166,-17.2 -17.2,-17.2zM30.96,20.64h110.08c5.73958,0 10.32,4.58042 10.32,10.32v110.08c0,5.73958 -4.58042,10.32 -10.32,10.32h-110.08c-5.73958,0 -10.32,-4.58042 -10.32,-10.32v-110.08c0,-5.73958 4.58042,-10.32 10.32,-10.32zM86,41.28c-24.65626,0 -44.72,20.06374 -44.72,44.72c0,24.65626 20.06374,44.72 44.72,44.72c24.65626,0 44.72,-20.06374 44.72,-44.72c0,-24.65626 -20.06374,-44.72 -44.72,-44.72zM86,48.16c20.9375,0 37.84,16.9025 37.84,37.84c0,20.9375 -16.9025,37.84 -37.84,37.84c-20.9375,0 -37.84,-16.9025 -37.84,-37.84c0,-20.9375 16.9025,-37.84 37.84,-37.84zM75.68,51.6c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM96.32,51.6c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,61.92c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,61.92c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM106.64,61.92c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM55.04,72.24c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM75.68,72.24c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM96.32,72.24c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM116.96,72.24c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,82.56c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,82.56c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM106.64,82.56c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM55.04,92.88c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM75.68,92.88c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM96.32,92.88c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM116.96,92.88c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM65.36,103.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM86,103.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM106.64,103.2c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM75.68,113.52c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM96.32,113.52c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z"></path>
                    </g>
                  </g>
                </svg>
                Non-Veg
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service-Type */}
      <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "79px" }}>
              Service Type
            </span>

            <div className="checkBox-menu">
              <label className="main-popup-menu">
                <h6 className="text-dineout-popup-menu">Delivery</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-menu"></span>
              </label>
            </div>

            <div className="checkBox-menu">
              <label className="main-popup-menu">
                <h6 className="text-dineout-popup-menu">Takeaway</h6>
                <input type="checkbox" />
                <span className="w3docs-popup-menu"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "56px" }}>
              Pricing
            </span>
          </div>
          <div className="dropDown-item-Pricing">
            <span
              className="label-dropDown"
              style={{ marginRight: "16px", fontSize: "11px" }}
            >
              Base Price
            </span>
            <div className="content-dropDown">
              <div className="border-PK">
                <h6 className="text-PK">PK</h6>
              </div>
              <form
                action="#"
                className="form-dropDown"
                style={{ maxWidth: "177px", textAlignLast: "center" }}
              >
                <div className="form-input-PK">
                  <input type="search" placeholder="250" />
                </div>
              </form>
            </div>
          </div>

          <div className="dropDown-item-Pricing">
            <span
              className="label-dropDown"
              style={{ marginRight: "16px", fontSize: "11px" }}
            >
              Terms & Charges
            </span>
            <div className="content-dropDown">
              <div className="dropDown-item">
                <div className="border-dropDown-T-and-C">
                  <div className="content-dropDown">
                    <select className="Tax-DD">
                      <option className="option">Taxes</option>
                      <option className="option">Taxes</option>
                      <option className="option">Taxes</option>
                    </select>
                    <span>
                      <img alt="down-arrow" src={arrow} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="dropDown-item">
                <div className="border-dropDown-T-and-C">
                  <div className="content-dropDown">
                    <select className="Charges-DD">
                      <option className="option">Charges</option>
                      <option className="option">Charges</option>
                      <option className="option">Charges</option>
                    </select>
                    <span>
                      <img alt="down-arrow" src={arrow} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Timings */}
      {/* <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "9px" }}>
              Menu Timings
            </span>
          </div>
          <div className="menu-timings">
            <div className="title-menu-timings">
              <span>Dining</span>
            </div>
            <hr className="line-menu-timings" />
            <div className="content-menu-timings">
              <div>
                <input
                  type="radio"
                  id="restaurant-timings"
                  name="menu-timings"
                  value="restaurant-timings"
                />
                <span className="subtitle-menu-timings">
                  Same as restaurant timings
                </span>
              </div>
              <span className="details-menu-timings">
                Restaurant timings (10:30 -19:00)
              </span>
            </div>
            <hr className="line-menu-timings" />
            <div className="content-menu-timings">
              <div>
                <input
                  type="radio"
                  id="customize-timings"
                  name="menu-timings"
                  value="customize-timings"
                />
                <span className="subtitle-menu-timings">
                  Customize launch timings
                </span>
              </div>
              <div>
                <span
                  className="details-menu-timings-Custom"
                  style={{ borderRight: "1px solid #0000003d" }}
                >
                  Mon - Fri 12:30 pm - 3:30 pm
                </span>
                <span className="details-menu-timings-Custom">
                  Sat - Sun 12:00 pm - 3:00 pm
                </span>
              </div>
            </div>
            <hr className="line-menu-timings" />
            <div className="content-menu-timings">
              <div className="allDay-radio-btns">
                <div>
                  <input
                    type="radio"
                    id="all-days"
                    name="menu-timings"
                    value="all-days"
                  />
                  <span className="subtitle-menu-timings">All Days</span>
                </div>
                <div>
                  <input
                    type="radio"
                    id="select-dates"
                    name="menu-timings"
                    value="select-dates"
                  />
                  <span className="subtitle-menu-timings">Select Dates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Menu Description */}
      <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "-14px" }}>
              Menu Description
            </span>
          </div>
          <textarea
            placeholder="Remember, be nice!"
            className="menu-textArea"
            rows="6"
            cols="95"
          ></textarea>
        </div>
      </div>

      {/* Image */}
      <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "-9px" }}>
              Image
            </span>
          </div>
          <div className="image-video">
            <div className="image-btn-menu">
              <div className="image-menu">
                <img src={image} alt="fileImage" />
              </div>
              <input
                className="image-input-menu"
                type="file"
                onChange={OnImageChange}
              />
            </div>

            <ImageUpload
              handleImageSelect={handleImageSelect}
              imageSrc={imageSrc}
              setImageSrc={setImageSrc}
              style={{
                width: 170,
                height: 110,
                background: "grey",
                display: "flex",
                marginTop: "0px",
                borderRadius: "5px",
              }}
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                viewBox="0 0 226 226"
                style={{ fill: "#000000" }}
                className="svg-img-vid"
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
                  <path d="M0,226v-226h226v226z" fill="none"></path>
                  <g fill="#06386c">
                    <path d="M37.66667,37.66667c-10.29301,0 -18.83333,8.54033 -18.83333,18.83333v113c0,10.29301 8.54033,18.83333 18.83333,18.83333h75.33333v-18.83333h-75.33333v-113h150.66667v56.5h18.83333v-56.5c0,-10.29301 -8.54032,-18.83333 -18.83333,-18.83333zM136.54167,103.58333l-32.95833,37.66667l-23.54167,-23.54167l-25.63835,32.95833h96.26335v-28.25zM169.5,131.83333v37.66667h-37.66667v18.83333h37.66667v37.66667h18.83333v-37.66667h37.66667v-18.83333h-37.66667v-37.66667z"></path>
                  </g>
                </g>
              </svg> */}

            <button className="btn-img-vid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                viewBox="0 0 226 226"
                style={{ fill: "#000000" }}
                className="svg-img-vid"
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
                  <path d="M0,226v-226h226v226z" fill="none"></path>
                  <g fill="#06386c">
                    <path d="M37.66667,37.66667c-10.29301,0 -18.83333,8.54033 -18.83333,18.83333v113c0,10.29301 8.54033,18.83333 18.83333,18.83333h75.33333v-18.83333h-75.33333v-113h150.66667v56.5h18.83333v-56.5c0,-10.29301 -8.54032,-18.83333 -18.83333,-18.83333zM136.54167,103.58333l-32.95833,37.66667l-23.54167,-23.54167l-25.63835,32.95833h96.26335v-28.25zM169.5,131.83333v37.66667h-37.66667v18.83333h37.66667v37.66667h18.83333v-37.66667h37.66667v-18.83333h-37.66667v-37.66667z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dish Details */}
      <div className="border-back">
        <div className="dropDown">
          <div className="dropDown-item">
            <span className="label-dropDown" style={{ marginRight: "9px" }}>
              Dish Details
            </span>
          </div>
          <div>
            {/* Category */}
            {/* <div className="dropDown-item-Pricing">
              <span
                className="label-dropDown"
                style={{ marginRight: "16px", fontSize: "11px" }}
              >
                Category
              </span>
              <div className="border-dropDown-add-menu">
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
            </div> */}

            {/* Service Info */}
            <div className="section-service-info">
              {/* <div className="dropDown-item-Pricing">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "16px", fontSize: "11px" }}
                >
                  Service Info
                </span>
                <div className="border-dropDown-add-menu">
                  <div className="content-dropDown">
                    <select>
                      <option className="option">services</option>
                      <option className="option">services</option>
                      <option className="option">services</option>
                    </select>
                    <span>
                      <img alt="down-arrow" src={arrow} />
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="dropDown-item-Pricing">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "16px", fontSize: "11px" }}
                >
                  Calorie Count
                </span>
                <div className="content-dropDown">
                  <form
                    action="#"
                    className="form-calorie"
                    style={{ textAlignLast: "center" }}
                  >
                    <div className="form-input-calorie">
                      <input type="search" />
                    </div>
                  </form>
                  <div className="border-calorie">
                    <h6 className="text-PK">kCal</h6>
                  </div>
                </div>
              </div>
              <div className="dropDown-item-Pricing">
                <span
                  className="label-dropDown"
                  style={{ marginRight: "16px", fontSize: "11px" }}
                >
                  Portion Size
                </span>
                <div className="content-dropDown">
                  <form
                    action="#"
                    className="form-calorie"
                    style={{ textAlignLast: "center" }}
                  >
                    <div className="form-input-calorie">
                      <input type="search" />
                    </div>
                  </form>
                  <div className="border-portion-size-DD">
                    <div className="content-dropDown-portion-size">
                      <select className="select-portion-size">
                        <option className="option">ml</option>
                        <option className="option">ml</option>
                        <option className="option">ml</option>
                      </select>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="50"
                          height="50"
                          viewBox="0 0 172 172"
                          style={{ fill: "#000000" }}
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
                            <g fill="#ffffff">
                              <path d="M136.09668,64.40202c-1.89036,0.04469 -3.68647,0.83458 -4.99707,2.19759l-45.09961,45.09961l-45.09961,-45.09961c-1.34928,-1.38698 -3.20203,-2.16948 -5.13704,-2.1696c-2.91628,0.00077 -5.54133,1.76841 -6.6387,4.47035c-1.09737,2.70194 -0.44825,5.79937 1.64163,7.83336l50.16667,50.16667c2.7988,2.79764 7.33531,2.79764 10.13411,0l50.16667,-50.16667c2.13023,-2.04844 2.78476,-5.19437 1.64831,-7.92247c-1.13645,-2.72809 -3.83085,-4.47896 -6.78536,-4.40924z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Time */}
            <div className="dropDown-item-Pricing">
              <span
                className="label-dropDown"
                style={{ marginRight: "16px", fontSize: "11px" }}
              >
                Preparation Time
              </span>
              <div className="border-dropDown-add-menu">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Add time</option>
                    <option className="option">Add time</option>
                    <option className="option">Add time</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>

            {/* Drinks */}
            <div className="drinks">
              <span
                className="label-dropDown"
                style={{ marginRight: "16px", fontSize: "11px" }}
              >
                Drinks
              </span>
              <div className="align-content-drinks">
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Coke</button>
                </div>
              </div>
            </div>

            {/* Spice Level */}
            <div className="drinks">
              <span
                className="label-dropDown"
                style={{ marginRight: "16px", fontSize: "11px" }}
              >
                Spice Level
              </span>
              <div className="align-content-drinks">
                <div className="content-dropDown">
                  <button className="drinks-btn">Medium Spicy</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Mild</button>
                </div>
                <div className="content-dropDown">
                  <button className="drinks-btn">Very Spicy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-2 pr-0 justify-content-center">
          <button
            type="submit"
            className="blue-btn"
            style={{ marginRight: "20px" }}
          >
            Save
          </button>
          <button className="green-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PopupMenu;
