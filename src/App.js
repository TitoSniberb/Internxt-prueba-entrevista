import React from 'react';
import BookList from './components/BookList';
import BookState from './context/books/bookState';


function App() {

  return (
    <BookState>
      <BookList />
    </BookState>
  );
}

export default App;
