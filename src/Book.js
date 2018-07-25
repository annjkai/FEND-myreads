import React, { Component } from 'react';

class Book extends Component {

    render() {
        const newBookObject = new updateBookObject(this.props.bookID);
        const book = this.props;
        //let imageAvailable = book.image;

        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.image}")` }}></div>

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
              <div className="book-authors">{book.authors}</div>
              {/*separate author names
              {book.authors.map((authors, index) => (
                  <div key={index}
                       className="book-authors">{authors}</div>
              ))}*/}

            </div>
        )
    }
}

class updateBookObject {
    constructor(id){
        this.id = id;
    }
}

export default Book;
