import { createContext, use, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currPostList, action) {
  let newPostList = currPostList;
  if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (list) => list.postId !== action.payload.postId
    );
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  function addPost(title, description, tag) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        postId: Date.now(),
        title: title,
        description: description,
        tag: tag,
      },
    });
  }
  function deletePost(postId) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }

  return (
    <PostList.Provider value={{ addPost, postList, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export { PostListProvider, PostList };
