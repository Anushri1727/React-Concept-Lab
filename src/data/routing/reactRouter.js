const reactRouterConcept = {
  id: "react-router",
  title: "React Router",
  category: "Routing",

  definition:
    "React Router is the standard routing library for React. It enables navigation among views of various components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.",

  syntax: "<BrowserRouter> <Routes> <Route path='/' element={<Home />} /> </Routes> </BrowserRouter>",

  useCase:
    "Use React Router whenever you are building a Single Page Application (SPA) that requires multiple 'pages' or views without triggering full browser reloads.",

  realLifeExamples: [
    "Navigating from a Home page to an About page using a navigation bar.",
    "Clicking a product in a list to view its details page.",
  ],

  codeExamples: [
    {
      id: "basic-routing",
      title: "1. Basic Routing Setup",
      description:
        "A simple application with a navigation bar and three distinct pages.",
      code: `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Simple page components
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Us</h2>;
const Contact = () => <h2>Contact Us</h2>;

function App() {
  return (
    // Router must wrap the entire application that needs routing
    <Router>
      <div>
        <nav>
          {/* Link prevents full page reload, unlike <a href="..."> */}
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes determines which component to show based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "BrowserRouter uses the HTML5 history API to keep your UI in sync with the URL.",
    "Always use the <Link> component instead of an anchor <a> tag to navigate. Anchor tags cause a full page reload, which resets React's state.",
    "The <Routes> component looks through all its children <Route> elements to find the best match and renders that branch of the UI.",
  ],
  commonMistakes: [
    {
      mistake: "Using standard <a> tags for internal links",
      wrong: `<a href="/about">About Us</a> // Triggers full page reload, destroying state.`,
      correct: `<Link to="/about">About Us</Link> // Handles navigation client-side seamlessly.`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is the difference between <Link> and an <a> tag in React Router?",
      answer:
        "<Link> intercepts the click event and updates the URL using the browser's History API, preventing a full page reload and preserving React state. An <a> tag triggers a standard HTTP request to the server, reloading the entire page.",
    },
  ],
};

export default reactRouterConcept;
