import React, { useReducer, useState } from "react";

import { initialState, todoReducer } from "../utils";

import TodoCard from "./TodoCard";

export const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const toggleCompleted = id => {
    dispatch({ type: "COMPLETED_TOGGLE", id: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  console.log(state.todos);
  console.log(newTodo);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={handleChanges}
          type="text"
          name="newTodo"
        />
        <button>Add Todo</button>
      </form>

      <div>
        {state.todos.map(item => (
          <TodoCard
            toggleCompleted={toggleCompleted}
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};
