import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import SearchBar from "../../components/SearchBar/SearchBar";
import BooksLoader from "../../containers/BooksLoader/BooksLoader";

const BooksPage = () => {
  const { setSearchVal } = useContext(SearchContext);
  const onSubmit = (val) => {
    setSearchVal(val);
  };
  return (
    <>
      <h1>Google books search</h1>
      <SearchBar onSubmit={onSubmit} />
      <BooksLoader />
    </>
  );
};

export default BooksPage;
