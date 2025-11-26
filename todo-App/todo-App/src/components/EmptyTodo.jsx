import Style from "./EmptyTodo.module.css"
export default function EmptyTodo({list}) {
  return (
    <>
          
        {list.length===0 && <div className={Style.divContainer}>
          <h1 className={Style.header}>Empty</h1>
          <p className={Style.paragraph}>Create a new Task..</p>
        </div>}
      
    </>
  );
}
