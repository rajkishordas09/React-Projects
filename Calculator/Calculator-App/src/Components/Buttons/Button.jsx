import Style from "./Button.module.css";

function Button({ onButtonClick }) {
  const buttonList = ["C",1, 2, "+",3, 4,"-", 5, 6,"*", 7, 8,"/", 9, 0,"%","="];
  return (
    <>
      <div className={Style.buttonContainer}>
        {buttonList.map((buttonItem,index) => (
           
          <button
            key={index}
            className={Style.button}
            onClick={() => onButtonClick(buttonItem)}
          >
            {buttonItem}
          </button>
        ))}
      </div>
    </>
  );
}
export default Button;
