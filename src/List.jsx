import React from "react";

function User(props) {
  const listTitle = props.listTitle;
  return (
    <li>
      <p>{listTitle}</p>
      <div className="buttons">
        <button className="success">&#10004;</button>
        <button className="close"> X </button>
      </div>
    </li>
  );
}
function List({ text }) {
  return (
    <ul>
      {text.map((title, index) => (
        <User key={index} listTitle={title} />
      ))}
    </ul>
  );
}

export default List;
