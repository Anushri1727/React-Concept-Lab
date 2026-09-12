const customHooksConcept = {
  id: "custom-hooks",
  title: "Custom Hooks",
  category: "Advanced React",

  definition:
    "A Custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks. It allows you to extract component logic into reusable functions.",

  syntax: "function useMyCustomHook(param) { /* hook logic */ return data; }",

  useCase:
    "Use custom hooks to extract repetitive stateful logic (like fetching data, managing form inputs, or listening to window resizing) from components so it can be easily tested and reused across your application.",

  realLifeExamples: [
    "useFetch: A hook to fetch data from an API and handle loading/error states.",
    "useWindowSize: A hook that returns the current width and height of the browser window.",
    "useLocalStorage: A hook to easily read from and write to the browser's local storage.",
  ],

  codeExamples: [
    {
      id: "custom-hook-usefetch",
      title: "1. Creating a useFetch Hook",
      description:
        "This is a classic custom hook that encapsulates the logic for fetching data, managing the loading state, and catching errors.",
      code: `import { useState, useEffect } from 'react';

// 1. Create the hook (must start with "use")
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state when url changes
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]); // Re-run if URL changes

  // 2. Return the data needed by the component
  return { data, loading, error };
}

export default useFetch;`,
    },
    {
      id: "using-custom-hook",
      title: "2. Using the Custom Hook",
      description:
        "Now, components can easily fetch data without duplicating the complex fetch logic.",
      demoType: "basic",
      code: `import React from 'react';
// import useFetch from './useFetch'; 
// (assuming useFetch is imported from above)

function App() {
  // Using our custom hook!
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid gray' }}>
      <h2>User Profile</h2>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
    </div>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Custom Hooks MUST start with the word 'use' (e.g., useTheme, useForm). This allows React to automatically check them for violations of the Rules of Hooks.",
    "Two components using the same custom hook do NOT share state. Each call to a hook creates a completely isolated state.",
    "Custom hooks don't have to return specific signatures. They can return arrays, objects, or primitive values, just like normal functions.",
    "If a custom hook doesn't call any other built-in React hooks (like useState or useEffect), it's just a regular utility function, not a custom hook.",
  ],
  commonMistakes: [
    {
      mistake: "Not starting the hook name with 'use'",
      wrong: `function fetchUserData(url) {
  const [data, setData] = useState(null); // React throws an error or linter complains
  // ...
}`,
      correct: `function useFetchUserData(url) {
  const [data, setData] = useState(null);
  // ...
}`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is a custom hook in React?",
      answer:
        "A custom hook is a JavaScript function that starts with 'use' and calls other React hooks. It is a mechanism to reuse stateful logic between different components.",
    },
    {
      question: "Do two components using the same custom hook share state?",
      answer:
        "No. Custom hooks are a mechanism to reuse stateful *logic*, not state itself. Each time you call a custom hook, all state and effects inside of it are completely isolated.",
    },
    {
      question: "Why must custom hooks start with the word 'use'?",
      answer:
        "It is a convention required by React's linter rules. It allows React to ensure that the Rules of Hooks (like not calling hooks inside loops or conditions) are being followed automatically.",
    },
  ],
};

export default customHooksConcept;
