import classes from "./App.module.css";
import Desserts from "./components/desserts/Desserts";
import Cart from "./components/cart/Cart";

export default function App() {
  return (
    <div className={classes.layout__container}>
      <div className={classes.content__container}>
        <Desserts />
        <Cart />
      </div>
    </div>
  );
}
