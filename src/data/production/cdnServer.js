const cdnServerConcept = {
  id: "cdn-server",
  title: "CDN & Server",
  category: "Production & Best Practices",

  definition:
    "A Content Delivery Network (CDN) is a geographically distributed group of servers that work together to provide fast delivery of Internet content. In production, React applications (which compile down to static HTML/CSS/JS files) are typically hosted on CDNs rather than traditional single-location web servers.",

  syntax: "// Handled by hosting providers (Vercel, Netlify, AWS CloudFront, Cloudflare)",

  useCase:
    "Always deploy your static frontend assets to a CDN for production environments to ensure fast load times for global users and high availability.",

  realLifeExamples: [
    "A user in Japan visiting your site hosted on AWS US-East. Without a CDN, the request takes 300ms to travel across the world. With a CDN, the request hits a server in Tokyo in 10ms.",
  ],

  codeExamples: [
    {
      id: "cdn-architecture",
      title: "1. Mental Model: Static Hosting vs Server Hosting",
      description:
        "React apps are just static files. They don't need Node.js to run in production (unless using SSR).",
      code: `// --- THE WRONG WAY (For standard CSR React) ---
// Running 'npm start' or using a Node.js Express server just to serve static files.
// This is slow, expensive, and doesn't scale well globally.

// --- THE RIGHT WAY ---
// 1. Run the build command locally or in CI/CD:
//    npm run build
//
// 2. This produces a "dist" or "build" folder containing pure static files:
//    - index.html
//    - main.[hash].js
//    - style.[hash].css
//
// 3. Upload these files to a CDN (e.g., AWS S3 + CloudFront, Vercel, Netlify).
// 
// 4. The CDN distributes copies of these files to edge servers all around the world.`,
    }
  ],
  keyNotes: [
    "Single Page Applications (SPAs) require a specific server configuration: any request to a route that isn't a direct file (like /about or /dashboard) must be rewritten to serve index.html. The React Router then takes over on the client side.",
    "CDNs heavily rely on HTTP caching headers. Your HTML file should usually have a short cache time (so users get updates), while your JS/CSS files (which have unique hashes in their filenames) should be cached forever (Immutable).",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting fallback routing on the CDN/Server",
      wrong: "User goes directly to yoursite.com/dashboard and gets a 404 Not Found error from the CDN.",
      correct: "Configure the CDN/Server to rewrite all 404 requests to /index.html. React Router will then read the URL and display the Dashboard component.",
    },
  ],

  interviewQuestions: [
    {
      question: "Why should you host a React SPA on a CDN instead of a traditional web server?",
      answer:
        "Because a built React app consists entirely of static files. CDNs are heavily optimized for serving static files globally from edge servers closest to the user, providing significantly faster load times, better caching, and cheaper scaling than spinning up a traditional web server to serve the same files.",
    },
  ],
};

export default cdnServerConcept;
