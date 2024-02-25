import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="main-navbar my-5" data-aos="fade-down">
        <div className="row">
          <div className="col-sm-2 d-flex align-items-center justify-content-center border-right">
            <Link className="nav-link" to="/">
              <img src="/assets/images/Branding.png" alt="logo" />
            </Link>
          </div>
          <div className="col-sm-10">
            <div className="row top-row">
              <div className="col-sm-9 d-flex align-items-center justify-content-center py-2 border-right">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team">
                      Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 d-flex align-items-center justify-content-center">
                <img src="/assets/images/Union.png" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 d-flex align-items-center justify-content-center py-3 border-right border-top1">
                <Link className="nav-link" to="/blog">
                  <i className="bi bi-pencil pe-1"></i>Blog
                </Link>
              </div>
              <div className="col-sm-6 d-flex align-items-center justify-content-center border-top1">
                <Link className="nav-link" to="/contact">
                  <i className="bi bi-calendar4 pe-1"></i> Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="second-navbar row" data-aos="fade-down">
        <div className="col-3 d-flex align-items-center justify-content-center logo">
          <Link className="nav-link" to="/">
            <img src="/assets/images/Branding.png" alt="logo" />
          </Link>
        </div>
        <div
          className="col-9 d-flex align-items-center justify-content-end hamburger"
          onClick={toggleMenu}
        >
          <img src="/assets/images/Union.png" alt="" />
        </div>
        <ul className={`menu${menuOpen ? "Active" : "Disable"}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMain;
