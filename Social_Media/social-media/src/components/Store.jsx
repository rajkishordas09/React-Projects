import { createContext, useCallback, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPostFromServer: () => {},
});

function postListReducer(currPostList, action) {
  let newPostList = currPostList;
  if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_POST_SERVER") {
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (list) => list.id !== action.payload.postId
    );
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  function addPost(title, body, tags) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: { likes: 0, dislikes: 0 },
        tags: tags,
      },
    });
  }
  function addPostFromServer(posts) {
    dispatchPostList({
      type: "ADD_POST_SERVER",
      payload: { posts },
    });
  }
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider
      value={{ addPost, addPostFromServer, postList, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export { PostListProvider, PostList };
