const BASE_URL = "https://www.googleapis.com/books/v1/";

export const getBooksBySearchTerm = async (searchTerm) => {
  if (searchTerm.trim() === "") {
    throw new Error("Must search for a value");
  }
  const response = await fetch(`${BASE_URL}volumes?q=${searchTerm}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  if (data.totalItems === 0) {
    throw new Error("No books found with the search term: " + searchTerm);
  }
  return data;
};
