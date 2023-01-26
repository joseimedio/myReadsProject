# MyReads Project (React)
This project was completed as a part of the React Nanodegree Program (Udacity) in September 2022 by José Imedio.

It consists on a virtual bookshelf where the user can classify a series of books into three categories: Currently Reading, Want to Read and Read. There's also a simulated database, provided by Udacity, that provides the app with dozens of additional books, so the user can add new elements to the bookshelf.

## Instructions
To launch the app:
- install all project dependencies with 'npm install'
- start the development server in '/src' with 'npm start'

## Content
- README.md
- package-lock.json 
- package.json 
- yarn.lock
#### public 
HTML and a favicon
#### src 
Source code

## The src folder
- index.js: initializes the React app. 
#### icons 
SVG icons
#### css
- index.css: global styles. 
- App.css: styles for the App.
#### utils
- BooksAPI.js:  JavaScript API for the provided Udacity backend. 
- bookshelves.js: contains an array with the name of the three bookshelves. It's used throughout the whole app. 
#### components
- App.js: Root of the App. Fetches the saved books from the server. Also contains the routes to Landing Page and Search Page.
- LandingPage.js: Paints the bookshelves by mapping over bookshelves.js and returning a Bookshelf component every time.
- Bookshelf.js: Returns a BooksGrid component. 
- SearchPage.js: Handles the user input on the search bar and generates a search term that is sent to SearchBooksResults.js. 
- SearchBooksResults.js: Fetches books from the server according to the search term received.
- BooksGrid.js: Maps over the prop 'books' and returns a Book component every time. 
- Book.js: Paints the book received. Adds a checkmark on the dropdown menu if the current book was already saved.
        
## Possible improvements
When searching for books in the backend, the search terms are very limited and the behavior of the search tool is not really intuitive. 

## Licensing, Authors and Acknowledgements
The basic website (HTML and CSS) and the simulated book database were provided by Udacity, Inc.

