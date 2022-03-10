import React from "react";
import { useState } from "react";
import arrow from "../images/down_arrow.svg";
import "../styles/AddNewOutlet.css";
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
      <div className="align-Popup">
        <div className="border-popup-city">
          <div className="align-popOutlet-images border-popup-city flex-sm-row flex-column justify-content-between align-items-center">
            {/* Fracade Image */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Fracade Image</span>
              <div className="dropDown-item" id="margin-10-T">
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

          <div className="align-popOutlet-images border-popup-city flex-sm-row flex-column  justify-content-between align-items-center">
            {/* Dinning Image */}
            <div className="dropDown-block-Outlet">
              <span className="label-dropDown-block">Dinning Image</span>
              <div className="dropDown-item" id="margin-10-T">
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
          <div className="border-popup-city row">
            {/* City */}
            <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            {/* Area */}
            <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            {/* GSTN */}
            <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            {/* Zip/Pincode */}
            <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            {/* Address */}
            {/* Logitude */}
            <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            <div className="dropDown-block col-sm-6 col-12">
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
            <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            <div className="dropDown-block-Outlet col-12">
              <div className=" align-checkbox-city">
                <label className="content-CB-PS" style={{ marginLeft: "0px" }}>
                  <h6 className="label-CB-PS">
                    Yes, I would like to receive important updates and
                    notifications from FoodApp on my WhatsApp
                  </h6>
                  <input
                    type="checkbox"
                    // onChange={(e) => setWhatsAppCheckbox(e.target.checked)}
                    required
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            {/* Outlet Details */}
            <div className="dropDown-block-Outlet">
              <h4 className="sectionHeading my-2">Restaurent Details</h4>
            </div>
            <div className="border-popup-city row">
              {/* Email */}
              <div className="dropDown-block-Outlet col-sm-6 col-12">
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
              <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            {/* Pin */}
            <div className="border-popup-city row">
              <div className="dropDown-block-Outlet col-sm-6 col-12">
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
            </div>
            {/* Restaurant Details */}
            <div className="dropDown-block-Outlet">
              <h4 className="sectionHeading my-2">Restaurent Details</h4>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              {/* Restaurent Name */}

              <span className="label-dropDown-block">
                Enter Restaurent Name
              </span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="text"
                          placeholder="Restaurent Name"
                          className="input-PS"
                          value={restName}
                          onChange={(e) => setRestName(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              <span className="label-dropDown-block">
                Average Price For 2 persons
              </span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="text"
                          placeholder="2500"
                          className="input-PS"
                          value={averagePrice}
                          onChange={(e) => setAveragePrice(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              <span className="label-dropDown-block">
                Restaurent Opening Time
              </span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="time"
                          className="input-PS"
                          // value={averagePrice}
                          // onChange={(e) => setAveragePrice(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              <span className="label-dropDown-block">
                Restaurent Closing Time
              </span>
              <div className="dropDown-item" id="margin-10-T">
                <div className="border-dropDown-block">
                  <div className="content-dropDown">
                    <form action="#" className="form-dropDown-M">
                      <div className="form-input-dropDown">
                        <input
                          type="time"
                          // placeholder="2500"
                          className="input-PS"
                          // value={averagePrice}
                          // onChange={(e) => setAveragePrice(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12 py-3">
              <button
                className="select-cuisine-btn"
                onClick={handleSelectCuisinePop}
              >
                Select Cuisines
              </button>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12 py-3">
              <button
                className="select-cuisine-btn"
                onClick={handleSelectFeaturesPop}
              >
                Select Features
              </button>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              <div className="label-PS">Delivery Type</div>
              <div className="align-CB-PS p-0">
                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
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
                  className="col-md-6 col-12 content-CB-PS my-2"
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
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              <div className="label-PS">Establishment type</div>
              <div className="align-CB-PS p-0">
                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
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
                  className="col-md-6  col-12 content-CB-PS my-2"
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
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              <div className="label-PS mt-3">
                {" "}
                What meal does this restaurant Serve
              </div>
              <div className="align-CB-PS p-0">
                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Breakfast</h6>
                  <input
                    type="checkbox"
                    name="r_serve[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>

                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Lunch</h6>
                  <input
                    type="checkbox"
                    name="r_serve[]"
                    onChange={(e) => setDelivery(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>

                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Drinks</h6>
                  <input
                    type="checkbox"
                    name="r_serve[]"
                    onChange={(e) => setDelivery(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>

                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Buffet /Brunch</h6>
                  <input
                    type="checkbox"
                    name="r_serve[]"
                    onChange={(e) => setDelivery(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>

                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Dinner</h6>
                  <input
                    type="checkbox"
                    name="r_serve[]"
                    onChange={(e) => setDelivery(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>

                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Late Night</h6>
                  <input
                    type="checkbox"
                    name="r_serve[]"
                    onChange={(e) => setDelivery(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="dropDown-block-Outlet col-sm-6 col-12">
              <div className="label-PS mt-3">What is this restaurant Good for</div>
              <div className="align-CB-PS p-0">
                <label
                  className="col-md-6 col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Business meetings</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setCafe(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>

                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS"> Families with Children's</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Hidden Jems</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Hot new restaurant</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Kids</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Large Group</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Local Cuisine</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">scenic view</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
                <label
                  className="col-md-6  col-12 content-CB-PS my-2"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Special Occasions</h6>
                  <input
                    type="checkbox"
                    name="r_good[]"
                    onChange={(e) => setRestaurent(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="dropDown-block-Outlet row" id="margin-20-TB">
              {/* Restaurant Description */}
              <div className="Section-PS px-0">
                <div className="col-12">
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
