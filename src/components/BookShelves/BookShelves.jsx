import BOOKS from "../../data";
import BookArray from "../BookArray";
import ReadingList from "../ReadingList";
import styles from "./BookShelves.module.css";

import { useState } from "react";

function BookShelves() {
  const [books, setBooks] = useState(BOOKS);

  function toggleBook(toggledBook) {
    const nextBooks = books.filter((book) => {
      return book.isbn !== toggledBook.isbn;
    });

    nextBooks.push({
      ...toggledBook,
      selected: !toggledBook.selected,
    });

    setBooks(nextBooks);
  }

  const selectedBooks = books.filter((book) => book.selected);
  const unselectedBooks = books.filter((book) => !book.selected);

  return (
    <div className={styles.wrapper}>
      <BookArray
        className={styles.grid}
        books={unselectedBooks}
        handleSelectBook={toggleBook}
      />
      {selectedBooks.length > 0 && (
        <ReadingList books={selectedBooks} handleRemoveBook={toggleBook} />
      )}
    </div>
  );
}

export default BookShelves;
