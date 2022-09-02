import {useState, useEffect} from "react";
import * as BooksAPI from "../utils/BooksAPI";
import BooksGrid from "./BooksGrid";

const SearchBooksResults = ({savedBooks, searchTerm, handleChange}) => {

    const [matchingBooks, setMatchingBooks] = useState([]);
    const changeMatchingBooks = (newValue) => {
        setMatchingBooks(newValue);
    }
    useEffect(() => {
          const getMatchingBooks = async () => {
                searchTerm === "" ?
                    changeMatchingBooks([]) :
                    changeMatchingBooks(await BooksAPI.search(searchTerm))
          };
          getMatchingBooks(); 
      }, [searchTerm])


    return (
        matchingBooks.error ?
            <div>No matches</div> :
            <div className="search-books-results">
            <BooksGrid 
                savedBooks={savedBooks}
                books={matchingBooks}
                handleChange={handleChange}
            />
            </div>
    )
}

export default SearchBooksResults;