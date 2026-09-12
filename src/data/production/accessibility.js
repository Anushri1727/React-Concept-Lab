const accessibilityConcept = {
  id: "accessibility",
  title: "Accessibility (a11y)",
  category: "Production & Best Practices",

  definition:
    "Web accessibility ensures that websites and applications can be used by everyone, including people with disabilities (visual, auditory, motor, cognitive). In React, this means using semantic HTML, managing focus, and providing ARIA attributes.",

  syntax: "<img src='...' alt='Description' /> \n <button aria-expanded={isOpen}> Menu </button>",

  useCase:
    "Accessibility is a requirement for all production apps. It is not a feature you add on; it is a fundamental aspect of the user experience and often a legal requirement.",

  realLifeExamples: [
    "A blind user navigating your app using a screen reader.",
    "A user with limited motor control navigating a form using only the 'Tab' key on their keyboard.",
  ],

  codeExamples: [
    {
      id: "a11y-basics",
      title: "1. Accessible Forms and Buttons",
      description:
        "Demonstrating semantic HTML, focus management, and ARIA attributes.",
      code: `import React, { useRef, useEffect } from 'react';

function AccessibleForm() {
  const inputRef = useRef(null);

  // Focus management: If there's an error, automatically focus the input
  // so screen reader users know exactly where the problem is.
  useEffect(() => {
    // Simulate an error occurring
    const hasError = true; 
    if (hasError && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form>
      {/* 1. Semantic HTML & Labeling */}
      {/* 'htmlFor' (React's version of 'for') binds the label to the input via ID */}
      <div>
        <label htmlFor="email-input">Email Address</label>
        <input 
          id="email-input" 
          type="email" 
          ref={inputRef}
          aria-describedby="email-hint" // Links input to the hint text below
          aria-invalid="true" // Tells screen reader the input has an error
        />
        <span id="email-hint" style={{ color: 'red' }}>
          Please enter a valid email.
        </span>
      </div>

      {/* 2. Accessible Buttons */}
      {/* Never use a <div> with an onClick for a button! It won't be focusable by keyboard. */}
      <button type="button" onClick={() => alert('Clicked!')}>
        Submit
      </button>

      {/* If an icon is used as a button, it MUST have an aria-label */}
      <button type="button" aria-label="Close dialog">
        X
      </button>
    </form>
  );
}

export default AccessibleForm;`,
    }
  ],
  keyNotes: [
    "Semantic HTML (using <button>, <nav>, <main>) gives you 80% of accessibility for free. Avoid using <div> for clickable elements.",
    "React uses camelCase for most attributes, but ARIA attributes are an exception: use hyphenated aria-* (e.g., aria-label, not ariaLabel).",
    "Install the `eslint-plugin-jsx-a11y` package. It will automatically warn you in your code editor if you break accessibility rules (like an <img> missing an alt tag).",
  ],
  commonMistakes: [
    {
      mistake: "Creating fake buttons with divs",
      wrong: `<div onClick={handleClick} className="btn">Submit</div>`,
      correct: `<button onClick={handleClick} className="btn">Submit</button> \n // Divs cannot be focused with the Tab key, nor do they trigger when pressing 'Enter', making them unusable for keyboard users.`,
    },
  ],

  interviewQuestions: [
    {
      question: "Why should you use an actual <button> element instead of a <div> with an onClick handler?",
      answer:
        "An actual <button> comes with built-in accessibility features: it can be focused using the keyboard (Tab key), it can be activated using the Enter or Spacebar keys, and screen readers correctly announce it as a button. A <div> has none of these behaviors, making the app unusable for keyboard-only or screen reader users.",
    },
    {
      question: "What is the purpose of ARIA attributes?",
      answer:
        "Accessible Rich Internet Applications (ARIA) attributes are used to provide additional context to assistive technologies (like screen readers) when standard HTML elements aren't enough. For example, indicating that a custom dropdown menu is 'expanded' or 'collapsed' (aria-expanded).",
    },
  ],
};

export default accessibilityConcept;
