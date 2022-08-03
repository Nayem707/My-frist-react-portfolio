import React from "react";
import { Link } from "react-router-dom";
const navbarStyle = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
};

export default navbarStyle;
