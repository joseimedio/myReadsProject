
import Bookshelf from "./Bookshelf";
import {bookshelves} from "../utils/bookshelves";
import {Link} from "react-router-dom";
import React from 'react';

const LandingPage = ({ books, handleChange}) => {

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {bookshelves.map((bookshelf) => {
                return (
                  <Bookshelf 
                    key={bookshelf.camel}
                    id={bookshelf.camel}
                    name={bookshelf.normal}
                    books={books}
                    handleChange={handleChange}
                  />
                )
              })}
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
}

export default LandingPage;