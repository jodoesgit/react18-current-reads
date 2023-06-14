import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

// const author = "Shirley Jackson";
// const title = "We Have Always Lived in the Castle";
// const img = require("./img/books/book3.jpg");

const firstBook = {
  author: "Shelby Van Pelt",
  title: "Remarkably Bright Creatures",
  img: require("./img/books/book1.jpg"),
};

const secondBook = {
  author: "Grady Hendrix",
  title: "How to Sell a Haunted House",
  img: require("./img/books/book2.jpg"),
};

const thirdBook = {
  author: "Shirley Jackson",
  title: "We Have Always Lived in the Castle",
  img: require("./img/books/book3.jpg"),
};

const fourthBook = {
  author: "Min Jin Lee",
  title: "Pachinko",
  img: require("./img/books/book4.jpg"),
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          repudiandae hic.
        </p>
        <button>Add to Cart</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
      <Book
        author={fourthBook.author}
        title={fourthBook.title}
        img={fourthBook.img}
      />
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  // alternative: const {img, title, author, chidlren} = props; // when passing in (props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
