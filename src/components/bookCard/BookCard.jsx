import React, { useState } from "react";
import styles from "./BookCard.module.scss";
import BookModal from "../BookModal/BookModal";

const BookCard = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <div key={item.id} className={styles.book}>
      <h3>{item.volumeInfo?.title}</h3>
      <h3>{item.volumeInfo?.authors?.join(", ")}</h3>
      <img
        className={styles.img}
        src={
          item.volumeInfo?.imageLinks?.thumbnail
            ? item.volumeInfo?.imageLinks?.thumbnail
            : "/public/noImage.png"
        }
      />
      <p>
        {item.volumeInfo?.description
          ? item.volumeInfo?.description
          : "No description found."}
      </p>
      <button className={styles.modalBtn} onClick={toggleOpen}>
        See more info
      </button>
      <BookModal isOpen={openModal} onClose={toggleOpen}>
        <h3>
          {item.volumeInfo.title} - {item.volumeInfo.authors.join(", ")}
        </h3>
        <img
          className={styles.img}
          src={
            item.volumeInfo?.imageLinks?.thumbnail
              ? item.volumeInfo?.imageLinks?.thumbnail
              : "/public/noImage.png"
          }
        />
        <p>
          Published:{" "}
          {item.volumeInfo?.publishedDate
            ? item.volumeInfo?.publishedDate
            : "Not found"}
        </p>
        <p>
          Page count:{" "}
          {item.volumeInfo?.pageCount
            ? item.volumeInfo?.pageCount
            : "Not found"}
        </p>
        <p>
          {item.volumeInfo?.categories?.length > 1 ? "Genres: " : "Genre: "}
          {item.volumeInfo?.categories
            ? item.volumeInfo?.categories?.join(" ")
            : "Not found"}
        </p>
      </BookModal>
    </div>
  );
};

export default BookCard;
