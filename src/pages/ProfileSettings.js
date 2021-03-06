import React from "react";
import { useState } from "react";
import ContactNoResPS from "../components/ContactNoResPS";
import OwnerDetailsPS from "../components/OwnerDetailsPS";
import ResDocumentsPS from "../components/ResDocumentsPS";
import RestaurentDetailsPS from "../components/RestaurentDetailsPS";
import ImageUpload from "image-upload-react";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import PopupSelectCuisine from "../components/PopupSelectCuisine";
import PopupSelectFeatures from "../components/PopupSelectFeatures";
import { ForDevice } from "media-query-react";

import "../styles/ProfileSettings.css";

export default function ProfileSettings() {

  // Owner-Details
  const [ownerFullName, setOwnerFullName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [imgFront, setImgFront] = useState("");
  const [imgBack, setImgBack] = useState("");
  const [sameAsBtn, setSameAsBtn] = useState(false);
  const [whatsAppCheckbox, setWhatsAppCheckbox] = useState(false);

  // Restaurant-Details
  const [restName, setRestName] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [desc, setDesc] = useState("");
  const [takeAway, setTakeAway] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [cafe, setCafe] = useState(false);
  const [restaurent, setRestaurent] = useState(false);

  // Restaurant-Documents
  const [imgSMES, setImgSMES] = useState("");
  const [imgLicence, setImgLicence] = useState("");
  const [gstNo, setGstNo] = useState("");

  

  function handleSubmit(e) {
    e.preventDefault();
    {
      const values = {
        Id: 0,
        RestaurantName: restName,
        OwnerName: ownerFullName,
        PrimaryLocation: null,
        //
        PhoneNumber: ownerMobile,
        //
        Email: ownerEmail,
        //
        CityId: 2,
        //
        WebSiteLink: null,
        NoOfOutlets: 0,
        //
        EstablishmentTypeId: 2,
        //
        PrimaryAreaOfOutlet: null,
        //
        HomeDelivery: "Yes",
        //
        CostOfTwo: 200.0,
        //
        RegistrationDate : null,
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
        Description: desc,
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
          Authorization: "Bearer "+localStorage.getItem("jwt")
        },
        body: JSON.stringify(values),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data)
          if (!data.ResponseMessage) {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // ------Images-Handles------

  const uploadImageFront = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImgFront(base64);
  };

  const uploadImageBack = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImgBack(base64);
  };

  const uploadImageSMES = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImgSMES(base64);
  };

  const uploadImageLicence = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImgLicence(base64);
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

    // Popup Close-icon
    const closeIcon = <CancelSvgIcon />;

    // Popup Select-Cuisine
    const [isSelectCuisineShowing, setSelectCuisineShowing] = useState(false);
  
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
  
  return (
    <div>
          <div className="top-tools">
            <div className="left-tools col-md-12 col-12">
              <button className="dark-blue-btn">Profile Settings</button>
            </div>
          </div>

          <div className="Content-graph-boxes">

           {/* Outlet Owner Details */}
      <div className="border-back-white" style={{ padding: "14px 0px" }}>
        <div className="header-PS">
          <h6 className="title-header-PS">Outlet Owner Details</h6>
          <h6 className="title-details-PS">
            This will be used to share revenue related communication
          </h6>
        </div>

        <hr />

        <div className="Section-PS">
          {/* FullName */}
          <div className="col-md-6" id="front-img-padding-R">
            <div className="label-PS">Enter Outlet Owner full name</div>
            <input
              type="text"
              placeholder="Muhammad Hashir"
              className="input-PS"
              value={ownerFullName}
              onChange={(e) => setOwnerFullName(e.target.value)}
              required
            />
          </div>

          {/* Email Address */}
          <div className="col-md-6 margin-top-5" id="back-img-padding-L">
            <div className="label-PS">Enter Outlet Owner email address</div>
            <input
              type="text"
              placeholder="muhammadHashir007@gmail.com"
              className="input-PS"
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="Section-PS">
          {/* Restaurant Owner ID card */}

          {/* (Front) */}
          <div className="col-md-6 " id="front-img-padding-R">
            <div className="label-PS">Restaurant Owner ID card</div>
            <div className="d-flex justify-content-between">
              <div className="label-PS">(Front)</div>
              <div className="text-imageSize-PS">Image size: 1MB</div>
            </div>
            <ImageUpload
              handleImageSelect={uploadImageFront}
              imageSrc={imgFront}
              setImageSrc={setImgFront}
              style={{
                width: "100%",
                height: 130,
                background: "rgb(6 56 108 / 85%)",
                display: "flex",
                marginTop: "0px",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* (Back) */}
          <div
            className="col-md-6 margin-top-5"
            id="back-img-padding-L"
            style={{ alignSelf: "flex-end" }}
          >
            <div className="d-flex justify-content-between">
              <div className="label-PS">(Back)</div>
              <div className="text-imageSize-PS">Image size: 1MB</div>
            </div>
            <ImageUpload
              handleImageSelect={uploadImageBack}
              imageSrc={imgBack}
              setImageSrc={setImgBack}
              style={{
                width: "100%",
                height: 130,
                background: "rgb(6 56 108 / 85%)",
                display: "flex",
                marginTop: "0px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>

        <div className="Section-PS">
          <div className="col-md-6" id="front-img-padding-R">
            {/* Radio Button */}
            <div className="radio-PS">
              <input
                type="radio"
                id="mobile"
                name="mobile"
                required
                onChange={(e) => setSameAsBtn(e.target.checked)}
              />
              ?? <label for="html">Same as restaurent mobile number</label>
            </div>
            {/* Mobile Number */}
            <div className="label-PS">Mobile Number of Owner</div>
            <div className="dropdown-PS">
              <span className="CountryCode-PS">
                <h6>+92</h6>
              </span>
              <input
                type="text"
                placeholder="312-34567890"
                className="input-PS"
                style={{ paddingLeft: "64px" }}
                value={ownerMobile}
                onChange={(e) => setOwnerMobile(e.target.value)}
                required
              />

              {/* Verify Button */}
              <button className="verify-btn">Verify</button>
            </div>
          </div>


          {/* WhatsApp checkbox */}
          <div className="col-md-6 whatsapp-CB-Margin" id="back-img-padding-L">
            <div className=" align-checkbox-city">
              <label className="content-CB-PS" style={{ marginLeft: "0px" }}>
                <h6 className="label-CB-PS">
                  Yes, I would like to receive important updates and
                  notifications from FoodApp on my WhatsApp
                </h6>
                <input
                  type="checkbox"
                  onChange={(e) => setWhatsAppCheckbox(e.target.checked)}
                  required
                />
                <span className="checkbox-CB-PS"></span>
              </label>
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
          <div className="col-md-6 d-flex align-items-center" id="front-img-padding-R">
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
                  type="checkbox"
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
                  type="checkbox"
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
              Please place the pin accurately at your outlet???s location on the
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

          {/* Restaurant Documents */}
      <div className="border-back-white" id="margin-20-T" style={{ padding: "14px 0px" }}>
        <div className="header-PS" >
          <h6 className="title-header-PS">Restaurant Documents</h6>
          <h6 className="title-details-PS">
            Please provide the required documents of your restaurent
          </h6>
        </div>

        <hr />

        <div className="Section-PS">
          {/* SMES */}
          <div className="col-md-6" id="front-img-padding-R">
            <div className="d-flex justify-content-between">
              <div className="label-PS">SMES</div>
              <div className="text-imageSize-PS">Image size: 1MB</div>
            </div>
            <ImageUpload
                  handleImageSelect={uploadImageSMES}
                  imageSrc={imgSMES}
                  setImageSrc={setImgSMES}
                  style={{
                    width: "100%",
                    height: 130,
                    background: "rgb(6 56 108 / 85%)",
                    display: "flex",
                    marginTop: "0px",
                    borderRadius: "5px",
                  }}
                />
          </div>

          {/* Restaurants License */}
          <div className="col-md-6 margin-top-5" id="back-img-padding-L">
            <div className="d-flex justify-content-between">
              <div className="label-PS">Restaurants License</div>
              <div className="text-imageSize-PS">Image size: 1MB</div>
            </div>
            <ImageUpload
                  handleImageSelect={uploadImageLicence}
                  imageSrc={imgLicence}
                  setImageSrc={setImgLicence}
                  style={{
                    width: "100%",
                    height: 130,
                    background: "rgb(6 56 108 / 85%)",
                    display: "flex",
                    marginTop: "0px",
                    borderRadius: "5px",
                  }}
                />
          </div>
        </div>

        <div className="Section-PS">
          <div className="col-md-6" id="front-img-padding-R">
            {/* Mobile Number */}
            <div className="label-PS">GST Number</div>
            <div className="dropdown-PS">
              <span className="CountryCode-PS">
                <h6>GST</h6>
              </span>
              <input
                type="text"
                placeholder="123456789"
                className="input-PS"
                style={{ paddingLeft: "64px" }}
                value={gstNo}
                onChange={(e) => setGstNo(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="Section-PS mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S" onClick={(e)=> handleSubmit(e)}>Save</button>
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
  );
}
