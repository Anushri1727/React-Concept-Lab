const integrationTestingConcept = {
  id: "integration-testing",
  title: "Integration Testing",
  category: "Testing & Async",

  definition:
    "Integration testing verifies that different parts of your application (multiple components, hooks, context, state management) work together correctly. In React, this often means rendering a parent component and interacting with its children.",

  syntax: "// Similar syntax to unit tests, but testing larger workflows.",

  useCase:
    "Integration tests provide the highest confidence in a React app. Use them to test user flows, such as filling out a multi-step form, adding items to a cart, or navigating between views.",

  realLifeExamples: [
    "Rendering a <LoginForm /> wrapped in an <AuthProvider />, simulating typing credentials, clicking submit, and verifying the UI changes to a 'Welcome' state.",
  ],

  codeExamples: [
    {
      id: "integration-test-flow",
      title: "1. Integration Testing a Component Tree",
      description:
        "Testing how a parent component manages state that affects its children.",
      code: `import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// The Components
const ChildDisplay = ({ count }) => <div>Total items: {count}</div>;
const ChildControls = ({ onAdd }) => <button onClick={onAdd}>Add Item</button>;

const ParentApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ChildDisplay count={count} />
      <ChildControls onAdd={() => setCount(c => c + 1)} />
    </div>
  );
};

// The Integration Test
test('clicking Add Item updates the total display', () => {
  // We render the Parent, which integrates the Display and Controls
  render(<ParentApp />);

  // Assert initial state
  expect(screen.getByText('Total items: 0')).toBeInTheDocument();

  // Interact with the Control child
  const addButton = screen.getByRole('button', { name: /add item/i });
  fireEvent.click(addButton);
  fireEvent.click(addButton);

  // Assert the Display child updated correctly
  expect(screen.getByText('Total items: 2')).toBeInTheDocument();
});`,
    }
  ],
  keyNotes: [
    "Integration tests are generally favored over unit testing individual components in modern React testing philosophies (like Kent C. Dodds' Testing Trophy).",
    "You may need to mock global providers (like Redux <Provider> or React Router <BrowserRouter>) by wrapping your rendered component in a custom test render function.",
    "Integration tests are slower than unit tests but catch significantly more bugs.",
  ],
  commonMistakes: [
    {
      mistake: "Mocking too much",
      wrong: "Mocking every child component when testing a parent component.",
      correct: "Let the child components render normally during an integration test to ensure the actual integration between parent and child works.",
    },
  ],

  interviewQuestions: [
    {
      question: "Why are integration tests often preferred over component unit tests in React?",
      answer:
        "Because testing a component in complete isolation often requires mocking its children and context, which can lead to tests that pass even when the app is broken. Integration tests verify that the 'plumbing' between components actually works, providing much higher confidence.",
    },
  ],
};

export default integrationTestingConcept;
