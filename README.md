# MyReads Project

This is the React App submitted by José Imedio (@joseimedio) for the final assessment project for Udacity's React Fundamentals course. 

## TL;DR

To launch the app:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md - This file.
├── package-lock.json 
├── package.json 
├── yarn.lock
├── node_modules
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    └── index.js 
    ├── icons
    ├── css
        ├── index.css # Global styles. 
        ├── App.css # Styles for the App.
    ├── utils
        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
        ├── bookshelves.js # Contains an array with the name of the three bookshelves. It's used throughout the whole app. 
    ├── components
        ├── App.js # Root of the App. Fetches the saved books from the server. Also contains the routes to Landing Page and Search Page.

        ├── LandingPage.js # Paints the bookshelves by mapping over bookshelves.js and returning a Bookshelf component every time.
        ├── Bookshelf.js # Returns a BooksGrid component. 

        ├── SearchPage.js # Handles the user input on the search bar and generates a search term that is sent to SearchBooksResults.js. 
        ├── SearchBooksResults.js # Fetches books from the server according to the search term received.
            
        ├── BooksGrid.js # Maps over the prop 'books' and returns a Book component every time. 
        ├── Book.js # Paints the book received. Adds a checkmark on the dropdown menu if the current book was already saved.
        
        
    
```



## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
# myReads
