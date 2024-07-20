import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import { getBooksBySearchTerm } from "../../services/books-services";
import BookList from "../../components/BookList/BookList";

const BooksLoader = () => {
  const { searchVal } = useContext(SearchContext);
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("IDLE");

  useEffect(() => {
    if (searchVal === null) {
      return;
    }
    setFetchStatus("LOADING");
    getBooksBySearchTerm(searchVal)
      .then((data) => {
        setFetchStatus("RESOLVED");
        setBooks(data);
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("REJECTED");
      });
  }, [searchVal]);

  return (
    <>
      {fetchStatus === "IDLE" && <h3>Search for some books</h3>}
      {fetchStatus === "LOADING" && (
        <h3> Searching for books with the term {searchVal}</h3>
      )}
      {fetchStatus === "RESOLVED" && <BookList books={books} />}
      {fetchStatus === "REJECTED" && <h3>{error.message}</h3>}
    </>
  );
};

export default BooksLoader;
