import Style from "./TodoItem.module.css";
import { RiDeleteBin2Fill } from "react-icons/ri";

function TodoItem({ name, dueDate, handleDelete }) {
  const handleOnDelete = () => {
    handleDelete(name);
  };

  return (
    <>
      <div className={`container text-center  ${Style.container}`}>
        <div className="row">
          <div className={`col ${Style.col1}`}>{name}</div>
          <div className={`col ${Style.col2}`}>{dueDate}</div>
          <div className="col">
            <button
              type="button"
              className={`btn btn-danger  ${Style.btn}`}
              onClick={handleOnDelete}
            >
              <RiDeleteBin2Fill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
