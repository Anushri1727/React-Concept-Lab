const propsStateConcept = {
  id: "props-state",
  title: "Props vs State",
  category: "State Management",

  definition:
    "Props (short for properties) and State are both plain JavaScript objects that hold information influencing the output of render. However, they are fundamentally different: props get passed to the component (similar to function parameters), whereas state is managed within the component (similar to variables declared within a function).",

  syntax: "function Component(props) { const [state, setState] = useState() }",

  useCase:
    "Use Props to pass data and event handlers down the component tree. Use State to hold data that may change over time and affect what is rendered on the screen within a specific component.",

  realLifeExamples: [
    "A Button component receives its color and text as Props from its parent, but keeps track of whether it is currently being hovered over using State.",
    "A Profile component receives user data as Props, but manages the edit mode toggle using State.",
  ],

  codeExamples: [
    {
      id: "props-vs-state-example",
      title: "1. Props and State working together",
      description:
        "This example shows a parent component passing props down, and a child component managing its own internal state.",
      code: `import { useState } from "react"

// Child Component receives 'name' and 'initialCount' as PROPS
function Counter({ name, initialCount }) {
  // 'count' is internal STATE managed by this component
  const [count, setCount] = useState(initialCount)

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{name}'s Counter</h3>
      <p>Current Count: {count}</p>
      
      {/* Updating STATE triggers a re-render of this component */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

// Parent Component
function App() {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Passing PROPS to the child components */}
      <Counter name="User A" initialCount={0} />
      <Counter name="User B" initialCount={10} />
    </div>
  )
}

export default App`,
    },
  ],
  keyNotes: [
    "Props are Read-Only (immutable) for the component receiving them. A component must never modify its own props.",
    "State is Mutable, but must only be updated using the setter function provided by useState (or this.setState in classes).",
    "Changes to either Props or State will cause the component to re-render.",
    "Data flows one way (downwards) in React. State is often lifted up to a common parent if multiple siblings need to share it, and then passed down as props.",
  ],
  commonMistakes: [
    {
      mistake: "Attempting to modify props directly",
      wrong: `function UserProfile(props) {
  props.name = "New Name" // Error: Props are read-only
  return <div>{props.name}</div>
}`,
      correct: `function UserProfile(props) {
  // If you need to change it, it should be state, 
  // or a callback prop should be called to ask the parent to change it.
  return <div>{props.name}</div>
}`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is the difference between state and props?",
      answer:
        "Props get passed to the component from its parent and are read-only. State is managed within the component itself and can be updated using a setter function.",
    },
    {
      question: "Can a component modify its own props?",
      answer:
        "No. Props are immutable from the perspective of the receiving component. If the data needs to change, it must be updated in the parent's state and passed down again.",
    },
    {
      question: "Why should we avoid copying props into state?",
      answer:
        "Copying props into state (e.g., useState(props.value)) creates two sources of truth. If the parent's prop changes, the child's state will not automatically update, leading to bugs. It is better to just use the prop directly.",
    },
  ],
};

export default propsStateConcept;
