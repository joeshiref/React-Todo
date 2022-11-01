import classes from "./EditTodo.module.css";
import Card from "./Card";
import { useState } from "react";
const EditTodo = (props) => {
  const [todoText, setTodoText] = useState(props.todo.title);
  const makeChange = () => {
    const edittedTodo = {
      title: todoText,
      checked: props.todo.checked,
      id: props.todo.id,
    };
    props.onEdit(edittedTodo);
    props.onCancel();
  };
  const inputHandler = (event) => {
    setTodoText(event.target.value);
  };
  const cancelEditHandler = () => {
    props.onCancel();
  };
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <div>
          <header className={classes.header}>
            <h2>Edit your Todo</h2>
          </header>
          <div className={classes.content}>
            <label htmlFor="text">Todo Text:</label>
            <input
              type="text"
              id="text"
              value={todoText}
              onChange={inputHandler}
            />
          </div>
          <footer className={classes.actions}>
            <button className={classes.button} onClick={cancelEditHandler}>
              Cancel
            </button>
            <button className={classes.button} onClick={makeChange}>
              Okay
            </button>
          </footer>
        </div>
      </Card>
    </div>
  );
};
export default EditTodo;
