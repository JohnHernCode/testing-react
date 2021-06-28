import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
  return (
    <Book />
  );
}

const Book = () => (
  <article>
    <Image />
  </article>
);

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71Wdlcm9X7S._AC_UL200_SR200,200_.jpg" alt="" />;

ReactDOM.render(<BookList />, document.getElementById('root'));
