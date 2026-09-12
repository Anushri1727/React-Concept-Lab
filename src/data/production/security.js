const securityConcept = {
  id: "security",
  title: "React Security",
  category: "Production & Best Practices",

  definition:
    "Securing a React application involves protecting the client-side code against vulnerabilities like Cross-Site Scripting (XSS), securely handling authentication tokens, and ensuring sensitive data is not exposed in the source code.",

  syntax: "// Best practices implementation (No specific React syntax)",

  useCase:
    "Security practices must be integrated into every production application, especially when handling user data, payments, or authentication.",

  realLifeExamples: [
    "Sanitizing user-submitted comments before rendering them to prevent a malicious user from injecting a script that steals session cookies.",
    "Storing JWT tokens in HttpOnly cookies instead of localStorage to prevent XSS attacks from reading them.",
  ],

  codeExamples: [
    {
      id: "xss-protection",
      title: "1. Cross-Site Scripting (XSS) Protection",
      description:
        "React automatically protects against XSS by escaping strings before rendering them. However, you can bypass this protection using dangerouslySetInnerHTML, which must be done carefully.",
      code: `import React from 'react';
// DOMPurify is a library that sanitizes HTML strings to remove malicious scripts
import DOMPurify from 'dompurify'; 

function BlogComment({ userComment }) {
  // Imagine userComment is: "<img src=x onerror=alert('Hacked!') />"

  // 1. SAFE (Default React behavior)
  // React converts the HTML tags into literal strings. 
  // It renders the actual text "<img src=x..." on the screen. The script does not run.
  const safeText = <div>{userComment}</div>;

  // 2. VERY DANGEROUS 
  // We tell React to render it as actual HTML. The script WILL run!
  const dangerousHTML = (
    <div dangerouslySetInnerHTML={{ __html: userComment }} />
  );

  // 3. SAFE & RENDERED HTML
  // If we MUST render HTML (e.g., from a rich text editor), we MUST sanitize it first.
  const cleanHTML = DOMPurify.sanitize(userComment);
  const safeRenderedHTML = (
    <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
  );

  return (
    <div>
      <h3>Comment:</h3>
      {safeRenderedHTML}
    </div>
  );
}

export default BlogComment;`,
    }
  ],
  keyNotes: [
    "React automatically escapes string variables placed in JSX, preventing basic XSS attacks.",
    "Never store sensitive data (API keys, passwords, secrets) in your React code or .env files that are exposed to the client (e.g., REACT_APP_SECRET_KEY). Anything shipped to the browser can be read by the user.",
    "When implementing authentication, prefer storing tokens in HttpOnly, secure cookies rather than localStorage. LocalStorage can be read by any JavaScript running on the page (making it vulnerable to XSS).",
  ],
  commonMistakes: [
    {
      mistake: "Using dangerouslySetInnerHTML without sanitization",
      wrong: `<div dangerouslySetInnerHTML={{ __html: userInput }} />`,
      correct: `<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />`,
    },
    {
      mistake: "Putting secrets in React environment variables",
      wrong: `const dbPassword = process.env.REACT_APP_DB_PASSWORD; // This will be hardcoded into the JS bundle!`,
      correct: `React apps should only talk to your backend API. Your backend API holds the database password securely on the server.`,
    },
  ],

  interviewQuestions: [
    {
      question: "How does React prevent XSS (Cross-Site Scripting) attacks?",
      answer:
        "React automatically escapes values embedded in JSX before rendering them to the DOM. If a user inputs a malicious script tag, React will convert it to a harmless string, preventing the browser from executing it as code.",
    },
    {
      question: "Is it safe to store API keys or database passwords in React environment variables?",
      answer:
        "No, never. React applications are compiled into static JavaScript files that are downloaded and executed in the user's browser. Any environment variables prefixed with REACT_APP_ (or VITE_) are hardcoded into that JavaScript file and are visible to anyone who inspects the source code.",
    },
  ],
};

export default securityConcept;
