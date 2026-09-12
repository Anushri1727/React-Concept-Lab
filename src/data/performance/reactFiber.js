const reactFiberConcept = {
  id: "react-fiber",
  title: "React Fiber",
  category: "Performance & Rendering",

  definition:
    "React Fiber is the core reconciliation algorithm in React (introduced in React 16). It is a complete rewrite of the previous 'Stack' reconciler. Its primary goal is to enable incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.",

  syntax: "// Handled entirely internally by React.",

  useCase:
    "You don't interact with Fiber directly. It allows React to prioritize updates (e.g., user input animations have higher priority than fetching data in the background) to keep the application feeling smooth and responsive without blocking the main thread.",

  realLifeExamples: [
    "Typing in a text input (high priority) while a large list of 5000 items is being rendered below it (low priority). Fiber ensures the typing doesn't lag while the list renders.",
    "React's 'Concurrent Mode' features like Suspense and startTransition are only possible because of the Fiber architecture.",
  ],

  codeExamples: [
    {
      id: "fiber-concurrent-features",
      title: "1. Fiber enables Concurrent Features",
      description:
        "Because Fiber can pause and resume rendering work, features like useTransition allow us to mark certain state updates as 'non-urgent'.",
      code: `import React, { useState, useTransition } from 'react';

function FilterableList({ names }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  
  // useTransition relies on Fiber's ability to yield to the browser
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // 1. High priority update: Update the input field immediately
    setQuery(e.target.value);

    // 2. Low priority update: Filtering the large list can take time.
    // We tell Fiber this is a transition, so it can be interrupted if the user types again.
    startTransition(() => {
      setFilter(e.target.value);
    });
  };

  const filteredNames = names.filter(n => n.includes(filter));

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {isPending && <p>Updating list...</p>}
      <ul>
        {filteredNames.map(name => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}

export default FilterableList;`,
    }
  ],
  keyNotes: [
    "The old reconciler was synchronous (Stack). Once it started updating the tree, it couldn't stop until it was finished. If the tree was huge, it dropped frames and caused lag.",
    "Fiber is asynchronous and interruptible. It works in units of work (fibers). After completing a unit, it checks if there is more important work to do (like handling user input or browser animations). If so, it pauses the current render, handles the important work, and then comes back.",
    "A 'Fiber' is actually a JavaScript object that contains information about a component, its input, and its output. There is a 1-to-1 relationship between a React Element and a Fiber node.",
  ],
  commonMistakes: [
    {
      mistake: "Confusing Fiber with Virtual DOM",
      wrong: "Believing Fiber is just a new name for the Virtual DOM.",
      correct: "The Virtual DOM is the concept/model. Fiber is the specific architecture/algorithm (the engine) that implements the reconciliation of that Virtual DOM.",
    },
  ],

  interviewQuestions: [
    {
      question: "What is React Fiber?",
      answer:
        "React Fiber is the reconciliation engine introduced in React 16. It was rewritten to support incremental rendering, meaning it can pause, abort, or reuse rendering work. This allows React to prioritize urgent updates like user interactions over non-urgent updates, preventing the main thread from being blocked.",
    },
    {
      question: "How does Fiber differ from the old Stack reconciler?",
      answer:
        "The Stack reconciler processed the component tree synchronously and recursively. Once it started, it couldn't be stopped, causing lag on large trees. Fiber breaks work into units, processes them in a loop, and can yield control back to the browser between units to keep the app responsive.",
    },
  ],
};

export default reactFiberConcept;
