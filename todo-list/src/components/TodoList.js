import React from "react";

import Todo from "./Todo";

const ToDoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default ToDoList;
