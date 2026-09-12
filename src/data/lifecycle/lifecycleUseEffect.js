const lifecycleUseEffectConcept = {
  id: "lifecycle-useEffect",
  title: "Lifecycle with useEffect",
  category: "Lifecycle",

  definition:
    "The useEffect hook is a unified API in functional components that serves the purposes of componentDidMount, componentDidUpdate, and componentWillUnmount all in one place.",

  syntax: "useEffect(() => { /* effect logic */ return () => { /* cleanup logic */ } }, [dependencies])",

  useCase:
    "Use useEffect whenever you need to perform side effects in functional components, mapping mental models of lifecycle methods to the dependencies array.",

  realLifeExamples: [
    "Unified data fetching logic that runs on initial load and when a specific parameter changes.",
    "Setting up a global event listener on mount and ensuring it gets removed on unmount.",
    "Synchronizing component state with an external system (like local storage or a browser API).",
  ],

  codeExamples: [
    {
      id: "all-lifecycles",
      title: "1. All Lifecycles in One Hook",
      description:
        "This example demonstrates how mounting, updating, and unmounting can be handled by a single useEffect hook.",
      code: `import { useState, useEffect } from "react"

function LifecycleDemo({ id }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    // 1. MOUNTING & UPDATING: Runs on initial render and when 'id' changes
    console.log(\`Fetching data for ID: \${id}\`)
    
    // Simulate fetching data
    let isMounted = true
    setTimeout(() => {
      if (isMounted) {
        setData({ id, content: \`Data for \${id}\` })
      }
    }, 1000)

    // 2. UNMOUNTING & CLEANUP: Runs before the next effect, and on unmount
    return () => {
      console.log(\`Cleaning up for ID: \${id}\`)
      isMounted = false // Prevent setting state on an unmounted component
    }
  }, [id]) // 3. DEPENDENCIES: Controls when the effect runs

  return (
    <div>
      {data ? <p>{data.content}</p> : <p>Loading...</p>}
    </div>
  )
}

export default LifecycleDemo`,
    },
  ],
  keyNotes: [
    "Think in terms of synchronization rather than lifecycles. useEffect synchronizes the component with an external system.",
    "The dependency array dictates synchronization: [] means sync once, [var] means sync when var changes, no array means sync after every render.",
    "The cleanup function returned by useEffect runs *before* the next effect runs to clean up the previous effect, as well as on component unmount.",
    "You can use multiple useEffect hooks in a single component to separate unrelated concerns.",
  ],
  commonMistakes: [
    {
      mistake: "Thinking of useEffect strictly as lifecycle methods",
      wrong: `// Grouping unrelated logic just because they both happen 'on mount'
useEffect(() => {
  fetchUserData()
  subscribeToAnalytics()
}, [])`,
      correct: `// Separating concerns into distinct useEffect hooks
useEffect(() => {
  fetchUserData()
}, [])

useEffect(() => {
  subscribeToAnalytics()
  return () => unsubscribeFromAnalytics()
}, [])`,
    },
  ],

  interviewQuestions: [
    {
      question: "How does useEffect replace class lifecycle methods?",
      answer:
        "useEffect replaces componentDidMount (with []), componentDidUpdate (with dependencies), and componentWillUnmount (via the returned cleanup function).",
    },
    {
      question: "Why is it better to think of useEffect as a synchronization tool rather than lifecycle methods?",
      answer:
        "Because it forces you to think about how the component's state should reflect the current props and state, leading to fewer bugs than thinking about 'when' an effect runs.",
    },
    {
      question: "What happens if you omit the dependency array entirely?",
      answer:
        "The effect will run after every single render of the component.",
    },
  ],
};

export default lifecycleUseEffectConcept;
