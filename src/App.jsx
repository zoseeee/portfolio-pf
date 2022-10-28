import React, { useEffect, useState } from "react";
import Fullpage from "./component/Fullpage";
import "./css/Main.scss";
import Header from "./component/Header";
import LoadingPage from "./component/LoadingPage";

const App = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 5500);
    return () => {
      clearTimeout(timer);
    };
  });

  //로딩페이지 포함
  // return load === true ? (
  //   <LoadingPage />
  // ) : (
  //   <>
  //     <Header />
  //     <Fullpage />
  //   </>
  // );

  return (
    <>
      <Header />
      <Fullpage />
    </>
  );
};

export default App;
