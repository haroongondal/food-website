import React from "react";
import { useState } from "react";
import arrow from "../images/down_arrow.svg";
import "../styles/AddNewOutlet.css";
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function AddOutletItem(props) {
  const [ImageLocality, setImageLocality] = useState([]);
  const [ImageFracade, setImageFracade] = useState([]);
  const [ImageKitchen, setImageKitchen] = useState([]);
  const [ImageDining, setImageDinning] = useState([]);
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [area, setArea] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [address, setAddress] = useState("");
  const [gstn, setGstn] = useState("");
  const [IsSalesTaxIncluded, setIsSalesTaxIncluded] = useState(false);
  const [menuImage1, setMenuImage1] = useState([]);
  const [menuImage2, setMenuImage2] = useState([]);
  const [restaurantName, setRestaurantName] = useState();
  const [averagePrice, setAveragePrice] = useState("");
  const [oppeningTime, setOppeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [holiday, setHoliday] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [landline, setLandline] = useState("");
  const [ReceiveWhatsappNoti, setReceiveWhatsappNoti] = useState(false);
  const [cuisinesList, setCuisinesList] = useState([]);
  const [FeaturesList, setFeaturesList] = useState([]);
  const [establishmentType, setEstablishmentType] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [MealRestaurantServe, setMealRestaurantServe] = useState([]);
  const [RestaurantGoodFor, setRestaurantGoodFor] = useState([]);
  const [desc, setDesc] = useState("");

  function handleCusines(isChecked, value) {
    if (isChecked) {
      setCuisinesList((oldArray) => [...oldArray, value]);
    } else {
      const index = cuisinesList.findIndex((value__) => value__ === value);
      if (index !== -1) {
        setCuisinesList([
          ...cuisinesList.slice(0, index),
          ...cuisinesList.slice(index + 1),
        ]);
      }
    }
  }
  function handleFeatures(isChecked, value) {
    if (isChecked) {
      setFeaturesList((oldArray) => [...oldArray, value]);
    } else {
      const index = FeaturesList.findIndex((value__) => value__ === value);
      if (index !== -1) {
        setFeaturesList([
          ...FeaturesList.slice(0, index),
          ...FeaturesList.slice(index + 1),
        ]);
      }
    }
  }
  function handleRestaurantGoodFor(isChecked, value) {
    if (isChecked) {
      setRestaurantGoodFor((oldArray) => [...oldArray, value]);
    } else {
      const index = RestaurantGoodFor.findIndex((value__) => value__ === value);
      if (index !== -1) {
        setRestaurantGoodFor([
          ...RestaurantGoodFor.slice(0, index),
          ...RestaurantGoodFor.slice(index + 1),
        ]);
      }
    }
  }
  function handleMealRestaurantServe(isChecked, value) {
    if (isChecked) {
      setMealRestaurantServe((oldArray) => [...oldArray, value]);
    } else {
      const index = MealRestaurantServe.findIndex(
        (value__) => value__ === value
      );
      if (index !== -1) {
        setRestaurantGoodFor([
          ...MealRestaurantServe.slice(0, index),
          ...MealRestaurantServe.slice(index + 1),
        ]);
      }
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    {
      const values = {
        UserId: 1,
        ParentId: 0,
        FracadeImageStringBase64: ImageFracade,
        KitchenImageStringBase64: ImageKitchen,
        DinningImageStringBase64: ImageDining,
        LocalityImageStringBase64: ImageLocality,
        RestaurantName: restaurantName,
        OpeningTime: oppeningTime,
        ClosingTIme: closingTime,
        Holiday: holiday,
        PhoneNumber: phoneNo,
        RestaurantLandLineNumber: landline,
        ReceiveWhatsappNoti: ReceiveWhatsappNoti,
        CityId: city,
        PrimaryAreaOfOutlet: area,
        Gstn: gstn,
        ZipCode: zipcode,
        Address: address,
        Longitude: longitude,
        Latitude: latitude,
        ListOfRestaurantCusine: cuisinesList,
        ListOfRestaurantFeature: FeaturesList,
        EstablishmentTypeId: establishmentType,
        HomeDelivery: delivery,
        RestaurantGoodFor: RestaurantGoodFor,
        MealRestaurantServe: MealRestaurantServe,

        Description: desc,
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

  // const uploadImageFracade = async (e) => {
  //   const file = e[e.length - 1];
  //   const base64 = await convertBase64(file);
  //   setImageFracade(base64);
  // };

  // const uploadImageKitchen = async (e) => {
  //   const file = e[e.length - 1];
  //   const base64 = await convertBase64(file);
  //   setImageKitchen(base64);
  // };

  // const uploadImageDinning = async (e) => {
  //   const file = e[e.length - 1];
  //   const base64 = await convertBase64(file);
  //   setImageDinning(base64);
  // };

  // const uploadImageLocality = async (e) => {
  //   const file = e[e.length - 1];
  //   const base64 = await convertBase64(file);
  //   setImageLocality(base64);
  // };

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  return (
    <div className="add-outlet-item">
      <h3 className="page-heading">Outlets</h3>
      <h5>Upload Banner Images</h5>
      <div className="row">
        <div className="col-xxl-6 col-12">
          <div className="row">
            <div className="col-sm-6 col-md-3 col-12">
              <FilePond
                files={ImageFracade}
                onupdatefiles={setImageFracade}
                allowMultiple={true}
                maxFiles={3}
                server="/api"
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
            <div className="col-sm-6 col-md-3 col-12">
              <FilePond
                files={ImageDining}
                onupdatefiles={setImageDinning}
                allowMultiple={true}
                maxFiles={3}
                server="/api"
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
            <div className="col-sm-6 col-md-3 col-12">
              <FilePond
                files={ImageLocality}
                onupdatefiles={setImageLocality}
                allowMultiple={true}
                maxFiles={3}
                server="/api"
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
            <div className="col-sm-6 col-md-3 col-12">
              <FilePond
                files={ImageKitchen}
                onupdatefiles={setImageKitchen}
                allowMultiple={true}
                maxFiles={3}
                server="/api"
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
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
                <select
                  id="city"
                  value={city}
                  onChange={setCity}
                  className="form-select"
                >
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
                <input
                  type="text"
                  id="zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-12 mt-3 mb-sm-0 mb-3">
                <label for="area" className="label mb-2">
                  Area
                </label>
                <input
                  type="text"
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-12"></div>
              <div className="col-sm-6 col-12 mt-3 mb-sm-0 mb-3">
                <label for="zipcode" className="label mb-2">
                  Latitude
                </label>
                <input
                  type="text"
                  id="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
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
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-12 my-3">
                <label for="address" className="label mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="outlet-section add-menu-section">
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
                    value={gstn}
                    onChange={(e) => setGstn(e.target.value)}
                    className="px-1 border"
                  />
                </div>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
              <div className="col-12 mb-sm-0 my-3">
                <div className=" align-checkbox-city">
                  <label className="content-CB-PS">
                    <h6 className="label-CB-PS">
                      Sales Tax should be included 2.5%
                    </h6>
                    <input
                      type="checkbox"
                      value={true}
                      onChange={(e) => setIsSalesTaxIncluded(e.target.checked)}
                      required
                    />
                    <span className="checkbox-CB-PS"></span>
                  </label>
                </div>
              </div>
              <div className="col-sm-6 col-12 my-0 my-sm-3">
                <FilePond
                  files={menuImage1}
                  onupdatefiles={setMenuImage1}
                  allowMultiple={true}
                  maxFiles={3}
                  server="/api"
                  name="files"
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
              </div>
              <div className="col-sm-6 col-12 my-0 my-sm-3">
                <FilePond
                  files={menuImage2}
                  onupdatefiles={setMenuImage2}
                  allowMultiple={true}
                  maxFiles={3}
                  server="/api"
                  name="files"
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
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
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
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
                  value={averagePrice}
                  onChange={(e) => setAveragePrice(e.target.value)}
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
                  value={oppeningTime}
                  onChange={(e) => setOppeningTime(e.target.value)}
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
                  value={closingTime}
                  onChange={(e) => setClosingTime(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-sm-6 col-lg-2 col-12 mt-lg-0 mt-3 mb-sm-0 mb-2">
                <label for="holiday" className="label mb-2">
                  Holiday
                </label>
                <input
                  type="datetime-local"
                  id="holiday"
                  className="form-control"
                />
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
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
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
                      value={landline}
                      onChange={(e) => setLandline(e.target.value)}
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
                      value={true}
                      onChange={(e) => setReceiveWhatsappNoti(e.target.checked)}
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
                    value="Afghanistani"
                    key={1}
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="BBQ"
                    key="BBQ"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Pizza"
                    key="Pizza"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Chicken"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Iranian"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Take Away"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Burger"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Chinese"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Biryani"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Smoking Area"
                    onChange={(e) =>
                      handleCusines(e.target.checked, e.target.value)
                    }
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
                    value="Air Conditioned"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="DJ"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Valet Available"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Home Delivery"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Lift"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Parking"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Take Away"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Live Performance"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Cards Accepted"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Dance Floor"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Outdoor Seating"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Full Bar Available"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Screening"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Wallet Accepted"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Parking"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Wifi"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value="Amex Accepted"
                    onChange={(e) =>
                      handleFeatures(e.target.checked, e.target.value)
                    }
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
                    value={true}
                    onChange={(e) => setDelivery(true)}
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
                    value={false}
                    onChange={(e) => setDelivery(false)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-3 mt-sm-4">
              <h5 className="my-4 my-sm-3 py-1 pb-sm-2 pt-sm-0">
                Establishment Type
              </h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Restaurant</h6>
                  <input
                    type="radio"
                    name="r_type"
                    value="Restaurant"
                    onChange={(e) => setEstablishmentType(e.target.value)}
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
                    value="Cafe"
                    onChange={(e) => setEstablishmentType(e.target.value)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-1 mt-sm-4">
              <h5 className="my-4 mt-sm-3 py-2 pt-sm-0">
                What Meal Does This Restaurant Serve
              </h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Breakfast</h6>
                  <input
                    type="checkbox"
                    name="MealRestaurantServe[]"
                    value="Breakfast"
                    onChange={(e) =>
                      handleMealRestaurantServe(
                        e.target.checked,
                        e.target.value
                      )
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Lunch</h6>
                  <input
                    type="checkbox"
                    name="MealRestaurantServe[]"
                    value="Lunch"
                    onChange={(e) =>
                      handleMealRestaurantServe(
                        e.target.checked,
                        e.target.value
                      )
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Drinks</h6>
                  <input
                    type="checkbox"
                    name="MealRestaurantServe[]"
                    value="Drinks"
                    onChange={(e) =>
                      handleMealRestaurantServe(
                        e.target.checked,
                        e.target.value
                      )
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Buffet/Brunch</h6>
                  <input
                    type="checkbox"
                    name="MealRestaurantServe[]"
                    value="Buffet/Brunch"
                    onChange={(e) =>
                      handleMealRestaurantServe(
                        e.target.checked,
                        e.target.value
                      )
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Late Night</h6>
                  <input
                    type="checkbox"
                    name="MealRestaurantServe[]"
                    value="Late Night"
                    onChange={(e) =>
                      handleMealRestaurantServe(
                        e.target.checked,
                        e.target.value
                      )
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>
            <div className="row px-3 mt-4">
              <h5 className="mb-4 pb-1 py-sm-2">
                What Is This Restaurant Good For?
              </h5>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Smoking Area</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Smoking Area"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Air Conditioned</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Air Conditioned"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">DJ</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="DJ"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Valet Available</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Valet Available"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Home Delivery</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Home Delivery"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Lift</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Lift"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Parking</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Parking"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Take Away</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Take Away"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Live Performance</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Live Performance"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Cards Accepted</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Cards Accepted"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Dance Floor</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Dance Floor"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Outdoor Seating</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Outdoor Seating"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Full Bar Available</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Full Bar Available"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Screening</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Screening"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Wallet Accepted</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Wallet Accepted"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Parking</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Parking"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Wifi</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Wifi"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-2">
                <label className="content-CB-PS">
                  <h6 className="label-CB-PS">Amex Accepted</h6>
                  <input
                    type="checkbox"
                    name="handleRestaurantGoodFor[]"
                    value="Amex Accepted"
                    onChange={(e) =>
                      handleRestaurantGoodFor(e.target.checked, e.target.value)
                    }
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
                <textarea
                  type="form-control"
                  name="restaurant-desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows="5"
                />
              </div>
            </div>
            <div className="d-flex footer justify-content-between justify-content-sm-start mt-4 pb-4 px-3">
              <button
                className="btn btn-success me-sm-3 px-lg-4 px-sm-3 px-2 py-lg-3 submit-button"
                onClick={handleSubmit}
              >
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
