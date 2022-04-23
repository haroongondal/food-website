import "../styles/ResLikeItem.css";
import restaurentImage from "../images/restaurant.jpg";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

export default function ResLikeItem({ data = "" }) {
  return (
    <div className="box-restaurent-3rd-page">
      <Link to={`/RestaurentDetailsPage/${data.Id}`}>
        {/* img-box */}
        <div className="slide-img-restaurent-3rd-page">
          <img alt="4" src={restaurentImage} />

          {/* overlayer */}
          {/* <div className="over-rating-3rd-page"> */}

          {/* </div> */}
        </div>

        {/* detail-box */}
        <div className="detail-box-restaurent-3rd-page">
          {/* details */}
          <div className="type-restaurent-3rd-page">
            <p>{data.RestaurantName}</p>
            {/* rating */}
            <div className="rate-for-ratings-section mb-1 position-relative w-100">
              <ReactStars
                count={5}
                size={30}
                value={Math.round(data.AverageRating * 100) / 100}
                edit={false}
                half={true}
                color2={"#439548"}
                className="react-stars"
              />
              {data.UserReviews ? (
                  <span className="user-reviews">
                    {data.UserReviews.length} Reviews
                  </span>
                ) : (
                  <span className="user-reviews">0 Reviews</span>
                )}
              {/* <span className="user-reviews">4 Reviews</span> */}
            </div>
            <span className="margao-details-3rd-page">
            {data.PrimaryAreaOfOutlet == null
                  ? data.PrimaryLocation == null
                    ? "Address not Available"
                    : data.PrimaryLocation
                  : data.PrimaryLocation == null
                  ? data.PrimaryAreaOfOutlet
                  : data.PrimaryAreaOfOutlet + ", " + data.PrimaryLocation}
            </span>
            <span className="flat-off-3rd-page">1 offer avaiable</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
