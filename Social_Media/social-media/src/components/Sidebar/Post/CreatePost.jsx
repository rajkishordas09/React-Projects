import { useContext, useRef } from "react";
import { PostList } from "../../Store";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  function handleAddPost(e) {
    e.preventDefault();
    const title = inputTitleElement.current.value;
    const body = inputDescriptionElement.current.value;

    const tag = InputTagElement.current.value.split(" ");

    // fetch("https://dummyjson.com/posts/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     title: title,
    //     body: body,
    //     tags: tag,
    //     userId: 5,
    //     /* other post data */
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log);

    addPost(title, body, tag);
    navigate("/");
    inputTitleElement.current.value = "";
    inputDescriptionElement.current.value = "";

    InputTagElement.current.value = "";
  }
  const inputTitleElement = useRef();
  const inputDescriptionElement = useRef();

  const InputTagElement = useRef();
  return (
    <>
      <form onSubmit={handleAddPost}>
        <div
          style={{
            border: "2px solid red",
            padding: "20px",
            borderRadius: "20px",
            width: "400px",
            marginLeft: "400px",
          }}
        >
          <div className="row mb-3 ">
            <label htmlFor="inputText" className="col-sm-2 col-form-label">
              Title
            </label>

            <input
              ref={inputTitleElement}
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Enter title"
            />
          </div>

          <div className="row mb-2">
            <label
              htmlFor="inputDescription"
              className="col-sm-2 col-form-label"
            >
              Description
            </label>

            <textarea
              ref={inputDescriptionElement}
              type="text"
              className="form-control"
              id="inputDescription"
              placeholder="Write something..."
            />
          </div>

          <div className="row mb-3 ">
            <label htmlFor="inputText" className="col-sm-2 col-form-label">
              Tag
            </label>

            <input
              ref={InputTagElement}
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Enter multiple tag with space.."
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
