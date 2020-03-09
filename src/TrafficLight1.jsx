import Light from "./Light";
import React, { useState, useEffect } from "react";
const initialDelay = 5000;
const lightDurations = [1000, 5551, 2201];

const TrafficLight1 = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, initialDelay);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isStarted) {
      return;
    }
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
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
