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
	return (
		<section className="booklist">
			<EventExamples />
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
};

const EventExamples = () => {
	const handleFormInput = (e) => {
		// console.log(e);
		// console.log(e.target);
		// console.log(e.target.name);
		// console.log(e.target.value);
		console.log("handle form input");
	};

	const handleButtonClick = () => {
		alert("handle button click");
	};
	const handleFormSubmission = (e) => {
		e.preventDefault();
		console.log("form submitted");
	};
	return (
		<section>
			{/* <form onSubmit={handleFormSubmission}> */}
			<form>
				<h2>Form</h2>
				<input
					type="text"
					name="product"
					onChange={handleFormInput}
					style={{ margin: "1rem 0" }}
				/>
				<button type="submit" onClick={handleFormSubmission}>
					Submit
				</button>
				<div>
					<button onClick={handleButtonClick}>Add to Cart</button>
				</div>
			</form>
		</section>
	);
};

const Book = ({ img, title, author }) => {
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
