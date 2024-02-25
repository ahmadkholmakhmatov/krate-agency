import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./customButton.scss";
const CustomButton = ({ children, link }) => {
  return (
    <div className="custom-button">
      <Link className="button-link" to={link}>{children}</Link>
    </div>
  );
};

export default CustomButton;
