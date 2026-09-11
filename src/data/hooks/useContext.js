const useContextConcept = {
  id: "useContext",
  title: "useContext",
  category: "Hooks",

  definition:
    "useContext is a React Hook used to access data from a Context without passing props through every component.",

  syntax: `const value = useContext(MyContext)`,

  useCases: [
    "Sharing data between components without prop drilling",
    "Theme management",
    "Authentication/user information",
    "Language preferences",
  ],

  realLifeExamples: [
    "Dark/light theme shared across the application",
    "Logged-in user information available to multiple components",
    "Application language shared across pages",
  ],

  codeExamples: [
    {
      title: "Basic useContext",
      description:
        "Create a Context and access its value from a child component.",
      code: `import { createContext, useContext } from "react"

const UserContext = createContext()

function User() {
  const user = useContext(UserContext)

  return <h2>Hello, {user}</h2>
}

function App() {
  return (
    <UserContext.Provider value="Anushri">
      <User />
    </UserContext.Provider>
  )
}

export default App`,
    },

    {
      title: "Theme Example",
      description:
        "Context can share a theme value with deeply nested components.",
      code: `import { createContext, useContext } from "react"

const ThemeContext = createContext()

function Button() {
  const theme = useContext(ThemeContext)

  return (
    <button
      style={{
        background: theme === "dark" ? "black" : "lightgray",
        color: theme === "dark" ? "white" : "black",
        padding: "10px 20px",
      }}
    >
      Current Theme: {theme}
    </button>
  )
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  )
}

export default App`,
    },

    {
      title: "Updating Context",
      description:
        "A Context can provide both data and a function to update that data.",
      code: `import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme}>
      Theme: {theme}
    </button>
  )
}

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Button />
    </ThemeContext.Provider>
  )
}

export default App`,
    },
  ],

  keyNotes: [
    "useContext reads a value from a React Context.",
    "It helps avoid prop drilling.",
    "createContext() creates the Context.",
    "Provider supplies the value.",
    "useContext() consumes the value.",
    "Components using the Context re-render when its value changes.",
  ],

  commonMistakes: [
    {
      mistake: "Using useContext without a Provider",
      wrong: `const theme = useContext(ThemeContext)`,
      correct: `<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>`,
    },
    {
      mistake: "Using Context for every piece of state",
      wrong: `const AppContext = createContext()

// Put all application state here`,
      correct:
        "Use Context mainly for values that need to be shared across many components.",
    },
  ],

  interviewQuestions: [
    {
      question: "What problem does useContext solve?",
      answer:
        "It helps share data between components without manually passing props through every intermediate component.",
    },
    {
      question: "What are the three main parts of Context API?",
      answer:
        "createContext, Provider, and useContext.",
    },
    {
      question: "Does useContext replace Redux?",
      answer:
        "Not completely. Context is useful for sharing values, while Redux provides a more structured state-management solution for complex applications.",
    },
  ],
}

export default useContextConcept