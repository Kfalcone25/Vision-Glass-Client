import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    
  return (
    <Link className="main-box" to={'/'} >
      <img className="img" src="/visionLogo.jpg" alt="logo" />
    </Link>
  );
};

export default Logo;
