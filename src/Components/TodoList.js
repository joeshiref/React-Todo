import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
