const interviewQuestions = [
  // --- Hooks & Custom Hooks (1-12) ---
  {
    id: 1,
    category: "Hooks",
    question: "What are Hooks in React, and what problem do they solve?",
    answer: "Hooks are functions that let you 'hook into' React state and lifecycle features from functional components. They solve problems like complex class component lifecycles, difficulty in reusing stateful logic (wrapper hell), and the confusing 'this' binding in classes."
  },
  {
    id: 2,
    category: "Hooks",
    question: "Explain the rules of Hooks.",
    answer: "1. Only call Hooks at the top level of a component (not inside loops, conditions, or nested functions) to ensure they are called in the exact same order on every render. 2. Only call Hooks from React function components or custom Hooks, not regular JavaScript functions."
  },
  {
    id: 3,
    category: "Hooks",
    question: "How does useState work under the hood?",
    answer: "useState returns an array containing the current state value and a setter function. React maintains an internal array of state values for each component instance. The order of useState calls determines which piece of state corresponds to which variable, which is why they cannot be called conditionally."
  },
  {
    id: 4,
    category: "Hooks",
    question: "What is the difference between passing an object vs a functional updater to setState?",
    answer: "Passing an object replaces the state directly. Passing a functional updater (e.g., `setCount(prev => prev + 1)`) guarantees you are working with the most up-to-date state, which is crucial if multiple state updates are batched together or depend on the previous state.",
    codeSnippet: `// BAD: Relies on stale closure if batched
setCount(count + 1);
setCount(count + 1); // Only increments by 1 total

// GOOD: Functional updater guarantees latest state
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1); // Increments by 2 total`
  },
  {
    id: 5,
    category: "Hooks",
    question: "Explain the dependency array in useEffect.",
    answer: "The dependency array dictates when the effect should re-run. If omitted, the effect runs after every render. If empty `[]`, it runs only on mount. If it contains variables `[id, data]`, the effect runs on mount and whenever any of those variables change between renders."
  },
  {
    id: 6,
    category: "Hooks",
    question: "How do you handle component unmounting with useEffect?",
    answer: "You return a 'cleanup function' from inside the useEffect. React calls this cleanup function before the component unmounts, and also before re-running the effect if dependencies change, preventing memory leaks (e.g., clearing intervals or canceling network requests).",
    codeSnippet: `useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup function runs on unmount
  return () => {
    clearInterval(timer);
  };
}, []);`
  },
  {
    id: 7,
    category: "Hooks",
    question: "What is the difference between useMemo and useCallback?",
    answer: "Both are used for performance optimization via memoization. `useMemo` caches the *result* of a calculation, re-computing it only when dependencies change. `useCallback` caches a *function instance* itself, useful for passing stable function references to child components wrapped in React.memo."
  },
  {
    id: 8,
    category: "Hooks",
    question: "When should you NOT use useMemo or useCallback?",
    answer: "You shouldn't use them prematurely. The overhead of calling the hook and comparing dependencies can be more expensive than just recreating a simple function or performing a fast calculation. Use them specifically when passing props to heavily optimized children or for genuinely expensive computations."
  },
  {
    id: 9,
    category: "Hooks",
    question: "What is useRef used for besides accessing DOM elements?",
    answer: "useRef creates a mutable object whose `.current` property persists across renders. Crucially, updating `.current` does *not* trigger a re-render. It acts as an instance variable for functional components, ideal for storing previous state values or timer IDs.",
    codeSnippet: `const timerRef = useRef(null);

const startTimer = () => {
  // Does not trigger a re-render!
  timerRef.current = setInterval(() => console.log('Tick'), 1000);
};

const stopTimer = () => {
  clearInterval(timerRef.current);
};`
  },
  {
    id: 10,
    category: "Hooks",
    question: "Explain the useReducer hook and when to prefer it over useState.",
    answer: "useReducer manages state using a reducer function (like Redux). It is preferred over useState when state logic is complex, involves multiple sub-values, or when the next state depends heavily on the previous state. It also centralizes state update logic.",
    codeSnippet: `const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Count: {state.count}
    </button>
  );
}`
  },
  {
    id: 11,
    category: "Hooks",
    question: "What is a Custom Hook?",
    answer: "A Custom Hook is a JavaScript function whose name starts with 'use' and that calls other React Hooks. It is a mechanism to extract and reuse stateful logic (like data fetching or form handling) across multiple components without duplicating code."
  },
  {
    id: 12,
    category: "Hooks",
    question: "Do two components using the same Custom Hook share state?",
    answer: "No. Custom Hooks reuse *logic*, not state. Every time you call a custom hook, all the state and effects inside of it are completely isolated to the component calling it."
  },

  // --- Components & Lifecycle (13-17) ---
  {
    id: 13,
    category: "Components & Lifecycle",
    question: "What is a Higher-Order Component (HOC)?",
    answer: "An HOC is a function that takes a component and returns a new component, adding additional props or behavior. It was the standard way to reuse logic before Hooks. Examples include `connect` in Redux or `withRouter` in React Router.",
    codeSnippet: `// A simple HOC that adds a 'theme' prop
const withTheme = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const theme = "dark"; // Logic to get theme
    return <WrappedComponent theme={theme} {...props} />;
  };
};

const Button = ({ theme }) => <button className={theme}>Click</button>;
export default withTheme(Button);`
  },
  {
    id: 14,
    category: "Components & Lifecycle",
    question: "Describe the three main phases of a React component's lifecycle.",
    answer: "1. Mounting: The component is created and inserted into the DOM. 2. Updating: The component re-renders due to changes in props or state. 3. Unmounting: The component is removed from the DOM."
  },
  {
    id: 15,
    category: "Components & Lifecycle",
    question: "How do class lifecycle methods map to the useEffect hook?",
    answer: "`componentDidMount` maps to `useEffect(..., [])`. `componentDidUpdate` maps to `useEffect(..., [deps])`. `componentWillUnmount` maps to the cleanup function returned by `useEffect`."
  },
  {
    id: 16,
    category: "Components & Lifecycle",
    question: "Why should you avoid making API calls in a class component's constructor?",
    answer: "The constructor runs before the component mounts. API calls are asynchronous side effects. Making them in the constructor can block rendering, cause memory leaks if the component unmounts before the call finishes, and lead to inconsistent state. They should be in `componentDidMount` (or `useEffect`)."
  },
  {
    id: 17,
    category: "Components & Lifecycle",
    question: "What is Prop Drilling and why is it problematic?",
    answer: "Prop drilling is the process of passing props through multiple intermediate components that don't need the data, just to reach a deeply nested child. It makes the codebase brittle, harder to maintain, and tightens coupling."
  },

  // --- State Management (18-25) ---
  {
    id: 18,
    category: "State Management",
    question: "What is the difference between Props and State?",
    answer: "Props are read-only data passed down from a parent to a child. State is mutable data managed internally by the component itself. A component can update its own state, but cannot modify its own props."
  },
  {
    id: 19,
    category: "State Management",
    question: "What problem does the Context API solve?",
    answer: "The Context API solves prop drilling by allowing data (like themes or user authentication) to be considered 'global' for a tree of components, bypassing the need to pass props manually through every level.",
    codeSnippet: `// 1. Create Context
const ThemeContext = createContext('light');

// 2. Provide Context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <DeepChild />
    </ThemeContext.Provider>
  );
}

// 3. Consume Context
function DeepChild() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}`
  },
  {
    id: 20,
    category: "State Management",
    question: "What is a performance drawback of the Context API?",
    answer: "Whenever the value provided to a Context Provider changes, *all* components consuming that context are forced to re-render, regardless of whether they actually use the specific part of the value that changed."
  },
  {
    id: 21,
    category: "State Management",
    question: "What are the core principles of Redux?",
    answer: "1. Single source of truth (one global store). 2. State is read-only (changes are made only by dispatching actions). 3. Changes are made with pure functions (reducers take the current state and an action, returning a new state)."
  },
  {
    id: 22,
    category: "State Management",
    question: "Why must Redux reducers be pure functions?",
    answer: "Redux relies on shallow object comparison to detect state changes. If a reducer mutates the state directly, the object reference remains the same, and React will not re-render the connected components. Pure functions guarantee a new object is returned.",
    codeSnippet: `// BAD: Mutating state directly
function badReducer(state, action) {
  state.items.push(action.payload); // Modifies original object!
  return state; // Reference hasn't changed
}

// GOOD: Returning a new object
function goodReducer(state, action) {
  return {
    ...state,
    items: [...state.items, action.payload]
  };
}`
  },
  {
    id: 23,
    category: "State Management",
    question: "What improvements does Redux Toolkit (RTK) provide over standard Redux?",
    answer: "RTK dramatically reduces boilerplate. It eliminates manual action types and switch statements using \`createSlice\`. Most importantly, it uses Immer under the hood, allowing developers to write 'mutating' logic that safely produces immutable updates.",
    codeSnippet: `// With RTK createSlice, this "mutation" is safe!
const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Guest' },
  reducers: {
    setName: (state, action) => {
      // Immer intercepts this and returns a new immutable object
      state.name = action.payload; 
    }
  }
});`
  },
  {
    id: 24,
    category: "State Management",
    question: "How does Zustand differ from Redux and Context API?",
    answer: "Zustand is a minimalist state library that uses hooks. It doesn't require Context Providers, meaning no 'wrapper hell'. Unlike Context, it allows components to subscribe to specific slices of state, preventing unnecessary re-renders when other parts of the state change.",
    codeSnippet: `// 1. Create store
const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}))

// 2. Bind in component (No Provider needed!)
function BearCounter() {
  // Only re-renders if 'bears' changes
  const bears = useStore((state) => state.bears) 
  return <h1>{bears} around here ...</h1>
}`
  },
  {
    id: 25,
    category: "State Management",
    question: "How do you handle asynchronous actions in Redux vs Zustand?",
    answer: "In Redux, you typically need middleware like Redux Thunk or Redux Saga to handle async logic. In Zustand, actions are just normal functions, so you can simply use `async/await` directly inside the store definition."
  },

  // --- Performance & Rendering (26-36) ---
  {
    id: 26,
    category: "Performance & Rendering",
    question: "What is the Virtual DOM and why is it used?",
    answer: "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. Updating the Real DOM is slow. React updates the Virtual DOM first, compares it to the previous version, and calculates the minimal set of changes required to update the Real DOM efficiently."
  },
  {
    id: 27,
    category: "Performance & Rendering",
    question: "Explain the Reconciliation process.",
    answer: "Reconciliation is the algorithm React uses to sync the Virtual DOM with the Real DOM. It diffs the new and old VDOM trees. If element types change, the tree is rebuilt. If they remain the same, only the attributes are updated. It relies heavily on 'keys' to identify list items."
  },
  {
    id: 28,
    category: "Performance & Rendering",
    question: "Why is it an anti-pattern to use array index as a 'key' in lists?",
    answer: "If the list order changes (items added, removed, or sorted), the indices change. The reconciliation algorithm will map the old state to the wrong DOM nodes, causing visual bugs and unnecessary DOM mutations. Keys must be stable and unique.",
    codeSnippet: `// BAD: Index changes if items are unshifted or sorted
{items.map((item, index) => (
  <ListItem key={index} item={item} /> 
))}

// GOOD: Stable, unique ID from the data
{items.map(item => (
  <ListItem key={item.id} item={item} />
))}`
  },
  {
    id: 29,
    category: "Performance & Rendering",
    question: "What is the difference between the Render phase and the Commit phase?",
    answer: "The Render phase involves calling your component functions to generate the Virtual DOM. It is pure and can be interrupted. The Commit phase is where React actually applies the calculated changes to the Real browser DOM. It is synchronous and cannot be interrupted."
  },
  {
    id: 30,
    category: "Performance & Rendering",
    question: "What is React Fiber?",
    answer: "React Fiber is the modern reconciliation engine introduced in React 16. It breaks rendering work into chunks (fibers) and can pause, yield, and resume work. This incremental rendering prevents long tasks from blocking the main thread, keeping the app responsive."
  },
  {
    id: 31,
    category: "Performance & Rendering",
    question: "What triggers a component to re-render?",
    answer: "A component re-renders if: 1. Its state changes. 2. It receives new props (unless optimized). 3. Its parent component re-renders. 4. A Context it consumes changes."
  },
  {
    id: 32,
    category: "Performance & Rendering",
    question: "What is React.memo?",
    answer: "React.memo is a Higher Order Component used for performance optimization. It wraps a functional component and prevents it from re-rendering if its incoming props have not changed, performing a shallow comparison."
  },
  {
    id: 33,
    category: "Performance & Rendering",
    question: "What is Code Splitting and why is it important?",
    answer: "Code splitting is the process of breaking a large JavaScript bundle into smaller chunks. It improves the Initial Load Time by ensuring the user only downloads the code necessary for the current route, rather than the entire application at once."
  },
  {
    id: 34,
    category: "Performance & Rendering",
    question: "How do you implement Code Splitting in React?",
    answer: "Using `React.lazy()` combined with dynamic `import()`. You must wrap the lazy-loaded component in a `<Suspense>` boundary to display a fallback UI while the chunk downloads.",
    codeSnippet: `import React, { Suspense } from 'react';

// Dynamically import the component
const HeavyChart = React.lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Show spinner while HeavyChart.js is downloading */}
      <Suspense fallback={<div>Loading chart...</div>}>
        <HeavyChart />
      </Suspense>
    </div>
  );
}`
  },
  {
    id: 35,
    category: "Performance & Rendering",
    question: "What is the purpose of the <Suspense> component?",
    answer: "Suspense acts as a boundary that catches components that are 'suspended' (waiting for code to download or asynchronous data to fetch). It renders a provided `fallback` UI (like a spinner) until the suspended children are ready to render."
  },
  {
    id: 36,
    category: "Performance & Rendering",
    question: "What are Vendor Chunks?",
    answer: "Vendor chunks are separate JavaScript files generated by the bundler that contain third-party dependencies (like React or Lodash). Isolating them allows browsers to cache them long-term, since they change much less frequently than application code."
  },

  // --- Routing & SSR/CSR (37-41) ---
  {
    id: 37,
    category: "Routing & SSR",
    question: "What is the difference between <Link> and an <a> tag in React Router?",
    answer: "An <a> tag causes a full page reload, contacting the server and destroying the React application state. A <Link> intercepts the click, updates the URL via the HTML5 History API, and allows React Router to swap out components client-side without a reload.",
    codeSnippet: `// BAD: Causes a full page refresh
<a href="/about">About Us</a>

// GOOD: Intercepts click for fast client-side routing
import { Link } from 'react-router-dom';
<Link to="/about">About Us</Link>`
  },
  {
    id: 38,
    category: "Routing & SSR",
    question: "How do you implement a Protected Route?",
    answer: "By creating a wrapper component that checks the user's authentication status. If authenticated, it renders its `children`. If not, it returns a `<Navigate to='/login' />` component to redirect the user.",
    codeSnippet: `import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage in App.js:
// <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={user}><Dashboard /></ProtectedRoute>} />`
  },
  {
    id: 39,
    category: "Routing & SSR",
    question: "What is the fundamental difference between CSR and SSR?",
    answer: "In Client-Side Rendering (CSR), the browser downloads an empty HTML file and uses JavaScript to build the UI. In Server-Side Rendering (SSR), the server executes the React code and sends a fully populated HTML document to the browser, improving perceived performance and SEO."
  },
  {
    id: 40,
    category: "Routing & SSR",
    question: "What is Hydration?",
    answer: "Hydration is the process in SSR where React runs in the browser, examines the static HTML sent by the server, and attaches event listeners to it, turning it into a fully interactive React application."
  },
  {
    id: 41,
    category: "Routing & SSR",
    question: "Why do SPAs struggle with SEO, and how do you fix it?",
    answer: "SPAs (CSR) serve an empty HTML shell initially, which many search engine crawlers struggle to index effectively. You fix this by using SSR frameworks like Next.js, which provide search engines with fully rendered HTML content immediately."
  },

  // --- Testing & Async (42-46) ---
  {
    id: 42,
    category: "Testing & Async",
    question: "What is the philosophy behind React Testing Library (RTL)?",
    answer: "RTL enforces testing components the way users interact with them. Instead of testing implementation details (like internal state variables), you query the DOM for text, roles, and labels, and assert on what is visible to the user."
  },
  {
    id: 43,
    category: "Testing & Async",
    question: "Why are Integration Tests generally preferred over isolated Unit Tests for React components?",
    answer: "Testing components in complete isolation often requires heavy mocking of context and child components, creating brittle tests that don't reflect reality. Integration tests verify that multiple components wire together correctly, providing much higher confidence."
  },
  {
    id: 44,
    category: "Testing & Async",
    question: "Why can't you pass an async function directly to useEffect?",
    answer: "useEffect expects its callback to return either nothing or a cleanup function. An async function always returns a Promise. If React receives a Promise, it cannot properly clean up the effect, leading to errors."
  },
  {
    id: 45,
    category: "Testing & Async",
    question: "How do you prevent state updates on unmounted components after an API call?",
    answer: "Inside the useEffect, define a boolean flag (e.g., `let isMounted = true`) or use an `AbortController`. Return a cleanup function that sets the flag to false. After the fetch completes, only call state setters if the flag is still true.",
    codeSnippet: `useEffect(() => {
  let isMounted = true;

  fetchData().then(data => {
    // Only update state if the user hasn't navigated away!
    if (isMounted) {
      setData(data);
    }
  });

  return () => {
    isMounted = false; // Component is unmounting
  };
}, []);`
  },
  {
    id: 46,
    category: "Testing & Async",
    question: "How does Axios differ from the native Fetch API?",
    answer: "Axios automatically parses JSON responses, automatically throws errors for 4xx and 5xx HTTP statuses, provides request/response interceptors, and handles timeouts easier than the native Fetch API."
  },

  // --- Production & Best Practices (47-50) ---
  {
    id: 47,
    category: "Production & Best Practices",
    question: "What is Tree Shaking?",
    answer: "Tree shaking is a dead-code elimination process performed by bundlers. If you use ES6 module imports, the bundler can detect which exported functions are never actually used in your application and remove them from the final production bundle."
  },
  {
    id: 48,
    category: "Production & Best Practices",
    question: "Why are Skeleton screens preferred over loading spinners?",
    answer: "Skeleton screens improve perceived performance. By showing the user a wireframe of the layout that is about to load, it reduces the jarring visual shift when data arrives and makes the wait time feel psychologically shorter."
  },
  {
    id: 49,
    category: "Production & Best Practices",
    question: "How does React protect against Cross-Site Scripting (XSS)?",
    answer: "React automatically escapes all string variables embedded in JSX before rendering them to the DOM. This ensures that if a user injects a `<script>` tag, it is rendered as harmless text rather than executable code.",
    codeSnippet: `const maliciousInput = "<script>alert('Hacked!')</script>";

// 1. SAFE (Default behavior)
// Renders the literal string. Script does not execute.
<div>{maliciousInput}</div>

// 2. DANGEROUS
// Script executes! Only use if input is fully sanitized by DOMPurify.
<div dangerouslySetInnerHTML={{ __html: maliciousInput }} />`
  },
  {
    id: 50,
    category: "Production & Best Practices",
    question: "Why shouldn't you use a <div> for a clickable button element?",
    answer: "A <div> is not semantically a button. It lacks built-in accessibility features: it cannot be focused via the keyboard's Tab key, it cannot be activated via the Enter key, and screen readers will not announce it as actionable to visually impaired users. Always use <button>."
  }
];

export default interviewQuestions;
