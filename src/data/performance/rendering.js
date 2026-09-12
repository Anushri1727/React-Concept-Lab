const renderingConcept = {
  id: "rendering",
  title: "Rendering",
  category: "Performance & Rendering",

  definition:
    "Rendering in React is the process where React calls your components (which are functions) to figure out what the UI should look like for the current state and props. It returns a description of the UI (Virtual DOM elements).",

  syntax: "function Component() { /* code here executes during render */ return <div>UI</div>; }",

  useCase:
    "Understanding the rendering phase is critical for performance tuning. A common misconception is that 'rendering' means updating the screen (painting). In React, 'rendering' just means calling the function. The actual DOM update (commit phase) only happens if the rendered output is different from the previous one.",

  realLifeExamples: [
    "A parent component's state changes. React 'renders' the parent, and by default, 'renders' all of its children to see if they need to update the DOM.",
  ],

  codeExamples: [
    {
      id: "render-phases",
      title: "1. The Render and Commit Phases",
      description:
        "Understanding that a component rendering does NOT mean the DOM is updated.",
      code: `import React, { useState } from 'react';

function Child() {
  // This log happens during the RENDER phase.
  console.log("Child rendered! (Function was called)");
  return <div>I am the child</div>;
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      {/* 
        Every time you click Increment, Parent's state changes.
        React renders Parent.
        Because Parent rendered, React ALSO renders Child (calls the function).
        However, because Child returns the EXACT same Virtual DOM <div>I am the child</div>,
        React does NOT touch the Real DOM for the child during the COMMIT phase.
      */}
      <Child />
    </div>
  );
}

export default Parent;`,
    }
  ],
  keyNotes: [
    "Triggering a render (via state change) -> Rendering phase (calling components to get VDOM) -> Reconciliation phase (diffing VDOMs) -> Commit phase (updating Real DOM).",
    "A component will re-render if: 1) Its state changes, 2) Its parent re-renders, 3) A context it consumes changes.",
    "Re-rendering a component is usually very fast because it's just calling a JavaScript function. The expensive part is the Commit phase (DOM manipulation).",
    "You can prevent unnecessary renders of child components using React.memo() when their props haven't changed.",
  ],
  commonMistakes: [
    {
      mistake: "Equating React Rendering with Browser Painting",
      wrong: "Thinking that if console.log inside a component fires, the browser has redrawn that element on the screen.",
      correct: "React Rendering is just calculating the Virtual DOM. The browser only Paints if React decides to Commit changes to the Real DOM based on those calculations.",
    },
  ],

  interviewQuestions: [
    {
      question: "What causes a React component to re-render?",
      answer:
        "The three primary triggers are: 1) A change in the component's internal state. 2) A re-render of its parent component (regardless of whether props changed). 3) A change in a Context value that the component is subscribed to.",
    },
    {
      question: "What is the difference between the Render phase and the Commit phase?",
      answer:
        "The Render phase is pure and involves calling the component functions to generate a new Virtual DOM tree. The Commit phase takes the differences found during reconciliation and applies them to the actual browser DOM. The Render phase can be interrupted by Fiber, but the Commit phase is always synchronous.",
    },
  ],
};

export default renderingConcept;
