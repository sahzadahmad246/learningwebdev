import { create } from "zustand";

export const useCounter = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () =>
    set((state) => ({
      count: state.count > 0 ? state.count - 1 : state.count,
    })),

  reset: () => set({ count: 0 }),
}));
