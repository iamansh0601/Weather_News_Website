import React from "react";
import "./NavInshort.css";
// import HamburgerDrawer from "./HamburgerDrawer";
import mainLogo from "./images/Capture.PNG";
const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
        <img
        style={{ cursor: "pointer" }}
        src={mainLogo}
        height="80%"
        alt="logo"
        
      />
    </div>
  );
};

export default NavInshort;