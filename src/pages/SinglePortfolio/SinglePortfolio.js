import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import UpperFooter from "../../components/UpperFooter/UpperFooter";
import FooterMain from "../../components/Footer/FooterMain";
import "./singlePorfolio.scss";
const SinglePortfolio = () => {
  return (
    <div className="container-fluid-md container-lg single-portfolio">
      <NavbarMain />

      <div className="col-12 case-studies">
        <i className="bi bi-arrow-return-left"></i> All case studies
      </div>

      <div className="row section-title" data-aos="fade-left">
        <div className="col-md-12 col-lg-4 first-title border-right">Galaxia Node</div>
        <div className="col-md-12 col-lg-4 second-title border-right">
          Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
          adipiscing augue sit.
        </div>
        <div className="col-md-12 col-lg-4 third-title">
          <div className="elements">
            <p className="element">
              <i className="bi bi-person"></i> Nayzak Design
            </p>
            <p className="element">
              <i className="bi bi-link-45deg"></i> live Preview
            </p>
            <p className="element">
              <i className="bi bi-grid"></i> Branding, UI.UX
            </p>
          </div>
        </div>
      </div>

      <div className="row single-portfolio-info">
        <div className="col-xl-12 top">
          <img
            className="img-fluid"
            src="/assets/images/singleport1.png"
            alt=""
          />
          <div className="row top-body">
            <div className="col-md-12 col-lg-6 first-text">
              I’m an expert in creating unique and immersive micro environments
              that give your space a special touch.
            </div>
            <div className="col-md-12 col-lg-6 second-text">
              Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
              adipiscing augue sit justo elit. Mauris bibendum mattis et diam
              tellus. Auctor mauris felis lobortis tempus, magna nisl, proin
              amet. Et diam amet aliquet nisi egestas aenean nunc. Vitae, arcu
              euismod turpis in tempus tincidunt mattis tellus nisl. Commodo
              lorem lacinia pulvinar lectus porttitor nisl. Amet quis
              consectetur malesuada lacus.
            </div>
          </div>
        </div>

        <div className="col-12 middle">
          <img
            className="img-fluid"
            src="/assets/images/singleport2.png"
            alt=""
          />
          <div className="row middle-body">
            <div className="col-md-12 col-lg-7 text">
              Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
              adipiscing augue sit justo elit. Mauris bibendum mattis et diam
              tellus. Auctor mauris felis lobortis tempus, magna nisl, proin
              amet. Et diam amet aliquet nisi egestas aenean nunc. Vitae, arcu
              euismod turpis in tempus tincidunt mattis tellus nisl.
            </div>
          </div>
        </div>

        <div className="col-12">
          <img
            className="img-fluid"
            src="/assets/images/singleport3.png"
            alt=""
          />
        </div>
      </div>

      <UpperFooter />

      <FooterMain />
    </div>
  );
};

export default SinglePortfolio;
