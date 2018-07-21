import React from 'react';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import AppContainer from './AppContainer';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <AppContainer/>
      </div>
    )
  }
}
export default BooksApp;
