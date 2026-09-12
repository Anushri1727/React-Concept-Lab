const dynamicRoutingConcept = {
  id: "dynamic-routing",
  title: "Dynamic Routing",
  category: "Routing",

  definition:
    "Dynamic routing is a technique where the route paths contain parameters (placeholders) that can match a variety of URLs. The matched values are then accessible within the component to fetch or display specific data.",

  syntax: "<Route path='/users/:userId' element={<UserProfile />} /> // Inside component: const { userId } = useParams();",

  useCase:
    "Use dynamic routing when you have a collection of items (users, products, blog posts) and you want a single component to handle rendering the details for any of those items based on the ID in the URL.",

  realLifeExamples: [
    "An e-commerce site where /products/123 shows a shirt and /products/456 shows pants.",
    "A blog where /posts/react-hooks-guide loads that specific article.",
  ],

  codeExamples: [
    {
      id: "url-params",
      title: "1. URL Parameters",
      description:
        "Using the :paramName syntax in the route path, and the useParams hook inside the component.",
      code: `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function UserProfile() {
  // useParams extracts the dynamic part of the URL
  const { id } = useParams();
  
  return <h2>Viewing Profile for User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1" style={{ marginRight: '10px' }}>User 1</Link>
        <Link to="/user/42" style={{ marginRight: '10px' }}>User 42</Link>
        <Link to="/user/99">User 99</Link>
      </nav>

      <Routes>
        {/* The colon (:) tells React Router that 'id' is a dynamic parameter */}
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Dynamic segments in a path are denoted by a colon (e.g., :id).",
    "You can have multiple dynamic segments in a single route, e.g., /category/:catId/product/:prodId.",
    "The useParams hook returns an object of key/value pairs of the dynamic params from the current URL.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting the colon in the route path",
      wrong: `<Route path="/user/id" element={<UserProfile />} /> // Matches literally "/user/id"`,
      correct: `<Route path="/user/:id" element={<UserProfile />} /> // Matches "/user/1", "/user/abc", etc.`,
    },
  ],

  interviewQuestions: [
    {
      question: "How do you define and access a dynamic route in React Router?",
      answer:
        "You define a dynamic route by prefixing a path segment with a colon (like /users/:id). In the rendered component, you access the value of that parameter using the useParams hook, which returns an object like { id: '123' }.",
    },
  ],
};

export default dynamicRoutingConcept;
