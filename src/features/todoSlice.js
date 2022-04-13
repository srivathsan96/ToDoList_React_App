import { createSlice } from "@reduxjs/toolkit";

// initialState

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.check === true) {
            item.check = false;
          } else {
            item.check = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;

// Return State
export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
