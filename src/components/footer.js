import "../styles/Footer.css";
import fbImage from "../images/facebook_logo.png";
import twitterImage from "../images/twitter_logo.png";
import instaImage from "../images/instagram_logo.png";
import { Link, useRouteMatch } from "react-router-dom";

export default function Footer() {
  const { path } = useRouteMatch();

  return (
    <div>
      <footer className="site-footer mobile-hide">
        <div className="container">
          <h3 className="footer-logo">Logo</h3>
          <div className="row">
            <div className="col-xs-6 col-md-2 margin">
              <h6>COMPANY</h6>
              <ul className="footer-links">
                <Link to={`${path}/About-Us`}>
                  <li>
                    <a href="#abc">Who We Are</a>
                  </li>
                </Link>
                <li>
                  <a href="#abc">Blog</a>
                </li>
                <li>
                  <a href="#abc">Carrers</a>
                </li>
                <li>
                  <a href="#abc">Report Fraud</a>
                </li>
                <li>
                  <a href="#abc">Contact</a>
                </li>
                <li>
                  <a href="#abc">Investor Relations</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-2 margin">
              <h6>FOR FOODIES</h6>
              <ul className="footer-links">
                <li>
                  <a href="#abc">Code of Conduct</a>
                </li>
                <li>
                  <a href="#abc">Community</a>
                </li>
                <li>
                  <a href="#abc">Blogger Helps</a>
                </li>
                <li>
                  <a href="#abc">Mobile Apps</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-2 " style={{ marginRight: "70px" }}>
              <h6 style={{ paddingright: "60px", inlineSize: "max-content" }}>
                FOR RESTAURANT
              </h6>
              <ul className="footer-links">
                <li>
                  <a href="#abc">Add restaurants</a>
                </li>
                <li>
                  <a href="#abc">Business App</a>
                </li>
                <li style={{ inlineSize: "max-content" }}>
                  <a href="#abc">Restaurants Widgets</a>
                </li>
                <li style={{ inlineSize: "max-content" }}>
                  <a href="#abc">Products for Businesses</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-2">
              <h6>FOR YOU</h6>
              <ul className="footer-links">
                <li>
                  <a href="#abc">Privacy</a>
                </li>
                <li>
                  <a href="#abc">Terms</a>
                </li>
                <li>
                  <a href="#abc">Security</a>
                </li>
                <li>
                  <a href="#abc">Sitemap</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-2">
              <h6>SOCIAL LINKS</h6>
              <ul className="social-icons" style={{ paddingLeft: "0px" }}>
                <li>
                  <a className="facebook" href="#abc">
                    <img
                      alt="fb-pic"
                      src={fbImage}
                      style={{ height: "25px", width: "25px" }}
                    />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#abc">
                    <img
                      alt="twitter-pic"
                      src={twitterImage}
                      style={{ height: "25px", width: "25px" }}
                    />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#abc">
                    <img
                      alt="insta-pic"
                      src={instaImage}
                      style={{ height: "25px", width: "25px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "50px" }} />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © By continuing past this page, you agree to our Terms
                of Service, Cookie Policy, Privacy Policy and Content Policies.
                All trademarks are properties of their respective owners. 2008-
                2021 © <a href="#abc">Food-App™</a> Ltd. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
