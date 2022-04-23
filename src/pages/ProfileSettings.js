import React from "react";
import { useState } from "react";
import ContactNoResPS from "../components/ContactNoResPS";
import OwnerDetailsPS from "../components/OwnerDetailsPS";
import ResDocumentsPS from "../components/ResDocumentsPS";
import RestaurentDetailsPS from "../components/RestaurentDetailsPS";
// import ImageUpload from "image-upload-react";
import ImageUploader from "react-images-upload";
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
  const [ownerWhatsapp, setOwnerWhatsapp] = useState("");
  const [ownerPassword, setOwnerPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [imgFront, setImgFront] = useState("");
  const [imgBack, setImgBack] = useState("");
  const [sameAsBtn, setSameAsBtn] = useState(false);
  const [whatsAppCheckbox, setWhatsAppCheckbox] = useState(false);

  // Restaurant-Documents
  const [imgSMES, setImgSMES] = useState("");
  const [imgLicence, setImgLicence] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [referalEmail, setreferalEmail] = useState(false);
  const [ReferalEmail, setReferalEmail] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    {
      const values = {
        Id: 0,
        RestaurantName: "",
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
        Description: "",
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
      if (ownerPassword === confirmPassword) {
        setPasswordError(false);
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
      } else {
        setPasswordError(true);
      }
    }
  }

  // ------Images-Handles------

  const uploadImageFront = async (e) => {
    const file = e[e.length - 1];
    const base64 = await convertBase64(file);
    setImgFront(base64);
  };

  const uploadImageBack = async (e) => {
    const file = e[e.length - 1];
    const base64 = await convertBase64(file);
    setImgBack(base64);
  };

  const uploadImageSMES = async (e) => {
    const file = e[e.length - 1];
    const base64 = await convertBase64(file);
    setImgSMES(base64);
  };

  const uploadImageLicence = async (e) => {
    const file = e[e.length - 1];
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
    <div className="profile-settings">
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
            <div className="col-sm-6 col-12 px-2" id="">
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
            <div
              className="col-sm-6 col-12 px-2 margin-top-5"
              id="back-img-padding-L"
            >
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
            <div className="col-sm-6 col-12 px-2 " id="">
              <div className="label-PS">Restaurant Owner ID card</div>
              <div className="d-flex justify-content-between">
                <div className="label-PS">(Front)</div>
                <div className="text-imageSize-PS">Image size: 1MB</div>
              </div>
              {/* <ImageUpload
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
            /> */}
              <ImageUploader
                withIcon={true}
                buttonText="Choose image"
                onChange={uploadImageFront}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>

            {/* (Back) */}
            <div
              className="col-sm-6 col-12 px-2 margin-top-5"
              id="back-img-padding-L"
              style={{ alignSelf: "flex-end" }}
            >
              <div className="d-flex justify-content-between">
                <div className="label-PS">(Back)</div>
                <div className="text-imageSize-PS">Image size: 1MB</div>
              </div>
              {/* <ImageUpload
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
            /> */}
              <ImageUploader
                withIcon={true}
                buttonText="Choose image"
                onChange={uploadImageBack}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>
          </div>

          <div className="Section-PS">
            <div className="col-sm-6 col-12 px-2" id="">
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
            <div className="col-sm-6 col-12 px-2" id="">
              {/* Mobile Number */}
              <div className="label-PS">WhatsApp Number of Owner</div>
              <div className="dropdown-PS">
                <span className="CountryCode-PS">
                  <h6>+92</h6>
                </span>
                <input
                  type="text"
                  placeholder="312-34567890"
                  className="input-PS"
                  style={{ paddingLeft: "64px" }}
                  value={ownerWhatsapp}
                  onChange={(e) => setOwnerWhatsapp(e.target.value)}
                  required
                />

                {/* Verify Button */}
                <button className="verify-btn">Verify</button>
              </div>
            </div>
            {/* WhatsApp checkbox */}
            <div
              className="col-sm-6 col-12 px-2 whatsapp-CB-Margin"
              id="back-img-padding-L"
            >
              <div className=" align-checkbox-city">
                <label className="content-CB-PS" style={{ marginLeft: "0px" }}>
                  <h6 className="label-CB-PS">
                    Yes, I would like to receive important updates and
                    notifications from DeaseApp on my WhatsApp
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
          <div className="Section-PS">
            {/* FullName */}
            <div className="col-sm-6 col-12 px-2">
              <div className="label-PS">Write your Referal Email Or Code ?</div>
              <div className="align-CB-PS p-0">
                <label
                  className="col-sm-6 col-12 col-12 content-CB-PS my-3"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">Yes</h6>
                  <input
                    type="radio"
                    name="referal"
                    value="true"
                    onChange={(e) => setReferalEmail(true)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>

                <label
                  className="col-sm-6 col-12 col-12 content-CB-PS my-3"
                  style={{ marginLeft: "0px" }}
                >
                  <h6 className="label-CB-PS">No</h6>
                  <input
                    type="radio"
                    name="referal"
                    value="false"
                    onChange={(e) => setReferalEmail(false)}
                  />
                  <span className="checkbox-CB-PS"></span>
                </label>
              </div>
            </div>

            {/* Email Address */}
            {ReferalEmail && (
              <div
                className="col-sm-6 col-12 px-2 margin-top-5"
                id="back-img-padding-L"
              >
                <div className="label-PS">Enter Referal Email Here</div>
                <div className="dropdown-PS">
                  <span class="CountryCode-PS">
                    <h6>@</h6>
                  </span>
                  <input
                    type="email"
                    placeholder="user@mail.com"
                    className="input-PS"
                    style={{ paddingLeft: "64px" }}
                    value={referalEmail}
                    onChange={(e) => setreferalEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}
          </div>
          <div className="Section-PS">
            <div className="col-sm-6 col-12 px-2" id="">
              {/*  Password */}
              <div className="label-PS">Password</div>
              <div className="dropdown-PS">
                <span className="CountryCode-PS">
                  <h6>
                    <i className="fa fa-lock"></i>
                  </h6>
                </span>
                <input
                  type="password"
                  className="input-PS"
                  style={{ paddingLeft: "64px" }}
                  value={ownerPassword}
                  onChange={(e) => setOwnerPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-sm-6 col-12 px-2" id="">
              {/* Confirm Password */}
              <div className="label-PS">Confirm Password</div>
              <div className="dropdown-PS d-block">
                <span className="CountryCode-PS">
                  <h6>
                    <i className="fa fa-key"></i>
                  </h6>
                </span>
                <input
                  type="password"
                  className="input-PS"
                  style={{ paddingLeft: "64px" }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {passwordError && <div className="fieldError">Password Did'nt Match</div>}
              </div>
            </div>
            {/* WhatsApp checkbox */}
            <div
              className="col-sm-6 col-12 px-2 whatsapp-CB-Margin"
              id="back-img-padding-L"
            >
              <div className=" align-checkbox-city">
                <label className="content-CB-PS" style={{ marginLeft: "0px" }}>
                  <h6 className="label-CB-PS">
                    Yes, I would like to receive important updates and
                    notifications from DeaseApp on my WhatsApp
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

        {/* Restaurant Documents */}
        <div
          className="border-back-white"
          id="margin-20-T"
          style={{ padding: "14px 0px" }}
        >
          <div className="header-PS">
            <h6 className="title-header-PS">Restaurant Documents</h6>
            <h6 className="title-details-PS">
              Please provide the required documents of your restaurent
            </h6>
          </div>

          <hr />

          <div className="Section-PS">
            {/* SMES */}
            <div className="col-sm-6 col-12 px-2" id="">
              <div className="d-flex justify-content-between">
                <div className="label-PS">SMES</div>
                <div className="text-imageSize-PS">Image size: 1MB</div>
              </div>
              {/* <ImageUpload
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
                /> */}
              <ImageUploader
                withIcon={true}
                buttonText="Choose image"
                onChange={uploadImageSMES}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>

            {/* Restaurants License */}
            <div
              className="col-sm-6 col-12 px-2 margin-top-5"
              id="back-img-padding-L"
            >
              <div className="d-flex justify-content-between">
                <div className="label-PS">Restaurants License</div>
                <div className="text-imageSize-PS">Image size: 1MB</div>
              </div>
              {/* <ImageUpload
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
                /> */}
              <ImageUploader
                withIcon={true}
                buttonText="Choose image"
                onChange={uploadImageLicence}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </div>
          </div>

          <div className="Section-PS">
            <div className="col-sm-6 col-12 px-2" id="">
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
            <button className="green-btn-S" onClick={(e) => handleSubmit(e)}>
              Save
            </button>
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
