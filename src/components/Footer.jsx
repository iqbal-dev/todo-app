import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByColors, filterByStatus } from "../redux/filters/actions";
function handleTask(taskLength) {
  switch (taskLength) {
    case 0:
      return "No task";
    case 1:
      return "1 task";

    default:
      return `${taskLength} tasks`;
  }
}

export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { colors, status } = filters;
  const handleStatus = (status) => {
    dispatch(filterByStatus(status));
  };
  const handleColor = (color) => {
    if (colors.includes(color)) {
      dispatch(filterByColors(color, "removed"));
    } else {
      dispatch(filterByColors(color, "add"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{handleTask(todos.length)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "ALL" && "font-bold"}`}
          onClick={() => handleStatus("ALL")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            status === "INCOMPLETED" && "font-bold"
          }`}
          onClick={() => handleStatus("INCOMPLETED")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "COMPLETED" && "font-bold"}`}
          onClick={() => handleStatus("COMPLETED")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColor("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColor("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColor("yellow")}
        ></li>
      </ul>
    </div>
  );
}
