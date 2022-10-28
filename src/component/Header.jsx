import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll/modules";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const HL = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 2000
        ? HL.current.classList.add("on")
        : HL.current.classList.remove("on");
    });
  }, []);
  return (
    <header className="Header">
      <div className="hd_wrapper">
        <button onClick={() => toggleMenu()} ref={HL}>
          <div className={isOpen ? "on" : ""}></div>
          <div className={isOpen ? "on" : ""}></div>
        </button>
        <nav className="gnb">
          <ul>
            <li>
              <Link to="home" smooth="true" duration={1000}>
                <h2>home</h2>
              </Link>
            </li>
            <li>
              <Link to="about" smooth="true" duration={1000}>
                <h2>about</h2>
              </Link>
            </li>
            <li>
              <Link to="project" smooth="true" duration={1000}>
                <h2>project</h2>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth="true" duration={1000}>
                <h2>contact</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={isOpen ? "show-menu" : "hide-menu"}>
        <ul>
          <li>
            <Link
              to="home"
              smooth="true"
              duration={1000}
              onClick={() => toggleMenu(false)}
            >
              <h2>HOME</h2>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth="true"
              duration={1000}
              onClick={() => toggleMenu(false)}
            >
              <h2>ABOUT</h2>
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth="true"
              duration={1000}
              onClick={() => toggleMenu(false)}
            >
              <h2>PROJECT</h2>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth="true"
              duration={1000}
              onClick={() => toggleMenu(false)}
            >
              <h2>CONTACT</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
