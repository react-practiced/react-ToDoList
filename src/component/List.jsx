import React, { useRef, useState } from "react";

function User({ listTitle, remove, id, correction }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
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

  const ModalOn = () => {
    setIsOpen(true);
  };

  const onCorrection = (id, text) => {
    correction(id, text);
    setIsOpen(false);
  };

  return (
    <li>
      <div
        className="modal-bg"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <div className="white-box">
          <h4>수정사항을 입력하세요</h4>
          <hr />
          <input
            type="text"
            placeholder={listTitle}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="submit" onClick={() => onCorrection(id, text)}>
            저장
          </button>
        </div>
      </div>
      <p ref={titleRef} onClick={ModalOn}>
        {listTitle}
      </p>
      <div className="buttons">
        <button onClick={success}>&#10004;</button>
        <button onClick={() => remove(id)}>X</button>
      </div>
    </li>
  );
}

function List({ text, remove, correction }) {
  return (
    <ul>
      {text.map((title, index) => {
        return (
          <User
            key={index}
            listTitle={title}
            remove={remove}
            id={index}
            correction={correction}
          />
        );
      })}
    </ul>
  );
}

export default List;
