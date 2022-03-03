import "../styles/ResLikeItem.css";
import restaurentImage from "../images/restaurant.jpg";
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'

export default function ResLikeItem() {
  return (
    
      <div className="box-restaurent-3rd-page">
        <Link to="/Dashboard">
          {/* img-box */}
          <div className="slide-img-restaurent-3rd-page">
            <img alt="4" src={restaurentImage} />

            {/* overlayer */}
            {/* <div className="over-rating-3rd-page"> */}
              {/* rating */}
              <div className="rating">
              <div className="content-rating-stars">
                <div className="rate-for-ratings-section">
                  <ReactStars
                    count={5}
                    size={30}
                    value={Math.round(0 * 100) / 100}
                    edit={false}
                    half={true}
                    color2={"#439548"}
                  />
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>

          {/* detail-box */}
          <div className="detail-box-restaurent-3rd-page">
            {/* details */}
            <div className="type-restaurent-3rd-page">
              <p>JW Kitchen</p>
              <span className="margao-details-3rd-page">
                JW Marriott Hotel, Vital Mallya Road, Central.
              </span>
              <span className="flat-off-3rd-page">1 offer avaiable</span>
            </div>
          </div>
        </Link>
      </div>

      
    
  );
}
