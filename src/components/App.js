import "../css/App.css";
import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from "react";
import * as BooksAPI from "../utils/BooksAPI";
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";

function App() {  

  const [change, setChange] = useState(false);

  const [books, setBooks] = useState([]);                                           //Fetch books from the server.
  useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        };
        getBooks();
        
  }, [change])                                                                      //Fetch again every time a new book is added.

  const updateDB = async (bookID, targetShelf) => {
    await BooksAPI.update({id: bookID}, targetShelf);
    setChange(!change);
  }

  const handleMoveBook = (event) => {
    let bookSelected = books.filter((b) => b.title === event.target.name)[0];
    const newBookshelf = event.target.value;

    bookSelected.shelf = newBookshelf;                                              //Change bookshelf in the browser.
    const unchanged = books.filter(book => book!==bookSelected);
    setBooks([...unchanged, bookSelected]);                                 

    updateDB(event.target.id, event.target.value);                                  //Change bookshelf in the server.

  }

  const handleAddBook = (event) => {
    updateDB(event.target.id, event.target.value);
  }


  return (
    <Routes>
      
        <Route 
          path = "/search"
          element={
            <SearchPage 
              savedBooks={books.map((book) => {return({id: book.id, shelf: book.shelf})})}
              handleChange={handleAddBook}
            />
          }
        />
      
        <Route 
          path= "/"
          element={
            <LandingPage 
              books={books}
              handleChange={handleMoveBook}
            />
          }
        />
      
    </Routes>
  );
}

export default App;
