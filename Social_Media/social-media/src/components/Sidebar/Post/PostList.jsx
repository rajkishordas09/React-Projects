import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PL } from "../../Store";
import EmptyPost from "./EmptyPost";
import Spinner from "./Spinner";
export default function PostList() {
  const { postList, addPostFromServer } = useContext(PL);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts/", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPostFromServer(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <EmptyPost />}

      {!fetching &&
        postList.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
}
