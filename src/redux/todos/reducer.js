import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECETED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import initialState from "./initialState";

const nextId = (todos) => {
  let id = todos.reduce((acc, curr) => Math.max(curr.id, acc), -1);
  return id + 1;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          text: action.payload,
          id: nextId(state),
        },
      ];
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECETED:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });
    case ALLCOMPLETED:
      return state.map((todo) => ({ ...todo, completed: true }));
    case CLEARCOMPLETED:
      return [];
    default:
      return state;
  }
};

export default reducer;
