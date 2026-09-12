const stylingLibrariesConcept = {
  id: "styling-libraries",
  title: "Styling Libraries",
  category: "Production & Best Practices",

  definition:
    "React does not have an opinion on how you style components. In production, teams choose between various styling paradigms to handle scoping, maintainability, and performance.",

  syntax: "import './styles.css'; // OR \n import styles from './Button.module.css'; // OR \n const Btn = styled.button`color: red;`; // OR \n <div className='text-red-500'>",

  useCase:
    "Choose a styling solution based on your team's familiarity, project size, and performance requirements.",

  realLifeExamples: [
    "CSS Modules: Best for teams who love writing traditional CSS but want it scoped to components.",
    "Tailwind CSS: Best for rapid prototyping and maintaining small bundle sizes in massive apps.",
    "Styled-Components: Best for highly dynamic styles based on component props.",
  ],

  codeExamples: [
    {
      id: "styling-approaches",
      title: "1. The 4 Main Styling Paradigms",
      description:
        "Comparing standard CSS, CSS Modules, CSS-in-JS, and Utility-First CSS.",
      code: `import React from 'react';

// ----------------------------------------------------
// 1. STANDARD CSS (Global scope - prone to collisions)
import './global.css'; 
const Standard = () => <div className="card">Standard CSS</div>;

// ----------------------------------------------------
// 2. CSS MODULES (Locally scoped CSS)
import styles from './Card.module.css';
// The bundler hashes the class name: e.g., class="Card_card__3fX"
const Modules = () => <div className={styles.card}>CSS Modules</div>;

// ----------------------------------------------------
// 3. CSS-in-JS (Styled Components / Emotion)
// Requires a runtime library to inject styles into the document <head>.
// Great for passing props to styles.
import styled from 'styled-components';
const StyledCard = styled.div\`
  padding: 20px;
  background: \${props => props.dark ? 'black' : 'white'};
  color: \${props => props.dark ? 'white' : 'black'};
\`;
const CssInJs = () => <StyledCard dark>Styled Components</StyledCard>;

// ----------------------------------------------------
// 4. UTILITY-FIRST CSS (Tailwind CSS)
// No custom CSS written. You compose utility classes.
// Very popular in modern React (Next.js default).
const Utility = () => (
  <div className="p-5 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md">
    Tailwind CSS
  </div>
);`,
    }
  ],
  keyNotes: [
    "CSS-in-JS libraries (like styled-components) have a performance cost because they parse and generate CSS at runtime in the browser. They are often discouraged in newer React architectures like Server Components.",
    "Utility-first (Tailwind) generates a tiny, highly optimized static CSS file containing only the classes you actually used.",
    "CSS Modules provide the perfect middle ground: you write normal CSS, but the bundler ensures the class names are globally unique.",
  ],
  commonMistakes: [
    {
      mistake: "Using Global CSS for everything in a large app",
      wrong: "Defining `.btn` in an `App.css` file and hoping no one else uses the same class name in another component.",
      correct: "Use CSS Modules, Styled Components, or Tailwind to scope styles locally to the component.",
    },
  ],

  interviewQuestions: [
    {
      question: "What problem do CSS Modules solve in React?",
      answer:
        "They solve the problem of global namespace collisions in CSS. By importing CSS as a module, the bundler generates unique class names (e.g., adding hashes) so that styles defined for a Button component don't accidentally leak and affect a Modal component.",
    },
  ],
};

export default stylingLibrariesConcept;
