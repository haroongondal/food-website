import React from "react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import PopupSelectCuisine from "./PopupSelectCuisine";
import PopupSelectFeatures from "./PopupSelectFeatures";
import { ForDevice } from "media-query-react";

export default function RestaurentDetailsPS() {
  const [restName, setRestName] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [desc, setDesc] = useState("");
  const [takeAway, setTakeAway] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [cafe, setCafe] = useState(false);
  const [restaurent, setRestaurent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    {
      const values = {
        restName: restName,
        averagePrice: averagePrice,
        desc: desc,
        takeAway: takeAway,
        delivery: delivery,
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
      {/* Restaurant Details */}
      <div
        className="border-back-white"
        id="margin-20-TB"
        style={{ padding: "14px 0px" }}
      >
        <div className="header-PS">
          <h6 className="title-header-PS">Restaurant Details</h6>
          <h6 className="title-details-PS">Name, address, location</h6>
        </div>

        <hr />

        {/* Restaurent Name */}
        <div className="Section-PS row">
          <div className="col-md-6">
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
          <div className="col-md-6" id="margin-top-5">
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

        <div className="Section-PS row">
          {/* Select Cuisines */}
          <div className="col-md-6 d-flex align-items-center">
            <button
              className="select-cuisine-btn"
              onClick={handleSelectCuisinePop}
            >
              Select Cuisines
            </button>
          </div>

          {/* Select Features */}
          <div
            className="col-md-6 d-flex align-items-center "
            id="margin-top-5"
          >
            <button
              className="select-cuisine-btn"
              onClick={handleSelectFeaturesPop}
            >
              Select Features
            </button>
          </div>
        </div>

        {/* Delivery Type */}
        <div className="Section-PS row">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
                className="col-md-4 col-5 content-CB-PS mx-1"
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
        <div className="Section-PS row">
          <div className="col-md-12">
            <div className="label-PS">Restaurant Description</div>
            <textarea
              placeholder="Remember, be nice!"
              className="PS-textArea"
              rows="5"
              cols="95"
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

        {/* Save Button*/}
        <div className="Section-PS row mb-0 mt-5">
          <div className="col-md-12">
            <button className="green-btn-S" onClick={(e) => handleSubmit(e)}>
              Save
            </button>
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
  );
}
