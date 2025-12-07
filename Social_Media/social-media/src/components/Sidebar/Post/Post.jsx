import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../../Store";
export default function Post({ post }) {
  const { deletePost } = useContext(PostList);
  function handleDelete() {
    deletePost(post.postId);
  }
  const [countReaction, setCountReaction] = useState(0);

  function handleReaction() {
    setCountReaction((curr) => (curr += 1));
  }
  return (
    <>
      <div
        className="card"
        style={{
          width: "24rem",
          margin: "20px",
          backgroundColor: "springgreen",
        }}
      >
        <div className="card-body">
          <div style={{ display: "flex" }}>
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {post.title}
            </h5>
            <span
              onClick={handleDelete}
              className="position-absolute top-1  translate-middle badge rounded-pill bg-danger"
              style={{ marginLeft: "350px", cursor: "pointer" }}
            >
              <MdDelete />
            </span>
          </div>
          <p className="card-text">{post.description}</p>
          <h6>
            {" "}
            <span
              onClick={handleReaction}
              className="badge text-bg-secondary"
              style={{ marginLeft: "250px", cursor: "pointer" }}
            >
              Reactions : {countReaction}
            </span>
          </h6>

          {post.tag.map((eachTag, index) => (
            <span
              key={index}
              className="badge text-bg-primary"
              style={{ margin: "3px" }}
            >
              {eachTag}{" "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
