import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addItem = newItemText =>
    dispatch({ type: "ADD_TODO", text: newItemText });

  const toggleCompleted = id => dispatch({ type: "TOGGLE_COMPLETED", id: id });

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  return (
    <div className="main-container">
      <div className="list-container">
        <TodoForm addItem={addItem} clearCompleted={clearCompleted} />
      </div>
      <ToDoList toggleCompleted={toggleCompleted} todos={state.todos} />
    </div>
  );
};

export default App;
