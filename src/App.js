import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import AppContainer from './AppContainer';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
    state = {
        books: [],
        query: ""
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        //re-render page on shelfChange
        /*this.setState((prevState, props) => {
            return(this.updateShelf)
        })*/
    }

  render() {
    return (
      <div className="app">
        <AppContainer
            books={this.state.books}
            updateShelf={this.updateShelf} />
        <BookSearch />
      </div>
    )
  }
}
export default BooksApp;
