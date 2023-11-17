import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());
  const padNum = (num) => {
    return num < 10 ? "0" + num : num;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });
  return <div className="clockCont">{time.getHours() + " : " + padNum(time.getMinutes()) + " : " + padNum(time.getSeconds())}</div>;
}

export default Clock;
