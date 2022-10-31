import { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo = (props) => {
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredText = inputRef.current.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    const todo = {
      title: enteredText,
      checked: false,
      id: new Date().toISOString(),
    };
    props.onSubmit(todo);
    inputRef.current.value = "";
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">What you gonna do today?!</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
