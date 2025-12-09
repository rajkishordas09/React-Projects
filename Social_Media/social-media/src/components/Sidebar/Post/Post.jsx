import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { PostList } from "../../Store";
export default function Post({ post }) {
  const { deletePost } = useContext(PostList);
  function handleDelete() {
    deletePost(post.id);
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
              style={{
                marginLeft: "350px",
                cursor: "pointer",
              }}
            >
              <MdDelete />
            </span>
          </div>
          <p className="card-text">{post.body}</p>
          <h6>
            {" "}
            <span
              className="badge text-bg-secondary"
              style={{ marginLeft: "260px" }}
            >
              <AiFillLike style={{ cursor: "pointer" }} />
              {post.reactions.likes}{" "}
              <AiFillDislike style={{ cursor: "pointer" }} />
              {post.reactions.dislikes}
            </span>
          </h6>

          {post.tags.map((eachTag, index) => (
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
