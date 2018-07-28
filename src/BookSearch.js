import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';

class BookSearch extends Component {
    state= {
        query: "",
        //new array to handle books that are searched for
        queryBooks: []
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
            BooksAPI.search(query).then((queryBooks) => {
                //if the search query doesn't exist, then show no results
                //(many thanks the FEND scholarship Slack
                //for help in solving this)
                //I also used this for reference: https://dev.to/sarah_chima/error-boundaries-in-react-3eib
                if (queryBooks.error) {
                    this.setState({ queryBooks: [] })
                } else {
                    this.setState({ queryBooks })
                }
            })
            //if there is no query, then show no results
        } else {
            this.setState({ queryBooks: [] })
        }
    }

    render() {


        let updateQueryShelf = this.state.queryBooks.slice()
        //console.log(this.state.queryBooks);
        //console.log(updateQueryShelf);
        updateQueryShelf.map((queryBook, index) => {

            this.props.books.map((book) => {
                if (queryBook.id === book.id) {
                    queryBook.shelf = book.shelf
                } else {
                    queryBook.shelf = "none"
                }
            })
            //console.log(queryBook.shelf)
            //console.log(index)
        })





        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author" value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
              </div>

              <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.queryBooks
                        .map((queryBook) =>
                        <li key={queryBook.id}>
                            <Book
                                bookID={queryBook.id}
                                image={queryBook.imageLinks}
                                title={queryBook.title}
                                authors={queryBook.authors}
                                updateShelf={this.props.updateShelf}
                                //currentShelf=''
                                currentShelf={queryBook.shelf}
                                //currentShelf={queryBook.shelf = "none"}
                                />
                        </li>
                    )}
                </ol>
              </div>
            </div>
        )
    }
}

export default BookSearch;
