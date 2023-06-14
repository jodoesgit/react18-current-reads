import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hLWTRrkKv6cnPSmO7n-xowAAAA%26pid%3DApi&f=1&ipt=25250b75e7d0bb32e367899893754d9fdb477c4d5b42507cca2ae3975c7f28f3&ipo=images"
    alt="The Haunting of Hill House"
  />
);
const Title = () => {
  return <h2>The Haunting of Hill House</h2>;
};
const Author = () => {
  return <h4>Shirley Jackson</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
