import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 20px, rgba(0,0,0,1) 20px, rgba(0,0,0,1) 20px)`;
const visibleMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 20px)`;

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.section
      className="Home"
      id="home"
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      onLoad={() => setIsLoaded(true)}
    >
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
    </motion.section>
  );
};

export default Home;
