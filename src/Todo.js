import { useState } from "react";

function Todo({ todo, onRemove }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimationEnd = () => {
    onRemove(todo.id);
  };
  function handleClick(e) {
    setIsAnimated(true);
  }
  const animationClass = isAnimated ? " animate__flipOutX" : "";
  const className = "list-group-item" + animationClass;
  return (
    <li className={className} onAnimationEnd={handleAnimationEnd}>
      <input
        type="checkbox"
        value=""
        aria-label="mark to do done"
        className="form-check-input me-2"
        onClick={handleClick}
      ></input>
      {todo.value}
    </li>
  );
}
export { Todo };
