const performanceOptimizationConcept = {
  id: "performance-optimization",
  title: "Performance Optimization",
  category: "Production & Best Practices",

  definition:
    "Performance optimization in React involves techniques to reduce the number of unnecessary renders, minimize bundle sizes, and ensure the application remains highly responsive to user input.",

  syntax: "const MemoizedComponent = React.memo(MyComponent); const memoizedValue = useMemo(() => compute(), [deps]);",

  useCase:
    "Apply performance optimizations only when necessary (measure first!). Use them when a component renders too often and causes noticeable lag, or when the initial load time is too slow.",

  realLifeExamples: [
    "Preventing a large data table from re-rendering every time a user types in a completely unrelated search box.",
    "Using React.memo on a complex interactive map component so it only re-renders if its specific coordinate props change.",
  ],

  codeExamples: [
    {
      id: "react-memo-optimization",
      title: "1. Preventing Unnecessary Renders with React.memo",
      description:
        "React.memo is a Higher Order Component that prevents a functional component from re-rendering if its props have not changed.",
      code: `import React, { useState } from 'react';

// 1. Without React.memo, this would re-render every time the parent renders
// 2. With React.memo, it ONLY re-renders if the 'name' prop changes
const ExpensiveGreeting = React.memo(function ExpensiveGreeting({ name }) {
  console.log("ExpensiveGreeting Rendered!");
  // Imagine this component does a lot of heavy lifting
  let startTime = performance.now();
  while (performance.now() - startTime < 100) {
    // Artificial 100ms delay to simulate expensive render
  }
  return <h2>Hello, {name}!</h2>;
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  return (
    <div>
      {/* 
        Clicking 'Increment Count' changes Parent state, causing Parent to render.
        However, because 'name' didn't change, ExpensiveGreeting Skips rendering!
      */}
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      
      <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>
        Change Name
      </button>

      <ExpensiveGreeting name={name} />
    </div>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Optimization is not free. React.memo, useMemo, and useCallback add overhead because React has to do extra work to compare the old and new props/dependencies. Don't use them everywhere by default.",
    "The most impactful performance optimization is usually Architecture: pushing state down the tree, or lifting content up (children prop) to prevent parent state changes from re-rendering the whole tree.",
    "Use React Developer Tools Profiler to measure which components are rendering and taking the most time.",
  ],
  commonMistakes: [
    {
      mistake: "Using React.memo but passing inline objects/functions as props",
      wrong: `<ExpensiveChild style={{ color: 'red' }} /> \n // The {} creates a NEW object reference on every render, defeating React.memo!`,
      correct: `const style = useMemo(() => ({ color: 'red' }), []); \n <ExpensiveChild style={style} />`,
    },
  ],

  interviewQuestions: [
    {
      question: "When should you use useMemo and useCallback?",
      answer:
        "You should use them when passing objects or functions as props to a child component wrapped in React.memo (to maintain referential equality and prevent the child from re-rendering), or when you have a genuinely expensive calculation that you want to avoid repeating on every render.",
    },
    {
      question: "Is it a good idea to wrap every component in React.memo?",
      answer:
        "No. React is already very fast at rendering. The overhead of React.memo doing a shallow comparison of props can sometimes be more expensive than just letting the component render, especially for simple components that render quickly.",
    },
  ],
};

export default performanceOptimizationConcept;
