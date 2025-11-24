import "bootstrap/dist/css/bootstrap.min.css";
import Style from "./App.module.css";
import FruitItems from "./components/FruitItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import ItemInput from "./components/ItemInput"

function App() {
  // const Fooditems=[]
  const Fooditems = ["apple", "mango", "banana", "grapes", "orange"];

  const handleOnChange=(event)=>{
        console.log(event.target.value)
    }

  return (
    <>
    <Container>
      <h1 className={Style.header}>Food items</h1>
         <ItemInput onChange={handleOnChange}/>
         <FruitItems items={Fooditems}></FruitItems>
         <ErrorMessage items={Fooditems}/>
         </Container>

         <Container>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi excepturi ducimus quod a, necessitatibus itaque asperiores distinctio debitis accusantium ipsum totam fuga quia quaerat veritatis modi voluptates temporibus, culpa repellendus!</p>
         </Container>
    </>
  );
}

export default App;
