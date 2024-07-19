import classes from "./SearchBar.module.css";

export default function SearchBar({ setInputText }) {
  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className={classes.searchBar__container}>
      <input
        className={classes.searchBar__input}
        type="text"
        onChange={handleInputChange}
        placeholder="I want to try ..."
      />
    </div>
  );
}
