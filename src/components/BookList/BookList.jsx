import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import styles from "./BookList.module.scss";
import BookCard from "../bookCard/BookCard";

const BookList = ({ books }) => {
  const { searchVal } = useContext(SearchContext);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.foundBooks}>
        Found {books.totalItems} books for the search term: {searchVal}
      </h2>
      <div className={styles.bookList}>
        {books.items.map((item) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
