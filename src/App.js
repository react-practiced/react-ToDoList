import { useRef, useState } from "react";
import "./App.css";
import AddList from "./component/addList";
import List from "./component/List";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onCreate = () => {
    setList(list.concat(input));
    setInput("");
    console.log(list);
  };

  const removeList = (e) => {
    setList(list.filter((a) => list.indexOf(a) !== e));

    list.forEach((a) => {
      console.log("listIndex: " + list.indexOf(a), "id: " + e);
    });
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
          <AddList change={onChange} create={onCreate} inputText={input} />
        </div>
      </div>
      <div style={style}>
        <div className="list-box">
          <List text={list} remove={removeList} />
        </div>
      </div>
    </div>
  );
}

export default App;
