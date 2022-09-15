import React from "react";
import { useRef } from "react";

function User({ listTitle }) {
  const titleRef = useRef(null);
  let checkStts = false;
  let count = 0;

  const success = (e) => {
    count++;
    count % 2 !== 0 ? (checkStts = true) : (checkStts = false);
    checkStts === true
      ? (e.target.className = "success")
      : (e.target.className = "");

    checkStts === true
      ? (titleRef.current.style.textDecoration = "line-through")
      : (titleRef.current.style.textDecoration = "none");
    console.log(checkStts);
  };
  return (
    <li>
      <p ref={titleRef}>{listTitle}</p>
      <div className="buttons">
        <button onClick={success}>&#10004;</button>
        <button> X </button>
      </div>
    </li>
  );
}

function List({ text }) {
  return (
    <ul>
      {text.map((title, index) => {
        return <User key={index} listTitle={title} />;
      })}
    </ul>
  );
}

export default List;
