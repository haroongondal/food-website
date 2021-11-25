import React from 'react'
import { useState } from 'react';
import ImageUpload from "image-upload-react";
import UploadSvgIcon from "../components/UploadSvgIcon";

export default function ResDocumentsPS() {

  const [imgSMES, setImgSMES] = useState("");

  const [imgLicence, setImgLicence] = useState("");

  const [gstNo, setGstNo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    {
      
      const values = {
        smes: imgSMES.split(",")[1],
        license: imgLicence.split(",")[1],
        gstNo: gstNo,
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
    return (
        <div>
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

        {/* Save Button */}
        <div className="Section-PS mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S" onClick={(e)=> handleSubmit(e)}>Save</button>
          </div>
        </div>
      </div>
        </div>
    )
}
