import { List } from "./List.js";
import { useState } from "react";
import { Submit } from "./Submit.js";

function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const toDo = {
      value: e.target.elements["new-item"].value,
      id: `todo-${Date.now()}`,
    };

    setTodos([...todos, toDo]);
  }
  return (
    <>
      <header
        className="w-100 py-2 ps-3 mb-4"
        style={{ backgroundColor: "#502", color: "white" }}
      >
        <h1>To do list</h1>
      </header>
      <main className="container pxsm-5">
        <ul className="list-group">
          <List value={todos} />
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            id="new-item"
            className="form-control"
            placeholder="New to do"
            aria-label="new todo text"
            autoFocus=""
            tabIndex="0"
            required
          />
          <label htmlFor="new-item">
            <Submit />
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
