const reduxConcept = {
  id: "redux",
  title: "Redux",
  category: "Redux / State Libraries",

  definition:
    "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently across different environments and are easy to test. It centralizes your application's state and logic into a single global store.",

  syntax: "const store = createStore(reducer); store.dispatch({ type: 'ACTION_TYPE', payload: data });",

  useCase:
    "Use Redux when you have complex state that needs to be shared across many components, when state is updated frequently over time, or when you need robust debugging capabilities (like time-travel debugging).",

  realLifeExamples: [
    "An e-commerce shopping cart accessible from any page.",
    "User authentication state and permissions used throughout an application.",
    "Caching fetched API data to avoid redundant network requests.",
  ],

  codeExamples: [
    {
      id: "redux-basic",
      title: "1. Core Redux Architecture",
      description:
        "The core concepts of Redux: Actions (what happened), Reducers (how state changes), and the Store (holds the state).",
      code: `import { createStore } from 'redux';

// 1. ACTION TYPES (Constants)
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 2. ACTION CREATORS (Functions that return action objects)
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 3. INITIAL STATE
const initialState = {
  count: 0
};

// 4. REDUCER (Pure function: (state, action) => newState)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state; // Always return current state for unknown actions
  }
};

// 5. STORE (Holds the state, uses the reducer)
const store = createStore(counterReducer);

// 6. SUBSCRIBING AND DISPATCHING (Usage)
store.subscribe(() => console.log('State updated:', store.getState()));

store.dispatch(increment()); // State updated: { count: 1 }
store.dispatch(increment()); // State updated: { count: 2 }
store.dispatch(decrement()); // State updated: { count: 1 }

export default store;`,
    },
    {
      id: "react-redux",
      title: "2. Connecting React to Redux",
      description:
        "Using the 'react-redux' library to connect components to the Redux store using hooks (useSelector and useDispatch).",
      demoType: "basic",
      code: `import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { increment, decrement } from './store'; // Assuming store is defined as above

// A connected component
function CounterComponent() {
  // Read data from the store
  const count = useSelector(state => state.count);
  
  // Get the dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid gray' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

// The root component wraps the app in a Provider
function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Redux has three core principles: Single source of truth (one store), State is read-only (update via actions), and Changes are made with pure functions (reducers).",
    "Actions must have a 'type' property. Any other data is usually put in a 'payload' property.",
    "Reducers MUST be pure functions. They cannot mutate the existing state; they must return a new state object.",
    "While powerful, standard Redux requires a lot of boilerplate code (action types, creators, switch statements).",
  ],
  commonMistakes: [
    {
      mistake: "Mutating state directly in a reducer",
      wrong: `const reducer = (state, action) => {
  if (action.type === 'ADD_USER') {
    state.users.push(action.payload); // Mutates the existing array!
    return state; // React won't re-render because the object reference is the same
  }
}`,
      correct: `const reducer = (state, action) => {
  if (action.type === 'ADD_USER') {
    // Create a new array and spread the old ones
    return { ...state, users: [...state.users, action.payload] };
  }
}`,
    },
  ],

  interviewQuestions: [
    {
      question: "What are the core principles of Redux?",
      answer:
        "1) Single source of truth (the global store). 2) State is read-only (you only dispatch actions to change it). 3) Changes are made with pure functions (reducers take current state and action, and return a new state).",
    },
    {
      question: "What is the difference between an Action and a Reducer?",
      answer:
        "An Action is a plain JavaScript object that describes 'what happened' (e.g., USER_LOGGED_IN). A Reducer is a function that decides 'how the state changes' in response to that action.",
    },
    {
      question: "Why must reducers be pure functions?",
      answer:
        "Because Redux relies on object identity comparisons (shallow equality) to determine if the state has changed. If you mutate the state directly, the object reference stays the same, and React components won't know they need to re-render. Pure functions guarantee a new object is returned when state changes.",
    },
  ],
};

export default reduxConcept;
