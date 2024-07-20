import useFetchData from "../../hooks/useFetchData";
import classes from "./Desserts.module.css";
import DessertCard from "../dessertCard/DessertCard";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";

export default function Desserts() {
  const { data: dessertItems, isLoading, error } = useFetchData("data.json");
  const [inputText, setInputText] = useState("");

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  let dessertsToDisplay = dessertItems;

  if (inputText.length > 0) {
    dessertsToDisplay = dessertItems.filter((item) =>
      item.name.toLowerCase().includes(inputText.toLowerCase())
    );
  }

  return (
    <>
      <div className={classes.desserts__container}>
        <div className={classes.desserts__header_searchBar_container}>
          <h1 className={classes.desserts__header}>Desserts</h1>
          <SearchBar inputText={inputText} setInputText={setInputText} />
        </div>

        <div className={classes.dessertCards__container}>
          {dessertsToDisplay.map((item) => (
            <DessertCard key={item.name} dessert={item} inputText={inputText} />
          ))}
          {dessertsToDisplay.length === 0 && (
            <div className={classes.desserts__noItems_msg}>
              <span className={classes.desserts__noItems_sorry}>Sorry, </span> we don't have this
              meal in our menu 😔
            </div>
          )}
        </div>
      </div>
    </>
  );
}
