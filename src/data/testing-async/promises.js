const promisesConcept = {
  id: "promises",
  title: "Promises",
  category: "Testing & Async",

  definition:
    "A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to attach callbacks instead of passing callbacks into a function.",

  syntax: "const myPromise = new Promise((resolve, reject) => { /* async code */ }); myPromise.then(val => console.log(val)).catch(err => console.error(err));",

  useCase:
    "Promises are the foundation of modern asynchronous JavaScript, used heavily in React for data fetching, timeouts, and interacting with browser APIs.",

  realLifeExamples: [
    "Fetching data from a server: The server takes time to respond, so 'fetch' returns a Promise.",
    "Reading a file using the File API.",
  ],

  codeExamples: [
    {
      id: "promise-async-await",
      title: "1. Promises vs Async/Await",
      description:
        "async/await is just syntactic sugar over Promises, making asynchronous code look synchronous.",
      code: `import React, { useState, useEffect } from 'react';

function PromiseDemo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. Using .then() and .catch()
    const fetchWithThen = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log("Using .then(): ", json))
        .catch(error => console.error("Error: ", error));
    };

    // 2. Using async/await (Preferred modern approach)
    const fetchWithAsync = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const json = await response.json();
        console.log("Using async/await: ", json);
        setData(json);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchWithThen();
    fetchWithAsync();
  }, []);

  return <div>{data ? data.title : 'Loading...'}</div>;
}

export default PromiseDemo;`,
    }
  ],
  keyNotes: [
    "A Promise is in one of three states: pending, fulfilled, or rejected.",
    "When using async/await, always wrap your await calls in a try...catch block to handle rejections (errors).",
    "Promises are eager. As soon as a Promise is created, the asynchronous operation begins executing immediately.",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting to return a Promise inside a .then chain",
      wrong: `fetch(url).then(res => { res.json(); }).then(data => console.log(data)); // data is undefined`,
      correct: `fetch(url).then(res => { return res.json(); }).then(data => console.log(data)); // or use implicit return`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is a Promise in JavaScript?",
      answer:
        "An object representing the eventual completion or failure of an asynchronous operation.",
    },
  ],
};

export default promisesConcept;
