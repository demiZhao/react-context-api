import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import BooksContext from '../context/BooksContext'

const BookList = ({ updateBookStatus, actions }) => (
  <BooksContext.Consumer>
         {({books}) => 
         (
          <ul className="todo-list">
          {books.map(book =>
            <>
              <BookItem key={book.id} book={book} updateBookStatus={updateBookStatus} {...actions} />
              <img src={book.volumeInfo.imageLinks.thumbnail} style={{marginLeft: '60px'}}/>
              <hr style={{'border': '1px solid #ededed'}}/>
            </>
          )}
        </ul>
         )}
  </BooksContext.Consumer>
)

BookList.propTypes = {
  actions: PropTypes.object.isRequired
}

export default BookList
