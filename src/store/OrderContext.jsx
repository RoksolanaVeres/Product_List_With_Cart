import { createContext, useState } from "react";

export const OrderContext = createContext(null);

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);

  function increaseItemQty(item) {
    setOrder((prevOrder) => {
      const itemIndex = prevOrder.findIndex((orderItem) => orderItem.name === item.name);

      if (itemIndex === -1) {
        return [{ ...item, quantity: 1 }, ...prevOrder];
      } else {
        const updatedOrder = [...prevOrder];
        const updatedItem = { ...item, quantity: prevOrder[itemIndex].quantity + 1 };
        updatedOrder[itemIndex] = updatedItem;
        return updatedOrder;
      }
    });
  }

  function decreaseItemQty(item) {
    setOrder((prevOrder) => {
      const itemIndex = prevOrder.findIndex((orderItem) => orderItem.name === item.name);
      if (prevOrder[itemIndex].quantity === 1) {
        return prevOrder.filter((orderItem) => orderItem.name !== item.name);
      } else {
        const updatedOrder = [...prevOrder];
        const updatedItem = { ...item, quantity: prevOrder[itemIndex].quantity - 1 };
        updatedOrder[itemIndex] = updatedItem;
        return updatedOrder;
      }
    });
  }

  function removeItemFromOrder(itemToRemove) {
    setOrder((prevOrder) => {
      return prevOrder.filter((orderItem) => orderItem.name !== itemToRemove.name);
    });
  }

  const value = { order, removeItemFromOrder, increaseItemQty, decreaseItemQty };
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
