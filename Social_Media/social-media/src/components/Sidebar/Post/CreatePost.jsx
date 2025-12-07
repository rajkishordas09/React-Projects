import { useContext, useRef } from "react";
import { PostList } from "../../Store";

export default function CreatePost() {
  const { addPost } = useContext(PostList);
  function handleAddPost() {
    const title = inputTitleElement.current.value;
    const description = inputDescriptionElement.current.value;

    const tag = InputTagElement.current.value.split(" ");
    addPost(title, description, tag);

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
