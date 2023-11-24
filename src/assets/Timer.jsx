import React, { useEffect, useState } from "react";
import "./Timer.css";
import TitleDia from "./TitleDia";

const padNum = (num) => {
  return num < 10 ? "0" + num : num;
};
function Timer({ defaultDate }) {
  const [out, setOut] = useState("NaN : NaN : NaN : NaN");
  const [dateIn, setDate] = useState("");
  const [timeIn, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const defaultD = formatDate(defaultDate.date) + " " + defaultDate.time;
  const defaultT = defaultDate.title;

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
      var diff = timeDiff(new Date(dateIn + " " + timeIn), new Date());
      if (diff !== "NaN : NaN : NaN : NaN" && diff != null) {
        setOut(diff);
        setShouldRender(out !== "NaN : NaN : NaN : NaN" && out != null);
      } else {
        setOut(timeDiff(new Date(defaultD), new Date()));
        setTitle(defaultT);
        setShouldRender(true);
        console.log(defaultD);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="cont">
      <div className="timeCont">
        <h1 className="title">{title}</h1>
        <h1 className="output">{shouldRender ? out : null}</h1>
        <div
          style={{ display: shouldRender ? "flex" : "none", gap: "8vw", marginTop: "-1vw" }}
          className="timeUnit"
        >
          <h2 style={{ marginLeft: "1vw" }}>days</h2>
          <h2 style={{ marginLeft: "2vw" }}>hours</h2>
          <h2 style={{ marginLeft: "1.5vw" }}>mins</h2>
          <h2>seconds</h2>
        </div>
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
  out = padNum(days) + " : " + padNum(hours) + " : " + padNum(minutes) + " : " + padNum(sec);
  return sec >= 0 ? out : null;
}

const formatDate = (date) => {
  const d = date.split("/");
  return d[1] + "/" + d[0] + "/" + d[2];
};

export default Timer;
