import { forumData } from "../db";

export const initialState = {
  posts: forumData,
  sortType: "Latest",
  bookmarks: [],
};

export const ForumReducer = (state, action) => {
  switch (action.type) {
    case "SET_SORT_TYPE":
      return {
        ...state,
        sortType: action.payload,
      };
    case "SET_UPVOTE":
      return {
        ...state,
        posts: {
          ...state.posts,
          posts: state.posts.posts.map((post) =>
            post.postId === action.payload
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
        },
      };
    case "SET_DOWNVOTE":
      return {
        ...state,
        posts: {
          ...state.posts,
          posts: state.posts.posts.map((post) =>
            post.postId === action.payload
              ? {
                  ...post,
                  downvotes:
                    post.downvotes > 0
                      ? post.downvotes + 1
                      : post.downvotes - 1,
                }
              : post
          ),
        },
      };
    case "SET_BOOKMARK":
      const isBookmarked = state.bookmarks.find((id) => id === action.payload);
      console.log(action.payload,state.bookmarks)
      return {
        ...state,
        bookmarks: isBookmarked
          ? state.bookmarks.filter((id) => id !== action.payload)
          : [...state.bookmarks, action.payload],
      };

    default:
      return state;
  }
};
