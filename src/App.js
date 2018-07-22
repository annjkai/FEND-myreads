import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import AppContainer from './AppContainer';
//import BookSearch from './BookSearch';

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
    }

  render() {
    return (
      <div className="app">
        <AppContainer
            books={this.state.books}
            updateShelf={this.updateShelf}
         />
      </div>
    )
  }
}
export default BooksApp;
