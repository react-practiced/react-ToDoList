import React from "react";

function User({ listTitle }) {
  return (
    <ul>
      <li>
        <p>{listTitle}</p>
        <div className="buttons">
          <button className="success">&#10004;</button>
          <button className="close"> X </button>
        </div>
      </li>
    </ul>
  );
}
function List({ text, id }) {
  return (
    <>
      {text.map((a) => (
        <User listTitle={a} key={id} />
      ))}
    </>
  );
}

export default List;
