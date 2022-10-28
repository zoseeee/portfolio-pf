import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./Home";
import Contact from "./Contact";
import Project from "./Project";
import Project02 from "./Project02";
import Project03 from "./Project03";
import About from "./About";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Project />
          </div>
          <div className="section">
            <Project02 />
          </div>
          <div className="section">
            <Project03 />
          </div>
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
