import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <Todo title={todo.title} key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
