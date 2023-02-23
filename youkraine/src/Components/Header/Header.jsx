import React from "react";
import "./Header.css";
import header from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={header} alt="" className="logo-image" />
      </div>
    </div>
  );
};

export default Header;
