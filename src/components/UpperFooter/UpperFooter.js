import React from "react";
import "./upperFooter.scss";
import { useHistory } from 'react-router-dom';

const UpperFooter = () => {
  const history = useHistory();


  const handleClick = () => {
    history.push("/contact");
  };

  return (
    <div className="last_Img d-flex align-items-center justify-content-center" data-aos="zoom-in">
      <div className="mini-container">
        <h1>Have an idea? Let’s talk.</h1>
        <p>
          Visually attractive design from concept to final result. We create
          solutions that are bold and forward-looking.
        </p>
        <button onClick={handleClick} className="button">
          <i className="bi bi-calendar4 pe-2"></i>Free Consultation
        </button>
      </div>
    </div>
  );
};

export default UpperFooter;
