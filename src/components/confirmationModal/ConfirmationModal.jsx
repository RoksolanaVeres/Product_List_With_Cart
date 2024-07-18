import { useContext } from "react";
import classes from "./ConfirmationModal.module.css";
import { OrderContext } from "../../store/OrderContext";
import { OrderConfirmed } from "../icons";

export default function ConfirmationModal({ confirmationModalRef }) {
  const { order, calculateOrderTotalPrice } = useContext(OrderContext);
  const orderTotalPrice = calculateOrderTotalPrice();

  return (
    <dialog ref={confirmationModalRef} className={classes.dialog__container}>
      <OrderConfirmed />
      <h2 className={classes.dialog__header}>Order Confirmed</h2>
      <p className={classes.dialog__text}>We hope you enjoy your food!</p>
      <div className={classes.dialog__order_info_container}>
        <ul className={classes.dialog__order_list}>
          {order.map((item) => (
            <OrderItem item={item} key={item.name} />
          ))}
        </ul>
        <div className={classes.dialog__order_total_container}>
          <p>Order total</p>
          <p className={classes.dialog__order_total_price}>${orderTotalPrice}</p>
        </div>
      </div>
    </dialog>
  );
}

export function OrderItem({ item }) {
  return (
    <li>
      <div className={classes.dialog__orderItem_container}>
        <div className={classes.dialog__orderItem_img_details_container}>
          <img
            src={item.image.thumbnail}
            alt={item.name}
            className={classes.dialog__orderItem_img}
          />
          <div className={classes.dialog__orderItem_details}>
            <p className={classes.dialog__orderItem_name}>{item.name}</p>
            <div className={classes.dialog__orderItem_price_qty_container}>
              <p className={classes.dialog__orderItem_qty}>{item.quantity}x</p>
              <p className={classes.dialog__orderItem_price_per_item}>@ ${item.price}</p>
            </div>
          </div>
        </div>
        <p className={classes.dialog__orderItem_final_price}>${item.price * item.quantity}</p>
      </div>

      <div className={classes.dialog__orderItem_divider}></div>
    </li>
  );
}
