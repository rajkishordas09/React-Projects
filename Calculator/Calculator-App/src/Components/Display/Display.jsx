import Style from "./Display.module.css"

function Display({displayValue}) {
  return (
    <div>
<input className={Style.display} type="text" value={displayValue} readOnly/>
    </div>
  )
}
export default Display;
