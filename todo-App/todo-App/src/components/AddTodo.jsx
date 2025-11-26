import "bootstrap/dist/css/bootstrap.min.css";
import Style from "./AddTodo.module.css";
import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";

function AddTodo({ handleOnClick }) {
  const [newData, setNewData] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleData = (event) => {
    setNewData(event.target.value);
  };
  const handleDate = (event) => {
    setNewDate(event.target.value);
  };

const onClickedButton=()=>{
  handleOnClick(newData, newDate)
  setNewData("")
  setNewDate("")
}

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <input type="text" placeholder="write here" value={newData} onChange={handleData} />
          </div>
          <div className="col">
            <input type="date" value={newDate} onChange={handleDate} />
          </div>
          <div className="col">
            <button
              type="button"
              className={`btn btn-primary  ${Style.button}`}
              onClick={onClickedButton}
            >
              <IoBagAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
