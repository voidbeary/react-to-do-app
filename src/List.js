import { Todo } from "./Todo.js";

function List({ value, onRemove }) {
  return (
    <ul className="list-group">
      {value.map((todo) => {
        return <Todo todo={todo} key={todo.id} onRemove={onRemove} />;
      })}
    </ul>
  );
}

export { List };
