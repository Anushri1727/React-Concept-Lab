const unmountingConcept = {
  id: "unmounting",
  title: "Unmounting",
  category: "Lifecycle",

  definition:
    "Unmounting is the final phase of a component's lifecycle. It occurs when a component is removed from the DOM.",

  syntax: "useEffect(() => { return () => { /* cleanup code */ } }, [])",

  useCase:
    "Use unmounting methods or cleanup functions to perform essential cleanup tasks, preventing memory leaks and avoiding errors from updating unmounted components.",

  realLifeExamples: [
    "Invalidating or clearing timers (e.g., clearInterval).",
    "Canceling active network requests.",
    "Removing event listeners added to the window or document.",
    "Cleaning up subscriptions to external data sources (e.g., WebSockets).",
  ],

  codeExamples: [
    {
      id: "component-will-unmount-class",
      title: "1. Class Component: componentWillUnmount",
      description:
        "In class components, componentWillUnmount is called immediately before a component is destroyed. It is used exclusively for cleanup.",
      code: `import React, { Component } from "react"

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { seconds: 0 }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    // Crucial cleanup: Clear the interval when the component is removed
    clearInterval(this.intervalId)
  }

  render() {
    return <div>Seconds elapsed: {this.state.seconds}</div>
  }
}

export default Timer`,
    },
    {
      id: "use-effect-cleanup",
      title: "2. Functional Component: useEffect Cleanup",
      description:
        "In functional components, the function returned from useEffect acts as the cleanup mechanism, running when the component unmounts (or before re-running the effect).",

      demoType: "basic",

      code: `import { useState, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    // Cleanup function: runs on unmount
    return () => {
      clearInterval(intervalId)
    }
  }, []) // Empty array means it runs on mount, cleanup on unmount

  return <div>Seconds elapsed: {seconds}</div>
}

export default Timer`,
    },
  ],
  keyNotes: [
    "Unmounting is the teardown phase of a component.",
    "Never call setState inside componentWillUnmount because the component will never be re-rendered.",
    "Failing to clean up subscriptions or timers often leads to memory leak warnings in React applications.",
    "In useEffect, the cleanup function also runs before the effect runs again (if dependencies change), not just on unmount.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting to clear an interval on unmount",
      wrong: `useEffect(() => {
  setInterval(() => {
    // Do something
  }, 1000)
}, []) // Interval keeps running forever even if component is gone`,
      correct: `useEffect(() => {
  const id = setInterval(() => {
    // Do something
  }, 1000)
  return () => clearInterval(id) // Cleans up when component unmounts
}, [])`,
    },
  ],

  interviewQuestions: [
    {
      question: "What happens during the unmounting phase?",
      answer:
        "The component is permanently removed from the DOM. This is the time to clean up resources like timers, event listeners, or network requests.",
    },
    {
      question: "Which lifecycle method is used for cleanup in class components?",
      answer:
        "componentWillUnmount.",
    },
    {
      question: "How do you handle cleanup in a functional component?",
      answer:
        "By returning a function from within the useEffect hook. React will call this returned function when it's time to clean up.",
    },
    {
      question: "Why is cleanup necessary in React?",
      answer:
        "To prevent memory leaks and avoid attempting to update the state of a component that no longer exists in the DOM, which would cause an error.",
    },
  ],
};

export default unmountingConcept;
