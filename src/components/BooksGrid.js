import Book from "./Book";
import React from 'react';

const BooksGrid = ({savedBooks, books, handleChange}) => {
    
    return (
        <ol className="books-grid">
            {books.map((book) => {
                const uniqueNumber = Math.floor(performance.now() * Math.random()*99);
                      return (
                        <Book 
                          savedBooks={savedBooks}
                          key={uniqueNumber + " " + book.title}           //Unique identifier to avoid duplicates. It uses timestamp and randomizer.
                          book={book}
                          handleChange={handleChange}
                        />
                      )      
            })}            
        </ol>
    )
}

export default BooksGrid;
