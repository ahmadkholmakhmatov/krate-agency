import React from "react";
import "./contact.scss";
import NavbarMain from "../../components/Navbar/NavbarMain";
import FooterMain from "../../components/Footer/FooterMain";

const Contact = () => {
  return (
    <div className="container-fluid-md container-lg contact">
      <NavbarMain />

      <div className="row section-title" data-aos="fade-left">
        <div className="col-md-12 col-lg-4 first-title d-flex border-right">
          Get in touch
        </div>
        <div className="col-md-12 col-lg-8 second-title">
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively.
        </div>
      </div>

      <div className="row offices">
        <div className="col-md-12 col-lg-7 image">
          <img className="img-fluid" src="/assets/images/contact.png" alt="" />
        </div>
        <div className="col-md-12 col-lg-5 main-info">
          <div className="header">
            <h1 className="title">Our offices </h1>
          </div>
          <div className="body">
            <div className="element">
              <div className="country">Netherlands</div>
              <div className="address">
                Suite 101 Nayzak Street London REU UK
              </div>
            </div>
            <div className="element">
              <div className="country">Netherlands</div>
              <div className="address">
                Suite 101 Nayzak Street London REU UK
              </div>
            </div>
            <div className="element">
              <div className="country">Japan</div>
              <div className="address">
                Suite 101 Nayzak Street London REU UK
              </div>
            </div>
            <div className="element">
              <div className="country">Japan</div>
              <div className="address">
                Suite 101 Nayzak Street London REU UK
              </div>
            </div>
            <div className="element">
              <div className="country">United States</div>
              <div className="address">
                Suite 101 Nayzak Street London REU UK
              </div>
            </div>
            <div className="element">
              <div className="country">United States</div>
              <div className="address">
                Suite 101 Nayzak Street London REU UK
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row contact-form">
        <form className="form-control form">
          <h1 className="title">Get in touch</h1>
          <div className="name-inputs">
            <input
              className="form-control input"
              name="firstName"
              type="text"
              placeholder="First name"
            />
            <input
              className="form-control input"
              name="lastName"
              type="text"
              placeholder="Last name"
            />
          </div>

          <input
            className="form-control email"
            name="lastName"
            type="email"
            placeholder="Enter email"
          />
          <select
            className="form-select select"
            name="departament"
            id=""
            placeholder="department"
          >
            <option value="departament" selected disabled>
              Departament
            </option>
            <option value="dep1">dep1</option>
            <option value="dep2">dep2</option>
          </select>
          <div className="form-floating">
            <textarea
              name="message"
              id="textarea"
              className="form-control text-area"
              style={{ minHeight: "140px" }}
            ></textarea>
            <label htmlFor="textarea">Message</label>
          </div>

          <button
            type="sumbit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="form-button"
          >
            Send message
          </button>
          <p className="form-tagline">
            By contacting us, you agree to Clonify’s Terms and Conditions.
          </p>
        </form>
      </div>

      <FooterMain />
    </div>
  );
};

export default Contact;
