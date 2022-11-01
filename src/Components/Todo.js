import { useContext, useState } from "react";
import TodoContext from "../store/todo-context";
import EditTodo from "../UI/EditTodo";
import classes from "./Todo.module.css";

const Todo = (props) => {
  const [edit, setEdit] = useState(false);

  const ctx = useContext(TodoContext);

  const buttonText = props.todo.checked ? "Mark as undone" : "Mark as done";

  const deleteHandler = () => {
    ctx.deleteTodo(props.todo.id);
  };

  const toggleHandler = () => {
    ctx.toggle(props.todo.id);
  };
  const performEditHandler = (todo) => {
    ctx.editTodo(todo);
  };
  const editHandler = () => {
    setEdit(!edit);
  };

  return (
    <div>
      {edit && (
        <EditTodo
          todo={props.todo}
          onEdit={performEditHandler}
          onCancel={editHandler}
        />
      )}
      <div>
        <li
          className={`${classes["item"]} ${
            props.todo.checked && classes.itemChecked
          }`}
        >
          {props.todo.title}
        </li>
        <div className={classes.container}>
          <button className={classes.button} onClick={editHandler}>
            Edit
          </button>
          <button className={classes.button} onClick={deleteHandler}>
            Delete
          </button>
          <button className={classes.button} onClick={toggleHandler}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
