import React from "react";
import Acc from "./Acc";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <div className="profile">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/profile.png"}
            alt=""
          />
          <strong>LEE JEONG EUN</strong>
          <p className="tel">010 - 1234 - 5789</p>
          <p className="email">h00kk @ naver.com</p>
          <div className="icon-wrapper">
            <figure className="github">
              <img
                src={process.env.PUBLIC_URL + "/assets/image/github.png"}
                alt=""
              />
              <span>github</span>
            </figure>
            <figure className="notion">
              <img
                src={process.env.PUBLIC_URL + "/assets/image/notion.png"}
                alt=""
              />
              <span>notion</span>
            </figure>
          </div>
        </div>
        <div className="right-box">
          <p className="title">WHO AM I?</p>
          <Acc />
        </div>
      </div>

      <p className="copyright">copy @ 블라블라</p>
    </section>
  );
};

export default Contact;
