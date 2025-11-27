import Style from "./App.module.css";

import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import AppName from "./components/AppName";
import { useState } from "react";
import EmptyTodo from "./components/EmptyTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleClick = (data, date) => {
   

    const obj = {
      name: data,
      dueDate: date,
    };
    // let newArr = [...todoList, obj];
    // setTodoList(newArr);

    setTodoList(currItem=>[...currItem,obj]);

  };

  const onHandleDelete = (deleteData) => {
    // setTodoList(() => handleDelete(deleteData));
    let newList = todoList.filter((item) => item.name !== deleteData);
    setTodoList(newList);
  };
  // function handleDelete(deleteData) {
  //   let list = todoList;
  //   list.map((item, index) => {
  //     if (item.name === deleteData && index !== 0) {
  //       list.splice(index, index);
  //       return setTodoList(list);
  //     } else if (item.name === deleteData) {
  //       list.shift();
  //       return setTodoList(list);
  //     }
  //   });
  // }

  return (
    <>
      <center>
        <AppName />
        <div className={Style.container}>
          <AddTodo handleOnClick={handleClick}></AddTodo>
          <div className="todo-item">
            <TodoItems todoItems={todoList} onHandleDelete={onHandleDelete} />
          </div>
          <EmptyTodo list={todoList} />
        </div>
      </center>
    </>
  );
}

export default App;
