const apiUseEffectConcept = {
  id: "api-useEffect",
  title: "API with useEffect",
  category: "Testing & Async",

  definition:
    "The most standard pattern for fetching data in basic React applications is initiating an asynchronous API call inside a useEffect hook when a component mounts or when specific dependencies change.",

  syntax: "useEffect(() => { fetchData() }, [])",

  useCase:
    "Use this pattern when you need to fetch data from a backend server to populate your component's UI, and you are not using a dedicated data-fetching library (like React Query or Apollo).",

  realLifeExamples: [
    "Fetching a list of products to display on a storefront page.",
    "Fetching user details when the userId prop changes.",
  ],

  codeExamples: [
    {
      id: "api-fetch-useeffect",
      title: "1. The Standard Fetch Pattern",
      description:
        "A robust pattern for fetching data that includes loading states, error handling, and avoiding state updates on unmounted components.",
      demoType: "basic",
      code: `import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Variable to track if component is still mounted
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const data = await response.json();
        
        // Only update state if the component is still mounted
        if (isMounted) {
          setUsers(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    // Cleanup function: runs if component unmounts before fetch completes
    return () => {
      isMounted = false;
    };
  }, []); // Empty array = run on mount only

  if (loading) return <div>Loading users...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UserList;`,
    }
  ],
  keyNotes: [
    "You cannot make the useEffect callback function itself async (e.g., useEffect(async () => {})). You must define an async function inside it and call it.",
    "Always handle the three states of an API call: Loading, Success (data), and Error.",
    "Handling unmounted components (the 'isMounted' pattern or AbortController) is crucial to prevent memory leaks and React warnings if a user navigates away before the API call finishes.",
  ],
  commonMistakes: [
    {
      mistake: "Making useEffect async directly",
      wrong: `useEffect(async () => {
  const res = await fetch(url);
  // React expects useEffect to return nothing, or a cleanup function. 
  // An async function returns a Promise, causing bugs.
}, []);`,
      correct: `useEffect(() => {
  const getData = async () => {
    const res = await fetch(url);
  };
  getData();
}, []);`,
    },
  ],

  interviewQuestions: [
    {
      question: "Why can't you pass an async function directly to useEffect?",
      answer:
        "useEffect expects its callback to either return nothing, or return a cleanup function. An async function always returns a Promise. If React receives a Promise instead of a cleanup function, it will cause errors when attempting to unmount the component.",
    },
    {
      question: "How do you prevent 'Can't perform a React state update on an unmounted component' warnings when fetching data?",
      answer:
        "By using a cleanup function in useEffect. You can either use a boolean flag (like let isMounted = true) and set it to false in the cleanup, checking it before setting state, or use an AbortController to cancel the fetch request entirely on unmount.",
    },
  ],
};

export default apiUseEffectConcept;
