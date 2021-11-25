import React from "react";
import dealsImage from "../images/near_me.png";

export default function WhyBookItem() {
  return (
    <div className="div-for-why-book-boxes">
      {/* 1st-Box */}

      <div className="div-box-why-book">
        <div className="box-why-book">
          {/* img-box */}
          <div className="slide-img-why-book">
            <img alt="1" src={dealsImage} />
          </div>
          {/* detail-box */}
          <div className="detail-box-why-book">
            {/* details */}
            <div className="type-why-book">
              <a href="#abc" className="text-why-book">
                Find the best places to eat
              </a>
              <span className="discount-details-why-book">
                4.3 million restaurants - everything from street food to fine
                dining
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd-Box */}

      <div className="div-box-why-book">
        <div className="box-why-book">
          {/* img-box */}
          <div className="slide-img-why-book">
            {/* <img alt="2" src={dealsImage}/> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 172 172"
              style={{fill:"#000000"}}
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
                style={{mixBlendMode: "normal"}}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <path
                  d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                  fill="#439548"
                ></path>
                <g fill="#ffffff">
                  <path d="M69.67904,22.88138c-3.1225,0.04881 -5.61596,2.61648 -5.5732,5.73907v5.66167c-0.02888,2.0418 1.04387,3.94098 2.80747,4.97031c1.7636,1.02933 3.9448,1.02933 5.7084,0c1.7636,-1.02933 2.83634,-2.92851 2.80747,-4.97031v-5.66167c0.02096,-1.53035 -0.57849,-3.004 -1.66175,-4.08518c-1.08326,-1.08118 -2.55807,-1.67779 -4.08838,-1.65389zM92.41417,28.62045v11.32333c2.0418,0.02888 3.94098,-1.04387 4.97031,-2.80747c1.02933,-1.7636 1.02933,-3.9448 0,-5.7084c-1.02933,-1.7636 -2.92851,-2.83634 -4.97031,-2.80747zM41.45917,51.26712c-3.397,0 -5.66167,2.26467 -5.66167,5.66167v28.30833c0,11.32333 5.66167,28.30833 16.985,33.97h50.955c6.93281,-3.4664 11.72036,-11.18333 14.4085,-19.24082c2.45673,1.3886 5.23918,2.25582 8.23817,2.25582c9.31602,0 16.985,-7.66898 16.985,-16.985c0,-9.31602 -7.66898,-16.985 -16.985,-16.985c-1.9926,0 -3.87869,0.41879 -5.66167,1.06156v-12.3849c0,-3.397 -2.26467,-5.66167 -5.66167,-5.66167zM126.38417,79.57545c3.13965,0 5.66167,2.52202 5.66167,5.66167c0,3.13965 -2.52202,5.66167 -5.66167,5.66167c-3.13965,0 -5.66167,-2.52202 -5.66167,-5.66167c0,-3.13965 2.52202,-5.66167 5.66167,-5.66167zM55.61333,130.53045c-3.397,2.26467 -5.66609,4.52712 -7.36459,6.22562c-2.26467,1.6985 -0.56396,5.09771 2.26688,5.09771h56.05271c2.83083,0 3.96538,-3.39921 2.26688,-5.09771c-1.6985,-1.6985 -4.53155,-3.96095 -7.92855,-6.22562z"></path>
                </g>
              </g>
            </svg>
          </div>
          {/* detail-box */}
          <div className="detail-box-why-book">
            {/* details */}
            <div className="type-why-book">
              <a href="#abc" className="text-why-book">
                See the latest reviews
              </a>
              <span className="discount-details-why-book">
                Millions of restaurant reviews and photos from our global travel
                community
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd-Box */}

      <div className="div-box-why-book">
        <div className="box-why-book">
          {/* img-box */}
          <div className="slide-img-why-book">
            <img alt="3" src={dealsImage} />
          </div>
          {/* detail-box */}
          <div className="detail-box-why-book">
            {/* details */}
            <div className="type-why-book">
              <a href="#abc" className="text-why-book">
                Reverse a table
              </a>
              <span className="discount-details-why-book">
                Make online reservations at restaurents worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
