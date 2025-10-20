import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: [
    {
      id: 0,
      title: "",
      priority: "",
      completed: false,
    },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        priority: action.payload.priority,
        completed: false,
      });
    },
    markCompleted: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTask, markCompleted, deleteTask } = toDoSlice.actions;
export default toDoSlice.reducer;
