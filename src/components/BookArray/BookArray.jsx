import { motion } from "motion/react";

import styles from "./BookArray.module.css";

function BookArray({ books, handleSelectBook, ...delegated }) {
  return (
    <section {...delegated}>
      <ul className={styles.wrapper}>
        {books.map((book) => (
          <li key={book.isbn}>
            <button
              className={styles.bookBtn}
              onClick={() => handleSelectBook(book)}
            >
              <motion.img
                layoutId={book.isbn}
                alt={book.name}
                src={book.coverSrc}
                className={styles.bookCover}
                draggable={false}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookArray;
