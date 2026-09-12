const reactTestingLibraryConcept = {
  id: "react-testing-library",
  title: "React Testing Library",
  category: "Testing & Async",

  definition:
    "React Testing Library (RTL) is a lightweight solution for testing React components. Its primary guiding principle is: 'The more your tests resemble the way your software is used, the more confidence they can give you.'",

  syntax: "import { render, screen } from '@testing-library/react'; render(<MyComponent />); expect(screen.getByText('Hello')).toBeInTheDocument();",

  useCase:
    "Use RTL to test that your React components render the correct UI and respond to user interactions (clicks, typing) as expected, without testing internal implementation details like state values.",

  realLifeExamples: [
    "Testing that a 'Submit' button is disabled until the user fills out all required form fields.",
    "Testing that an error message appears when an API call fails.",
  ],

  codeExamples: [
    {
      id: "rtl-basic-test",
      title: "1. Basic Component Test",
      description:
        "Testing a simple component by rendering it and querying the DOM exactly as a user would visually.",
      code: `import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toBeInTheDocument

// 1. The Component
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

// 2. The Test
test('toggles text when clicked', () => {
  // Render the component into the virtual testing DOM
  render(<ToggleButton />);

  // Find the button (User looks for a button that says 'OFF')
  const buttonElement = screen.getByText(/off/i);
  expect(buttonElement).toBeInTheDocument();

  // Simulate a user clicking the button
  fireEvent.click(buttonElement);

  // Assert the text changed (User sees 'ON')
  expect(screen.getByText(/on/i)).toBeInTheDocument();
  // Ensure 'OFF' is no longer there
  expect(screen.queryByText(/off/i)).not.toBeInTheDocument();
});`,
    }
  ],
  keyNotes: [
    "RTL strongly discourages testing implementation details. You cannot test component state directly; you must test the DOM output that the state produces.",
    "Prefer queries that reflect the user experience: getByRole, getByLabelText, and getByText.",
    "Use fireEvent or user-event to simulate user interactions.",
    "It works seamlessly with Jest (the test runner and assertion library usually configured by default in React apps).",
  ],
  commonMistakes: [
    {
      mistake: "Relying on test IDs too much",
      wrong: `<button data-testid="submit-btn">Submit</button> \n // test: screen.getByTestId('submit-btn')`,
      correct: `<button>Submit</button> \n // test: screen.getByRole('button', { name: /submit/i }) \n // This tests accessibility at the same time!`,
    },
  ],

  interviewQuestions: [
    {
      question: "What is the core philosophy of React Testing Library?",
      answer:
        "Its core philosophy is to test components in the way a user interacts with them. Instead of testing internal state or component instances (like older tools such as Enzyme did), RTL focuses on querying the DOM for accessibility roles, labels, and text, giving you confidence that the actual UI works.",
    },
  ],
};

export default reactTestingLibraryConcept;
