import useFetchData from "../../hooks/useFetchData";
import classes from "./Desserts.module.css";
import DessertCard from "../dessertCard/DessertCard";

export default function Desserts() {
  const { data: dessertItems, isLoading, error } = useFetchData("data.json");

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <>
      <div className={classes.desserts__container}>
        <h1 className={classes.desserts__header}>Desserts</h1>
        <div className={classes.dessertCards__container}>
          {dessertItems.map((item) => (
            <DessertCard key={item.name} dessert={item} />
          ))}
        </div>
      </div>
    </>
  );
}
