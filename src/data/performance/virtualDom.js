const virtualDomConcept = {
  id: "virtual-dom",
  title: "Virtual DOM",
  category: "Performance & Rendering",

  definition:
    "The Virtual DOM (VDOM) is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM. This process is called reconciliation.",

  syntax: "const virtualNode = React.createElement('div', { id: 'container' }, 'Hello');",

  useCase:
    "You don't interact with the Virtual DOM directly; React does it for you. It's the underlying architecture that allows React to be performant despite frequent UI updates, by minimizing expensive operations on the actual browser DOM.",

  realLifeExamples: [
    "Updating a single counter on a page with 10,000 items. Instead of redrawing the entire page, React compares the Virtual DOM to the previous version and only updates the specific text node that changed in the real DOM.",
  ],

  codeExamples: [
    {
      id: "vdom-vs-real-dom",
      title: "1. Mental Model: Real DOM vs Virtual DOM",
      description:
        "When you write JSX, you are actually creating Virtual DOM objects, not real HTML elements. React uses these objects to figure out what the Real DOM should look like.",
      code: `import React from 'react';

// 1. WHAT YOU WRITE (JSX)
const element = <h1 className="title">Hello World</h1>;

// 2. WHAT BABEL COMPILES IT TO (Virtual DOM object creation)
const vdomObject = React.createElement(
  'h1',
  { className: 'title' },
  'Hello World'
);

// 3. WHAT IT LOOKS LIKE IN MEMORY (The Virtual Node)
const conceptualVNode = {
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello World'
  }
};

// 4. THE MAGIC
// React compares this lightweight JS object against the previous one.
// If it's new or changed, React issues the commands to update the REAL DOM:
// document.createElement('h1');
// element.className = 'title';
// element.textContent = 'Hello World';`,
    }
  ],
  keyNotes: [
    "The Real DOM is a tree structure representing the HTML document. Manipulating it is slow and expensive for the browser.",
    "The Virtual DOM is just a lightweight JavaScript object that mimics the Real DOM structure.",
    "Updating a JavaScript object (VDOM) is extremely fast compared to updating the Real DOM.",
    "React uses the Virtual DOM to batch updates together and compute the minimal number of changes required to update the Real DOM.",
  ],
  commonMistakes: [
    {
      mistake: "Thinking JSX directly produces HTML strings",
      wrong: "Assuming `const a = <div>Hi</div>` evaluates to a string `'<div>Hi</div>'`.",
      correct: "JSX evaluates to JavaScript objects (React Elements) that represent the intended UI. These objects constitute the Virtual DOM.",
    },
  ],

  interviewQuestions: [
    {
      question: "What is the Virtual DOM?",
      answer:
        "It's a lightweight JavaScript representation of the actual DOM. React keeps a copy of the UI in memory as objects, which is much faster to manipulate than the actual browser DOM.",
    },
    {
      question: "Why is the Virtual DOM faster than the Real DOM?",
      answer:
        "The Virtual DOM isn't inherently 'faster' than the Real DOM (it's actually extra work). However, it makes updating the UI faster because it prevents unnecessary, expensive repaints and reflows of the Real DOM by calculating the minimum required changes before touching the browser's API.",
    },
  ],
};

export default virtualDomConcept;
