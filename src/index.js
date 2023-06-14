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
      />
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

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
