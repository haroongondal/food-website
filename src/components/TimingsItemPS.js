import React from "react";

export default function TimingsItemPS() {
  return (
    <div>
      <div className="Section-PS-Timings row col-md-12 justify-content-between">
        {/* Days */}
        <div className="width-20">
          <div class="dropdown-PS">
            <select>
              <option class="option">Monday</option>
              <option class="option">Tuesday</option>
              <option class="option">Wednesday</option>
              <option class="option">Thursday</option>
              <option class="option">Friday</option>
              <option class="option">Saturday</option>
              <option class="option">Sunday</option>
            </select>
            <span className="Darrow">
              <img
                alt="down-arrow"
                src="/static/media/down_arrow.5b0512cf.svg"
              />
            </span>
          </div>
        </div>

        {/* Time */}
        <div className="width-20">
          <input
            className="time-input"
            type="time"
            id="appt"
            name="appt"
            placeholder="12:00AM"
          />
        </div>

        {/* Text "to" */}
        <div className="col-md-2 text-center align-self-center">
          <div className="label-PS  mb-0">to</div>
        </div>

        {/* Time */}
        <div className="width-20">
          <input
            className="time-input"
            type="time"
            id="appt"
            name="appt"
            placeholder="12:00AM"
          />
        </div>

        {/* Active / Inactive */}
        <div className="width-20">
          <div class="dropdown-PS">
            <select>
              <option class="option">Active</option>
              <option class="option">Inactive</option>
            </select>
            <span className="Darrow">
              <img
                alt="down-arrow"
                src="/static/media/down_arrow.5b0512cf.svg"
              />
            </span>
          </div>
        </div>

        {/* Dustbin Icon */}
        <div className="width-0 align-self-center">
          <span >
            <svg
            className="dust-bin"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
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
                <g fill="#b5000d">
                  <path d="M86,14.33333c-11.81018,0 -21.5,9.68982 -21.5,21.5h-22.40983c-0.31897,-0.05468 -0.64222,-0.08045 -0.96582,-0.07699c-0.26047,0.0068 -0.52011,0.03253 -0.77685,0.07699h-13.47249c-1.93842,-0.02741 -3.74144,0.99102 -4.71865,2.66532c-0.97721,1.6743 -0.97721,3.74507 0,5.41937c0.97721,1.6743 2.78023,2.69273 4.71865,2.66532h8.95833v91.375c0,10.82086 8.88748,19.70833 19.70833,19.70833h60.91667c10.82086,0 19.70833,-8.88748 19.70833,-19.70833v-91.375h8.95833c1.93842,0.02741 3.74144,-0.99102 4.71865,-2.66532c0.97721,-1.6743 0.97721,-3.74507 0,-5.41937c-0.97721,-1.6743 -2.78023,-2.69273 -4.71865,-2.66532h-13.4515c-0.57703,-0.09479 -1.16565,-0.09479 -1.74268,0h-22.43083c0,-11.81018 -9.68982,-21.5 -21.5,-21.5zM86,25.08333c5.99898,0 10.75,4.75102 10.75,10.75h-21.5c0,-5.99898 4.75102,-10.75 10.75,-10.75zM46.58333,46.58333h78.83333v91.375c0,5.01031 -3.94802,8.95833 -8.95833,8.95833h-60.91667c-5.01031,0 -8.95833,-3.94802 -8.95833,-8.95833zM73.37435,64.42302c-2.96578,0.04633 -5.33356,2.48614 -5.29101,5.45198v53.75c-0.02741,1.93842 0.99102,3.74144 2.66532,4.71865c1.6743,0.97721 3.74507,0.97721 5.41937,0c1.6743,-0.97721 2.69273,-2.78023 2.66532,-4.71865v-53.75c0.02085,-1.45347 -0.54782,-2.85342 -1.57635,-3.88062c-1.02852,-1.0272 -2.4292,-1.59408 -3.88264,-1.57136zM98.45768,64.42302c-2.96578,0.04633 -5.33356,2.48614 -5.29101,5.45198v53.75c-0.02741,1.93842 0.99102,3.74144 2.66532,4.71865c1.6743,0.97721 3.74507,0.97721 5.41937,0c1.6743,-0.97721 2.69273,-2.78023 2.66532,-4.71865v-53.75c0.02085,-1.45347 -0.54782,-2.85342 -1.57635,-3.88062c-1.02852,-1.0272 -2.4292,-1.59408 -3.88264,-1.57136z"></path>
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
