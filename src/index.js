import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

// const author = "Shirley Jackson";
// const title = "We Have Always Lived in the Castle";
// const img = require("./img/books/book3.jpg");

const books = [
	{
		author: "Shelby Van Pelt",
		title: "Remarkably Bright Creatures",
		img: require("./img/books/book1.jpg"),
		id: 1,
	},
	{
		author: "Grady Hendrix",
		title: "How to Sell a Haunted House",
		img: require("./img/books/book2.jpg"),
		id: 2,
	},
	{
		author: "Shirley Jackson",
		title: "We Have Always Lived in the Castle",
		img: require("./img/books/book3.jpg"),
		id: 3,
	},
	{
		author: "Min Jin Lee",
		title: "Pachinko",
		img: require("./img/books/book4.jpg"),
		id: 4,
	},
];

const BookList = () => {
	const getBook = (id) => {
		const book = books.find((book) => book.id === id);
		console.log(book);
	};
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book {...book} key={book.id} getBook={getBook} />;
			})}
		</section>
	);
};

const Book = (props) => {
	const { img, title, author, getBook, id } = props;
	const getSingleBook = () => {
		getBook(id);
	};
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<button onClick={() => getBook(id)}>Add to Cart</button>
			<h4>{author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
