import BooksGrid from "./BooksGrid";
import React from 'react';

const Bookshelf = ({name, id, books, handleChange}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <BooksGrid
                  savedBooks={books.map((book) => {return({id: book.id, shelf: book.shelf})})} 
                  books={books.filter(book => book.shelf === id)}
                  handleChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Bookshelf;