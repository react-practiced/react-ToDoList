import React from "react";
import { useRef } from "react";

function User({ listTitle, remove, id }) {
  const titleRef = useRef(null);
  let checkStts = false;
  let count = 0;

  const success = (e) => {
    count++;
    count % 2 !== 0 ? (checkStts = true) : (checkStts = false);

    if (checkStts === true) {
      e.target.className = "success";
      titleRef.current.style.textDecoration = "line-through";
    } else {
      e.target.className = "";
      titleRef.current.style.textDecoration = "none";
    }

    console.log(checkStts);
  };

  return (
    <li>
      <p ref={titleRef}>{listTitle}</p>
      <div className="buttons">
        <button onClick={success}>&#10004;</button>
        <button
          onClick={() => {
            remove(id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
}

function List({ text, remove }) {
  return (
    <ul>
      {text.map((title, index) => {
        return (
          <User key={index} listTitle={title} remove={remove} id={index} />
        );
      })}
    </ul>
  );
}

export default List;
