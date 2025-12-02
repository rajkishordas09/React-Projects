import TodoItem from "./TodoItem";
import { useContext } from "react";
import { StoreContextElement } from "./Store";
const TodoItems = () => {
  const { todoItems, onHandleDelete } = useContext(StoreContextElement);
  console.log(todoItems);
  return (
    <>
      {todoItems.map((items, index) => (
        <TodoItem
          key={index}
          name={items.name}
          dueDate={items.dueDate}
          handleDelete={onHandleDelete}
        />
      ))}
    </>
  );
};
export default TodoItems;
