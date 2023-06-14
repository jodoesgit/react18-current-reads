import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <h2 id="test" className="gotEmmet">
//       Got Emmet working!
//     </h2>
//   );
// }

// function Greeting() {
//   return React.createElement("h2", {}, "Hello, World!");
// }

// function Greeting() {
//   return (
//     <div>
//       <h1>Testing</h1>
//       <h2>This is a test</h2>
//       <p>We're rolling along.</p>
//       <ul>
//         <li>
//           <a href="#">List Item</a>
//         </li>
//         <li>
//           <a href="#">List Item</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h2>Lala - React Fragment</h2>
      </div>
      <div>
        <h4>Woah! Multi-divs!</h4>
      </div>
      <div>
        <p>tabindex in html is tabIndex (camel case) in JSX.</p>
        <p>className is utilized over class.</p>
        <p>
          We must self close elements in React /> otherwise they do not work.
        </p>
        <p>You should use parenthesizes as they allow multi-line content.</p>
      </div>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
