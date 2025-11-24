import Style from "./ItemInput.module.css"

const ItemInput=({onChange})=>{



    return(
        <>
        <div className={Style.itemInput}>
            <input className={Style.input}type="text"  placeholder="enter food items here"
            onChange={onChange}/>
        </div>
        </>
    )
}
export default ItemInput;