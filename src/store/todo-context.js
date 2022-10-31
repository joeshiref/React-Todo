import { createContext, useState } from "react";

const TodoContext = createContext([
  {
    todos: [],
    deleteTodo: (todoID) => {},
    addNewTodo: (todo) => {},
    toggle: (todoID) => {},
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

  const toggleTodoHandler = (todoID) => {
    setTodos((prevTodos) => {
      let newTodos = [];
      newTodos = prevTodos.map((todo) => {
        if (todo.id === todoID) {
          todo.checked = !todo.checked;
        }
        return todo;
      });
      return newTodos;
    });
  };

  const context = {
    todos: todos,
    deleteTodo: deleteTodoHandler,
    addNewTodo: addNewTodoHandler,
    toggle: toggleTodoHandler,
  };

  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
