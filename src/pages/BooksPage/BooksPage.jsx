import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import SearchBar from "../../components/SearchBar/SearchBar";
import BooksLoader from "../../containers/BooksLoader/BooksLoader";
import Header from "../../components/Header/Header";

const BooksPage = () => {
  const { setSearchVal } = useContext(SearchContext);
  const onSubmit = (val) => {
    setSearchVal(val);
  };
  return (
    <>
      <Header />
      <SearchBar onSubmit={onSubmit} />
      <BooksLoader />
    </>
  );
};

export default BooksPage;
