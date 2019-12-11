export const initialState = {
  todos: [
    {
      todo: "Ride the hell bus",
      id: 1,
      completed: false
    },
    {
      todo: "Make code DRY",
      id: 2,
      completed: false
    },
    {
      todo: "Graduate from Lambda",
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
            id: Date.now,
            todo: action.text,
            completed: false
          }
        ]
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,

        todos: state.todos.map(todo =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
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
