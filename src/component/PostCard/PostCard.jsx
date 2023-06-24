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

import "./postcard.layout.css";

export const PostCard = ({ post }) => {
  const { dispatch, bookmarks } = useForumContext();

  const voteCount = getVoteCount(post);
  const getCalculatedTime = calculateTime(post);
  console.log(bookmarks);
  const isBookmarked = bookmarks?.find((id) => id === post.postId);

  return (
    <div className="post-card">
      <div className="vote-container">
        <FontAwesomeIcon
          icon={faAngleUp}
          className="icon"
          onClick={() => dispatch({ type: "SET_UPVOTE", payload: post.postId })}
        />
        <p className="vote-count">{voteCount}</p>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="downvote icon"
          onClick={() =>
            dispatch({ type: "SET_DOWNVOTE", payload: post.postId })
          }
        />
      </div>
      <div className="post-detail-container">
        <div className="user-details">
          <div className="profile-pic-container">
            <img src={post.picUrl} alt={post.username} />
          </div>
          <div className="user">
            <p className="postedby">Posted by</p>
            <p className="name">{`@${post.username}`}</p>
            <p>{getCalculatedTime} m</p>
          </div>
        </div>
        <div className="post-content-container">
          <div className="pill-container">
            {post.tags.map((tag, index) => (
              <div className="tag" key={index}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
          <p>{post.post}</p>
          <p className="postdescription">{post.postDescription}</p>
        </div>
        <div className="post-content-icons">
          <FontAwesomeIcon icon={faComment} className="icon" />
          <FontAwesomeIcon icon={faShare} />
          <FontAwesomeIcon
            className="icon"
            icon={faBookmark}
            onClick={() =>
              dispatch({ type: "SET_BOOKMARK", payload: post.postId })
            }
            style={isBookmarked ? { color: "#941894" } : null}
          />
        </div>
      </div>
    </div>
  );
};
