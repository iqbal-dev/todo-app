import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../assets/images/double-tick.png";
import notes from "../assets/images/notes.png";
import {
  todoAdded,
  todoAllCompleted,
  todoClearCompleted,
} from "../redux/todos/actions";
export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoAdded(input));
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleComplete = () => {
    dispatch(todoAllCompleted());
  };
  const handleClear = () => {
    dispatch(todoClearCompleted());
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={handleComplete}>
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClear}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
