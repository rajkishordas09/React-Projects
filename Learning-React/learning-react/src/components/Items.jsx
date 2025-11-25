import Style from "./Items.module.css";
const Items = ({fooditem,onClickedButton,isBought}) => {
   

  return (
    <>
      <li className={`list-group-item ${isBought && "active"}`}>
        <span> {fooditem}</span>

        <button type="button" className={`${Style.button} btn btn-info ` }
         onClick={onClickedButton}  >
          Buy
        </button>
      </li>
    </>
  );
};
export default Items;
