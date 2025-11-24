import Items from "./Items";

const FruitItems=({items})=>{
 
  return (
    <>
    
<ul className="list-group">
        {items.map((item) => (
          <Items  key={item} fooditem={item} onClickedButton={()=>console.log(`${item} is bought`)} />
        ))}
      </ul>
      </>
  );
};
export default FruitItems;
