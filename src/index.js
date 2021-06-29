/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// CSS
import './index.css';

// variables
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71Wdlcm9X7S._AC_UL200_SR200,200_.jpg',
    title: 'Dude Perfect 101 Tricks, Tips, and Cool Stuff',
    author: 'Dude Perfect',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg',
    title: 'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki',
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>

  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// proptypes
Book.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  img: '',
  title: '',
  author: '',
};

ReactDOM.render(<BookList />, document.getElementById('root'));
