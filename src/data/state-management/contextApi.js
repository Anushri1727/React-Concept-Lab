const contextApiConcept = {
  id: "context-api",
  title: "Context API",
  category: "State Management",

  definition:
    "The Context API is a built-in React feature that allows components to share global data (like state or functions) across the entire component tree without having to manually pass props down through every level (avoiding prop drilling).",

  syntax: "const MyContext = React.createContext(defaultValue); <MyContext.Provider value={data}> ... </MyContext.Provider>; const data = useContext(MyContext);",

  useCase:
    "Use Context for data that can be considered 'global' for a tree of React components, such as the current authenticated user, theme (light/dark mode), or preferred language.",

  realLifeExamples: [
    "Theme switching (dark/light mode) available to all components.",
    "User authentication state (logged in user details) accessed by navbars and profile pages.",
    "Localization / Internationalization (current language) applied to all text components.",
  ],

  codeExamples: [
    {
      id: "context-api-example",
      title: "1. Solving Prop Drilling with Context",
      description:
        "This example demonstrates how Context bypasses intermediate components, delivering data directly to the component that needs it.",
      code: `import { useState, createContext, useContext } from "react"

// 1. Create the Context
const ThemeContext = createContext("light")

function ThemedButton() {
  // 3. Consume the Context
  const theme = useContext(ThemeContext)
  
  const style = {
    background: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
    padding: "10px",
    border: "1px solid gray"
  }

  return <button style={style}>I am styled by theme: {theme}</button>
}

// Intermediate component that doesn't need to know about theme
function Toolbar() {
  return (
    <div style={{ padding: "20px", border: "2px solid blue" }}>
      <h3>Toolbar</h3>
      <ThemedButton />
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState("light")

  return (
    // 2. Provide the Context value
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "20px", border: "2px solid red" }}>
        <h2>App Component</h2>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <hr />
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  )
}

export default App`,
    },
  ],
  keyNotes: [
    "Context is designed to share data that can be considered 'global' for a tree of components.",
    "Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.",
    "Whenever the value prop of the Provider changes, all consuming components (components calling useContext) will automatically re-render.",
    "Context should be used sparingly because it makes component reuse more difficult.",
  ],
  commonMistakes: [
    {
      mistake: "Overusing Context for every single piece of state",
      wrong: `// Wrapping everything in Context providers even if data is only used locally
<UserContext.Provider>
  <ProductContext.Provider>
    <CartContext.Provider>
      <NotificationContext.Provider>
        <App />
      </NotificationContext.Provider>
    </CartContext.Provider>
  </ProductContext.Provider>
</UserContext.Provider>`,
      correct: `// Use Context only for truly global data.
// Stick to local useState and props for data that only affects a small part of the UI.`,
    },
    {
      mistake: "Passing objects directly to the Provider's value prop without memoization",
      wrong: `<ThemeContext.Provider value={{ theme, setTheme }}>
  {/* If the parent re-renders, a NEW object reference is created, 
      causing all consumers to re-render unnecessarily! */}
  <App />
</ThemeContext.Provider>`,
      correct: `const value = useMemo(() => ({ theme, setTheme }), [theme])
<ThemeContext.Provider value={value}>
  <App />
</ThemeContext.Provider>`,
    },
  ],

  interviewQuestions: [
    {
      question: "What problem does the Context API solve?",
      answer:
        "It solves the problem of prop drilling by allowing data to be accessed globally by any component in the tree, without passing props through intermediate components.",
    },
    {
      question: "When should you NOT use Context?",
      answer:
        "You should not use Context for state that changes very frequently (like an active input field typing) because it can cause performance issues by triggering re-renders in many components. Also, avoid it if the data is only used by a few localized components.",
    },
    {
      question: "How does Context affect performance?",
      answer:
        "When a Provider's value changes, all components consuming that context are forced to re-render. If the context contains a lot of data and changes frequently, this can lead to performance bottlenecks.",
    },
  ],
};

export default contextApiConcept;
