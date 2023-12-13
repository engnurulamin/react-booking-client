import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link className="logoLink" to="/">
            Booking App
          </Link>
        </span>
        {user ? (
          <span className="username">{user.username}</span>
        ) : (
          <div className="navItems">
            <button className="navbtn">Register</button>
            <button className="navbtn">login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
