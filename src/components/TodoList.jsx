import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const filterBYStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "COMPLETED":
        return todo.completed;
      case "INCOMPLETED":
        return !todo.completed;
      default:
        return true;
    }
  };
  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.length ? (
        todos
          .filter(filterBYStatus)
          .filter(filterByColors)
          .map((todo) => <Todo todo={todo} key={todo.id} />)
      ) : (
        <h5 className="text-center">Please Add Todo</h5>
      )}
    </div>
  );
}
