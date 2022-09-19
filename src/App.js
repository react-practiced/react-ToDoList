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

  const removeList = (index) => {
    setList(list.filter((_, i) => i !== index));

    // list.forEach((a) => {
    //   console.log("listIndex: " + list.indexOf(a), "id: " + e);
    // });
  };

  const onCorrection = (index, value) => {
    // map은 새로운 배열을 반환하는 함수
    // 반복문을 돌면서 만약 index와 그 i번째 item이 같다면 새로운 value를 같지 않다면 value를 return하여 배열을 만든다.
    setList(list.map((text, i) => (i === index ? value : text)));
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
          <List text={list} remove={removeList} correction={onCorrection} />
        </div>
      </div>
    </div>
  );
}

export default App;
