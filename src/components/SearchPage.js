import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query.length > 2) {
        
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setBooks(response.data.docs);
          console.log(response.data)
          setLoading(false);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
  };

  return (
    <div className="search-page">
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="results">
         {loading && query.length>1 && (
            <p>Loading books...</p>
        )}
        { books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
      <button onClick={() => window.location.href = '/books'}>
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default SearchPage;
