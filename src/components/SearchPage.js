import {useState} from "react";
import SearchBooksResults from "./SearchBooksResults";
import {Link} from "react-router-dom";

const SearchPage = ({savedBooks, handleChange}) => {

    const [input, setInput] = useState("");
    const [timestamp, setTimestamp] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChangeSearchBar = (event) => {
      setInput(event.target.value);                                         //Handle the search bar UI.

      setElapsedTime(performance.now()/1000 - timestamp);                   //Check if the user is deleting the search field fast.
      setTimestamp(performance.now()/1000);
      const userIsDeleting = event.target.value.length < searchTerm.length;
      if (userIsDeleting && elapsedTime < 0.5) {
        setSearchTerm("...");                                               //If that's the case, set a searchTerm that will get no results.
      } else {
        setSearchTerm(event.target.value);                                  //Otherwise, normal behavior.
      }

    }

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={input}
                onChange={handleChangeSearchBar}
              />
            </div>
          </div>
          <SearchBooksResults 
            savedBooks={savedBooks}
            searchTerm={searchTerm}
            handleChange={handleChange}
          />
        </div>
    )
}

export default SearchPage;