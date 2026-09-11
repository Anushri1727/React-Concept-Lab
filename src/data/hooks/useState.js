const useStateConcept = {
  id: "useState",
  title: "useState",
  category: "Hooks",

  definition:
    "useState is a React Hook that allows a functional component to create and manage local state.",

  syntax: "const [state, setState] = useState(initialValue)",

  useCase:
    "Use useState when a component needs to remember and update information that changes over time.",

  realLifeExamples: [
    "Counter — store the current count.",
    "Login form — store email and password values.",
    "Shopping cart — store selected products or quantity.",
    "Modal — store whether the modal is open or closed.",
    "Search box — store the current search text.",
  ],

  codeExamples: [
    {
      id: "counter",
      title: "1. Basic Counter",
      description:
        "The simplest useState example. State starts at 0 and changes when the button is clicked.",
      code: `import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter`,
    },
    {
      id: "toggle",
      title: "2. Boolean State / Toggle",
      description:
        "useState can store boolean values. This is commonly used for menus, modals, dropdowns, and show/hide functionality.",

      demoType: "toggle",

      code: `import { useState } from "react"

function Toggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <p>
        Status: {isOpen ? "Open" : "Closed"}
      </p>

      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
    </div>
  )
}

export default Toggle`,
    },

    {
      id: "input",
      title: "3. Input State",
      description:
        "useState can store values entered by the user. This is the foundation of controlled inputs in React.",

      demoType: "input",

      code: `import { useState } from "react"

function InputExample() {
  const [name, setName] = useState("")

  return (
    <div>
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
        placeholder="Enter your name"
      />

      <p>Hello {name}</p>
    </div>
  )
}

export default InputExample`,
    },
    {
      id: "object-state",
      title: "4. Object State",
      description:
        "When state contains an object, create a new object when updating it instead of directly modifying the existing state.",

      demoType: "object",

      code: `import { useState } from "react"

function UserProfile() {
  const [user, setUser] = useState({
    name: "Anushri",
    age: 25
  })

  const increaseAge = () => {
    setUser({
      ...user,
      age: user.age + 1
    })
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button onClick={increaseAge}>
        Increase Age
      </button>
    </div>
  )
}

export default UserProfile`,
    },

    {
      id: "array-state",
      title: "5. Array State",
      description:
        "useState can store arrays. Use a new array when adding or removing items so React can detect the state update.",

      demoType: "array",

      code: `import { useState } from "react"

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([
      ...todos,
      "Learn React"
    ])
  }

  return (
    <div>
      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList`,
    },

    {
      id: "functional-update",
      title: "6. Functional State Update",
      description:
        "When the new state depends on the previous state, use the functional updater form. This is especially important when multiple updates happen together.",

      demoType: "functional",

      code: `import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  const increaseThreeTimes = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={increaseThreeTimes}>
        +3
      </button>
    </div>
  )
}

export default Counter`,
    },

    {
      id: "multiple-state",
      title: "7. Multiple State Variables",
      description:
        "A component can use useState multiple times to manage different pieces of state independently.",

      demoType: "multiple",

      code: `import { useState } from "react"

function Form() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  return (
    <div>
      <input
        value={name}
        onChange={event =>
          setName(event.target.value)
        }
        placeholder="Name"
      />

      <input
        value={age}
        onChange={event =>
          setAge(event.target.value)
        }
        placeholder="Age"
      />

      <p>
        {name} - {age}
      </p>
    </div>
  )
}

export default Form`,
    },
  ],
  keyNotes: [
    "useState can be used only inside a React function component or a custom Hook.",
    "The first value returned by useState is the current state.",
    "The second value is the setter function used to update the state.",
    "Calling the setter schedules a re-render.",
    "Do not directly mutate objects or arrays stored in state.",
    "Use the functional updater when the next state depends on the previous state.",
    "A component can have multiple useState calls.",
    "The initial value is used when the state is initialized.",
    "State updates may be batched by React.",
    "Updating state does not immediately change the state variable inside the currently executing function.",
  ],
  commonMistakes: [
    {
      mistake: "Directly modifying state",
      wrong: `user.age = user.age + 1`,
      correct: `setUser({
  ...user,
  age: user.age + 1
})`,
    },

    {
      mistake: "Using the current state for repeated dependent updates",
      wrong: `setCount(count + 1)
setCount(count + 1)
setCount(count + 1)`,
      correct: `setCount(prev => prev + 1)
setCount(prev => prev + 1)
setCount(prev => prev + 1)`,
    },

    {
      mistake: "Calling useState outside a component",
      wrong: `const [count, setCount] = useState(0)

function App() {
  // ...
}`,
      correct: `function App() {
  const [count, setCount] = useState(0)
}`,
    },
  ],

  interviewQuestions: [
     {
      question: "What is useState in React?",
      answer:
        "useState is a React Hook that allows functional components to create and manage state."
    },

    {
      question: "What does useState return?",
      answer:
        "It returns an array containing the current state value and a setter function."
    },

    {
      question: "Why does updating state cause a re-render?",
      answer:
        "Calling the setter schedules a state update. React then renders the component again so the UI can reflect the updated state."
    },

    {
      question: "What is the difference between setCount(count + 1) and setCount(prev => prev + 1)?",
      answer:
        "The functional updater receives the previous state value and is preferred when the next state depends on the previous state, especially for multiple updates."
    },

    {
      question: "Can we store objects and arrays in useState?",
      answer:
        "Yes. useState can store any JavaScript value, including objects and arrays. When updating them, create a new object or array instead of mutating the existing value."
    },

    {
      question: "Can we use multiple useState Hooks in one component?",
      answer:
        "Yes. A component can use multiple useState calls to manage separate pieces of state."
    }
  ],
};

export default useStateConcept;
