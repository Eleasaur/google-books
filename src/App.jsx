import SearchContextProvider from "./context/SearchContextProvider";
import BooksPage from "./pages/BooksPage/BooksPage";

function App() {
  return (
    <SearchContextProvider>
      <BooksPage />
    </SearchContextProvider>
  );
}

export default App;
