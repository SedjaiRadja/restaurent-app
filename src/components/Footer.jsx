import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Savor the moment, enjoy the meal</p>
          <div className="footer-social-logos">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className="title">COMPANY</h2>
          <ul className="ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2 className="title">GET IN TOUCH!</h2>
          <ul className="ul">
            <li>+213797295617</li>
            <li>radjarestaurent@gmail.com</li>
            <li>Oran, Algeria</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2026 Radja. All rights reserved.</p>
    </div>
  );
}
export default Footer;
