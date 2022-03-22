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
import useFetch from "../Utils/useFetch";
import Skeleton from "react-loading-skeleton";

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
  const { data, isPending, error } = useFetch(
    "https://api.masairapp.com/api/Lov/GetCusine"
  );

  const [subCusine, setSubCusine] = useState("");

  const [cusineId, setCusineId] = useState("-1");

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
  const [Restaurant, setrestaurant] = useState(false);
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
      <h3 className="page-heading">Outlets</h3>
      <h5>Upload Banner Images</h5>
      <div className="row">
        <div className="col-xxl-6 col-12">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <ImageUploader
                withIcon={true}
                buttonText="Choose image"
                onChange={uploadImageFracade}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <ImageUploader
                withIcon={true}
                buttonText="Choose image"
                onChange={uploadImageDinning}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <ImageUploader
                withIcon={true}
                buttonText="Choose image"
                onChange={uploadImageLocality}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
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
        <div className="col-xxl-6 col-12 d-xxl-block d-none"></div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-12">
          <div className="outlet-section res-location-details">
            <div className="section-heading px-4 py-2 mt-4">
              Restaurant Location Details
            </div>
            <div className="row px-3 my-4">
              <div className="col-sm-6 col-12 my-sm-0 my-3">
                <label for="city" className="label mb-2">
                  City
                </label>
                <select id="city" className="form-select">
                  <option value="islamabad" key="">
                    Islamabad
                  </option>
                  <option value="islamabad" key="">
                    Lahore
                  </option>
                  <option value="islamabad" key="">
                    Peshawar
                  </option>
                  <option value="islamabad" key="">
                    Karachi
                  </option>
                </select>
              </div>

              <div className="col-sm-6 col-12 my-sm-0 my-3">
                <label for="zipcode" className="label mb-2">
                  Zipcode
                </label>
                <input type="text" id="zipcode" className="form-control" />
              </div>
              <div className="col-sm-6 col-12 mt-3 mb-sm-0 mb-3">
                <label for="area" className="label mb-2">
                  Area
                </label>
                <input type="text" id="area" className="form-control" />
              </div>
              <div className="col-sm-6 col-12"></div>
              <div className="col-sm-6 col-12 mt-3 mb-sm-0 mb-3">
                <label for="zipcode" className="label mb-2">
                  Latitude
                </label>
                <input
                  type="text"
                  id="latitude"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-12 mt-3 mb-sm-0 mb-3">
                <label for="address" className="label mb-2">
                  Longitude
                </label>
                <input
                  type="text"
                  id="longitude"
                  className="form-control"
                />
              </div>
              <div className="col-12 my-3">
                <label for="address" className="label mb-2">
                  Address
                </label>
                <input type="text" id="address" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="outlet-section">
            <div className="section-heading px-4 py-2 mt-4">Add Menu</div>
            <div className="row px-3 my-4">
              <div className="col-sm-6 col-xl-9 col-12 my-sm-0 my-3">
                <label for="city" className="label mb-2">
                  GSTN
                </label>
                <br />
                <div className="gstn-field border">
                  <span
                    style={{ display: "inline-block", margin: "5px 0 0 6px" }}
                  >
                    Sales Tax
                  </span>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    className="border"
                    placeholder="%"
                    className="px-1 border"
                  />
                </div>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
              <div className="col-12 mb-sm-0 my-3">
                <div
                  className=" align-checkbox-city"
                >
                  <label className="content-CB-PS">
                    <h6 className="label-CB-PS">
                      Sales Tax should be included 2.5%
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
              {/* <div className="col-sm-6 col-12 mt-3 mb-sm-0 mb-3">
                <label for="address" className="label mb-2">
                  Cuisines
                </label>
                <select type="text" id="cuisines" className="form-select">
                  <option value="chines" key="">
                    Chines
                  </option>
                  <option value="northPakistan" key="">
                    North Pakistan
                  </option>
                  <option value="mainCuisines" key="">
                    Main Cuisines
                  </option>
                </select>
              </div>
              <div className="col-sm-6 col-12 mt-3 mb-sm-0 mb-3">
                <label for="address" className="label mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control"
                />
              </div> */}
              <div className="col-sm-6 col-12 my-3 mb-sm-0 mb-3">
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  // onChange={uploadImageFracade}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
              <div className="col-sm-6 col-12 my-3 mb-sm-0 mb-3">
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  // onChange={uploadImageFracade}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="outlet-section">
            <div className="section-heading px-4 py-2 mt-4">
              Restaurant Details
            </div>
            <div className="row px-3 my-4">
              <div className="col-sm-6 col-lg-4 col-12 mb-sm-0 mb-3">
                <label for="restaurant_name" className="label mb-2">
                  Enter Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurant_name"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-lg-2 col-12 mb-sm-0 mb-3">
                <label for="avg_price" className="label mb-2">
                  Avg Price
                </label>
                <input
                  type="number"
                  id="avg_price"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-lg-2 col-12 mt-lg-0 mt-3 mb-sm-0 mb-3">
                <label for="opening_time" className="label mb-2">
                  Opening Time
                </label>
                <input
                  type="time"
                  id="opening_time"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-lg-2 col-12 mt-lg-0 mt-3 mb-sm-0 mb-3">
                <label for="closing_time" className="label mb-2">
                  Closing Time
                </label>
                <input
                  type="time"
                  id="closing_time"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-lg-2 col-12 mt-lg-0 mt-3 mb-sm-0 mb-2">
                <label for="holiday" className="label mb-2">
                  Holiday
                </label>
                <input type="datetime-local" id="holiday" className="form-control" />
              </div>
            </div>
            <div className="row px-3 mt-sm-4 mt-3">
              <div className="col-sm-6 col-lg-6 col-12">
                <div className="row">
                  <div className="col-sm-6 col-12 mb-sm-0 mb-3">
                    <label for="number" className="label mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="number"
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-6 col-12 mt-sm-0 mt-3">
                    <label for="landline" className="label mb-2">
                      Landline
                    </label>
                    <input
                      type="text"
                      id="landline"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-12"></div>
            </div>
            <div className="row px-3 mt-4">
              <div className="col-12">
                <div className=" align-checkbox-city">
                  <label className="content-CB-PS">
                    <h6 className="label-CB-PS">
                      Yes, I would like to receive important updates and
                      notifications from DeaseApp on my WhatsApp
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
              <div className="col-sm-6 col-12"></div>
            </div>
            <div className="row px-3 mt-4">
              <h5 className="mb-4 pb-1">Select Cuisines</h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Afghanistani</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">BBQ</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Pizza</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Chicken</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Iranian</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Take Away</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Burger</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Chinese</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Biryani</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-4">
            <h5 className="mb-4 pb-1">Select Features</h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Smoking Area</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Air Conditioned</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">DJ</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Valet Available</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Home Delivery</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Lift</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Parking</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Take Away</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Live Performance</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Cards Accepted</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Dance Floor</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Outdoor Seating</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Full Bar Available</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Screening</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Wallet Accepted</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Parking</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Wifi</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Amex Accepted</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3">
              <h5 className="my-4 my-sm-3 py-1 py-sm-2">Delivery Type</h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Home Delivery</h6>
                  <input
                    type="radio"
                    name="d_type"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Take Away</h6>
                  <input
                    type="radio"
                    name="d_type"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-3 mt-sm-4">
              <h5 className="my-4 my-sm-3 py-1 pb-sm-2 pt-sm-0">Establishment Type</h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Restaurant</h6>
                  <input
                    type="radio"
                    name="r_type"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Cafe</h6>
                  <input
                    type="radio"
                    name="r_type"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-1 mt-sm-4">
              <h5 className="my-4 mt-sm-3 py-2 pt-sm-0">What Meal Does This Restaurant Serve</h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Breakfast</h6>
                  <input
                    type="checkbox"
                    name="f_type[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>  
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Lunch</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Drinks</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Buffet/Brunch</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Late Night</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-4">
              <h5 className="mb-4 pb-1 py-sm-2">What Is This Restaurant Good For?</h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Smoking Area</h6>
                  <input
                    type="checkbox"
                    name="cuisnes[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Air Conditioned</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">DJ</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Valet Available</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Home Delivery</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Lift</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Parking</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Take Away</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Live Performance</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Cards Accepted</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Dance Floor</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Outdoor Seating</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Full Bar Available</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Screening</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Wallet Accepted</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Parking</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Wifi</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Amex Accepted</h6>
                  <input
                    type="checkbox"
                    name="features[]"
                    onChange={(e) => setTakeAway(e.target.checked)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-4">
              <div className="col-12">
                <label className="label mb-2" for="restaurant-desc">
                  Restaurant Description
                </label>
                <textarea type="form-control" name="restaurant-desc" rows="5" />
              </div>
            </div>
            <div className="d-flex footer justify-content-between justify-content-sm-start mt-4 pb-4 px-3">
              <button className="btn btn-success me-sm-3 px-lg-4 px-sm-3 px-2 py-lg-3 submit-button">
                Save Information
              </button>
              <button className="btn btn-light px-3 py-2">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOutletItem;
