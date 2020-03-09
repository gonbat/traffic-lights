import Light from "./Light";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Delay5Seg = 5000;
const semaphoroSeq = {
  data: [
    { color: "R", duration: "3s" },
    { color: "Y", duration: "1s" },
    { color: "R", duration: "2s" },
    { color: "G", duration: "5s" },
  ],
};

const TrafficLight2 = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [data, setData] = useState({ data: [] });
  useEffect(() => {
    // function getFetchUrl() {
    //   return "https://api-pre.americadigital.com.ar/contents/semaphore/random";
    // }
    // async function fetchData() {
    //   const result = await axios(getFetchUrl());
    //   setData(result.data);
    // }

    // fetchData();
    const timer = setTimeout(() => {
      setData(semaphoroSeq);
      setIsStarted(true);
    }, Delay5Seg);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isStarted) {
      return;
    }
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % data.data.length);
    }, data.data[colorIndex].duration.slice(0, 1) * 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  console.log(data);
  return (
    <div className='traffic-light'>
      <Light
        color='#f00'
        active={!isStarted || data.data[colorIndex].color === "R"}
      />
      <Light
        color='#ff0'
        active={!isStarted || data.data[colorIndex].color === "Y"}
      />
      <Light
        color='#0c0'
        active={!isStarted || data.data[colorIndex].color === "G"}
      />
    </div>
  );
};

export default TrafficLight2;
