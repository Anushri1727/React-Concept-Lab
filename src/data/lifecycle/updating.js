const updatingConcept = {
  id: "updating",
  title: "Updating",
  category: "Lifecycle",

  definition:
    "Updating is the phase in the React component lifecycle when a component is re-rendered as a result of changes to either its props or state.",

  syntax: "useEffect(() => { /* setup code */ }, [dependencies]) // functional equivalent of componentDidUpdate",

  useCase:
    "Use updating lifecycle methods or hooks to perform side effects in response to data changes, such as fetching new data when a user ID prop changes, or manually updating the DOM.",

  realLifeExamples: [
    "Fetching a new user profile when the selected user ID changes.",
    "Updating the document title to reflect a new unread message count.",
    "Re-calculating a complex value when an input parameter changes.",
    "Auto-saving form data to an API after a user stops typing.",
  ],

  codeExamples: [
    {
      id: "component-did-update-class",
      title: "1. Class Component: componentDidUpdate",
      description:
        "In class components, componentDidUpdate runs immediately after updating occurs. It is not called for the initial render.",
      code: `import React, { Component } from "react"

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { userData: null }
  }

  fetchUser(id) {
    fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
      .then(res => res.json())
      .then(data => this.setState({ userData: data }))
  }

  componentDidMount() {
    this.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userId !== prevProps.userId) {
      this.fetchUser(this.props.userId)
    }
  }

  render() {
    if (!this.state.userData) return <div>Loading...</div>
    return <div>User: {this.state.userData.name}</div>
  }
}

export default UserProfile`,
    },
    {
      id: "use-effect-update",
      title: "2. Functional Component: useEffect (Updating)",
      description:
        "In functional components, useEffect with a dependency array acts like componentDidUpdate. It runs whenever the dependencies change (as well as on the initial render).",

      demoType: "basic",

      code: `import { useState, useEffect } from "react"

function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // This runs on mount AND whenever userId changes
    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [userId]) // The effect depends on userId

  if (!userData) return <div>Loading...</div>
  return <div>User: {userData.name}</div>
}

export default UserProfile`,
    },
  ],
  keyNotes: [
    "An update can be caused by changes to props, state, or calling forceUpdate (in classes).",
    "In classes, always compare prevProps or prevState with current props/state inside componentDidUpdate to avoid infinite loops.",
    "In functional components, useEffect runs after every render by default, but providing a dependency array restricts it to run only when those dependencies change.",
    "Returning false from shouldComponentUpdate or using React.memo can prevent unnecessary updates and re-renders.",
  ],
  commonMistakes: [
    {
      mistake: "Missing condition in componentDidUpdate causing infinite loops",
      wrong: `componentDidUpdate() {
  // Sets state, causing a re-render, calling componentDidUpdate again...
  this.setState({ count: this.state.count + 1 })
}`,
      correct: `componentDidUpdate(prevProps) {
  if (this.props.id !== prevProps.id) {
    this.setState({ count: 0 })
  }
}`,
    },
    {
      mistake: "Omitting dependencies in useEffect",
      wrong: `useEffect(() => {
  fetchData(userId)
}, []) // userId is used but not in dependency array. It will only use the initial userId.`,
      correct: `useEffect(() => {
  fetchData(userId)
}, [userId])`,
    },
  ],

  interviewQuestions: [
    {
      question: "What causes a component to enter the updating phase?",
      answer:
        "A component updates when its state changes, when it receives new props from a parent component, or if a context value it consumes changes.",
    },
    {
      question: "Why must you compare prevProps to this.props in componentDidUpdate?",
      answer:
        "To avoid infinite loops. If you update the state based on a prop change inside componentDidUpdate without checking if the prop actually changed, the state update will trigger another render, which triggers componentDidUpdate again.",
    },
    {
      question: "How do you control when a useEffect hook runs for updates?",
      answer:
        "By providing a dependency array as the second argument. The effect will only run if one of the values in the dependency array has changed since the last render.",
    },
  ],
};

export default updatingConcept;
