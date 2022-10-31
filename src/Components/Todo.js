import { useContext } from "react";
import TodoContext from "../store/todo-context";
import classes from "./Todo.module.css";

// here props has the complete todo
const Todo = (props) => {
  const ctx = useContext(TodoContext);

  const buttonText = props.todo.checked ? "Mark as undone" : "Mark as done";

  const deleteHandler = () => {
    ctx.deleteTodo(props.todo.id);
  };

  const toggleHandler = () => {
    ctx.toggle(props.todo.id);
  };

  return (
    <div>
      <li
        className={`${classes["item"]} ${
          props.todo.checked && classes.itemChecked
        }`}
      >
        {props.todo.title}
      </li>
      <div className={classes.container}>
        <button className={classes.button}>Edit</button>
        <button className={classes.button} onClick={deleteHandler}>
          Delete
        </button>
        <button className={classes.button} onClick={toggleHandler}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default Todo;
