
import Style from './App.module.css'
import Display from './Components/Display/Display'
import Button from "./Components/Buttons/Button"

function App() {


  return (
    <>
    
     <div className={Style.calculator}>
 

          <Display/>
           <Button/>
    

     </div>
    </>
  )
}

export default App
