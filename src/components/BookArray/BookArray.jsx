import { useState } from "react";
import { motion } from "motion/react";
import styles from "./BookArray.module.css";

function BookArray({ books, handleSelectBook }) {
  const [search, setSearch] = useState("");

  // Derived states of books based on search: Search on title or author
  const filteredBooks = books.filter((book) => {
    if (search === "") return true;

    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div className={styles.header}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search books"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <section className={styles.wrapper}>
        <h2>Library</h2>
        {filteredBooks.length === 0 && (
          <p className={styles.notFound}>No books found</p>
        )}
        <ul className={styles.books}>
          {filteredBooks.map((book) => (
            <li key={book.isbn}>
              <button
                className={styles.bookBtn}
                onClick={() => handleSelectBook(book)}
              >
                <motion.img
                  layoutId={`book-cover-${book.isbn}`}
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
    </>
  );
}

export default BookArray;
