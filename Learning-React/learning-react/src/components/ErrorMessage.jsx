const ErrorMessage=({items})=>{


    return(
        <>
{/* {items.length===0?<h5>there is no food</h5>:null} */}
      {items.length === 0 && <h5 style={{textAlign:"center",color:"orange"}}>there is no food</h5>}
      </>
    );
};
export default ErrorMessage;