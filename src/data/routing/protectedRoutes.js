const protectedRoutesConcept = {
  id: "protected-routes",
  title: "Protected Routes",
  category: "Routing",

  definition:
    "Protected routes are a pattern used to restrict access to certain pages of an application based on a condition (usually authentication). If a user is not authorized, they are redirected to a login page instead.",

  syntax: "const ProtectedRoute = ({ children }) => { return isAuthenticated ? children : <Navigate to='/login' />; }",

  useCase:
    "Use protected routes to secure dashboards, user profile settings, admin panels, or any content that should only be visible to logged-in users.",

  realLifeExamples: [
    "A user trying to access /account-settings while logged out is redirected to /login.",
    "An employee trying to access /admin-panel without admin privileges is redirected to an 'Access Denied' page.",
  ],

  codeExamples: [
    {
      id: "protected-route-wrapper",
      title: "1. The Protected Route Wrapper",
      description:
        "A common pattern is creating a wrapper component that checks authentication before rendering its children.",
      code: `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// 1. The Wrapper Component
function RequireAuth({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to if you want to redirect them back after login.
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Dummy components
const Home = () => <h2>Public Home Page</h2>;
const Login = () => <h2>Please Log In</h2>;
const Dashboard = () => <h2>Secret Dashboard (Protected)</h2>;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)} style={{ marginLeft: '20px' }}>
          {isAuthenticated ? "Log Out" : "Log In"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* 2. Wrapping the protected component */}
        <Route 
          path="/dashboard" 
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <Dashboard />
            </RequireAuth>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "The <Navigate> component is used to imperatively redirect a user when a component renders.",
    "Authentication state is typically managed via Context API or a global store (Redux/Zustand) so the wrapper component can easily access it.",
    "Remember that client-side protection only hides UI. APIs must still be secured on the backend, as a user could theoretically modify the client-side JavaScript to bypass the route protection.",
  ],
  commonMistakes: [
    {
      mistake: "Relying ONLY on client-side routing for security",
      wrong: "Assuming that because a route is protected in React, the data on that page is completely safe.",
      correct: "Client-side routing is for UX (User Experience). Actual security (Authorization) MUST be enforced on the server/API layer by validating tokens.",
    },
  ],

  interviewQuestions: [
    {
      question: "How do you implement a protected route in React Router v6?",
      answer:
        "By creating a higher-order component or wrapper component (like RequireAuth). This component checks the authentication state. If authenticated, it renders the children. If not, it renders a <Navigate to='/login' /> component to redirect the user.",
    },
  ],
};

export default protectedRoutesConcept;
