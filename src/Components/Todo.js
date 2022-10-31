import { useContext } from "react";
import TodoContext from "../store/todo-context";
import classes from "./Todo.module.css";

const Todo = (props) => {
  const ctx = useContext(TodoContext);
  const deleteHandler = (event) => {
    ctx.deleteTodo(props.id);
  };
  return (
    <div>
      <li className={classes.item}>{props.title}</li>
      <div className={classes.container}>
        <button className={classes.button}>Edit</button>
        <button className={classes.button} onClick={deleteHandler}>
          Delete
        </button>
        <button className={classes.button}>Mark as done</button>
      </div>
    </div>
  );
};
export default Todo;
