import React from "react";
import { Link } from "react-scroll/modules";

const Home = () => {
  return (
    <section className="Home" id="home">
      <div className="title-box">
        <div className="year">
          <img src={process.env.PUBLIC_URL + "/assets/image/2022.svg"} alt="" />
        </div>
        <div className="title-img">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/pf-title.svg"}
            alt=""
          />
        </div>
        <span className="name">LEE JEONG EUN</span>
      </div>
      <Link to="about" smooth="true" duration={1000}>
        <button>CLICK</button>
      </Link>
    </section>
  );
};

export default Home;
