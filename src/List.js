function List({ value }) {
  console.log(value);

  return value.map((todo) => {
    return (
      <li className="list-group-item" id={Date.now()}>
        <input
          type="checkbox"
          value=""
          aria-label="mark to do done"
          className="form-check-input me-2"
        ></input>
        {todo}
      </li>
    );
  });
}

export { List };
