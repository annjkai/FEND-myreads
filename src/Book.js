import React, { Component } from 'react';

class Book extends Component {

    render() {
        const newBookObject = new updateBookObject(this.props.bookID);
        const book = this.props;

        return (
            <div className="book">
              <div className="book-top">
                  {/*the image thumbnail is rendered conditionally as per this reference: https://reactjs.org/docs/conditional-rendering.html*/}
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.image ? `url("${book.image.thumbnail}")` : ''}}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event) =>
                       this.props.updateShelf(newBookObject, event.target.value)} defaultValue={this.props.currentShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
             {/*Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join*/}
              <div className="book-authors">{book.authors ? book.authors.join(", ") : ''}</div>
            </div>
        )}}

class updateBookObject {
    constructor(id){
        this.id = id;
    }
}

export default Book;
