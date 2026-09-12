const codeSplittingConcept = {
  id: "code-splitting",
  title: "Code Splitting",
  category: "Performance & Rendering",

  definition:
    "Code Splitting is a feature supported by bundlers like Webpack and Rollup (which Vite uses) which can create multiple bundles that can be dynamically loaded at runtime. In React, it's the process of breaking down a large JavaScript bundle into smaller, manageable 'chunks'.",

  syntax: "import('./math').then(math => { console.log(math.add(16, 26)); });",

  useCase:
    "Code splitting is essential for large applications. Without it, users have to download the entire application code (even pages they never visit) before they can see the first screen. Splitting code dramatically improves the Initial Load Time / Time To Interactive.",

  realLifeExamples: [
    "Route-based splitting: Separating the /login page code from the /dashboard page code.",
    "Library splitting: Putting large dependencies (like Lodash or Moment.js) into their own chunk so they can be cached by the browser independently of your application code.",
  ],

  codeExamples: [
    {
      id: "code-splitting-routes",
      title: "1. Route-Based Code Splitting",
      description:
        "The most common and effective way to code split a React app is by routes. Users only download the code for the page they are currently visiting.",
      code: `import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Regular import for the layout/navbar (needed immediately)
import Navbar from './components/Navbar';

// Lazy imports for the routes (creates separate JS files/chunks)
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Dashboard = lazy(() => import('./routes/Dashboard'));

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* Suspense boundary covers all routes */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;`,
    },
    {
      id: "dynamic-import-functions",
      title: "2. Code Splitting Non-Component Logic",
      description:
        "Code splitting isn't just for React components. You can dynamically import standard JavaScript modules (like heavy utility libraries) only when an action occurs.",
      code: `import React, { useState } from 'react';

function ExportButton() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    
    // The 'pdf-generator' library is heavy. We only download it if 
    // the user actually clicks the Export button.
    import('./utils/pdf-generator')
      .then((pdfLib) => {
        pdfLib.generateReport();
        setIsExporting(false);
      })
      .catch((err) => {
        console.error("Failed to load PDF library", err);
        setIsExporting(false);
      });
  };

  return (
    <button onClick={handleExport} disabled={isExporting}>
      {isExporting ? 'Generating...' : 'Export to PDF'}
    </button>
  );
}

export default ExportButton;`,
    }
  ],
  keyNotes: [
    "Code splitting is primarily a bundler feature (Webpack, Vite, Parcel), but React provides APIs (React.lazy) to easily integrate it into the component tree.",
    "Dynamic `import()` syntax is the standard way to tell bundlers to create a new split chunk.",
    "Don't over-split. Splitting tiny components can actually hurt performance due to the overhead of multiple network requests. Focus on route-level and large library splitting.",
  ],
  commonMistakes: [
    {
      mistake: "Splitting everything",
      wrong: `// Lazy loading a tiny button component is counter-productive
const Button = lazy(() => import('./Button'));`,
      correct: `// Keep small, commonly used components in the main bundle
import Button from './Button';`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is the difference between Lazy Loading and Code Splitting?",
      answer:
        "Code Splitting is the actual physical process done by a bundler (like Webpack) to divide your code into separate files (chunks). Lazy Loading is the architectural pattern of intentionally delaying the loading of those chunks until they are needed at runtime. They work hand-in-hand.",
    },
    {
      question: "Where is the best place to introduce code splitting in a React app?",
      answer:
        "At the route level. Since users generally only view one page at a time, route-based splitting ensures they only download the code required for the current view.",
    },
  ],
};

export default codeSplittingConcept;
