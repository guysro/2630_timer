import React, { useEffect, useState } from "react";
import "./Timer.css";
import TitleDia from "./TitleDia";

function Timer() {
  const [out, setOut] = useState("NaN : NaN : NaN : NaN");
  const [dateIn, setDate] = useState("");
  const [timeIn, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const changeOpen = (change) => {
    setOpen(change);
  };
  const changeTitle = (change) => {
    setTitle(change);
  };
  const getOpen = () => {
    return open;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOut(timeDiff(new Date(dateIn + " " + timeIn), new Date()));
      setShouldRender(out !== "NaN : NaN : NaN : NaN" && out != null);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="cont">
      <div className="timeCont">
        <h1 className="title">{title}</h1>
        <h1 className="output">{shouldRender ? out : null}</h1>
        <h1
          style={{ display: shouldRender ? "block" : "none" }}
          className="timeUnit"
        >
          {"days | hours | minutes | sec"}
        </h1>
      </div>
      <div className="inputCont">
        <input
          className="in date"
          type="date"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <input
          className="in time"
          type="time"
          onChange={(event) => {
            setTime(event.target.value);
          }}
        />
        <button
          className="in btn"
          onClick={() => setOpen(true)}
        >
          edit title
        </button>
      </div>
      <TitleDia
        isOpen={getOpen}
        setOpen={changeOpen}
        setTitle={changeTitle}
      />
    </div>
  );
}

function timeDiff(d1, d2) {
  var diffMS = d1 - d2;
  return dhm(diffMS);
}
function dhm(ms) {
  var out = null;
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  out = days + " : " + hours + " : " + minutes + " : " + sec;
  return sec >= 0 ? out : null;
}

export default Timer;
