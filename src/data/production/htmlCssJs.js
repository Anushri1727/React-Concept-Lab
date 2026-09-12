const htmlCssJsConcept = {
  id: "html-css-js",
  title: "Optimized HTML / CSS / JS",
  category: "Production & Best Practices",

  definition:
    "Optimizing core web technologies involves minification, compression, tree shaking, and deferring non-critical scripts to ensure the browser parses and executes the page as fast as possible.",

  syntax: "// Bundler configurations (Webpack, Vite, Terser)",

  useCase:
    "These optimizations are generally handled by your build tools (like `npm run build` in Vite or Create React App) before you deploy your application to a production server.",

  realLifeExamples: [
    "Tree Shaking: You import a massive utility library like Lodash, but only use one function. The bundler 'shakes' the tree and removes the 99% of unused Lodash code from your final JS file.",
  ],

  codeExamples: [
    {
      id: "tree-shaking",
      title: "1. Writing Tree-Shakeable Code",
      description:
        "How you import libraries dictates whether the bundler can optimize them.",
      code: `// BAD: Importing the entire library
// The bundler might include the entire lodash library in your bundle
// even if you only use one function.
import _ from 'lodash';
const result1 = _.debounce(() => {}, 1000);

// GOOD: Named imports
// Modern bundlers can easily see that you ONLY need the debounce function,
// and will strip out all other unused code from lodash.
import { debounce } from 'lodash';
const result2 = debounce(() => {}, 1000);

// BEST: Specific path imports (for older libraries or strict tree shaking)
import debounceFn from 'lodash/debounce';
const result3 = debounceFn(() => {}, 1000);`,
    }
  ],
  keyNotes: [
    "Minification removes whitespace, comments, and shortens variable names to reduce file size (handled by tools like Terser/esbuild).",
    "Compression (like Gzip or Brotli) is configured on the server to compress the text files before sending them over the network. The browser decompresses them instantly.",
    "Tree shaking requires using ES6 module syntax (import/export). CommonJS syntax (require/module.exports) is much harder for bundlers to analyze and shake.",
  ],
  commonMistakes: [
    {
      mistake: "Deploying the development build",
      wrong: "Running `npm start` (which runs unoptimized, bloated dev code) on a production server.",
      correct: "Always run `npm run build` to generate optimized, minified static files, and serve those files using a static server or CDN.",
    },
  ],

  interviewQuestions: [
    {
      question: "What is tree shaking in the context of JavaScript bundling?",
      answer:
        "Tree shaking is dead-code elimination. The bundler analyzes the import and export statements in your project. Any exported code that is never imported and used anywhere is 'shaken' off and removed from the final production bundle, reducing file size.",
    },
    {
      question: "What is the difference between Minification and Compression?",
      answer:
        "Minification alters the source code (removing spaces, shortening variables) so it takes up less space but remains valid JavaScript. Compression (like Gzip) is a mathematical algorithm applied by the server to shrink the file for transit over the network, which the browser then decompresses back to its minified state.",
    },
  ],
};

export default htmlCssJsConcept;
