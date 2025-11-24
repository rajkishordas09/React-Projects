import Style from "./Container.module.css"

const Container=(props)=>{
    return(
        <>
        <div className={Style.container}>

     {props.children}

        </div>
        
        </>
    )
}
export default Container;