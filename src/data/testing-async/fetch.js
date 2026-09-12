const fetchConcept = {
  id: "fetch",
  title: "Fetch API",
  category: "Testing & Async",

  definition:
    "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.",

  syntax: "fetch('https://api.example.com/data').then(res => res.json()).then(data => console.log(data));",

  useCase:
    "Use fetch for making standard HTTP requests (GET, POST, PUT, DELETE) in modern browsers without needing external libraries.",

  realLifeExamples: [
    "Submitting a form (POST request) to a backend server.",
    "Retrieving a list of users (GET request) from a public API.",
  ],

  codeExamples: [
    {
      id: "fetch-post-request",
      title: "1. Making a POST Request",
      description:
        "How to send JSON data to a server using the Fetch API.",
      code: `import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      const data = await response.json();
      console.log('Success:', data);
      setStatus('success');
      setName('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        disabled={status === 'submitting'}
      />
      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Create User'}
      </button>
      {status === 'success' && <p>User created successfully!</p>}
      {status === 'error' && <p style={{color:'red'}}>Failed to create user.</p>}
    </form>
  );
}

export default UserForm;`,
    }
  ],
  keyNotes: [
    "Fetch is built into modern browsers; no installation is required.",
    "Fetch only rejects a promise on network failure (like DNS lookup failure). It does NOT reject on HTTP error statuses (like 404 or 500). You must check response.ok manually.",
    "By default, fetch won't send or receive any cookies from the server. You must set the credentials option to 'include'.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming catch() handles HTTP 404/500 errors",
      wrong: `fetch('/bad-url').then(res => res.json()).catch(err => console.log("Caught 404!")); // Won't catch a 404!`,
      correct: `fetch('/bad-url').then(res => {
  if (!res.ok) throw new Error('HTTP error ' + res.status);
  return res.json();
}).catch(err => console.log(err));`,
    },
  ],

  interviewQuestions: [
    {
      question: "Does a 404 response trigger the .catch() block in a fetch request?",
      answer:
        "No. The fetch Promise only rejects if the request failed to complete (e.g., network disconnected, CORS issue). For HTTP errors like 404 or 500, the Promise still resolves, but the 'response.ok' property will be false.",
    },
  ],
};

export default fetchConcept;
