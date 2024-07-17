import classes from "./DessertCard.module.css";
import AddToCartButton from "../addToCartButton/AddToCartButton";
import { useContext } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";
import { OrderContext } from "../../store/OrderContext";

export default function DessertCard({ dessert }) {
  const device = useScreenWidth();
  const { order, increaseItemQty, decreaseItemQty } = useContext(OrderContext);

  const dessertOrderIndex = order.findIndex((item) => item.name === dessert.name);

  let dessertQuantity = 0;
  if (dessertOrderIndex !== -1) {
    dessertQuantity = order[dessertOrderIndex].quantity;
  }

  function handleIncrement() {
    increaseItemQty(dessert);
  }

  function handleDecrement() {
    decreaseItemQty(dessert);
  }

  return (
    <div className={classes.dessert__card}>
      <div className={classes.dessert__img_btn_container}>
        <img
          src={dessert.image[device]}
          alt={dessert.name}
          className={`${classes.dessert__image} ${
            dessertQuantity > 0 ? classes.dessert__image_clicked : ""
          }`}
        />
        <div className={classes.dessert__button_container}>
          <AddToCartButton
            clicks={dessertQuantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
      </div>
      <div className={classes.dessert__text_container}>
        <h3 className={classes.dessert__category}>{dessert.category}</h3>
        <h2 className={classes.dessert__name}>{dessert.name}</h2>
        <p className={classes.dessert__price}>${dessert.price}</p>
      </div>
    </div>
  );
}
