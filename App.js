// here we will write our react code
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  // parent is a object and just a react element
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "i am a h1 tag in nested div")
  )
);

// this is a object - we are creating a react element at the end
const heading = React.createElement(
  "h1",
  { id: "heading" }, // attributes
  "Hello World from React!" // this is the children it will go inside h1 tag .
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// React Element is nothing but a normal js object it has something known as props - props are children and the the attributes that we have passed to the react element .

// react element is nothing but a normal js object and this becomes an html element that will be rendered on the browser webpage .
