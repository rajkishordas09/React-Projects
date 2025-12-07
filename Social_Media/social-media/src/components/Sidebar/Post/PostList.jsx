import Post from "./Post";
import { useContext } from "react";
import { PostList as PL } from "../../Store";
import EmptyPost from "./EmptyPost";
export default function PostList() {
  const { postList } = useContext(PL);

  return (
    <>
      {postList.length === 0 ? (
        <EmptyPost />
      ) : (
        postList.map((post, index) => <Post key={index} post={post} />)
      )}
    </>
  );
}
