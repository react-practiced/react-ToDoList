import { useState, useRef } from "react";
import "./App.css";
import AddList from "./component/addList";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const listId = useRef(0);
  console.log(listId);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onCreate = () => {
    // listId.current += 1;
    setList(list.concat(input));
    console.log(list, listId);
  };

  const style = {
    margin: "20px",
  };
  return (
    <div className="bg">
      <div className="list-box">
        <h1>ToDo List</h1>
        <hr />
        <div className="input-box">
          <AddList change={onChange} create={onCreate} />
        </div>
      </div>
      <div style={style}>
        <div className="list-box">
          <List key={listId} text={list} />
        </div>
      </div>
    </div>
  );
}

export default App;
