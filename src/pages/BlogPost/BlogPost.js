import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import FooterMain from "../../components/Footer/FooterMain";
import "./blogPost.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogPost = () => {
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
  ];
  return (
    <div className="container-fluid-md container-lg blog-post">
      <NavbarMain />

      <div className="row top">
        <Link to="/blog">
          <div className="back-blog">
            <i className="bi bi-arrow-return-left"></i> Back to blog
          </div>
        </Link>
        <div className="title">
          <h1>How to create SVG-ready icon symbols in Sketch</h1>
          <p>Oct 25, 2024</p>
          <p>By John Conor</p>
        </div>
        <div className="title-image">
          <img src="/assets/images/BlogPost1.png" alt="" />
        </div>
      </div>

      <div className="row middle">
        <div className="row first-text">
          <div className="col-md-12 col-lg-6 text">
            Nayzak, everyone in my team works towards the samegoal. This enabled
            our teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize.
            <br />
            <br />
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire.
          </div>
          <div className="col-md-12 col-lg-6 text">
            Nayzak, everyone in my team works towards the samegoal. This enabled
            our teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize.
            <br />
            <br /> But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth.
          </div>
        </div>

        <div className="row middle-image">
          <div className="col-12 image">
            <img
              className="img-fluid"
              src="/assets/images/BlogPost2.png"
              alt=""
            />
          </div>
          <div className="tagline">
            Nayza’s Figma builder — Design your next ecommerce project instantly
          </div>
        </div>

        <div className="row second-text">
          <h3>Keep your everyday on trend</h3>
          <p>
            Nayzak, everyone in my team works towards the samegoal. This enabled
            our teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize. <br />
            <br /> But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself
          </p>
        </div>

        <div className="row third-text">
          <img className="img-fluid" src="/assets/images/02.svg" alt="" />
          <p className="text">
            Nayzak, everyone in my team works towards the samegoal. This enabled
            our teams to ship new ideas and feel more capable. Podcasting
            operational
          </p>
          <p className="author">— Carl Sagan</p>
        </div>

        <div className="row fourth-text">
          Nayzak, everyone in my team works towards the samegoal. This enabled
          our teams to ship new ideas and feel more capable. Podcasting
          operational — change management inside of workflows. Completely
          synergize. <br /> <br /> But I must explain to you how all this
          mistaken idea of denouncing pleasure and praising pain was born and I
          will give you a complete account of the system, and expound the actual
          teachings of the great explorer of the truth, the master-builder of
          human happiness. No one rejects, dislikes, or avoids pleasure itself
        </div>
      </div>

      <div className="row blog-cards">
      <h1 className="title">You might also like...</h1>
        {blogs.map((item) => (
          <Link to="/blog/1">
            <div className="col-12 blog-card h-100" key={item.id}>
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

      <FooterMain />
    </div>
  );
};

export default BlogPost;
