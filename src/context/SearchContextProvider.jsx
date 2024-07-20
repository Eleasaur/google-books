import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState(null);
  return (
    <SearchContext.Provider value={{ searchVal, setSearchVal }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
