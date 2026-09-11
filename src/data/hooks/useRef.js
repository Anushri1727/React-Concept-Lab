const useRefConcept = {
  id: "useRef",
  title: "useRef",
  category: "Hooks",

  definition:
    "useRef is a React Hook that stores a mutable value that persists between renders without causing a re-render when the value changes.",

  syntax: `const ref = useRef(initialValue)`,

  useCases: [
    "Accessing DOM elements",
    "Storing previous values",
    "Keeping mutable values between renders",
    "Managing timers",
  ],

  realLifeExamples: [
    "Automatically focusing an input",
    "Controlling video playback",
    "Storing timer IDs",
    "Tracking previous values",
  ],

  codeExamples: [
    {
      title: "Accessing an Input",
      description:
        "useRef can directly access a DOM element.",
      code: `import { useRef } from "react"

function App() {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Type something"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  )
}

export default App`,
    },

    {
      title: "Persisting a Value",
      description:
        "Changing a ref value does not cause the component to re-render.",
      code: `import { useRef, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0)

  renderCount.current += 1

  return (
    <div>
      <h2>Count: {count}</h2>

      <p>Render count: {renderCount.current}</p>

      <button onClick={() => setCount(count + 1)}>
        Re-render
      </button>
    </div>
  )
}

export default App`,
    },

    {
      title: "Store Previous Value",
      description:
        "A ref can remember a value between renders.",
      code: `import { useEffect, useRef, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const previousCount = useRef()

  useEffect(() => {
    previousCount.current = count
  }, [count])

  return (
    <div>
      <h2>Current: {count}</h2>

      <p>
        Previous: {previousCount.current ?? "None"}
      </p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default App`,
    },
  ],

  keyNotes: [
    "useRef returns an object with a current property.",
    "Changing ref.current does not trigger a re-render.",
    "The ref value persists across renders.",
    "useRef is commonly used for DOM access.",
    "Do not use refs when normal React state is required for rendering.",
  ],

  commonMistakes: [
    {
      mistake: "Expecting a ref update to re-render the UI",
      wrong: `countRef.current = countRef.current + 1`,
      correct:
        "Use useState when changing a value should update the UI.",
    },
    {
      mistake: "Accessing the ref incorrectly",
      wrong: `inputRef.focus()`,
      correct: `inputRef.current.focus()`,
    },
  ],

  interviewQuestions: [
    {
      question: "Does changing useRef cause a re-render?",
      answer: "No. Changing ref.current does not trigger a component re-render.",
    },
    {
      question: "What is the difference between useRef and useState?",
      answer:
        "useState updates cause re-renders, while changing useRef values does not.",
    },
  ],
}

export default useRefConcept