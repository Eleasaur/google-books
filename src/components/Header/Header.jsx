import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Google Books search</h1>
      <h3 className={styles.info}>
        This app lets you search for books that can be found in the Google Books
        API.
      </h3>
    </header>
  );
};

export default Header;
