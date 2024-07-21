const BASE_URL = "https://www.googleapis.com/books/v1/";

export const getBooksBySearchTerm = async (searchTerm) => {
  if (searchTerm.trim() === "") {
    throw new Error(
      "To search for a book, you must provide a search term above."
    );
  }
  const response = await fetch(
    `${BASE_URL}volumes?q=${searchTerm}&maxResults=12`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = await response.json();
  if (data.totalItems === 0) {
    throw new Error("No books found with the search term: " + searchTerm + ".");
  }
  return data;
};
