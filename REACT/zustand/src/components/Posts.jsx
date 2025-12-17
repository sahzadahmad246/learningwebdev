import { useEffect } from "react";
import { usePosts } from "../store/postStore";

const Posts = () => {
  const posts = usePosts((state) => state.posts);
  const loading = usePosts((state) => state.loading);
  const error = usePosts((state) => state.error);
  const fetchPosts = usePosts((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {posts.map((p) => {
        return <li key={p.id}>{p.title}</li>;
      })}
    </div>
  );
};

export default Posts;
