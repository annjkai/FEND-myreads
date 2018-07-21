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
            //console.log(this.state);
        })
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        //console.log(book);
        //console.log(shelf);
    }

  render() {
      //console.log(this.state.books);
    return (
      <div className="app">
        <AppContainer
            books={this.state.books}
            changeShelf={this.changeShelf}
        />
      </div>
    )
  }
}
export default BooksApp;
