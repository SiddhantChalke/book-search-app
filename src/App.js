import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookShelf from './components/BookShelf';

function App() {
  return (
    <div className="App">
      {/* <p>Book Search App</p> */}
        {/* <Link to='/books'>Book Shelf</Link> */}
      <Router>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/books' element={<BookShelf />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
