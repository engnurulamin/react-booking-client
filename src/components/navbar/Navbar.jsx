import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking App</span>
        <div className="navItems">
          <button className="navbtn">Register</button>
          <button className="navbtn">login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
