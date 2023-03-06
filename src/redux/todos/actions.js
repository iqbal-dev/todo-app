import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECETED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const todoAdded = (value) => {
  return {
    type: ADDED,
    payload: value,
  };
};
export const todoDeleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};
export const todoToggle = (id) => {
  return {
    type: TOGGLED,
    payload: id,
  };
};
export const todoColorSelected = (id, color) => {
  return {
    type: COLORSELECETED,
    payload: {
      id,
      color,
    },
  };
};
export const todoAllCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const todoClearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
