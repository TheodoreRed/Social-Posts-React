import { useState } from "react";
import "./SocialPosts.css";
import Post from "../models/Post";
import PostInList from "./PostInList";
import PostForm from "./PostForm";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Grand Circus", thought: "Grand Cirus is cool" },
    { title: "Grand Circus", thought: "Grand Cirus is cool" },
  ]);
  const [showForm, setShowForm] = useState(false);

  const onDelete = (index: number): void => {
    setPosts((prev) => {
      const copyOfPosts: Post[] = [...prev];
      copyOfPosts.splice(index, 1);
      return copyOfPosts;
    });
  };

  const addThought = (post: Post): void => {
    setPosts((prev) => {
      const copyOfPosts = [...prev];
      copyOfPosts.push(post);
      return copyOfPosts;
    });
    setShowForm(false);
  };

  const close = (): void => {
    setShowForm(false);
  };

  return (
    <div className="SocialPosts">
      <button className="thought-btn" onClick={() => setShowForm(true)}>
        New Thought
      </button>
      {showForm && <PostForm addThought={addThought} close={close} />}
      <div className="posts">
        {posts.map((post, index) => {
          return (
            <PostInList
              key={index}
              post={post}
              onDelete={() => onDelete(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SocialPosts;
