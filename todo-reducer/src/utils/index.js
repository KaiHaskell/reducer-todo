export const initialState = {
  todos: [
    {
      todo: "Make To-do App",
      id: 1,
      completed: false
    },
    {
      todo: "Become a TL",
      id: 2,
      completed: false
    },
    {
      todo: "Finish Music",
      id: 3,
      completed: false
    }
  ]
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todo: action.payload,
            id: Date.now,
            completed: false
          }
        ]
      };
    case "COMPLETED_TOGGLE":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
