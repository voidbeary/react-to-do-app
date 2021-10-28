import { List } from "./List.js";
import { useState } from "react";
import { Form } from "./Form.js";
import { Header } from "./Header.js";

function getToDos() {
  const toDosString = localStorage.todos || "[]";
  const toDos = JSON.parse(toDosString);
  return toDos;
}

function App() {
  const [todos, setTodos] = useState(getToDos);

  function handleNewTodoSubmit(toDo) {
    const newTodos = [...todos, toDo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function removeToDo(id) {
    const newTodos = todos.filter((toDo) => toDo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <>
      <Header />
      <main className="container pxsm-5">
        <List value={todos} onRemove={removeToDo} />
        <Form onNewTodoSubmit={handleNewTodoSubmit} />
      </main>
    </>
  );
}

export default App;
