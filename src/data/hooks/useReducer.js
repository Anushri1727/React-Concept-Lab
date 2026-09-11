const useReducerConcept = {
  id: "useReducer",
  title: "useReducer",
  category: "Hooks",

  definition:
    "useReducer is a React Hook used to manage complex state logic using a reducer function and dispatched actions.",

  syntax: `const [state, dispatch] = useReducer(reducer, initialState)`,

  useCases: [
    "Complex state logic",
    "Multiple related state updates",
    "Forms with many fields",
    "Shopping carts",
  ],

  realLifeExamples: [
    "Shopping cart quantity and item management",
    "Multi-step forms",
    "Authentication state",
  ],

  codeExamples: [
    {
      title: "Basic Counter",
      description: "Manage counter state using reducer and dispatch.",
      code: `import { useReducer } from "react"

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 }
  }

  if (action.type === "decrement") {
    return { count: state.count - 1 }
  }

  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  )
}

export default App`,
    },

    {
      title: "Reducer with Action Payload",
      description:
        "Actions can carry additional information through a payload.",
      code: `import { useReducer } from "react"

function reducer(state, action) {
  if (action.type === "add") {
    return {
      count: state.count + action.payload,
    }
  }

  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({
        type: "add",
        payload: 5,
      })}>
        Add 5
      </button>
    </div>
  )
}

export default App`,
    },
  ],

  keyNotes: [
    "useReducer is useful when state logic becomes complex.",
    "The reducer function receives state and action.",
    "dispatch() sends an action to the reducer.",
    "The reducer must return the next state.",
    "Reducers should be pure functions.",
  ],

  commonMistakes: [
    {
      mistake: "Mutating state directly",
      wrong: `state.count = state.count + 1
return state`,
      correct: `return {
  count: state.count + 1
}`,
    },
  ],

  interviewQuestions: [
    {
      question: "When would you use useReducer instead of useState?",
      answer:
        "When state logic is complex, involves multiple related values, or has many different update actions.",
    },
    {
      question: "What does dispatch do?",
      answer:
        "dispatch sends an action to the reducer so the reducer can calculate the next state.",
    },
  ],
}

export default useReducerConcept