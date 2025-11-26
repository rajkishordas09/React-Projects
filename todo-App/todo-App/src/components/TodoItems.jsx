import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems , onHandleDelete}) => {
  return (
    <>
      {todoItems.map((items,index) => (
        <TodoItem key={index} name={items.name} dueDate={items.dueDate} handleDelete={ onHandleDelete} />
      ))}
    </>
  );
};
export default TodoItems;
