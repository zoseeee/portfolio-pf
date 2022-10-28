import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
// import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const DB = [
  {
    id: 1,
    content: "HINCE",
    info: "화장품 브랜드 hince의 웹사이트를 리뉴얼하였습니다.\n힌스만의 브랜드 색을 잘 보여주는 브랜드 홍보 영상을 메인 배경으로 가져와 웹 사이트의 이미지를 고정하여 웹디자인을 구성하였습니다. \n또한 힌스가 구성하는 차분한 색감과 비비드한 컬러의 조화를 중점으로 작업했습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
    site: "https://jigoooo.github.io/BIFF/",
  },
  {
    id: 2,
    content: "Haagen-Dazs",
    info: "화장품 브랜드 hince의 웹사이트를 리뉴얼하였습니다.\n힌스만의 브랜드 색을 잘 보여주는 브랜드 홍보 영상을 메인 배경으로 가져와 웹 사이트의 이미지를 고정하여 웹디자인을 구성하였습니다. \n또한 힌스가 구성하는 차분한 색감과 비비드한 컬러의 조화를 최대한 신경쓰며 작업했습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
    site: "https://jigoooo.github.io/haagendazs/",
  },
  {
    id: 3,
    content: "JASENG",
    info: "화장품 브랜드 hince의 웹사이트를 리뉴얼하였습니다.\n힌스만의 브랜드 색을 잘 보여주는 브랜드 홍보 영상을 메인 배경으로 가져와 웹 사이트의 이미지를 고정하여 웹디자인을 구성하였습니다. \n또한 힌스가 구성하는 차분한 색감과 비비드한 컬러의 조화를 최대한 신경쓰며 작업했습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
    site: "https://jigoooo.github.io/BIFF/",
  },
  {
    id: 4,
    content: "KIZANIA",
    info: "화장품 브랜드 hince의 웹사이트를 리뉴얼하였습니다.\n힌스만의 브랜드 색을 잘 보여주는 브랜드 홍보 영상을 메인 배경으로 가져와 웹 사이트의 이미지를 고정하여 웹디자인을 구성하였습니다. \n또한 힌스가 구성하는 차분한 색감과 비비드한 컬러의 조화를 최대한 신경쓰며 작업했습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
    site: "https://jigoooo.github.io/BIFF/",
  },
  {
    id: 5,
    content: "JAKOMO",
    info: "화장품 브랜드 hince의 웹사이트를 리뉴얼하였습니다.\n힌스만의 브랜드 색을 잘 보여주는 브랜드 홍보 영상을 메인 배경으로 가져와 웹 사이트의 이미지를 고정하여 웹디자인을 구성하였습니다. \n또한 힌스가 구성하는 차분한 색감과 비비드한 컬러의 조화를 최대한 신경쓰며 작업했습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
    site: "https://jigoooo.github.io/BIFF/",
  },
  {
    id: 6,
    content: "GOPIZZA",
    info: "화장품 브랜드 hince의 웹사이트를 리뉴얼하였습니다.\n힌스만의 브랜드 색을 잘 보여주는 브랜드 홍보 영상을 메인 배경으로 가져와 웹 사이트의 이미지를 고정하여 웹디자인을 구성하였습니다. \n또한 힌스가 구성하는 차분한 색감과 비비드한 컬러의 조화를 최대한 신경쓰며 작업했습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "JavaScript / HTML5 / CSS / Figma",
    font: "Noto Sans KR",
    color: "#ff0",
    site: "https://jigoooo.github.io/BIFF/",
  },
];

const Project02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  SwiperCore.use([Navigation]);

  return (
    <section className="Project js" id="project">
      <header className="project-title">
        <h2>MY PROJECT</h2>
        {/* <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/portfolio-2022"
            >
              <span>REACT</span>
              01
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project02"
            >
              <span>JavaScript</span>
              02
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navLink" + (isActive ? ".active" : "")
              }
              to="/project03"
            >
              <span>TOY</span>
              03
            </NavLink>
          </li>
        </ul> */}
      </header>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        // loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="project-swiper02"
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {DB.map((slide, idx) => (
          <SwiperSlide className="project02">
            <div className="swiper-content">
              <figure onClick={() => toggleMenu()}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/image/pf02__0" +
                    (idx + 1) +
                    ".png"
                  }
                  alt=""
                />

                <h3>{slide.content}</h3>
              </figure>
              <div className={isOpen ? "info-wrapper on" : "info-wrapper"}>
                <div className="info">
                  <span>about</span>
                  <p className="info-word">{slide.info}</p>
                  <span>tools</span>
                  <p className="tools">{slide.tools}</p>
                  <div>
                    <button>
                      <a
                        href={slide.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WebPage
                      </a>
                    </button>
                    <button>StyleGuide</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project02;
