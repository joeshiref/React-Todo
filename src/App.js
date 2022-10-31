import { useContext, useState } from "react";
import NewTodo from "./Components/NewTodo";
import TodoList from "./Components/TodoList";
import TodoContext from "./store/todo-context";

function App() {
  const ctx = useContext(TodoContext);
  return (
    <div>
      <NewTodo onSubmit={ctx.addNewTodo} />
      <TodoList todos={ctx.todos} />
    </div>
  );
}

export default App;
