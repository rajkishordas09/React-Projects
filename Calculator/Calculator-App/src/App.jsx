import Style from "./App.module.css";
import Display from "./Components/Display/Display";
import Button from "./Components/Buttons/Button";
import { useState } from "react";

function App() {

const [value,setValue]=useState("");
   
const onButtonClick=(buttonValue,event)=>{
 if(buttonValue==="C"){
    setValue("")
 }
 else if(buttonValue==="="){
   
    let newTotal= eval(value)
    setValue(newTotal)
 }
 else{
  let newValue=value+buttonValue;
  setValue(newValue)
 }
 console.log(buttonValue)
}
   

  return (
    <>
      <div className={Style.calculator}>
        <Display displayValue={value}/>
       
          <Button onButtonClick={onButtonClick}/>
       
      </div>
    </>
  );
}

export default App;
