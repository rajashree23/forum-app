import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRocket,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./leftsidebar.layout.css";
import { useForumContext } from "../../context/ForumContext";

export const LeftSidebar = () => {
  const { posts } = useForumContext();

  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <div className="menu-item">
          <FontAwesomeIcon icon={faHouse} />
          <p>Home</p>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faRocket} />
          <p>Explore</p>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBookmark} />
          <p>Bookmarks</p>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUser} />
          <p>Profile</p>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-img-container">
          <img src={posts.picUrl} alt={posts.username} />
        </div>
        <div>
          <p>{posts.name}</p>
          <p className="username">{`@${posts.username}`}</p>
        </div>
      </div>
    </div>
  );
};
