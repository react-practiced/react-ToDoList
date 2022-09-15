import React from "react";

function AddList({ change, create }) {
  return (
    <>
      <input type="text" placeholder="할 목록을 입력하거라" onChange={change} />
      <button className="sumbit-bt" onClick={create}>
        추가
      </button>
    </>
  );
}

export default AddList;
