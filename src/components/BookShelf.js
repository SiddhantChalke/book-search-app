import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookShelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
