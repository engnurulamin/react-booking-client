import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link className="logoLink" to="/">
            Booking App
          </Link>
        </span>
        <div className="navItems">
          <button className="navbtn">Register</button>
          <button className="navbtn">login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
