const concepts = [
  {
    id: "hooks",
    title: "Hooks",
    children: [
      { id: "useState", title: "useState" },
      { id: "useEffect", title: "useEffect" },
      { id: "useContext", title: "useContext" },
      { id: "useReducer", title: "useReducer" },
      { id: "useMemo", title: "useMemo" },
      { id: "useCallback", title: "useCallback" },
      { id: "useRef", title: "useRef" },
    ],
  },

  {
    id: "components",
    title: "Components",
    children: [
      { id: "hoc", title: "Higher Order Components" },
    ],
  },

  {
    id: "lifecycle",
    title: "Lifecycle",
    children: [
      { id: "mounting", title: "Mounting" },
      { id: "updating", title: "Updating" },
      { id: "unmounting", title: "Unmounting" },
      { id: "lifecycle-useEffect", title: "Lifecycle with useEffect" },
    ],
  },

  {
    id: "state-management",
    title: "State Management",
    children: [
      { id: "props-state", title: "Props vs State" },
      { id: "prop-drilling", title: "Prop Drilling" },
      { id: "context-api", title: "Context API" },
    ],
  },

  {
    id: "redux",
    title: "Redux / State Libraries",
    children: [
      { id: "redux", title: "Redux" },
      { id: "redux-toolkit", title: "Redux Toolkit" },
      { id: "zustand", title: "Zustand" },
    ],
  },

  {
    id: "advanced-react",
    title: "Advanced React",
    children: [
      { id: "custom-hooks", title: "Custom Hooks" },
    ],
  },

  {
    id: "performance",
    title: "Performance & Rendering",
    children: [
      { id: "lazy-loading", title: "Lazy Loading" },
      { id: "code-splitting", title: "Code Splitting" },
      { id: "chunking", title: "Chunking" },
      { id: "suspense", title: "Suspense" },
      { id: "virtual-dom", title: "Virtual DOM" },
      { id: "reconciliation", title: "Reconciliation" },
      { id: "react-fiber", title: "React Fiber" },
      { id: "rendering", title: "Rendering" },
      { id: "diffing", title: "Diffing" },
    ],
  },

  {
    id: "routing",
    title: "Routing",
    children: [
      { id: "react-router", title: "React Router" },
      { id: "dynamic-routing", title: "Dynamic Routing" },
      { id: "protected-routes", title: "Protected Routes" },
      { id: "query-params", title: "Query Parameters" },
    ],
  },

  {
    id: "rendering-routing",
    title: "SSR / CSR",
    children: [
      { id: "ssr-vs-csr", title: "SSR vs CSR" },
      { id: "seo", title: "SEO in React" },
      { id: "ssr-performance", title: "SSR & Performance" },
    ],
  },

  {
    id: "testing-async",
    title: "Testing & Async",
    children: [
      { id: "react-testing-library", title: "React Testing Library" },
      { id: "unit-testing", title: "Unit Testing" },
      { id: "integration-testing", title: "Integration Testing" },
      { id: "api-useEffect", title: "API with useEffect" },
      { id: "events", title: "Events" },
      { id: "promises", title: "Promises" },
      { id: "timers", title: "Timers" },
      { id: "fetch", title: "Fetch API" },
      { id: "axios", title: "Axios" },
    ],
  },

  {
    id: "production",
    title: "Production & Best Practices",
    children: [
      { id: "performance-optimization", title: "Performance Optimization" },
      { id: "skeleton-shimmer", title: "Skeleton / Shimmer" },
      { id: "asset-optimization", title: "Asset Optimization" },
      { id: "html-css-js", title: "Optimized HTML / CSS / JS" },
      { id: "cdn-server", title: "CDN & Server" },
      { id: "styling-libraries", title: "Styling Libraries" },
      { id: "accessibility", title: "Accessibility" },
      { id: "security", title: "React Security" },
    ],
  },
]

export default concepts