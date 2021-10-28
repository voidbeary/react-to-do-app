function Todo({ todo }) {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        value=""
        aria-label="mark to do done"
        className="form-check-input me-2"
      ></input>
      {todo.value}
    </li>
  );
}
export { Todo };
