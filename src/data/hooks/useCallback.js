const useCallbackConcept = {
  id: "useCallback",
  title: "useCallback",
  category: "Hooks",

  definition:
    "useCallback is a React Hook that memoizes a function so the same function reference can be reused between renders.",

  syntax: `const memoizedFunction = useCallback(() => {
  // logic
}, [dependencies])`,

  useCases: [
    "Preventing unnecessary child re-renders",
    "Passing callbacks to memoized components",
    "Optimizing function references",
  ],

  realLifeExamples: [
    "Passing event handlers to React.memo components",
    "Large lists with reusable callbacks",
  ],

  codeExamples: [
    {
      title: "Basic useCallback",
      description:
        "useCallback keeps the function reference stable until its dependency changes.",
      code: `import { useCallback, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log("Button clicked")
  }, [])

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default App`,
    },

    {
      title: "useCallback with Dependency",
      description:
        "The function is recreated when its dependency changes.",
      code: `import { useCallback, useState } from "react"

function App() {
  const [name, setName] = useState("Anushri")

  const greet = useCallback(() => {
    alert("Hello " + name)
  }, [name])

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={greet}>
        Greet
      </button>
    </div>
  )
}

export default App`,
    },
  ],

  keyNotes: [
    "useCallback memoizes a function reference.",
    "It does not memoize the result of a function.",
    "Dependencies determine when the function is recreated.",
    "It is commonly used with React.memo.",
    "Do not use it unnecessarily.",
  ],

  commonMistakes: [
    {
      mistake: "Confusing useMemo and useCallback",
      wrong: `useCallback(() => expensiveCalculation(), [])`,
      correct:
        "useMemo memoizes a value; useCallback memoizes a function.",
    },
  ],

  interviewQuestions: [
    {
      question: "What does useCallback return?",
      answer: "It returns a memoized function.",
    },
    {
      question: "Why is useCallback useful with React.memo?",
      answer:
        "It can keep a callback reference stable so a memoized child does not re-render unnecessarily because of a newly created function reference.",
    },
  ],
}

export default useCallbackConcept