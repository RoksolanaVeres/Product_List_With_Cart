import classes from "./AddToCartButton.module.css";
import { AddToCardIcon, IncrementQuantity, DecrementQuantity } from "../icons";

export default function AddToCartButton({ clicks, handleIncrement, handleDecrement }) {
  const isClicked = clicks > 0;

  return (
    <div className={classes.addToCart_btn__container} data-clicked={isClicked}>
      {isClicked ? (
        <div className={classes.clicked__btn}>
          <button onClick={handleDecrement} className={classes.changeQuantity_btn}>
            <DecrementQuantity className={classes.changeQuantity_icon} />
          </button>
          <span className={classes.clicksQuanity}>{clicks}</span>
          <button onClick={handleIncrement} className={classes.changeQuantity_btn}>
            <IncrementQuantity className={classes.changeQuantity_icon} />
          </button>
        </div>
      ) : (
        <button className={classes.addToCart__btn} onClick={handleIncrement}>
          <AddToCardIcon /> <span>Add to Cart</span>
        </button>
      )}
    </div>
  );
}
