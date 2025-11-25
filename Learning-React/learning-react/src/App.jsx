import "bootstrap/dist/css/bootstrap.min.css";
import Style from "./App.module.css";
import FruitItems from "./components/FruitItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import ItemInput from "./components/ItemInput";
import { useState } from "react";

function App() {
  // const Fooditems=[]
  const[ Fooditems,setFooditems] = useState([]);


  const handleOnChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

const [value, setValue] = useState("enter a item");

  const onKeyDown = (event) => {
    // console.log(event)
    // console.log(event.target.value);//it print privious value 
    if(event.key==='Enter'){
    let newFooditem=event.target.value;
    event.target.value="";
    let newFooditems=[...Fooditems,newFooditem]
      setFooditems(newFooditems);
    }
  };

  

  return (
    <>
      <Container>
        <h1 className={Style.header}>Food items</h1>
        <ItemInput onChange={handleOnChange} handleKeyDown={onKeyDown}/>
        <p style={{ textAlign: "center", backgroundColor: "yellow" }}>
          {value}
        </p>
        <FruitItems items={Fooditems}></FruitItems>
        <ErrorMessage items={Fooditems} />
      </Container>

      <Container>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          excepturi ducimus quod a.
        </p>
      </Container>
    </>
  );
}

export default App;
