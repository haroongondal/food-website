import React from "react";
import { useState } from "react";
import arrow from "../images/down_arrow.svg";
import "../styles/PopupNewOutlet.css";
// import ImageUpload from "image-upload-react";
import ImageUploader from "react-images-upload";
import PopupSelectCuisine from "../components/PopupSelectCuisine";
import PopupSelectFeatures from "../components/PopupSelectFeatures";
import { ForDevice } from "media-query-react";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";

function AddOutletItem(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [gstn, setGstn] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [area, setArea] = useState("");
  const [logitude, setLogitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [imgFracade, setImgFracade] = useState("");
  const [imgKitchen, setImgKitchen] = useState("");
  const [imgDinning, setImgDinning] = useState("");
  const [imgLocality, setImgLocality] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    {
      const values = {
        Id: 0,
        RestaurantName: null,
        OwnerName: null,
        PrimaryLocation: null,
        //
        PhoneNumber: phoneNo,
        //
        Email: email,
        //
        CityId: 2,
        //
        WebSiteLink: null,
        NoOfOutlets: 0,
        //
        EstablishmentTypeId: 2,
        //
        PrimaryAreaOfOutlet: area,
        //
        HomeDelivery: "Yes",
        //
        CostOfTwo: 200.0,
        //
        RegistrationDate: null,
        //
        // ShopLicense: imgLicence.split(",")[1],
        Fssai: null,
        Tin: null,
        FracadeImageStringBase64: null,
        KitchenImageStringBase64: null,
        DinningImageStringBase64: null,
        LocalityImageStringBase64: null,
        UserId: 1,
        IsActive: true,
        //
        CusinesCSV: null,
        //
        IsFeature: false,
        //
        ListOfRestaurantCusine: null,
        //
        ListOfRestaurantTags: null,
        //
        ListOfRestaurantFeature: null,
        //
        RestaurantCusine: null,
        //
        Longitude: 200.0,
        Latitude: 200.0,
        Distance: 200.0,
        UnitOfLength: null,
        Description: null,
        ListOfWorkingDays: null,
        UserReviews: null,
        NoOfReview: 0,
        //
        AverageRating: 200.0,
        //
        NoOfOrders: 0,
        //
        // RestaurantOwnerIDFrontStringBase64: imgFront.split(",")[1],
        // RestaurantOwnerIDBackStringBase64: imgBack.split(",")[1],
        ParentId: 0,
        //
        IsBlocked: false,
        //
        ResponseCode: 0,
        ResponseMessage: null,
      };
      console.log(values);
      // Please Add Link of API

      fetch("https://api.masairapp.com/api/Restaurant/PostRestaurantInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify(values),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data);
          if (!data.ResponseMessage) {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // ------Images-Handles------

  const uploadImageFracade = async (e) => {
    const file = e[e.length - 1];
    const base64 = await convertBase64(file);
    setImgFracade(base64);
  };

  const uploadImageKitchen = async (e) => {
    const file = e[e.length - 1];
    const base64 = await convertBase64(file);
    setImgKitchen(base64);
  };

  const uploadImageDinning = async (e) => {
    const file = e[e.length - 1];
    const base64 = await convertBase64(file);
    setImgDinning(base64);
  };

  const uploadImageLocality = async (e) => {
    const file = e[e.length - 1];
    const base64 = await convertBase64(file);
    setImgLocality(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [isSelectCuisineShowing, setSelectCuisineShowing] = useState(false);
  const [desc, setDesc] = useState("");
  const [takeAway, setTakeAway] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [cafe, setCafe] = useState(false);
  const [restaurent, setRestaurent] = useState(false);
  const closeIcon = <CancelSvgIcon />;

  const handleSelectCuisinePop = (e) => {
    e.preventDefault();
    setSelectCuisineShowing(true);
  };

  const closeSelectCuisinePop = () => {
    setSelectCuisineShowing(false);
  };

  // Popup Select-Features
  const [isSelectFeaturesShowing, setSelectFeaturesShowing] = useState(false);

  const handleSelectFeaturesPop = (e) => {
    e.preventDefault();
    setSelectFeaturesShowing(true);
  };

  const closeSelectFeaturesPop = () => {
    setSelectFeaturesShowing(false);
  };
  const [averagePrice, setAveragePrice] = useState("");

  const [restName, setRestName] = useState("");

  return (
    <div className="add-outlet-item">
      {/* <div className="title-popup">
        <h6>Add New Outlet</h6>
      </div> */}
      <div className="align-Popup">
        <div
          className="border-popup-city"        >
          {/* Outlet-Name */}
          {/* <div className="dropDown-block">
            <span className="label-dropDown-block">Outlet Name</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter Company Group" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}

          {/* Company */}
          {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Company</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
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
          </div> */}

          {/* Brand */}
          {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Brand</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <select>
                    <option className="option">Brand</option>
                    <option className="option">Brand</option>
                    <option className="option">Brand</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          <div className="align-popOutlet-images">
            {/* Fracade Image */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Fracade Image</span>
              <div className="dropDown-item" id="margin-10-T">
                {/* <ImageUpload
                  handleImageSelect={uploadImageFracade}
                  imageSrc={imgFracade}
                  setImageSrc={setImgFracade}
                  style={{
                    width: "100%",
                    height: 130,
                    background: "rgb(6 56 108 / 85%)",
                    display: "flex",
                    marginTop: "0px",
                    borderRadius: "5px",
                  }}
                /> */}
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  onChange={uploadImageFracade}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
            </div>

            {/* Kitchen Image */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Kitchen Image</span>
              <div className="dropDown-item" id="margin-10-T">
                {/* <ImageUpload
                  handleImageSelect={uploadImageKitchen}
                  imageSrc={imgKitchen}
                  setImageSrc={setImgKitchen}
                  style={{
                    width: "100%",
                    height: 130,
                    background: "rgb(6 56 108 / 85%)",
                    display: "flex",
                    marginTop: "0px",
                    borderRadius: "5px",
                  }}
                /> */}
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  onChange={uploadImageKitchen}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
            </div>
          </div>

          <div className="align-popOutlet-images">
            {/* Dinning Image */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Dinning Image</span>
              <div className="dropDown-item" id="margin-10-T">
                {/* <ImageUpload
                handleImageSelect={uploadImageDinning}
                imageSrc={imgDinning}
                setImageSrc={setImgDinning}
                style={{
                  width: "100%",
                  height: 130,
                  background: "rgb(6 56 108 / 85%)",
                  display: "flex",
                  marginTop: "0px",
                  borderRadius: "5px",
                }}
              /> */}
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  onChange={uploadImageDinning}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
            </div>

            {/* Locality Image */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Locality Image</span>
              <div className="dropDown-item" id="margin-10-T">
                {/* <ImageUpload
                handleImageSelect={uploadImageLocality}
                imageSrc={imgLocality}
                setImageSrc={setImgLocality}
                style={{
                  width: "100%",
                  height: 130,
                  background: "rgb(6 56 108 / 85%)",
                  display: "flex",
                  marginTop: "0px",
                  borderRadius: "5px",
                }}
              /> */}
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  onChange={uploadImageLocality}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
            </div>
          </div>
          <div
            className="border-popup-city"
            style={{ borderBottom: "1px solid #00000026" }}
          >
            {/* Email */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Email</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="email"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Password</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="border-popup-city"
            style={{ borderBottom: "1px solid #00000026" }}
          >
            {/* Logo */}
            {/* <div className="dropDown-block">
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
          </div> */}

            {/* Image */}
            {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Or</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter image url" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}

            {/* PIN */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">PIN</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="number"
                          placeholder="Enter PIN"
                          value={pin}
                          onChange={(e) => setPin(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* GSTN */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">GSTN</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="number"
                          placeholder="Enter GSTN"
                          value={gstn}
                          onChange={(e) => setGstn(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-popup-city">
            {/* Address */}
            <div className="dropDown-block">
              <span className="label-dropDown-block">Address</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="text"
                          placeholder="Enter Street Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Phone Number</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="number"
                          placeholder="Enter Phone Number"
                          value={phoneNo}
                          onChange={(e) => setPhoneNo(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Area */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Area</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="text"
                          placeholder="Enter Area"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Logitude */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Logitude</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="email"
                          placeholder="Enter Logitude"
                          value={logitude}
                          onChange={(e) => setLogitude(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Latitude */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Latitude</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="email"
                          placeholder="Enter Latitude"
                          value={latitude}
                          onChange={(e) => setLatitude(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone */}
            {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Zone</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <form action="#" className="form-dropDown-M">
                    <div className="form-input-dropDown">
                      <input type="search" placeholder="Enter Zone" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}

            {/* City */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">City</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <select onChange={(e) => setCity(e.target.value)}>
                      <option className="option">City</option>
                      <option className="option">City</option>
                      <option className="option">City</option>
                    </select>
                    <span>
                      <img alt="down-arrow" src={arrow} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zip/Pincode */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Zip/Pincode</span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="number"
                          placeholder="Enter Zip/Pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant Details */}
            <div
              className="border-back-white"
              id="margin-20-TB"
              style={{ padding: "14px 0px" }}
            >
              <div className="header-PS" style={{ padding: "0px 26px" }}>
                <h6 className="title-header-PS">Restaurant Details</h6>
                <h6 className="title-details-PS">Name, address, location</h6>
              </div>

              <hr />

              {/* Restaurent Name */}
              <div className="Section-PS">
                <div className="col-md-6" id="front-img-padding-R">
                  <div className="label-PS">Enter Restaurent Name</div>
                  <input
                    type="text"
                    placeholder="Restaurent Name"
                    className="input-PS"
                    value={restName}
                    onChange={(e) => setRestName(e.target.value)}
                    required
                  />
                </div>

                {/* Average Price */}
                <div className="col-md-6 margin-top-5" id="back-img-padding-L">
                  <div className="label-PS">Average Price For 2 persons</div>
                  <input
                    type="text"
                    placeholder="2500"
                    className="input-PS"
                    value={averagePrice}
                    onChange={(e) => setAveragePrice(e.target.value)}
                    required
                  />
                </div>

                {/* Restaurent complete address */}
                {/* <div className="col-md-6">
            <div className="label-PS">Enter Restaurent complete address</div>
            <input
              type="text"
              placeholder="Enter Restaurent complete address"
              className="input-PS"
              value={restAddress}
              onChange={(e) => setRestAddress(e.target.value)}
            />
          </div> */}
              </div>

              <div className="Section-PS">
                {/* Select Cuisines */}
                <div
                  className="col-md-6 d-flex align-items-center"
                  id="front-img-padding-R"
                >
                  <button
                    className="select-cuisine-btn"
                    onClick={handleSelectCuisinePop}
                  >
                    Select Cuisines
                  </button>
                </div>

                {/* Select Features */}
                <div
                  className="col-md-6 d-flex align-items-center margin-top-5"
                  id="back-img-padding-L"
                >
                  <button
                    className="select-cuisine-btn"
                    onClick={handleSelectFeaturesPop}
                  >
                    Select Features
                  </button>
                </div>
              </div>

              <div className="Section-PS">
                {/* Delivery Type */}
                <div className="col-md-6" id="front-img-padding-R">
                  <div className="label-PS">Delivery Type</div>
                  <div className="align-CB-PS p-0">
                    <label
                      className="col-md-4 col-5 content-CB-PS"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Take Away</h6>
                      <input
                       type="radio"
                       name="d_type"
                        onChange={(e) => setTakeAway(e.target.checked)}
                      />
                      <span className="checkbox-CB-PS"></span>
                    </label>

                    <label
                      className="col-md-4 col-5 content-CB-PS mx-1"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Home Delivery</h6>
                      <input
                        type="radio"
                        name="d_type"
                        onChange={(e) => setDelivery(e.target.checked)}
                      />
                      <span className="checkbox-CB-PS"></span>
                    </label>
                  </div>
                </div>

                {/* Establishment type */}
                <div className="col-md-6 margin-top-5" id="back-img-padding-L">
                  <div className="label-PS">Establishment type</div>
                  <div className="align-CB-PS p-0">
                    <label
                      className="col-md-4 col-5 content-CB-PS"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Cafe</h6>
                      <input
                        type="radio"
                        name="fav_language"
                        onChange={(e) => setCafe(e.target.checked)}
                      />
                      <span className="checkbox-CB-PS"></span>
                    </label>

                    <label
                      className="col-md-4 content-CB-PS mx-1"
                      style={{ marginLeft: "0px" }}
                    >
                      <h6 className="label-CB-PS">Restaurant</h6>
                      <input
                        type="radio"
                        name="fav_language"
                        onChange={(e) => setRestaurent(e.target.checked)}
                      />
                      <span className="checkbox-CB-PS"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Restaurant Description */}
              <div className="Section-PS">
                <div className="col-md-12">
                  <div className="label-PS">Restaurant Description</div>
                  <textarea
                    placeholder="Remember, be nice!"
                    className="PS-textArea"
                    rows="5"
                    cols="9"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>

              {/* Location */}
              {/* <div className="Section-PS row">
          <div className="col-md-12">
            <div className="label-PS">
              Please place the pin accurately at your outlet’s location on the
              map
            </div>
            <div className="dropdown-PS">
              <input
                type="text"
                placeholder="Enter your restaurant's locality, eg. Sector 43, Gulburg"
                className="input-PS"
              />
              <span className="detect-btn">
                <h6>Detect</h6>
              </span>
            </div>
            <iframe
              style={{ marginTop: "20px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            />
          </div>
        </div> */}

              {/* Co-ordinates */}
              {/* <div className="Section-PS row text-center mb-2">
          <div className="col-md-12">
            <div className="label-PS">Or directly enter the co-ordinates</div>
          </div>
        </div> */}

              {/* <div className="Section-PS row">
          <div className="col-md-6">
            <div className="label-PS">Latitude</div>
            <input type="text" placeholder="Latitude" className="input-PS" />
          </div>

          <div className="col-md-6">
            <div className="label-PS">Logitude</div>
            <input type="text" placeholder="Logitude" className="input-PS" />
          </div>
        </div> */}
            </div>
            {/* Popup Select-Cuisines*/}
            <ForDevice deviceName={["tablet", "desktop"]}>
              <Modal
                open={isSelectCuisineShowing}
                onClose={closeSelectCuisinePop}
                closeIcon={closeIcon}
                center
                styles={{
                  modal: {
                    "margin-top": "80px",
                    "max-width": "535px",
                    width: "100%",
                    padding: "0px",
                    borderRadius: "23px",
                  },
                }}
              >
                <PopupSelectCuisine click={closeSelectCuisinePop} />
              </Modal>
            </ForDevice>

            <ForDevice deviceName="mobile">
              <Modal
                open={isSelectCuisineShowing}
                onClose={closeSelectCuisinePop}
                closeIcon={closeIcon}
                classNames={{
                  modalAnimationIn: "sortByEnterModalAnimation",
                  modalAnimationOut: "sortByLeaveModalAnimation",
                }}
                animationDuration={800}
                center
                styles={{
                  modal: {
                    width: "100%",
                    padding: "0px",
                    margin: "0px",
                    borderRadius: "23px 23px 0px 0px",
                    verticalAlign: "bottom",
                  },
                }}
              >
                <PopupSelectCuisine click={closeSelectCuisinePop} />
              </Modal>
            </ForDevice>

            {/* Popup Select-Features*/}
            <ForDevice deviceName={["tablet", "desktop"]}>
              <Modal
                open={isSelectFeaturesShowing}
                onClose={closeSelectFeaturesPop}
                closeIcon={closeIcon}
                center
                styles={{
                  modal: {
                    "margin-top": "80px",
                    "max-width": "535px",
                    width: "100%",
                    padding: "0px",
                    borderRadius: "23px",
                  },
                }}
              >
                <PopupSelectFeatures click={closeSelectFeaturesPop} />
              </Modal>
            </ForDevice>

            <ForDevice deviceName="mobile">
              <Modal
                open={isSelectFeaturesShowing}
                onClose={closeSelectFeaturesPop}
                closeIcon={closeIcon}
                center
                classNames={{
                  modalAnimationIn: "sortByEnterModalAnimation",
                  modalAnimationOut: "sortByLeaveModalAnimation",
                }}
                animationDuration={800}
                styles={{
                  modal: {
                    width: "100%",
                    padding: "0px",
                    margin: "0px",
                    borderRadius: "23px 23px 0px 0px",
                    verticalAlign: "bottom",
                  },
                }}
              >
                <PopupSelectFeatures click={closeSelectFeaturesPop} />
              </Modal>
            </ForDevice>
            {/* Country */}
            {/* <div className="dropDown-block-Outlet">
            <span className="label-dropDown-block">Country</span>
            <div className="dropDown-item" id="margin-10-T">
              <div className="border-dropDown-block">
                <div className="content-dropDown">
                  <select onChange={(e) => setCountry(e.target.value)}>
                    <option className="option">Country</option>
                    <option className="option">Country</option>
                    <option className="option">Country</option>
                  </select>
                  <span>
                    <img alt="down-arrow" src={arrow} />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>

        {/* Buttons */}
        <div className="row m-auto">
          <div className="col-md-12 d-flex mb-2 pr-0 justify-content-center">
            <button
              type="submit"
              className="blue-btn"
              onClick={(e) => handleSubmit(e)}
              style={{ marginRight: "20px" }}
            >
              Save
            </button>
            {/* <button className="green-btn" onClick={(e) => props.click(e)}>
              Cancel
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOutletItem;
