import React from "react";

function AddList({ change }) {
  return (
    <>
      <input type="text" placeholder="할 목록을 입력하거라" onChange={change} />
      <button className="sumbit-bt">추가</button>
    </>
  );
}

export default AddList;
