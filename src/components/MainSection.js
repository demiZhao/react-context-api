import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import VisibleBookList from "../containers/VisibleBookList";
import BooksContext from '../context/BooksContext';

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      completedBooks: 0,
    };
    this.updateBookStatus = this.updateBookStatus.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=inauthor:Eileen%20Chang"
    )
      .then((response) => response.json())
      .then((myData) => this.setState({ books: myData.items }));
  }

  updateBookStatus(bookId, status) {
    let newBooks = this.state.books;
    const book = newBooks.find((book) => book.id === bookId);
    book.status = status;
    this.setState({
      books: newBooks,
      completedBooks:
        status === "completed"
          ? this.state.completedBooks + 1
          : this.state.completedBooks - 1,
    });
  }

  render() {
    return (
      <BooksContext.Provider value={{books: this.state.books}}>
      <section className="main">
        <VisibleBookList
          updateBookStatus={this.updateBookStatus}
        />
        <Footer
          completedCount={this.state.completedBooks}
          activeCount={this.state.books.length - this.state.completedBooks}
          onClearCompleted={this.props.actions.clearCompleted}
        />
      </section>
    </BooksContext.Provider>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default MainSection;

