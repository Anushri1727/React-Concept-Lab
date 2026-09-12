const propDrillingConcept = {
  id: "prop-drilling",
  title: "Prop Drilling",
  category: "State Management",

  definition:
    "Prop drilling is the process of passing data from one component to another through multiple intermediate components that do not need the data themselves, but only serve as a conduit to pass it down to deeply nested children.",

  syntax: "<Grandparent data={data} /> -> <Parent data={props.data} /> -> <Child data={props.data} />",

  useCase:
    "Prop drilling isn't a feature you intentionally 'use', but rather a pattern that naturally emerges in React. It's perfectly fine for shallow component trees, but becomes a maintainability issue when passing props through many layers.",

  realLifeExamples: [
    "Passing a 'theme' or 'user' object from the root App component down through 5 layers of layout and container components just so a deeply nested Button can use it.",
  ],

  codeExamples: [
    {
      id: "prop-drilling-example",
      title: "1. The Prop Drilling Problem",
      description:
        "In this example, the user data is passed through Layout and Sidebar components, even though neither of them actually uses the data. Only UserProfile needs it.",
      code: `import { useState } from "react"

// Component 4: Needs the data
function UserProfile({ user }) {
  return (
    <div style={{ border: '1px solid blue', padding: '10px' }}>
      <h4>User Profile</h4>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

// Component 3: Doesn't need the data, just passes it down
function Sidebar({ user }) {
  return (
    <div style={{ border: '1px solid green', padding: '10px' }}>
      <h3>Sidebar</h3>
      <UserProfile user={user} />
    </div>
  )
}

// Component 2: Doesn't need the data, just passes it down
function Layout({ user }) {
  return (
    <div style={{ border: '1px solid orange', padding: '10px' }}>
      <h2>Layout</h2>
      <Sidebar user={user} />
    </div>
  )
}

// Component 1 (Root): Holds the state
function App() {
  const [user] = useState({ name: "Alice", role: "Admin" })

  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      <h1>App Component</h1>
      <Layout user={user} />
    </div>
  )
}

export default App`,
    },
  ],
  keyNotes: [
    "Prop drilling makes code harder to maintain because intermediate components become tightly coupled to data they don't even use.",
    "Refactoring becomes difficult: if you need to rename a prop or add a new one, you have to update every component in the chain.",
    "Component composition (passing components as children) is often a simpler solution to prop drilling than reaching for state management libraries.",
    "For truly global data (like themes or authenticated users), the Context API or state management libraries (Redux, Zustand) are the standard solutions to bypass prop drilling.",
  ],
  commonMistakes: [
    {
      mistake: "Immediately using Context or Redux to avoid minor prop drilling",
      wrong: `// Using Context to pass a prop down just one or two levels
// is usually overkill and makes components harder to reuse.`,
      correct: `// Passing props 1-3 levels deep is completely normal React architecture.
// Only reach for other solutions when it becomes a tangible pain point.`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is prop drilling?",
      answer:
        "Prop drilling is the process of passing props through intermediate components that do not need the data, solely to reach a deeply nested component that does.",
    },
    {
      question: "Why is prop drilling considered a problem?",
      answer:
        "It leads to verbose code, makes components harder to reuse, and makes refactoring painful because any change to the data structure requires updating every component in the chain.",
    },
    {
      question: "How can you solve prop drilling?",
      answer:
        "Solutions include: 1) Component Composition (passing elements via the 'children' prop), 2) Context API, or 3) State Management libraries like Redux or Zustand.",
    },
  ],
};

export default propDrillingConcept;
