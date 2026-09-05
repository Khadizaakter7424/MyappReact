import { NavLink } from "react-router-dom";
import logo from "../assests/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand navbar-brand-text d-flex align-items-center" to="/">
         <img
  src={logo}
  alt="Logo"
  style={{ 
    height: "50px", 
    width: "80px",        // Increases width towards the left
    objectFit: "fill",    // Stretches the image horizontally
    marginRight: "12px" 
  }}
/>
          <span>My mini Project</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-item nav-link" to="/propsdata">
              PropsData
            </NavLink>
            <NavLink className="nav-item nav-link" to="/student-information">
              Student Information
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;