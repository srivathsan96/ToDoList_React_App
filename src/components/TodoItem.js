import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";
import "./TodoItem.css";
import Checkbox from "@mui/material/Checkbox";

function TodoItem({ name, check, id }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      {/* checkbox */}

      <Checkbox
        checked={check}
        onChange={handleCheck}
        inputProps={{ "aria-label": "controlled" }}
      />

      {/* name */}

      <p className={check && "todoItem--check"}>{name}</p>
    </div>
  );
}

export default TodoItem;
