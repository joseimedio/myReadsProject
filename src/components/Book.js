import { bookshelves } from "../utils/bookshelves";
import React from 'react';


const Book = ({savedBooks, book, handleChange}) => {

    const getInfoIfSaved = () => {
        return savedBooks.filter(savedBook => savedBook.id === book.id);
    }

    const info = getInfoIfSaved();
    const currentShelf = info.length!==0 ? info[0].shelf : "";

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 192,
                            backgroundImage: book.imageLinks ?
                                                `url(${book.imageLinks.thumbnail})` :
                                                null
                        }}
                    ></div>        
                    <div className="book-shelf-changer">
                        <select 
                            value={"none"} 
                            onChange={handleChange} 
                            name={book.title} 
                            id={book.id} 
                        >
                            <option value="none" disabled>Move to...</option>
                            {bookshelves.map(bookshelf => {
                                let checkmark = "";
                                if (info.length!==0 && bookshelf.camel===currentShelf){
                                    checkmark = " ✓";
                                } 
                                return(
                                    <option key={bookshelf.camel} 
                                            value={bookshelf.camel}>
                                            {bookshelf.normal + checkmark}
                                    </option>
                                )
                            })}
                            <option value="none">None {info.length===0 ? " ✓" : null}</option>      
                        </select>     
                    </div>                
                    </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{
                    book.authors ?
                        typeof(book.authors) === 'string' ?
                            book.authors :
                            book.authors.join(', ') :
                        "-"
                }</div>            
            </div>            
        </li>
    )
}

export default Book;