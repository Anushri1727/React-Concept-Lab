const useEffectConcept = {
  id: "useEffect",
  title: "useEffect",
  category: "Hooks",

  definition:
    "useEffect is a React Hook used to synchronize a component with an external system. It runs side-effect logic after React renders the component.",

  syntax: `useEffect(() => {
  // side effect

  return () => {
    // cleanup
  }
}, [dependencies])`,

  useCase:
    "Use useEffect when your component needs to perform something outside the normal rendering process, such as fetching API data, setting up timers, adding event listeners, subscribing to external systems, or synchronizing with browser APIs.",

  realLifeExamples: [
    "Fetching users or products from an API.",
    "Starting and cleaning up a timer.",
    "Listening for browser events such as resize or scroll.",
    "Updating the document title.",
    "Subscribing to external data and cleaning up the subscription."
  ],

  codeExamples: [
    {
      id: "basic-effect",
      title: "1. Run Effect After Render",
      description:
        "useEffect runs after the component renders. With an empty dependency array, it runs once after the initial render.",
      code: `import { useEffect } from "react"

function App() {
  useEffect(() => {
    console.log("Component rendered")
  }, [])

  return (
    <div>
      <h2>Hello React</h2>
    </div>
  )
}

export default App`
    },

    {
      id: "document-title",
      title: "2. Update Document Title",
      description:
        "A common real-world use case is synchronizing the browser tab title with component state.",
      code: `import { useEffect, useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = \`Count: \${count}\`
  }, [count])

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter`
    },

    {
      id: "api-fetch",
      title: "3. Fetch API Data",
      description:
        "useEffect is commonly used to fetch data when a component mounts.",
      code: `import { useEffect, useState } from "react"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>Users</h2>

      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  )
}

export default Users`
    },

    {
      id: "timer-cleanup",
      title: "4. Timer with Cleanup",
      description:
        "Effects can return a cleanup function. This is important when creating timers, subscriptions, or event listeners.",
      code: `import { useEffect, useState } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h2>{seconds} seconds</h2>
    </div>
  )
}

export default Timer`
    },

    {
      id: "dependency",
      title: "5. Effect with Dependency",
      description:
        "When a value is placed in the dependency array, the effect runs again whenever that value changes.",
      code: `import { useEffect, useState } from "react"

function Search() {
  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log("Search changed:", search)
  }, [search])

  return (
    <div>
      <input
        value={search}
        onChange={event => setSearch(event.target.value)}
        placeholder="Search..."
      />

      <p>You searched for: {search}</p>
    </div>
  )
}

export default Search`
    }
  ],

  keyNotes: [
    "useEffect is used for side effects and synchronization with external systems.",
    "The effect callback runs after React renders.",
    "An empty dependency array [] means the effect does not re-run because of component state/props changes.",
    "A dependency array tells React when the effect needs to re-run.",
    "The cleanup function runs before the effect runs again and when the component unmounts.",
    "Do not use useEffect for calculations that can be done directly during rendering.",
    "Common useEffect use cases include API calls, timers, subscriptions, event listeners, and browser APIs."
  ],

  commonMistakes: [
    {
      mistake: "Forgetting dependencies",
      wrong: `useEffect(() => {
  console.log(count)
})`,
      correct: `useEffect(() => {
  console.log(count)
}, [count])`
    },

    {
      mistake: "Forgetting cleanup for a timer",
      wrong: `useEffect(() => {
  setInterval(() => {
    setCount(prev => prev + 1)
  }, 1000)
}, [])`,
      correct: `useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1)
  }, 1000)

  return () => clearInterval(timer)
}, [])`
    },

    {
      mistake: "Using useEffect for simple calculations",
      wrong: `useEffect(() => {
  setFullName(firstName + " " + lastName)
}, [firstName, lastName])`,
      correct: `const fullName = firstName + " " + lastName`
    }
  ],

  interviewQuestions: [
    {
      question: "What is useEffect in React?",
      answer:
        "useEffect is a React Hook used to perform side effects and synchronize a component with external systems after rendering."
    },

    {
      question: "When does useEffect run?",
      answer:
        "The effect runs after the component renders. With dependencies, React re-runs it when those dependencies change."
    },

    {
      question: "What is the dependency array in useEffect?",
      answer:
        "The dependency array tells React which values the effect depends on. The effect re-runs when one of those values changes."
    },

    {
      question: "What is the purpose of the cleanup function in useEffect?",
      answer:
        "Cleanup is used to stop or remove resources created by an effect, such as timers, event listeners, and subscriptions. It runs before the effect re-runs and when the component unmounts."
    },

    {
      question: "Can we use multiple useEffect Hooks in one component?",
      answer:
        "Yes. Multiple useEffect Hooks can be used to keep different side effects separated based on their individual responsibilities and dependencies."
    }
  ]
}

export default useEffectConcept