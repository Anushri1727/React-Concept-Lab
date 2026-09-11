const higherOrderComponentsConcept = {
  id: "hoc",
  title: "Higher Order Components",
  category: "Components",

  definition:
    "A Higher Order Component (HOC) is a function that takes a component as an argument and returns a new enhanced component with additional behavior or functionality.",

  syntax: `const EnhancedComponent = higherOrderComponent(OriginalComponent)`,

  useCases: [
    "Sharing common behavior between components",
    "Authentication and authorization",
    "Adding loading behavior",
    "Logging and analytics",
    "Reusing component logic",
  ],

  realLifeExamples: [
    "Checking whether a user is logged in before showing a page",
    "Adding a loading screen while data is being fetched",
    "Adding logging behavior to multiple components",
    "Adding permissions to different dashboard components",
  ],

  codeExamples: [
    {
      title: "Basic Higher Order Component",
      description:
        "A HOC takes a component and returns a new component with additional behavior.",
      code: `import React from "react"

function withMessage(Component) {
  return function EnhancedComponent() {
    return (
      <div>
        <p>This message comes from the HOC</p>
        <Component />
      </div>
    )
  }
}

function User() {
  return <h2>Hello, Anushri!</h2>
}

const EnhancedUser = withMessage(User)

function App() {
  return <EnhancedUser />
}

export default App`,
    },

    {
      title: "HOC with Props",
      description:
        "A HOC can receive props and pass them to the wrapped component.",
      code: `import React from "react"

function withUser(Component) {
  return function EnhancedComponent(props) {
    const user = {
      name: "Anushri",
      role: "Frontend Developer",
    }

    return <Component {...props} user={user} />
  }
}

function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  )
}

const EnhancedProfile = withUser(Profile)

function App() {
  return <EnhancedProfile />
}

export default App`,
    },

    {
      title: "Authentication HOC",
      description:
        "A common real-world use case is protecting a component based on authentication.",
      code: `import React from "react"

function withAuth(Component) {
  return function ProtectedComponent({ isLoggedIn }) {
    if (!isLoggedIn) {
      return <h2>Please login to continue.</h2>
    }

    return <Component />
  }
}

function Dashboard() {
  return <h2>Welcome to Dashboard</h2>
}

const ProtectedDashboard = withAuth(Dashboard)

function App() {
  return <ProtectedDashboard isLoggedIn={true} />
}

export default App`,
    },

    {
      title: "Loading HOC",
      description:
        "A HOC can add common loading behavior to different components.",
      code: `import React from "react"

function withLoading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>
    }

    return <Component {...props} />
  }
}

function UserList() {
  return (
    <ul>
      <li>Rahul</li>
      <li>Anushri</li>
      <li>Priya</li>
    </ul>
  )
}

const UserListWithLoading = withLoading(UserList)

function App() {
  return <UserListWithLoading isLoading={false} />
}

export default App`,
    },

    {
      title: "Multiple Components Using One HOC",
      description:
        "The same HOC can enhance multiple components and provide shared behavior.",
      code: `import React from "react"

function withBorder(Component) {
  return function EnhancedComponent(props) {
    return (
      <div
        style={{
          border: "2px solid purple",
          padding: "15px",
          margin: "10px",
        }}
      >
        <Component {...props} />
      </div>
    )
  }
}

function User() {
  return <h3>User Component</h3>
}

function Product() {
  return <h3>Product Component</h3>
}

const UserWithBorder = withBorder(User)
const ProductWithBorder = withBorder(Product)

function App() {
  return (
    <div>
      <UserWithBorder />
      <ProductWithBorder />
    </div>
  )
}

export default App`,
    },
  ],

  keyNotes: [
    "HOC stands for Higher Order Component.",
    "A HOC is a function, not a component itself.",
    "It receives a component as an argument.",
    "It returns a new enhanced component.",
    "HOCs are mainly used for reusing component logic.",
    "The original component should normally remain unchanged.",
    "Modern React often prefers custom Hooks for sharing logic in function components.",
    "HOCs are still important for understanding existing React codebases and interview questions.",
  ],

  commonMistakes: [
    {
      mistake: "Calling a HOC a component",
      wrong: `function withAuth() {
  return <Dashboard />
}`,
      correct: `function withAuth(Component) {
  return function ProtectedComponent() {
    return <Component />
  }
}`,
    },

    {
      mistake: "Mutating the original component",
      wrong: `function withAuth(Component) {
  Component.isAuthenticated = true
  return Component
}`,
      correct: `function withAuth(Component) {
  return function EnhancedComponent() {
    return <Component />
  }
}`,
    },

    {
      mistake: "Forgetting to pass props",
      wrong: `return <Component />`,
      correct: `return <Component {...props} />`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is a Higher Order Component?",
      answer:
        "A Higher Order Component is a function that takes a component and returns a new component with additional behavior or functionality.",
    },

    {
      question: "Is HOC a React component?",
      answer:
        "No. A HOC is a function that accepts a component and returns an enhanced component.",
    },

    {
      question: "Why are HOCs used?",
      answer:
        "HOCs are used to reuse common component logic and add shared behavior to multiple components.",
    },

    {
      question: "HOC vs Custom Hook?",
      answer:
        "HOCs enhance components by wrapping them, while Custom Hooks reuse stateful logic directly inside function components. For modern React applications, Custom Hooks are often preferred for sharing logic.",
    },

    {
      question: "Can one HOC be used with multiple components?",
      answer:
        "Yes. A HOC can enhance multiple different components with the same reusable behavior.",
    },
  ],
}

export default higherOrderComponentsConcept