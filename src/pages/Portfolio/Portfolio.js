import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import UpperFooter from "../../components/UpperFooter/UpperFooter";
import FooterMain from "../../components/Footer/FooterMain";
import "./portfolio.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CustomButton from "../../components/Button/CustomButton";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Galaxia Branding",
      image: "/assets/images/portfolio1.png",
    },
    {
      id: 2,
      title: "Nayzak Patterns",
      image: "/assets/images/portfolio2.png",
    },
    {
      id: 3,
      title: "Crave Chips",
      image: "/assets/images/portfolio3.png",
    },
    {
      id: 4,
      title: "John Mayer NYC",
      image: "/assets/images/portfolio4.png",
    },
  ];
  return (
    <div className="container-fluid-md container-lg portfolio">
      <NavbarMain />

      <div className="row section-title " data-aos="fade-left">
        <div className="col-md-12 col-lg-4 first-title d-flex align-items-center border-right">
          Case Studies
        </div>
        <div className="col-md-12 col-lg-8 d-flex align-items-center second-title">
          Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
          adipiscing augue sit.
        </div>
      </div>

      <div className="row portfolio-cards">
        {projects.map((item) => (
          <div className="col-xl-12 portfolio-card">
            <img className="img-fluid" src={item.image} alt="portfolio-pic" />
            <div className="mini-container">
              <h1>{item.title}</h1>
              <Link to={`/portfolio/${item.id}`}>
                View case study <i className="bi bi-arrow-up-right ps-1"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <CustomButton link={"/portfolio/1"}>
        View all work <i className="bi bi-arrow-up-right ps-1"></i>
      </CustomButton>

      <UpperFooter />

      <FooterMain />
    </div>
  );
};

export default Portfolio;
