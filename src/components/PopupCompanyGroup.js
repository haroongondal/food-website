import React from "react";
import "../styles/PopupCompanyGroup.css";

export default function PopupCompanyGroup() {
  return (
    <div>
      <div className="border-popup-city">
        {/* Company-Group-Name */}
        <div className="dropDown-block">
          <span className="label-dropDown-block">
            Please enter a Company Group name
          </span>
          <div className="dropDown-item" id="margin-10-T">
            <div className="border-dropDown-block">
              <div className="content-dropDown">
                <form action="#" className="form-dropDown">
                  <div className="form-input-dropDown">
                    <input type="search" placeholder="Enter Company Group" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="dropDown-block mt-4 mb-4">
          <span className="label-dropDown-block">Add Logo</span>
          <div className="border-dropDown-block" id="margin-10-T">
            <div className="content-dropDown">
              <div className="block-border">
                <h6>Upload logo</h6>
              </div>
              <span className="border-upload-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                  className="svg-upload"
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
                      <path d="M85.92302,21.5c-1.39872,0.02045 -2.73437,0.58534 -3.72331,1.57471l-21.5,21.5c-1.40412,1.34815 -1.96971,3.35005 -1.47866,5.23364c0.49105,1.88359 1.96202,3.35456 3.84561,3.84561c1.88359,0.49105 3.88549,-0.07455 5.23364,-1.47866l12.32471,-12.32471v76.60775c-0.02741,1.93842 0.99102,3.74144 2.66532,4.71865c1.6743,0.97721 3.74507,0.97721 5.41937,0c1.6743,-0.97721 2.69273,-2.78023 2.66532,-4.71865v-76.60775l12.32471,12.32471c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-21.5,-21.5c-1.02666,-1.02708 -2.4252,-1.59508 -3.87728,-1.57471zM41.20833,60.91667c-10.82086,0 -19.70833,8.88748 -19.70833,19.70833v50.16667c0,10.82086 8.88748,19.70833 19.70833,19.70833h89.58333c10.82086,0 19.70833,-8.88748 19.70833,-19.70833v-50.16667c0,-10.82086 -8.88748,-19.70833 -19.70833,-19.70833h-7.16667c-1.93842,-0.02741 -3.74144,0.99102 -4.71865,2.66532c-0.97721,1.6743 -0.97721,3.74507 0,5.41937c0.97721,1.6743 2.78023,2.69273 4.71865,2.66532h7.16667c5.01031,0 8.95833,3.94802 8.95833,8.95833v50.16667c0,5.01031 -3.94802,8.95833 -8.95833,8.95833h-89.58333c-5.01031,0 -8.95833,-3.94802 -8.95833,-8.95833v-50.16667c0,-5.01031 3.94802,-8.95833 8.95833,-8.95833h7.16667c1.93842,0.02741 3.74144,-0.99102 4.71865,-2.66532c0.97721,-1.6743 0.97721,-3.74507 0,-5.41937c-0.97721,-1.6743 -2.78023,-2.69273 -4.71865,-2.66532z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="dropDown-block">
          <span className="label-dropDown-block">Or</span>
          <div className="dropDown-item" id="margin-10-T">
            <div className="border-dropDown-block">
              <div className="content-dropDown">
                <form action="#" className="form-dropDown">
                  <div className="form-input-dropDown">
                    <input type="search" placeholder="Enter image url" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-2 pr-0">
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
