import { PostCard } from "../../../component/PostCard/PostCard";
import { useForumContext } from "../../../context/ForumContext";
import { getVoteCount } from "../../../utils";

export const MainPane = () => {
  const { posts, sortType } = useForumContext();
  const sortedPost =
    sortType === "Latest"
      ? [...posts.posts].sort(
          (p1, p2) =>
            new Date(p2.createdAt).getTime() - new Date(p1.createdAt).getTime()
        )
      : sortType === "Most Upvoted"
      ? [...posts.posts].sort((p1, p2) => getVoteCount(p2) - getVoteCount(p1))
      : posts.posts;

  return (
    <div className="middle-pane-container">
      <h2>{sortType} Posts</h2>
      <div className="post-container">
        {sortedPost.map((post) => (
          <PostCard post={post} key={post.postId} />
        ))}
      </div>
    </div>
  );
};
