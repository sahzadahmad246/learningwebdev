import { create } from "zustand";

export const usePosts = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await res.json();
      set({ posts: data, loading: false });
    } catch {
      set({ error: "Failed to load posts", loading: false });
    }
  },
}));
