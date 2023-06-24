import { createContext, useContext, useReducer } from "react";
import { ForumReducer, initialState } from "../reducer/ForumReducer";

const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ForumReducer, initialState);

  return (
    <ForumContext.Provider
      value={{ dispatch, posts: state.posts, sortType: state.sortType,bookmarks:state.bookmarks }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export const useForumContext = () => useContext(ForumContext);
