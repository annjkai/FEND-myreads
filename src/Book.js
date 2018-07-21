import React, { Component } from 'react';

class Book extends Component {
    render() {
        console.log(this.props.bookAttributes);
        console.log(this.props.bookTitle);
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.url}")` }}></div>
                <div className="book-shelf-changer">
                  <select
                        /*onChange={(event) => this.props.changeShelf(
                            this.props.book, event.target.value
                        )}*/>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

export default Book;
