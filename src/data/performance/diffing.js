const diffingConcept = {
  id: "diffing",
  title: "Diffing",
  category: "Performance & Rendering",

  definition:
    "Diffing is a specific step within the reconciliation process. It is the algorithm React uses to compare the new Virtual DOM tree against the old Virtual DOM tree to determine the exact, minimal set of changes (mutations) that need to be made to the real DOM.",

  syntax: "// Internal React algorithm.",

  useCase:
    "Understanding the rules of diffing helps developers structure their component trees and use keys properly to avoid performance bottlenecks caused by full subtree unmounts and remounts.",

  realLifeExamples: [
    "Changing a component from a <div> to a <section>. The diffing algorithm sees the tag changed, and immediately destroys the old div and all its children to build the new section from scratch.",
  ],

  codeExamples: [
    {
      id: "diffing-element-types",
      title: "1. Diffing Rules: Element Types",
      description:
        "Demonstrating how changing the root element type affects diffing.",
      code: `import React, { useState } from 'react';

// Child component that maintains state
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

function DiffingDemo() {
  const [isDiv, setIsDiv] = useState(true);

  return (
    <div>
      <button onClick={() => setIsDiv(!isDiv)}>Toggle Wrapper</button>
      
      {/* 
        If isDiv is true, the tree is: <div> <Counter /> </div>
        If isDiv is false, the tree is: <span> <Counter /> </span>
        
        Because the root element changes (div -> span), the DIFFING algorithm
        destroys the old tree entirely. The Counter is unmounted, its state is lost,
        and a brand new Counter is mounted inside the span.
      */}
      {isDiv ? (
        <div>
          <Counter />
        </div>
      ) : (
        <span>
          <Counter />
        </span>
      )}
    </div>
  );
}

export default DiffingDemo;`,
    }
  ],
  keyNotes: [
    "Rule 1: Elements of Different Types. Whenever the root elements have different types (e.g., <a> to <img>, or <Article> to <Comment>), React tears down the old tree and builds the new one. State is destroyed.",
    "Rule 2: DOM Elements of the Same Type. When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes (e.g., changing className).",
    "Rule 3: Component Elements of the Same Type. When a component updates, the instance stays the same, so state is maintained across renders. React updates the props of the underlying component instance to match the new element.",
    "Rule 4: Recursing on Children. By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time. This is why 'keys' are needed for lists, to optimize this child diffing.",
  ],
  commonMistakes: [
    {
      mistake: "Defining components inside other components",
      wrong: `function Parent() {
  // A new function is created on EVERY render. 
  // Diffing sees a DIFFERENT component type every time and unmounts/remounts it!
  const Child = () => <div>Hello</div>; 
  return <Child />;
}`,
      correct: `// Define outside the parent so the component type reference remains stable.
const Child = () => <div>Hello</div>; 

function Parent() {
  return <Child />;
}`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is the diffing algorithm in React?",
      answer:
        "It's a heuristic O(n) algorithm used during reconciliation to compare the old Virtual DOM with the new Virtual DOM. It relies on assumptions like 'different element types produce different trees' and the use of 'keys' to figure out the minimal set of DOM operations needed.",
    },
    {
      question: "What happens during diffing if an element changes from a <div> to a <header>?",
      answer:
        "React will treat them as completely different trees. It will unmount the <div> and all of its child components (destroying their state), and mount the new <header> and its children from scratch.",
    },
  ],
};

export default diffingConcept;
