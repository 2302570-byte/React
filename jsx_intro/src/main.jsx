import { createRoot } from 'react-dom/client'

const myElement = (
  <>
    <h1>React is {5 + 5} times better with JSX </h1>;
  </>
);

const myParagraph = (
  <>
    <p>I am a paragraph</p>
    <p>I am a paragraph as well</p>
  </>
);

createRoot(document.getElementById('root')).render(
  <>
  myElement
  myParagraph
  </>
);