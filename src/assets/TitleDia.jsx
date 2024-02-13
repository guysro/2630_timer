import React from "react";
import "./Timer.css";

function TitleDia({ setOpen, isOpen, setTitle }) {
  return (
    <>
      <dialog
        open={isOpen()}
        className="dia"
      >
        <input
          className="titleIn"
          type="text"
          placeholder="title:"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button
          className="confirm"
          onClick={() => {
            setOpen(false);
          }}
        >
          confirm
        </button>
      </dialog>
    </>
  );
}

export default TitleDia;
