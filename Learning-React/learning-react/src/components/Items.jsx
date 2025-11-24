import Style from "./Items.module.css";
const Items = ({fooditem,onClickedButton}) => {
   

  return (
    <>
      <li className="list-group-item">
        <span> {fooditem}</span>

        <button type="button" className={`${Style.button} btn btn-info`}
         onClick={onClickedButton}>
          Buy
        </button>
      </li>
    </>
  );
};
export default Items;
