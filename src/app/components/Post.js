export default function Post({ title, author, content }) {
  //destructs props that are passed from a parent component to a child component.
  // export default allows for the component to be imported with any name.
  return (
    //The JSX <h1>{title}</h1> etc. is how the post gets displayed on the page.
    <div>
      <h1>{title}</h1>
      <h3>By: {author}</h3>
      <p>{content}</p>
    </div>
  );
}

//JSX or javascript XML is not plain JS its a syntax extension for javascript used by React.
// it allows you to write HTML like code directly inside javascript.
// Under the hood, React transforms JSX into React.createElement() calls.

/*

<div>
  <h1>{title}</h1>
  <p>{content}</p>
</div>

is actually converted to:

React.createElement(
"div",
null,
React.createElement("h1", null, title),
React.createElement("p", null, content)
)

*/

// className instead of class
// curly braces {} allows embedding JS expressions inside JSX
// must return a single root element(e.g. <div> wrapping everything)
// can include components as if they were HTML tags e.g. <Post />

// <Post {...post} key={idx} /> looks like HTML but its actually a React component
// title, author, content are JS values passed as props, even though they look like HTML attributes.
// React reads them and makes them available inside the component function.

// JSX + Javascript
// whenever you see {} inside JSX:
// <h1>{title}</hi>
// it means inject this JS value into the HTML-like code.
// This is how JSX mixes Javascript and markup seamlessly.
