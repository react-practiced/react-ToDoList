import { useState } from "react";
import "./App.css";
import AddList from "./component/addList";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onCreate = () => {
    setList(list.concat(input));
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
          <List text={list} />
        </div>
      </div>
    </div>
  );
}

export default App;
