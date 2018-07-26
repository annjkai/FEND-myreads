import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import AppContainer from './AppContainer';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
    state = {
        books: []
    }

    //since the getAll() function needs to be called twice,
    //I put it in a separate method
    updateAllBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    componentDidMount() {
        this.updateAllBooks()
    }

    //implemented async function at suggestion of reviewer
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.updateAllBooks()
        })
    }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <AppContainer
                books={this.state.books}
                updateShelf={this.updateShelf} />
        )} />

        <Route path="/search" render={() => (
            <BookSearch
                books={this.state.books}
                updateShelf={this.updateShelf} />
        )} />
      </div>
  )}}

export default BooksApp;
