import Post from "./Post";
import { useContext } from "react";
import { PostList as PL } from "../../Store";
import EmptyPost from "./EmptyPost";
import Spinner from "./Spinner";
export default function PostList() {
  const { postList, fetching } = useContext(PL);

  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <EmptyPost />}

      {!fetching &&
        postList.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
}
