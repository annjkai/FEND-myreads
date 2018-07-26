import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
//import escapeRegExp from 'escape-string-regexp';
import Book from './Book';

class BookSearch extends Component {
    state= {
        query: "",
        //new array to handle books that are searched for
        books: []
    }

    //updates query based on input
    updateQuery = (query) => {
        this.setState({ query })
        this.updateBookSearch(query)
    }

    updateBookSearch = (query) => {
        //if the user types a query, look for books that match
        if (query) {
            //display books that match
            BooksAPI.search(query).then((books) => {
                //if the search query doesn't exist, then show no results
                //(many thanks to Maeva NAP from the FEND scholarship //for her help in solving this)
                //I also used this for reference: https://dev.to/sarah_chima/error-boundaries-in-react-3eib
                if (books.error) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books })
                }
            })
            //if there is no query, then show no results
        } else {
            this.setState({ books: [] })
        }
    }

    render() {
        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author" value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    defaultValue={this.props.currentShelf}
                    />
                </div>
              </div>

              <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.books
                        .map((book) =>
                        <li key={book.id}>
                            <Book
                                bookID={book.id}
                                image={book.imageLinks}
                                title={book.title}
                                authors={book.authors}
                                updateShelf={this.props.updateShelf}
                                currentShelf="none"/>
                        </li>
                    )}
                </ol>
              </div>
            </div>
        )
    }
}

export default BookSearch;
