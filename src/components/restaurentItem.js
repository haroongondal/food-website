import React from "react";
import "../styles/RestaurentItem.css";
import restaurentImage from "../images/restaurant.jpg";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

export default function RestaurentItem({ data = "" }) {
  return (
    <div className="link restaurent_item">
      <Link to={`/RestaurentDetailsPage/${data.Id}`}>
        <div className="box-restaurent">
          {/* img-box */}
          <div className="img-restaurent">
            <img alt="4" src={restaurentImage} />

            {/* heart-icon */}

            <section className="ac-footer">
              <div className="ac-footer-container ac-footer-brand">
                <span className="ac-icon ac-icon-love-dark"></span>
              </div>
            </section>
          </div>

          {/* detail-box */}
          <div className="detail-box-restaurent">
            {/* restaurent-name */}
            <div className="restaurent-details">
              <a href="#abc">{data.RestaurantName}</a>
              {/* rating */}
              <div className="mb-1 rate-for-ratings-section">
                <ReactStars
                  count={5}
                  size={30}
                  value={Math.round(data.AverageRating * 100) / 100}
                  edit={false}
                  half={true}
                  color2={"#439548"}
                />
              </div>

              <span className="restaurent-location">
                {data.PrimaryAreaOfOutlet == null
                  ? data.PrimaryLocation == null
                    ? "Address not Available"
                    : data.PrimaryLocation
                  : data.PrimaryLocation == null
                  ? data.PrimaryAreaOfOutlet
                  : data.PrimaryAreaOfOutlet + ", " + data.PrimaryLocation}
              </span>
            </div>

            {/* distance */}
            <a href="#abc" className="restaurent-distance">
              {Math.round(data.Distance)}
            </a>
            <span className="restaurent-discount">
              Flat 25% Off the Total bill
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
