const eventsConcept = {
  id: "events",
  title: "Events",
  category: "Testing & Async",

  definition:
    "Handling events in React elements is very similar to handling events on DOM elements, with some syntax differences. React uses Synthetic Events, which are cross-browser wrappers around the browser's native events.",

  syntax: "<button onClick={handleClick}>Click Me</button>",

  useCase:
    "Use event handlers to respond to user interactions (clicks, form submissions, keyboard typing) and trigger state updates or asynchronous operations.",

  realLifeExamples: [
    "onClick: Triggering a form submission or opening a modal.",
    "onChange: Reading the value of a text input as the user types.",
    "onSubmit: Handling the submission of a <form> element and preventing the default browser refresh.",
  ],

  codeExamples: [
    {
      id: "event-handling",
      title: "1. Common React Events",
      description:
        "Examples of onClick, onChange, and onSubmit, along with accessing the Synthetic Event object.",
      demoType: "basic",
      code: `import React, { useState } from 'react';

function EventDemo() {
  const [text, setText] = useState('');

  // 1. onChange Event (Input)
  const handleChange = (event) => {
    // The 'event' object is a React Synthetic Event
    setText(event.target.value);
  };

  // 2. onSubmit Event (Form)
  const handleSubmit = (event) => {
    // Prevent the default browser behavior of refreshing the page
    event.preventDefault();
    alert(\`Submitted: \${text}\`);
  };

  // 3. onClick Event (Button)
  const handleClear = (event) => {
    // You can access native event properties if needed
    console.log("Clicked at coordinates: ", event.clientX, event.clientY);
    setText('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid gray' }}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="Type something..."
        />
        
        <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
      </form>
      
      <br />
      <button onClick={handleClear}>Clear Text</button>
    </div>
  );
}

export default EventDemo;`,
    }
  ],
  keyNotes: [
    "React events are named using camelCase (e.g., onClick instead of onclick).",
    "With JSX you pass a function as the event handler, rather than a string (e.g., onClick={handleClick} instead of onClick='handleClick()').",
    "You cannot return false to prevent default behavior in React. You must call e.preventDefault() explicitly.",
    "React's SyntheticEvent ensures that events behave identically across all browsers.",
  ],
  commonMistakes: [
    {
      mistake: "Invoking the function immediately",
      wrong: `<button onClick={handleClick()}>Click Me</button> // This calls the function immediately during render!`,
      correct: `<button onClick={handleClick}>Click Me</button> // Pass the function reference.
// OR
<button onClick={() => handleClick(id)}>Click Me</button> // If you need to pass arguments.`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is a Synthetic Event in React?",
      answer:
        "A Synthetic Event is a cross-browser wrapper around the browser's native event object. It provides the same API as native events (like stopPropagation and preventDefault) but ensures consistent behavior across all browsers.",
    },
    {
      question: "Why do we bind event handlers or use arrow functions?",
      answer:
        "In class components, standard methods do not bind 'this' automatically, so accessing this.setState inside the handler throws an error. Arrow functions automatically bind 'this' lexically. In functional components, this is not an issue since they don't use 'this'.",
    },
  ],
};

export default eventsConcept;
