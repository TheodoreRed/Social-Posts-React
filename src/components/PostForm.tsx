import { FormEvent, useState } from "react";
import "./PostForm.css";
import Post from "../models/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  addThought: (post: Post) => void;
  close: () => void;
}

const PostForm = ({ addThought, close }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addThought({ title, thought });
  };

  return (
    <form className="PostForm" onSubmit={(e) => submitHandler(e)}>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="xMark"
        onClick={() => close()}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="thought">Thought</label>
      <textarea
        id="thought"
        rows={4}
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        required
      />
      <button>Add Post</button>
    </form>
  );
};

export default PostForm;
