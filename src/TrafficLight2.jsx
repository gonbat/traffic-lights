import Light from "./Light";
import React, { useState, useEffect } from "react";
// import axios from "axios";
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
    // async function fetchData() {
    //   const result = await axios.get(
    //     "https://api-pre.americadigital.com.ar/contents/semaphore/random",
    //   );
    //   setData(result.data);
    // }
    // fetchData();
    setTimeout(() => {
      setData(semaphoroSeq);
      setIsStarted(true);
    }, Delay5Seg);
  }, []);

  useEffect(() => {
    if (!isStarted) {
      return;
    }
    setTimeout(() => {
      setColorIndex((colorIndex + 1) % data.data.length);
    }, data.data[colorIndex].duration.slice(0, 1) * 1000);
  });
  return (
    <div class='text'>
      <h1>Semaforo-2</h1>
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
    </div>
  );
};

export default TrafficLight2;
