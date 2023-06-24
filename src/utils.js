export const getVoteCount = (post) => {
    if (post.upvotes === 0) {
      return post.downvotes;
    } else if (post.downvotes <= 0) {
      return post.upvotes + post.downvotes;
    } else if (post.downvotes > 0) {
      return post.upvotes - post.downvotes;
    }
  };

  export const calculateTime=(post)=>{
    return new Date(new Date().getTime()- new Date(post.createdAt).getTime()).getMinutes();
  }