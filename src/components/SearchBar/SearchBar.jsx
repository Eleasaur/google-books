import { useRef } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    onSubmit(formData.get("search"));
    formRef.current.reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
      <input type="text" placeholder="search term " name="search" />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
