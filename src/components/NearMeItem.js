import "../styles/NearMeItem.css";
import nearMeImg from "../images/near_me.png";

export default function NearMeItem() {
  return (
    <div>
      <div className="box-near-me">
        <div className="slide-img-near-me">
          <img
            className="image-near-me"
            alt="2"
            src={nearMeImg}
            width={65}
            height={65}
          />
        </div>

        <div className="detail-box-near-me">
          <div className="type-near-me">
            <a href="#abc" className="text-near-me">
              Near Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
