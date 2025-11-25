import Style from "./ItemInput.module.css"

const ItemInput=({onChange,handleKeyDown})=>{



    return(
        <>
        <div className={Style.itemInput}>
            <input className={Style.input}type="text"  placeholder="enter food items here"
            onChange={onChange} onKeyDown={handleKeyDown}/>
        </div>
        </>
    )
}
export default ItemInput;