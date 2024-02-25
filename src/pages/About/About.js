import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import UpperFooter from "../../components/UpperFooter/UpperFooter";
import FooterMain from "../../components/Footer/FooterMain";
import "./about.scss";
import CustomButton from "../../components/Button/CustomButton";
const About = () => {
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
    <div className="container-fluid-md container-lg about">
      <NavbarMain />

      <div className="row top">
        <div className="title">Humble beginnings. An inspiring story.</div>
        <div className="image">
          <img className="img-fluid" src="/assets/images/Cards.png" alt="" />
        </div>
      </div>

      <div className="row middle">
        <div className="col-md-12 col-lg-6 image">
          <img className="img-fluid" src="/assets/images/office.png" alt="" />
        </div>
        <div className="col-md-12 col-lg-6 main-info">
          <div className="header">
            <h1 className="title">Years of achievements </h1>
            <p className="tagline">
              Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris
              quis euismod congue. Augue elit id morbi semper sed in.
            </p>
          </div>
          <div className="body">
            <div className="element">
              <div className="numbers">15k+</div>
              <div className="title">Unique sections</div>
              <div className="info">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </div>
            </div>
            <div className="element">
              <div className="numbers">250+</div>
              <div className="title">Components</div>
              <div className="info">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </div>
            </div>
            <div className="element">
              <div className="numbers">86+</div>
              <div className="title">Clonable sections</div>
              <div className="info">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </div>
            </div>
            <div className="element">
              <div className="numbers">120+</div>
              <div className="title">Clonable sections</div>
              <div className="info">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 image-bottom">
          <img className="img-fluid" src="/assets/images/office.png" alt="" />
        </div>
      </div>

      <div className="row ceo">
        <div className="ceo-card">
          <div className="header">
            <div className="ceo-pic">
              <img
                className="img-fluid"
                src="/assets/images/profPic.png"
                alt=""
              />
            </div>
            <div className="info">
              <p className="name">John Conor</p>
              <p className="duty">CEO, Evernote</p>
            </div>
          </div>
          <div className="quote">
            "I've been using Clonify for the past year and I'm absolutely loving
            it. It's a powerful design tool that's easy to use and collaborate
            with others on. I especially love the real-time collaboration
            feature, which makes it so easy to get feedback from my team.”
          </div>
          <div className="company">
            <img className="img-fluid" src="/assets/images/com3.png" alt="" />
          </div>
        </div>
      </div>

      <div className="row team">
        <div className="col-md-12 col-lg-6 team-info-container">
          <p className="team-info">
            We are passionate about creating visually stunning and functional
            solutions that communicate effectively.
          </p>
        </div>

        {team.map((item) => (
          <div className="col-lg-3 col-md-12 cards" key={item.id} data-aos="flip-down">
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

      <CustomButton link={"/team"} className="team-see-button">
        See all members <i className="bi bi-arrow-up-right ps-1"></i>
      </CustomButton>

      <UpperFooter />

      <FooterMain />
    </div>
  );
};

export default About;
