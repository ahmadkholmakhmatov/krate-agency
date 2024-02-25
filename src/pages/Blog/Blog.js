import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import UpperFooter from "../../components/UpperFooter/UpperFooter";
import FooterMain from "../../components/Footer/FooterMain";
import CustomButton from "../../components/Button/CustomButton";
import "./blog.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How to create SVG-ready icon symbols in Sketch",
      date: "October 12, 2024",
      image: "/assets/images/blog1.png",
    },
    {
      id: 2,
      title: "Cinema 4D Visual Explorations by David Milan",
      date: "October 12, 2024",
      image: "/assets/images/blog2.png",
    },
    {
      id: 3,
      title: "Mental models for designers",
      date: "October 12, 2024",
      image: "/assets/images/blog3.png",
    },
    {
      id: 4,
      title:
        "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations",
      date: "October 12, 2024",
      image: "/assets/images/blog4.png",
    },
    {
      id: 5,
      title: "Blueprint fidelity: between paper prototype and finished product",
      date: "October 12, 2024",
      image: "/assets/images/blog5.png",
    },
    {
      id: 6,
      title: "Introducing: A brand new Dribbble",
      date: "October 12, 2024",
      image: "/assets/images/blog6.png",
    },
    {
      id: 7,
      title: "Design critiques at Figma",
      date: "October 12, 2024",
      image: "/assets/images/blog7.png",
    },
    {
      id: 8,
      title: "20 psychological principles applied to product design",
      date: "October 12, 2024",
      image: "/assets/images/blog8.png",
    },
  ];

  return (
    <div className="container-fluid-md container-lg blog">
      <NavbarMain />

      <div className="row section-title" data-aos="fade-left">
        <div className="col-md-12 col-lg-4 first-title d-flex align-items-center border-right">
          Blog
        </div>
        <div className="col-md-12 col-lg-8 d-flex align-items-center second-title">
          Latest articles and resources curated by our community
        </div>
      </div>

      <div className="row blog-cards">
        {blogs.map((item) => (
          <Link to="/blog/1">
            <div className="col-12 blog-card h-100" key={item.id} data-aos="zoom-in-down">
              <div className="header">
                <img src={item.image} alt="" />
              </div>
              <div className="body">
                <p>{item.date}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <CustomButton link={"/blog"}>Next </CustomButton>

      <UpperFooter />
      <FooterMain />
    </div>
  );
};

export default Blog;
