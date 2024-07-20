import { OrderContext } from "../store/OrderContext";
import { useContext } from "react";

export default function useOrder() {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("useOrder must be used within an OrderContextProvider!");
  }

  return orderContext;
}
