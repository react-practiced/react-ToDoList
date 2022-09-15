import "./App.css";
import AddList from "./component/addList";
import List from "./List";

function App() {
  const style = {
    margin: "20px",
  };
  return (
    <div className="bg">
      <div className="list-box">
        <h1>ToDo List</h1>
        <hr />
        <div className="input-box">
          <AddList />
        </div>
      </div>
      <div style={style}>
        <div className="list-box">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
