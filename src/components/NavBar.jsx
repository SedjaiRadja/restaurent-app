import logo from "../assets/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-bar">
          <img src={logo} alt="Logo" />

          <div className="nav-links">
            <Link to="/" className="btn">
              home
            </Link>
            <Link to="/about" className="btn">
              about
            </Link>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
