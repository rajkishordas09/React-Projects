import Style from "./App.module.css";

import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import AppName from "./components/AppName";
import { useState } from "react";
import EmptyTodo from "./components/EmptyTodo";
import { StoreContextElement } from "./components/Store";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleClick = (data, date) => {
    const obj = {
      name: data,
      dueDate: date,
    };
    // let newArr = [...todoList, obj];
    // setTodoList(newArr);

    setTodoList((currItem) => [...currItem, obj]);
  };

  const onHandleDelete = (deleteData) => {
    // setTodoList(() => handleDelete(deleteData));
    let newList = todoList.filter((item) => item.name !== deleteData);
    setTodoList(newList);
  };

  return (
    <>
      <center>
        <StoreContextElement.Provider
          value={{ todoItems: todoList, handleClick, onHandleDelete }}
        >
          <AppName />
          <div className={Style.container}>
            <AddTodo></AddTodo>
            <div className="todo-item">
              <TodoItems />
            </div>
            <EmptyTodo />
          </div>
        </StoreContextElement.Provider>
      </center>
    </>
  );
}

export default App;
