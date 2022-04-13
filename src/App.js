import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

import "./App.css";

import Input from "./components/input/Input";
import TodoItem from "./components/TodoItem";

// A Dummy ToDo List

// const todoList = [
//   { item: "Task1", check: false, id: Math.random() },
//   {
//     item: "Task2",
//     check: true,
//     id: Math.random(),
//   },
// ];

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} check={item.check} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
