import { motion } from "motion/react";
import styles from "./ReadingList.module.css";
import { useState } from "react";

function ReadingList({ books, handleRemoveBook }) {
  const [hoverId, setHoverId] = useState(null);

  return (
    <>
      <section className={styles.wrapper}>
        <h2>Reading List</h2>
        <ol className={styles.books}>
          {books.map((book, bookIndex) => {
            let bookMargin = bookIndex === 0 ? 0 : "-2rem";
            if (bookIndex === hoverId || bookIndex - 1 === books.length)
              bookMargin = 0;

            return (
              <li key={book.isbn}>
                <button onClick={() => handleRemoveBook(book)}>
                  <motion.img
                    layoutId={`book-cover-${book.isbn}`}
                    onMouseOver={() => setHoverId(bookIndex)}
                    onMouseOut={() => setHoverId(null)}
                    alt={book.name}
                    src={book.coverSrc}
                    draggable={false}
                    style={{ marginRight: bookMargin }}
                    className={styles.bookCover}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 60,
                    }}
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default ReadingList;
