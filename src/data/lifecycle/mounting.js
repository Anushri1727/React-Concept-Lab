const mountingConcept = {
  id: "mounting",
  title: "Mounting",
  category: "Lifecycle",

  definition:
    "Mounting is the phase in the React component lifecycle when a component is being created and inserted into the DOM for the first time.",

  syntax: "useEffect(() => { /* setup code */ }, []) // functional equivalent of componentDidMount",

  useCase:
    "Use mounting lifecycle methods or hooks to initialize state, perform API calls, set up subscriptions, or interact with the DOM as soon as the component renders.",

  realLifeExamples: [
    "Fetching initial data from an API to display a list of users.",
    "Setting up a WebSocket connection when a chat component opens.",
    "Starting a timer or interval when a stopwatch component appears.",
    "Focusing an input field automatically when a modal opens.",
  ],

  codeExamples: [
    {
      id: "component-did-mount-class",
      title: "1. Class Component: componentDidMount",
      description:
        "In class components, the componentDidMount method runs once immediately after the component is inserted into the DOM.",
      code: `import React, { Component } from "react"

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount() {
    // This runs once after the initial render
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )
  }
}

export default UserList`,
    },
    {
      id: "use-effect-mount",
      title: "2. Functional Component: useEffect (Mounting)",
      description:
        "In functional components, useEffect with an empty dependency array [] acts like componentDidMount. It runs exactly once after the initial render.",

      demoType: "basic",

      code: `import { useState, useEffect } from "react"

function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // This runs once after the initial render
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []) // Empty dependency array means it only runs on mount

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList`,
    },
  ],
  keyNotes: [
    "Mounting happens only once in the lifecycle of a component instance.",
    "The constructor (in class components) is the very first method called during mounting.",
    "The render method is called next to generate the UI.",
    "Finally, componentDidMount (class) or useEffect with [] (functional) is called after the DOM is updated.",
    "It is the best place to make network requests or initialize third-party libraries that require DOM access.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting the dependency array in useEffect",
      wrong: `useEffect(() => {
  fetchData()
}) // Runs on EVERY render, potentially causing infinite loops`,
      correct: `useEffect(() => {
  fetchData()
}, []) // Runs ONLY on mount`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is the mounting phase in React?",
      answer:
        "The mounting phase is when a React component is created and inserted into the DOM for the first time.",
    },
    {
      question: "Which lifecycle method corresponds to mounting in class components?",
      answer:
        "componentDidMount is the primary lifecycle method that runs after the component has been mounted.",
    },
    {
      question: "How do you achieve the equivalent of componentDidMount in a functional component?",
      answer:
        "By using the useEffect hook with an empty dependency array ([]).",
    },
    {
      question: "Why should API calls be made in componentDidMount (or useEffect on mount) instead of the constructor?",
      answer:
        "Making API calls in the constructor can block rendering and cause side effects before the component is even in the DOM. Waiting until the component is mounted ensures the DOM is ready and the UI can be updated with the fetched data.",
    },
  ],
};

export default mountingConcept;
