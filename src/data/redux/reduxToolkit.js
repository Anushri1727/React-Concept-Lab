const reduxToolkitConcept = {
  id: "redux-toolkit",
  title: "Redux Toolkit",
  category: "Redux / State Libraries",

  definition:
    "Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It provides tools to simplify common Redux use cases, including store setup, creating reducers, immutable update logic, and even creating entire 'slices' of state at once.",

  syntax: "const slice = createSlice({ name: 'feature', initialState, reducers: { action: (state) => { state.value = 1 } } })",

  useCase:
    "Use Redux Toolkit for all new Redux applications, and migrate existing Redux apps to it when possible. It eliminates the boilerplate of standard Redux and prevents common mistakes like accidental state mutation.",

  realLifeExamples: [
    "Managing complex user profiles with deeply nested data structures.",
    "Handling API data fetching, caching, and loading states automatically (via RTK Query).",
  ],

  codeExamples: [
    {
      id: "rtk-slice",
      title: "1. Creating a Slice",
      description:
        "createSlice automatically generates action creators and action types that correspond to the reducers and state.",
      code: `import { createSlice, configureStore } from '@reduxjs/toolkit';

// 1. CREATE A SLICE (Combines actions and reducer)
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit uses Immer under the hood!
      // You CAN "mutate" state here, and it safely produces a new immutable state.
      state.value += 1; 
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// 2. EXPORT ACTIONS
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 3. CONFIGURE STORE
// Automatically sets up Redux DevTools and useful middleware
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;`,
    },
    {
      id: "rtk-component",
      title: "2. Using RTK in a Component",
      description:
        "The React integration remains exactly the same as standard Redux, using useSelector and useDispatch.",
      demoType: "basic",
      code: `import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
// Import store and actions from the previous example
import store, { increment, incrementByAmount } from './store'; 

function CounterApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '2px solid purple' }}>
      <h2>RTK Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>
        + 1
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        + 5
      </button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "configureStore wraps createStore to provide simplified configuration options and good defaults (like Redux Thunk and DevTools).",
    "createSlice accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.",
    "Under the hood, createSlice uses a library called Immer. Immer lets you write code that 'mutates' state, but it intercepts the mutations and safely returns a new immutable object.",
    "RTK completely removes the need for switch statements and manual action constants.",
  ],
  commonMistakes: [
    {
      mistake: "Returning the 'mutated' state in an RTK reducer",
      wrong: `reducers: {
  increment: (state) => {
    state.value += 1;
    return state; // ERROR: Immer expects you to EITHER mutate OR return a new state, not both.
  }
}`,
      correct: `reducers: {
  increment: (state) => {
    state.value += 1; // Correct: Just mutate, don't return
  }
}`,
    },
  ],

  interviewQuestions: [
    {
      question: "Why should we use Redux Toolkit instead of plain Redux?",
      answer:
        "Redux Toolkit reduces boilerplate (no manual action types or switch statements), simplifies store setup, and prevents accidental state mutations by using Immer under the hood.",
    },
    {
      question: "What does the createSlice function do?",
      answer:
        "createSlice takes a name, initial state, and an object of reducer functions. It automatically generates action creators and action types for each reducer function, significantly reducing repetitive code.",
    },
    {
      question: "How does RTK handle immutable state updates?",
      answer:
        "RTK uses the Immer library inside createSlice and createReducer. Immer wraps the state in a Proxy, allowing developers to write code that appears to mutate the state directly, while actually producing a mathematically correct immutable update.",
    },
  ],
};

export default reduxToolkitConcept;
