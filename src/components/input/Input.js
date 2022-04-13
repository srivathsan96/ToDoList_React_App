import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";

import "./Input.css";

// Input Field

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // onClick Event Handler

  const addTodo = () => {
    console.log(`Adding ${input}`);

    // Dispatching Input Data

    dispatch(
      saveTodo({
        item: input,
        check: false,
        id: Math.random(),
      })
    );

    // Clearing value in input field

    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("do validate");
      addTodo();
    }
  };

  return (
    <div className="input">
      <input
        id="input-field"
        type="text"
        placeholder="New Todo"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Input;
