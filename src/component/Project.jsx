import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
// import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

const DB = [
  {
    id: 1,
    content: "YouTube\nClone Coding",
    info: "유튜브 사이트를 클론코딩하였습니다. \n검색기능, 비디오 클릭시 상세화면으로 이동 등을 구현하였습니다.",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 2,
    content: "2022 \nPORTFOLIO",
    info: "2022년 포트폴리오 사이트입니다.",
    type: "개인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    font: "Noto Sans KR",
    color: "#ff0",
  },
  {
    id: 3,
    content: "Spotify",
    info: "스포티파이 사이트를 클론코딩하였습니다. \n로그인, 검색기능 등을 구현하였습니다. (사이트 추가예정입니다.)",
    type: "메인페이지",
    work: "개인작업 100%",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    font: "Noto Sans KR",
    color: "#ff0",
  },
];

const Project = () => {
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setmainImageIndex] = useState(0);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainImageIndex;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setmainImageIndex(e.activeIndex),
  };

  return (
    <section className="Project react" id="project">
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
              <span
                className={({ isActive }) =>
                  "navLink" + (isActive ? ".on" : "")
                }
              >
                JavaScript
              </span>
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
              <span
                className={({ isActive }) =>
                  "navLink" + (isActive ? ".on" : "")
                }
              >
                TOY
              </span>
              03
            </NavLink>
          </li>
        </ul> */}
      </header>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={1}
        {...swiperParams}
        ref={setSwiper}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="project-swiper"
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {DB.map((slide, idx) => (
          <SwiperSlide className="swiper-slide">
            <div className="slide_content">
              <div className="left-box">
                <h3>{slide.content}</h3>
                <p className="info">{slide.info}</p>
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
              <div className="right-box">
                <a
                  href="http://naver.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/image/pf01__0" +
                      (idx + 1) +
                      ".png"
                    }
                    alt=""
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="button-wrapper">
          <button ref={navigationPrevRef} className="prevBtn">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/icon_arrow_prev.png"
              }
              alt="prevButton"
            />
          </button>
          <button ref={navigationNextRef} className="nextBtn">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/icon_arrow_next.png"
              }
              alt="NextButton"
            />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Project;
