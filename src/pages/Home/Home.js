import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import "./home.scss";
import CustomButton from "../../components/Button/CustomButton";
import UpperFooter from "../../components/UpperFooter/UpperFooter";
import FooterMain from "../../components/Footer/FooterMain";
const Home = () => {
  const works = [
    {
      id: 1,
      image: "/assets/images/card1.png",
      title: "Galaxia Branding",
    },
    {
      id: 2,
      image: "/assets/images/card2.png",
      title: "John Mayer NYC",
    },
    {
      id: 3,
      image: "/assets/images/card3.png",
      title: "Nayzak Patterns",
    },
    {
      id: 4,
      image: "/assets/images/card4.png",
      title: "Crave Chips",
    },
  ];
  const team = [
    {
      id: 1,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team1.png",
    },
    {
      id: 2,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team2.png",
    },
    {
      id: 3,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team3.png",
    },
    {
      id: 4,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team4.png",
    },
    {
      id: 5,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team5.png",
    },
    {
      id: 6,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team6.png",
    },
  ];

  return (
    <div className="home container-fluid-md container-lg">
      <NavbarMain />
      <h1 className="title-company" data-aos="fade-left">
        Krate design and motion studio
      </h1>

      <div className="main_Img">
        <picture>
        <source media="(max-width: 768px)" srcSet="/assets/images/Video2.png"/>
          <img
            className="img-fluid"
            src="/assets/images/Video.png"
            alt="Entering"
          />
        </picture>
      </div>

      <div className="row clients">
        <div className="col-md-12 col-lg-7">
          <p className="paragraph">
            We are passionate about creating visually stunning and functional
            solutions that communicate effectively. I have a keen eye for detail
            and a deep understanding of design principles, which I use to
            deliver projects that exceed my clients' expectations.
          </p>
        </div>
        <div className="col-md-12 col-lg-4 offset-lg-1">
          <div className="row">
            <div className="col-6 companies">
              <img src="/assets/images/com1.png" alt="" />
              <img src="/assets/images/com2.png" alt="" />
              <img src="/assets/images/com3.png" alt="" />
            </div>
            <div className="col-6 companies">
              <img src="/assets/images/com4.png" alt="" />
              <img src="/assets/images/com5.png" alt="" />
              <img src="/assets/images/com6.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <i className="bi bi-arrow-return-right pe-1"></i> Our Services
      </div>

      <div className="accordion-container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <img
                  src="/assets/images/1.png"
                  className="img-fluid"
                  alt="web"
                />
                Web & Mobile Design
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <img
                  src="/assets/images/2.png"
                  className="img-fluid"
                  alt="web"
                />
                Brand Identity
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <img
                  src="/assets/images/3.png"
                  className="img-fluid"
                  alt="web"
                />
                App Development
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <img
                  src="/assets/images/4.png"
                  className="img-fluid"
                  alt="web"
                />
                Consultancy
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <img
                  src="/assets/images/5.png"
                  className="img-fluid"
                  alt="web"
                />
                Packaging
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <i className="bi bi-arrow-return-right pe-1"></i> Recent Work
      </div>

      <div className="row works">
        {works.map((item) => (
          <div className="col-md-12 col-lg-6 cards" key={item.id} data-aos="flip-down">
            <div className="card" key={item.id}>
              <img src={item.image} className="card-img-top" alt="card_image" />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomButton link="/portfolio">
        View all work <i className="bi bi-arrow-up-right ps-1"></i>
      </CustomButton>

      <div className="service">
        <i className="bi bi-arrow-return-right pe-1"></i> Our Team
      </div>

      <div className="row team">
        <div className="col-md-12 col-lg-6 team-info-container">
          <p className="team-info">
            We are passionate about creating visually stunning and functional
            solutions that communicate effectively.
          </p>
        </div>

        {team.map((item) => (
          <div className="col-sm-3 cards" key={item.id} data-aos="flip-down">
            <div className="card">
              <img src={item.image} className="img-fluid" alt="card_image" />
              <div className="card-body">
                <p className="card-text">{item.stuff_name}</p>
                <p className="card-text-small">{item.stuff}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomButton link="/team">
        See all members <i className="bi bi-arrow-up-right ps-1"></i>
      </CustomButton>

      <UpperFooter />

      <FooterMain />
    </div>
  );
};

export default Home;
