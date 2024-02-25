import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import UpperFooter from "../../components/UpperFooter/UpperFooter";
import FooterMain from "../../components/Footer/FooterMain";
import "./team.scss";
const Team = () => {
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
    {
      id: 7,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team7.png",
    },
    {
      id: 8,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team8.png",
    },
    {
      id: 9,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team9.png",
    },
    {
      id: 10,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team10.png",
    },
    {
      id: 11,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team11.png",
    },
    {
      id: 12,
      stuff_name: "Jocelyn Schleifer",
      stuff: "Managing Director",
      image: "assets/images/team12.png",
    },
  ];
  return (
    <div className=" container-fluid-md container-lg team">
      <NavbarMain />

      <div className="row section-title" data-aos="fade-left">
        <div className="col-md-12 col-lg-4 first-title d-flex align-items-center border-right">
          Our Team
        </div>
        <div className="col-md-12 col-lg-8 d-flex align-items-center second-title">
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively.
        </div>
      </div>

      <div className="row team">
        {team.map((item) => (
          <div className="col-lg-3 col-md-12 cards" key={item.id}>
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

      <UpperFooter />
      <FooterMain />
    </div>
  );
};

export default Team;
