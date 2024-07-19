import { useContext, useRef } from "react";
import classes from "./Cart.module.css";
import { OrderContext } from "../../store/OrderContext";
import { CarbonNeutral, EmptyCart } from "../icons";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import { RemoveItem } from "../icons";

export default function Cart() {
  const { order, calculateOrderTotalPrice } = useContext(OrderContext);
  const orderTotalPrice = calculateOrderTotalPrice();
  const confirmationModalRef = useRef(null);

  let orderItemsQty = 0;
  order.forEach((item) => (orderItemsQty += item.quantity));
  const cartIsEmpty = orderItemsQty === 0;

  function handleConfirmOrder() {
    confirmationModalRef.current.showModal();
  }

  return (
    <>
      <ConfirmationModal confirmationModalRef={confirmationModalRef} />
      <div className={classes.cart__container}>
        <h2 className={classes.cart__header}>Your Cart ({orderItemsQty})</h2>
        {cartIsEmpty ? (
          <div className={classes.cart__empty_container}>
            <EmptyCart className={classes.cart__empty_img} />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <div className={classes.cart__filled_container}>
            <ul className={classes.cart__list}>
              {order.map((orderItem) => (
                <CartItem key={orderItem.name} orderItem={orderItem} />
              ))}
            </ul>
            <div className={classes.cart__orderTotal_container}>
              <p className={classes.cart__orderTotal_text}>Order Total</p>
              <p className={classes.cart__orderTotal_sum}>${orderTotalPrice}</p>
            </div>
            <div className={classes.cart__delivery}>
              <CarbonNeutral />
              <p>
                This is a <span className={classes.cart__carbon_neutral}>carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <button onClick={handleConfirmOrder} className={classes.cart__confirm_btn}>
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export function CartItem({ orderItem }) {
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
          <RemoveItem className={classes.cartItem__remove_icon} />
        </button>
      </div>
      <div className={classes.cartItem__divider}></div>
    </li>
  );
}
