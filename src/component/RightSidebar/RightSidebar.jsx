import { useForumContext } from "../../context/ForumContext";

import "./rightsidebar.layout.css";

export const RightSidebar = () => {
  const { dispatch } = useForumContext();

  return (
    <div className="right-sidebar-container">
      <h1>Sort by</h1>
      <div className="dropdown">
        <select
          onChange={(e) =>
            dispatch({ type: "SET_SORT_TYPE", payload: e.target.value })
          }
        >
          <option value="Latest">Latest Posts</option>
          <option value="Most Upvoted">Most Upvoted Posts</option>
        </select>
      </div>
    </div>
  );
};
