import classes from "./CartItem.module.css";
import { RemoveItem } from "../icons";
import { useContext } from "react";
import { OrderContext } from "../../store/OrderContext";

export default function CartItem({ orderItem }) {
  const { removeItemFromOrder } = useContext(OrderContext);

  function handleRemoveItem() {
    removeItemFromOrder(orderItem);
  }

  return (
    <li className={classes.cartItem__container}>
      <div className={classes.cartItem__details_btn_container}>
        <div className={classes.cartItem__details}>
          <h3 className={classes.cartItem__name}>{orderItem.name}</h3>
          <div className={classes.cartItem__price_qty_container}>
            <p className={classes.cartItem__qty}>{orderItem.quantity}x</p>
            <p className={classes.cartItem__price}>@ ${orderItem.price}</p>
            <p className={classes.cartItem__price_total}>${orderItem.quantity * orderItem.price}</p>
          </div>
        </div>
        <button className={classes.cartItem__remove_btn} onClick={handleRemoveItem}>
          <RemoveItem />
        </button>
      </div>
      <div className={classes.cartItem__divider}></div>
    </li>
  );
}
