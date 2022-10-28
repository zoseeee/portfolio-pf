import React, { useEffect, useState } from "react";

const DB = ["", "", "WELCOME", "TO", "MY", "2022", "PORTFOLIO"];

const LoadingPage = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const shuffle = () => {
      if (num > 5) {
        return;
      }
      setNum(num + 1);
    };
    const intervalID = setInterval(shuffle, 600);
    return () => clearInterval(intervalID);
  }, [num]);

  return (
    <div className="loadingPage">
      <div className="loading-word">{DB[num]}</div>
      <div className="Loading" data-text="LOADING">
        LOADING &#128498;
      </div>
    </div>
  );
};

export default LoadingPage;
