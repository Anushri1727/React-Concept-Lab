const zustandConcept = {
  id: "zustand",
  title: "Zustand",
  category: "Redux / State Libraries",

  definition:
    "Zustand is a small, fast, and scalable bearbones state-management solution using simplified flux principles. It has a comfy API based on hooks, isn't boilerplatey or opinionated, and solves common issues like the zombie child problem, react concurrency, and context loss.",

  syntax: "const useStore = create((set) => ({ count: 0, inc: () => set((state) => ({ count: state.count + 1 })) }))",

  useCase:
    "Use Zustand when you want global state management but find Redux/RTK too complex or heavy, or when Context API is causing too many re-renders. It's excellent for both small and large React applications.",

  realLifeExamples: [
    "A game state where multiple separate components need to update the player's score rapidly.",
    "A complex form spanning multiple routes where state needs to be preserved.",
    "A lightweight alternative to Redux for modern React apps.",
  ],

  codeExamples: [
    {
      id: "zustand-basic",
      title: "1. Creating and Using a Zustand Store",
      description:
        "Zustand combines the state and the actions into one single hook. No Context Providers are needed!",
      demoType: "basic",
      code: `import React from 'react';
import { create } from 'zustand';

// 1. CREATE THE STORE (Hook)
// 'set' function is used to merge state
const useBearStore = create((set) => ({
  bears: 0,
  // Actions are just functions inside the store
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// 2. USE IN COMPONENTS
function BearCounter() {
  // Select only the state you need to avoid unnecessary re-renders
  const bears = useBearStore((state) => state.bears);
  return <h2>{bears} around here ...</h2>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  
  return (
    <div>
      <button onClick={increasePopulation}>Add Bear</button>
      <button onClick={removeAllBears}>Remove All Bears</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', border: '2px solid orange' }}>
      <BearCounter />
      <Controls />
    </div>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Zustand does not require you to wrap your app in a Provider component (unlike Redux or Context).",
    "Actions in Zustand are just functions that you define inside the store alongside your state.",
    "You should selectively pick state from the store in your components (e.g., useStore(state => state.value)). If you don't provide a selector, the component will re-render on EVERY store change.",
    "The 'set' function automatically merges the object you return into the current state (shallow merge).",
  ],
  commonMistakes: [
    {
      mistake: "Not using a selector function, causing unnecessary re-renders",
      wrong: `// Component re-renders anytime ANYTHING in the store changes
const store = useBearStore(); 
const bears = store.bears;`,
      correct: `// Component ONLY re-renders when 'bears' changes
const bears = useBearStore((state) => state.bears);`,
    },
  ],

  interviewQuestions: [
    {
      question: "How does Zustand differ from Redux?",
      answer:
        "Zustand is significantly less boilerplate. It doesn't require Context Providers, reducers, or action types. State and actions are defined together in a single hook, and the API is much smaller.",
    },
    {
      question: "How does Zustand solve the re-render problem associated with the Context API?",
      answer:
        "Zustand allows components to subscribe only to specific pieces of state using selector functions. If a component selects only 'state.A', it will not re-render if 'state.B' changes. Context API forces a re-render of all consumers whenever the provider's value changes.",
    },
    {
      question: "Does Zustand support asynchronous actions?",
      answer:
        "Yes, very easily. Since actions are just normal JavaScript functions, you can simply use 'async/await' inside them and call 'set' whenever the data is ready.",
    },
  ],
};

export default zustandConcept;
