import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faBookmark,
  faShare,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { useForumContext } from "../../context/ForumContext";
import { calculateTime, getVoteCount } from "../../utils";
import { useParams } from "react-router-dom";
import { LeftSidebar } from "../../component/LeftSidebar/LeftSidebar";
import "./postdetail.layout.css";
import { PostCard } from "../../component/PostCard/PostCard";
export const PostDetails = () => {
  const { id } = useParams();
  const { posts } = useForumContext();
  const post = posts.posts.find(({ postId }) => postId === id);

  console.log(post);
  return (
    <div className="individual-post-container">
      <LeftSidebar />
      <PostCard post={post} detail />
      
    </div>
  );
};
