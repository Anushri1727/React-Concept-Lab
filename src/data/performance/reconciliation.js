const reconciliationConcept = {
  id: "reconciliation",
  title: "Reconciliation",
  category: "Performance & Rendering",

  definition:
    "Reconciliation is the process by which React syncs the Virtual DOM with the Real DOM. It's the algorithmic mechanism React uses to figure out exactly what parts of the UI need to change when a component's state or props are updated.",

  syntax: "// Handled entirely internally by React. No syntax.",

  useCase:
    "You don't 'use' reconciliation; it's the engine running under the hood. However, you must understand it to write performant React code, primarily by providing stable 'key' props to lists so the reconciler can do its job efficiently.",

  realLifeExamples: [
    "A user sorts a list of 100 products. Instead of destroying 100 HTML elements and recreating them, the reconciler sees that the elements just moved and reorganizes the existing DOM nodes.",
  ],

  codeExamples: [
    {
      id: "reconciliation-keys",
      title: "1. Helping the Reconciler with Keys",
      description:
        "The most direct interaction developers have with the reconciliation process is using the 'key' prop. Keys help React identify which items have changed, been added, or been removed in lists.",
      code: `import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Understand Virtual DOM' },
  ]);

  const reverseList = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseList}>Reverse</button>
      <ul>
        {todos.map(todo => (
          // The 'key' is crucial here!
          // Without it, React assumes the items changed in-place and mutates them.
          // WITH it, React knows item 1 and 2 just swapped positions in the DOM.
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
    }
  ],
  keyNotes: [
    "React's reconciliation algorithm is an O(n) heuristic algorithm based on two assumptions: 1) Two elements of different types will produce different trees. 2) The developer can hint at which child elements may be stable across different renders with a key prop.",
    "If the root element type changes (e.g., from a <div> to a <span>), React will tear down the old tree completely and build the new tree from scratch.",
    "If the element type remains the same, React compares the attributes (props), updates the changed attributes on the underlying DOM node, and then recurses on the children.",
  ],
  commonMistakes: [
    {
      mistake: "Using array index as a key for dynamic lists",
      wrong: `<li key={index}>{item.text}</li> // If the list is reordered, index 0 is still index 0. React gets confused and might update the wrong element.`,
      correct: `<li key={item.uniqueId}>{item.text}</li> // Always use a stable, unique identifier from your data.`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is reconciliation in React?",
      answer:
        "Reconciliation is the algorithm React uses to compare the new Virtual DOM tree with the previous one, calculate the differences (diffing), and apply those differences to the Real DOM efficiently.",
    },
    {
      question: "Why are keys important in lists?",
      answer:
        "Keys help React's reconciliation algorithm identify which items in a list have changed, been added, or been removed. Without stable keys, React might unnecessarily destroy and recreate DOM elements, or worse, map state to the wrong elements during a reorder.",
    },
  ],
};

export default reconciliationConcept;
