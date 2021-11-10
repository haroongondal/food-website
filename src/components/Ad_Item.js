import "../styles/AdItem.css";
import adImage from "../images/banner.jpg";

export default function AdItem() {
  return (
    <div className="Ad-item-image">
      <div className="banner_image">
        <img
          alt="banner_image"
          className="image-banner"
          src={adImage}
          style={{ borderRadius: "5px" }}
        />
      </div>
    </div>
  );
}
