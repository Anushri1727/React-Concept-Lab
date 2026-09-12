const chunkingConcept = {
  id: "chunking",
  title: "Chunking",
  category: "Performance & Rendering",

  definition:
    "Chunking refers to the output of the code-splitting process. A 'chunk' is a specific file containing a fragment of your JavaScript code. Your bundler (Webpack, Vite) evaluates your dynamic imports and dependencies and emits these separate chunk files.",

  syntax: "// Handled entirely by the bundler configuration (e.g., vite.config.js or webpack.config.js)",

  useCase:
    "Understanding chunking is crucial for optimizing how browsers cache your application. By isolating vendor code (third-party node_modules) into a separate chunk, you ensure that users don't have to re-download React and other libraries every time you update your own application code.",

  realLifeExamples: [
    "Vendor Chunking: Separating all `node_modules` into a `vendor.js` chunk because libraries like React and Lodash change rarely, allowing long-term browser caching.",
    "App Chunk: The actual `main.js` chunk containing your specific business logic, which changes frequently.",
  ],

  codeExamples: [
    {
      id: "vite-chunking-config",
      title: "1. Configuring Manual Chunks (Vite/Rollup example)",
      description:
        "By default, bundlers try to chunk automatically. However, you can configure them to split specific libraries into their own chunks for better caching. This is an example of a vite.config.js file.",
      code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manual chunking logic
        manualChunks: (id) => {
          // If the module comes from node_modules...
          if (id.includes('node_modules')) {
            // ...and it's react or react-dom, put it in a 'react-vendor' chunk
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // Put all other third-party dependencies in a general 'vendor' chunk
            return 'vendor';
          }
        }
      }
    }
  }
});`,
    },
  ],
  keyNotes: [
    "Chunking is heavily reliant on HTTP caching. A browser will cache a chunk based on its filename (e.g., `vendor-[hash].js`). If the contents of the chunk don't change, the hash doesn't change, and the browser loads it from cache.",
    "If you bundle your app code and React together, every time you fix a typo in your app, the hash changes, and the user has to re-download React.",
    "Most modern frameworks (Next.js, Create React App, Vite templates) have excellent default chunking strategies out-of-the-box.",
  ],
  commonMistakes: [
    {
      mistake: "Ignoring chunk sizes",
      wrong: "Allowing a single chunk to grow to 5MB because dynamic imports weren't used.",
      correct: "Monitoring bundle sizes using tools like `webpack-bundle-analyzer` or `rollup-plugin-visualizer` to identify opportunities to break large chunks apart.",
    },
  ],

  interviewQuestions: [
    {
      question: "What is a 'vendor chunk' and why is it important?",
      answer:
        "A vendor chunk is a separate JavaScript file that contains third-party dependencies (like React, Redux, etc.) from node_modules. It is important for caching. Because third-party libraries change much less frequently than application code, isolating them allows the browser to cache them long-term, speeding up subsequent visits to the site.",
    },
    {
      question: "How do hashes in chunk filenames work for caching?",
      answer:
        "Bundlers add a content hash to the filename (e.g., app.a3b4c5.js). The browser is instructed to cache this file forever. If you update the code, the bundler generates a new hash (e.g., app.9f8e7d.js). The HTML file will request the new filename, bypassing the old cached version, while unchanged chunks retain their old hashes and are loaded from cache.",
    },
  ],
};

export default chunkingConcept;
