import React from "react";
import { useState } from "react";
import ImageUpload from "image-upload-react";

export default function OwnerDetailsPS() {
  const [ownerFullName, setOwnerFullName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [imgFront, setImgFront] = useState("");
  const [imgBack, setImgBack] = useState("");
  const [sameAsBtn, setSameAsBtn] = useState(false);
  const [whatsAppCheckbox, setWhatsAppCheckbox] = useState(false);

  

  function handleSubmit(e) {
    e.preventDefault();
    {
      const values = {
        ownerFullName: ownerFullName,
        ownerEmail: ownerEmail,
        ownerMobile: ownerMobile,
        ImgFront: imgFront.split(",")[1],
        ImgBack: imgBack.split(",")[1],
        sameAsBtn: sameAsBtn,
        whatsAppCheckbox: whatsAppCheckbox,
      };
      console.log(values);
      // Please Add Link of API

      fetch("/User/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
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

  return (
    <div>
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

        
        

        {/* Save Button */}
        <div className="Section-PS mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S" onClick={(e) => handleSubmit(e)}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
