const unitTestingConcept = {
  id: "unit-testing",
  title: "Unit Testing",
  category: "Testing & Async",

  definition:
    "Unit testing involves testing individual units of code (usually functions or single, isolated components) to ensure they work correctly in isolation from the rest of the application.",

  syntax: "test('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); });",

  useCase:
    "Use unit tests to verify the logic of helper functions, custom hooks, reducers, and isolated presentational components. They are the fastest and cheapest tests to run.",

  realLifeExamples: [
    "Testing a utility function that formats currency (e.g., formatCurrency(1000) returns '$1,000.00').",
    "Testing a Redux reducer to ensure it handles the 'ADD_ITEM' action correctly.",
    "Testing a simple UI component (like an Avatar) to ensure it falls back to initials if an image URL is missing.",
  ],

  codeExamples: [
    {
      id: "unit-test-function",
      title: "1. Unit Testing a Pure Function",
      description:
        "The most basic unit test using Jest to verify a helper function.",
      code: `// 1. The function (utils/math.js)
export function calculateDiscount(price, discountPercentage) {
  if (price < 0 || discountPercentage < 0) return 0;
  if (discountPercentage > 100) return 0;
  
  const discountAmount = price * (discountPercentage / 100);
  return price - discountAmount;
}

// 2. The Unit Test (utils/math.test.js)
import { calculateDiscount } from './math';

describe('calculateDiscount', () => {
  test('calculates 10% discount correctly', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  test('returns 0 for negative prices', () => {
    expect(calculateDiscount(-50, 10)).toBe(0);
  });

  test('handles 100% discount', () => {
    expect(calculateDiscount(200, 100)).toBe(0);
  });
});`,
    }
  ],
  keyNotes: [
    "Unit tests should not have side effects. They should not make real network requests or touch a real database.",
    "If a function relies on external dependencies (like an API), you should 'mock' those dependencies during the unit test.",
    "Jest is the standard test runner for React. It provides the describe, test, and expect functions.",
  ],
  commonMistakes: [
    {
      mistake: "Writing unit tests for highly coupled code",
      wrong: "Trying to unit test a component that makes 3 API calls and reads from the router, resulting in massive, brittle mocks.",
      correct: "Isolating the logic into pure functions or custom hooks to make unit testing easy, and using Integration Tests for the coupled component.",
    },
  ],

  interviewQuestions: [
    {
      question: "What is the difference between a Unit Test and an Integration Test?",
      answer:
        "A Unit Test verifies a single, isolated piece of code (like a pure function or an isolated component). An Integration Test verifies that multiple units (like several components and a data store) work together correctly.",
    },
  ],
};

export default unitTestingConcept;
