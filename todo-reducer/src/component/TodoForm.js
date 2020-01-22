import React, { useReducer, useState } from "react";

import { initialState, todoReducer } from "../utils";

export const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", id: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={newTodo}
          onChange={handleChanges}
          type="text"
          name="todo"
        />
      </form>
      <button>Add Todo</button>
      <div>
        <TodoCard toggleCompleted={toggleCompleted} todo={state.todos} />
      </div>
      <button onClick={clearCompleted}>Clear Completed></button>
    </div>
  );
};
