import Light from "./Light";
import React, { useState, useEffect } from "react";
const Delay5Seg = 5000;
const lightDurations = [5000, 2000, 5000];

const TrafficLight1 = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsStarted(true);
    }, Delay5Seg);
  }, []);

  useEffect(() => {
    if (!isStarted) {
      return;
    }
    setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
  });
  return (
    <div className='traffic-light'>
      <Light color='#f00' active={!isStarted || colorIndex === 0} />
      <Light color='#ff0' active={!isStarted || colorIndex === 1} />
      <Light color='#0c0' active={!isStarted || colorIndex === 2} />
    </div>
  );
};

export default TrafficLight1;
