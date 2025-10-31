import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
const initialState = {
  slotList: localStorage.getItem("slots")
    ? JSON.parse(localStorage.getItem("slots"))
    : [],
};

const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    createSlot: (state, action) => {
      const slot = action.payload;
      state.slotList.push(slot);
      localStorage.setItem("slots", JSON.stringify(state.slotList));
      toast.success("Success! 🎉, slot created");
    },
    updateSlot: (state, action) => {
      const slot = action.payload;
      const index = state.slotList.findIndex((i) => i.slotNo === slot.slotNo);
      if (index !== -1) {
        state.slotList[index] = slot;
        localStorage.setItem("slots", JSON.stringify(state.slotList));
        toast.success("Success! 🎉, slot updated");
      } else {
        toast.error("error updating 😢");
      }
    },
  },
});

export const { createSlot } = slotSlice.actions;
export default slotSlice.reducer;
