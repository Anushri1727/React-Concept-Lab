const useMemoConcept = {
  id: "useMemo",
  title: "useMemo",
  category: "Hooks",

  definition:
    "useMemo is a React Hook that memoizes a calculated value so the calculation is not repeated unnecessarily on every render.",

  syntax: `const value = useMemo(() => calculation, [dependencies])`,

  useCases: [
    "Expensive calculations",
    "Filtering large lists",
    "Sorting large datasets",
    "Avoiding unnecessary calculations",
  ],

  realLifeExamples: [
    "Filtering thousands of products",
    "Calculating analytics",
    "Sorting large datasets",
  ],

  codeExamples: [
    {
      title: "Memoized Calculation",
      description:
        "The expensive calculation runs again only when number changes.",
      code: `import { useMemo, useState } from "react"

function App() {
  const [number, setNumber] = useState(1)
  const [count, setCount] = useState(0)

  const squared = useMemo(() => {
    console.log("Calculating...")
    return number * number
  }, [number])

  return (
    <div>
      <h2>Square: {squared}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App`,
    },

    {
      title: "Filtering Products",
      description:
        "useMemo can avoid repeating an expensive filtering operation.",
      code: `import { useMemo, useState } from "react"

function App() {
  const [search, setSearch] = useState("")
  const [count, setCount] = useState(0)

  const products = ["Laptop", "Phone", "Tablet", "Watch"]

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />

      <p>Unrelated count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      {filteredProducts.map((product) => (
        <p key={product}>{product}</p>
      ))}
    </div>
  )
}

export default App`,
    },
  ],

  keyNotes: [
    "useMemo memoizes a value.",
    "It is useful for expensive calculations.",
    "The calculation runs again when dependencies change.",
    "Do not use useMemo everywhere.",
    "Optimization should be based on an actual performance need.",
  ],

  commonMistakes: [
    {
      mistake: "Using useMemo for every calculation",
      wrong: `const sum = useMemo(() => a + b, [a, b])`,
      correct:
        "Use useMemo when the calculation is expensive or avoiding recalculation provides a real benefit.",
    },
  ],

  interviewQuestions: [
    {
      question: "What does useMemo return?",
      answer: "It returns a memoized value.",
    },
    {
      question: "useMemo vs useCallback?",
      answer:
        "useMemo memoizes a value, while useCallback memoizes a function.",
    },
  ],
}

export default useMemoConcept