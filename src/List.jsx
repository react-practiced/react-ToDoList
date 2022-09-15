import React from "react";

function List() {
  return (
    <ul>
      <li>
        <p>userlist</p>
        <div className="buttons">
          <button className="success">&#10004;</button>
          <button className="close"> X </button>
        </div>
      </li>
    </ul>
  );
}

export default List;
