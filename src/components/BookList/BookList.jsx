import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
  const { searchVal } = useContext(SearchContext);
  return (
    <>
      <h2>
        Found {books.totalItems} books for the search term: {searchVal}
      </h2>
      <div className={styles.bookList}>
        {books.items.map((item) => (
          <div key={item.id} className={styles.book}>
            <p>{item.volumeInfo.title}</p>
            <p>{item.volumeInfo.authors.join(", ")}</p>
            <img
              className={styles.img}
              src={item.volumeInfo?.imageLinks.thumbnail}
            />
            <p>{item.volumeInfo?.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
