const suspenseConcept = {
  id: "suspense",
  title: "Suspense",
  category: "Performance & Rendering",

  definition:
    "Suspense is a React component that lets you 'wait' for some code or data to load, and declaratively specify a loading UI (a fallback) to show while waiting.",

  syntax: "<Suspense fallback={<Spinner />}> <SomeComponentThatMightSuspend /> </Suspense>",

  useCase:
    "Suspense is used primarily in two scenarios: 1) Waiting for lazy-loaded components (React.lazy) to download. 2) Waiting for asynchronous data fetching (when integrated with compatible libraries like Relay, SWR, React Query, or Next.js React Server Components).",

  realLifeExamples: [
    "Showing a skeleton screen while a user profile is being fetched from the database.",
    "Displaying a spinning loader while a heavy JavaScript chunk is being downloaded over the network.",
  ],

  codeExamples: [
    {
      id: "suspense-data-fetching",
      title: "1. Suspense for Data Fetching (Conceptual)",
      description:
        "While standard 'fetch' in useEffect doesn't trigger Suspense natively, modern data fetching libraries (like React Query or Next.js app router) can 'suspend' the component while data is loading.",
      code: `import React, { Suspense } from 'react';
// Assume useUserData is a hook from a Suspense-compatible library (like SWR or React Query)
// that throws a Promise when data is loading.

function UserProfile({ id }) {
  // If data is not ready, this hook "suspends" execution
  const user = useUserData(id); 
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>User Directory</h2>
      {/* 
        If ANY component inside Suspense "suspends" (needs to wait),
        the fallback UI is shown until the component is ready. 
      */}
      <Suspense fallback={<div>Loading User Profile...</div>}>
        <UserProfile id={1} />
      </Suspense>
    </div>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Suspense is a mechanism for orchestrating loading states, making it easier to avoid 'waterfalls' of loading spinners scattered throughout your UI.",
    "A single <Suspense> boundary can catch multiple suspending components. It won't reveal the content until ALL suspended children are ready.",
    "Under the hood, a component 'suspends' by literally throwing a Promise instead of an Error. React catches this Promise, renders the fallback, and waits for the Promise to resolve before trying to render the component again.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming standard useEffect fetching triggers Suspense",
      wrong: `// This will NOT trigger the Suspense fallback. 
// It will just render immediately with data=null.
function Comp() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch().then(setData) }, []);
  return data ? <div>{data}</div> : null;
}`,
      correct: "To use Suspense for data fetching, you must use a library configured for it (React Query with suspense:true, Relay, or React Server Components), which manages the Promise throwing mechanism for you.",
    },
  ],

  interviewQuestions: [
    {
      question: "What does the <Suspense> component do in React?",
      answer:
        "Suspense lets a component 'wait' for something before rendering (like code downloading or data fetching). While it's waiting, it displays a fallback UI provided via the 'fallback' prop.",
    },
    {
      question: "How does a component communicate to Suspense that it is not ready?",
      answer:
        "The component throws a Promise during the render phase. React catches this Promise, finds the nearest Suspense boundary above it, displays the fallback, and waits for the Promise to resolve. Once resolved, React re-renders the component.",
    },
    {
      question: "Can one Suspense boundary handle multiple lazy components?",
      answer:
        "Yes. If multiple sibling components suspend, a single parent Suspense boundary will show the fallback until ALL of the components are ready to render.",
    },
  ],
};

export default suspenseConcept;
