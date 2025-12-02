import Style from "./EmptyTodo.module.css";
import { useContext } from "react";
import { StoreContextElement } from "./Store";
export default function EmptyTodo() {
  const { todoItems } = useContext(StoreContextElement);
  return (
    <>
      {todoItems.length === 0 && (
        <div className={Style.divContainer}>
          <h1 className={Style.header}>Empty</h1>
          <p className={Style.paragraph}>Create a new Task..</p>
        </div>
      )}
    </>
  );
}
