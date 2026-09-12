const timersConcept = {
  id: "timers",
  title: "Timers",
  category: "Testing & Async",

  definition:
    "Timers in JavaScript (setTimeout, setInterval) execute a function after a specified delay or repeatedly at a specified interval. In React, managing timers requires care to prevent memory leaks and unexpected behavior during re-renders.",

  syntax: "const id = setTimeout(callback, delay); clearTimeout(id);",

  useCase:
    "Use timers for debouncing user input, creating auto-advancing carousels, showing temporary notifications, or periodically polling a server for new data.",

  realLifeExamples: [
    "A toast notification that disappears automatically after 3 seconds.",
    "A stopwatch component that updates every 100 milliseconds.",
  ],

  codeExamples: [
    {
      id: "timer-cleanup",
      title: "1. Timers and Cleanup in useEffect",
      description:
        "The most critical aspect of timers in React is clearing them when the component unmounts or when the effect re-runs.",
      code: `import React, { useState, useEffect } from 'react';

function ToastNotification({ message, onClose }) {
  useEffect(() => {
    // Start the timer when the component mounts
    const timerId = setTimeout(() => {
      onClose(); // Auto-close after 3 seconds
    }, 3000);

    // CRITICAL: Cleanup function runs when component unmounts
    // If we don't do this, and the user manually closes the toast early,
    // the timer will still fire 3 seconds later, causing errors!
    return () => {
      clearTimeout(timerId);
    };
  }, [onClose]);

  return (
    <div style={{ background: 'black', color: 'white', padding: '10px' }}>
      {message}
      <button onClick={onClose} style={{ marginLeft: '10px' }}>X</button>
    </div>
  );
}

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <ToastNotification 
          message="Saved successfully!" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </div>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Always store the ID returned by setTimeout/setInterval so you can pass it to clearTimeout/clearInterval.",
    "Timers in React should almost always be set up inside a useEffect hook.",
    "If a timer depends on state or props, ensure those variables are in the useEffect dependency array.",
  ],
  commonMistakes: [
    {
      mistake: "Setting intervals directly in the render body",
      wrong: `function Clock() {
  const [time, setTime] = useState(0);
  // This creates a NEW interval every time the component renders, causing a memory leak cascade!
  setInterval(() => setTime(t => t + 1), 1000); 
  return <div>{time}</div>;
}`,
      correct: "Always put setInterval inside useEffect and provide a cleanup function.",
    },
  ],

  interviewQuestions: [
    {
      question: "Why is it important to clear timers in React?",
      answer:
        "If a component unmounts but a timer is still running, the timer's callback will eventually fire. If that callback tries to update the state of the unmounted component, React will throw an error, and the lingering timer will cause a memory leak.",
    },
  ],
};

export default timersConcept;
