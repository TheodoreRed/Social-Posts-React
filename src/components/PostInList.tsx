import Post from "../models/Post";
import "./PostInList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <div className="PostInList">
      <div className="content">
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
      </div>
      <FontAwesomeIcon
        className="trash"
        icon={faTrashCan}
        onClick={() => onDelete()}
      />
    </div>
  );
};

export default PostInList;
