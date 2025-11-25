import { useState } from "react";
import Items from "./Items";

const FruitItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  function clickedButton(item) {
    setActiveItems([item]);
  }

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Items
            key={index}
            fooditem={item}
            onClickedButton={() => clickedButton(item)}
            isBought={activeItems.includes(item)}
          />
        ))}
      </ul>
    </>
  );
};
export default FruitItems;
