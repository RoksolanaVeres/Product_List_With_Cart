import { useContext } from "react";
import classes from "./Cart.module.css";
import { OrderContext } from "../../store/OrderContext";
import CartItem from "../cartItem/CartItem";

export default function Cart() {
  const { order } = useContext(OrderContext);

  let orderItemsQty = 0;
  order.forEach((item) => (orderItemsQty += item.quantity));

  let orderTotal = 0;
  order.forEach((item) => (orderTotal += item.quantity * item.price));

  return (
    <>
      <div className={classes.cart__container}>
        <h2 className={classes.cart__header}>Your Cart ({orderItemsQty})</h2>
        <ul className={classes.cart__list}>
          {order.map((orderItem) => (
            <CartItem key={orderItem.name} orderItem={orderItem} />
          ))}
        </ul>
        <div className={classes.cart__orderTotal_container}>
          <p className={classes.cart__orderTotal_text}>Order Total</p>
          <p className={classes.cart__orderTotal_sum}>${orderTotal}</p>
        </div>
      </div>
    </>
  );
}
