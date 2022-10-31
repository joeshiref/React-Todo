import { createContext, useState } from "react";

const TodoContext = createContext([
  {
    todos: [],
    deleteTodo: (todoID) => {},
    addNewTodo: (todo) => {},
  },
]);

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addNewTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };
  const deleteTodoHandler = (todoID) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoID);
    });
  };

  const context = {
    todos: todos,
    deleteTodo: deleteTodoHandler,
    addNewTodo: addNewTodoHandler,
  };

  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
