import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : [];

const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    createPaste: (state, action) => {
      console.log("createPaste called with:", action.payload);
      // logic will go here later
      return state;
    },
    viewPaste: (state, action) => {
      console.log("viewPaste called with:", action.payload);
      return state;
    },
    editPaste: (state, action) => {
      console.log("editPaste called with:", action.payload);
      return state;
    },
    deletePaste: (state, action) => {
      console.log("deletePaste called with:", action.payload);
      return state;
    },
    getAllPastes: (state) => {
      console.log("getAllPastes called");
      return state;
    },
  },
});

// export actions properly
export const {
  createPaste,
  viewPaste,
  editPaste,
  deletePaste,
  getAllPastes,
} = pasteSlice.actions;

// export reducer
export default pasteSlice.reducer;
