const lazyLoadingConcept = {
  id: "lazy-loading",
  title: "Lazy Loading",
  category: "Performance & Rendering",

  definition:
    "Lazy loading in React is a performance optimization technique where components (or other resources like images) are loaded asynchronously only when they are needed or about to be rendered, rather than loading everything upfront during the initial page load.",

  syntax: "const LazyComponent = React.lazy(() => import('./LazyComponent'));",

  useCase:
    "Use lazy loading to significantly reduce the initial bundle size of your application, leading to faster initial load times, especially for heavy components like charts, complex forms, or routes that users might not visit immediately.",

  realLifeExamples: [
    "Loading a heavy 'Admin Dashboard' component only when a user navigates to the /admin route.",
    "Loading a complex 'Data Visualization Chart' only when the user scrolls down to that section of the page.",
    "Loading a 'Settings Modal' only when the user clicks the 'Settings' button.",
  ],

  codeExamples: [
    {
      id: "lazy-loading-component",
      title: "1. Lazy Loading a Component",
      description:
        "Using React.lazy() to dynamically import a component. It must be wrapped in a <Suspense> component to show a fallback UI while it loads.",
      code: `import React, { useState, Suspense } from 'react';

// Normal Import (loads immediately with the bundle)
import Header from './components/Header';

// Lazy Import (loads ONLY when rendered)
// Note: The dynamically imported file MUST have a default export.
const HeavyChart = React.lazy(() => import('./components/HeavyChart'));

function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <Header />
      
      <button onClick={() => setShowChart(true)}>
        Load Heavy Data Chart
      </button>

      {showChart && (
        // Suspense provides the fallback UI while HeavyChart is downloading
        <Suspense fallback={<div>Loading chart data... please wait.</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "React.lazy() takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.",
    "The lazy component should always be rendered inside a <Suspense> component.",
    "Lazy loading is highly effective when combined with React Router to lazy-load entire page routes.",
    "If a network error occurs while trying to load the lazy component (e.g., the user goes offline), it will trigger an error. You should wrap your lazy components in an Error Boundary to handle this gracefully.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting the Suspense wrapper",
      wrong: `const LazyComp = React.lazy(() => import('./Comp'));

function App() {
  // React will throw an error: "A component suspended while responding to synchronous input."
  return <LazyComp />;
}`,
      correct: `const LazyComp = React.lazy(() => import('./Comp'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComp />
    </Suspense>
  );
}`,
    },
    {
      mistake: "Declaring React.lazy inside another component",
      wrong: `function App() {
  // WRONG: This creates a new lazy component on EVERY render, causing infinite unmounting/remounting
  const LazyComp = React.lazy(() => import('./Comp')); 
  return <Suspense fallback={<p>Loading</p>}><LazyComp /></Suspense>;
}`,
      correct: `// CORRECT: Declare it outside the component
const LazyComp = React.lazy(() => import('./Comp')); 

function App() {
  return <Suspense fallback={<p>Loading</p>}><LazyComp /></Suspense>;
}`,
    }
  ],

  interviewQuestions: [
    {
      question: "What is React.lazy() and what problem does it solve?",
      answer:
        "React.lazy() allows you to render a dynamic import as a regular component. It solves the problem of large initial bundle sizes by allowing you to defer loading components' code until they are actually needed on the screen (lazy loading).",
    },
    {
      question: "What must accompany a React.lazy() component in the render tree?",
      answer:
        "A <Suspense> component. Suspense acts as a boundary that catches the loading state of the lazy component and displays a 'fallback' UI (like a spinner) until the component's code has finished downloading.",
    },
    {
      question: "Can React.lazy() be used with named exports?",
      answer:
        "Currently, React.lazy() only supports default exports. If you want to import a named export, you have to create an intermediate module that reexports it as the default, or use a workaround pattern.",
    },
  ],
};

export default lazyLoadingConcept;
