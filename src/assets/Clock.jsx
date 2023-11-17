import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });
  return <div className="clockCont">{time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds()}</div>;
}

export default Clock;
