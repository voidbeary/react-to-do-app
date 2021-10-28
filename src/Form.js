function Form({ onNewTodoSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();

    const input = e.target.elements["new-item"];
    const toDo = {
      value: input.value,
      id: `todo-${Date.now()}`,
    };
    input.value = "";

    onNewTodoSubmit(toDo);
  }
  return (
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
        <input
          type="submit"
          value="Add item"
          className="btn btn-primary d-none"
        ></input>
      </label>
    </form>
  );
}

export { Form };
