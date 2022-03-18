import "../styles/MobileTopNavBar.css";

export default function ResTopNavbar() {
  return (
    <div className="resTop-navbar pt-2 px-3 d-lg-none d-block">
      <div className="d-flex justify-content-between">
        <div>
          <i className="fa fa-angle-left me-3 fs-3"></i>
        <span className="fw-bold">Savour Food</span>
        </div>
        <div>
          <i className="fa fa-share-alt me-3"></i>
          <i className="fa fa-heart-o"></i>
        </div>
      </div>
      <div className="d-flex justify-content-between top-navList">
        <div className="top-navItem active">Overview</div>
        <div className="top-navItem">About</div>
        <div className="top-navItem">Menu</div>
        <div className="top-navItem">Reviews</div>
      </div>
    </div>
  );
}
