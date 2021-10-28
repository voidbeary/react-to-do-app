import { Todo } from "./Todo.js";

function List({ value }) {
  return (
    <ul className="list-group">
      {value.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

export { List };
