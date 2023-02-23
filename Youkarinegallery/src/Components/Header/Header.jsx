import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo_image" src={logo} />
    </div>
  );
};

export default Header;
