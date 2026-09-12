const ssrPerformanceConcept = {
  id: "ssr-performance",
  title: "SSR & Performance",
  category: "SSR / CSR",

  definition:
    "While Server-Side Rendering (SSR) improves the initial visual load (First Contentful Paint), it comes with its own performance tradeoffs, particularly regarding Server Response Time (TTFB) and the Time to Interactive (TTI) during hydration.",

  syntax: "// Concept: FCP (First Contentful Paint) vs TTI (Time to Interactive)",

  useCase:
    "Understanding SSR performance metrics is crucial when scaling applications. You must balance the benefit of showing HTML quickly against the cost of server processing and the JavaScript hydration phase.",

  realLifeExamples: [
    "A complex SSR dashboard might show the UI instantly (fast FCP), but clicking a button might do nothing for 2 seconds while React boots up and hydrates the page (slow TTI).",
  ],

  codeExamples: [
    {
      id: "hydration-bottleneck",
      title: "1. The Hydration Bottleneck",
      description:
        "In traditional SSR, the user sees the page quickly, but the browser main thread is blocked while React parses the JS bundle and attaches event listeners to the entire HTML tree.",
      code: `// Visualizing the timeline of Traditional SSR:

// 1. User requests page
// 2. Server fetches data (Server busy)
// 3. Server renders React to HTML (Server busy)
// 4. Server sends HTML to Browser
// 5. Browser displays HTML => [ First Contentful Paint - User sees content ]
// 6. Browser downloads React & App JS bundle
// 7. React boots up and "Hydrates" the HTML (Browser Main Thread Blocked!)
// 8. Hydration complete => [ Time to Interactive - User can click things ]

// If the JS bundle is huge, the gap between step 5 and step 8 can be 
// several seconds, leading to a frustrating "Uncanny Valley" where the 
// page looks ready but doesn't respond to clicks.`,
    }
  ],
  keyNotes: [
    "TTFB (Time to First Byte): Slower in SSR than CSR because the server has to fetch data and generate HTML on the fly.",
    "FCP (First Contentful Paint): Much faster in SSR because the browser renders the HTML immediately without waiting for JS.",
    "TTI (Time to Interactive): Can be a problem in SSR (the 'Uncanny Valley') if the JS bundle is large, because hydration is an expensive, synchronous operation.",
    "Modern frameworks (React 18+, Next.js App Router) solve this using Streaming SSR and Selective Hydration, allowing parts of the page to hydrate independently.",
  ],
  commonMistakes: [
    {
      mistake: "Assuming SSR is automatically 'faster' overall",
      wrong: "Moving a slow CSR app to SSR and expecting it to magically fix all performance issues.",
      correct: "Understanding that SSR shifts the computation burden from the client's browser to your server, which requires better server infrastructure and careful management of the hydration phase.",
    },
  ],

  interviewQuestions: [
    {
      question: "What is the 'Uncanny Valley' problem in Server-Side Rendering?",
      answer:
        "It's the period between when the server-rendered HTML is displayed to the user (FCP) and when React finishes hydrating the page (TTI). During this time, the page looks fully loaded and interactive, but clicks and inputs won't work because the JavaScript event listeners haven't been attached yet.",
    },
    {
      question: "How does Streaming SSR improve performance?",
      answer:
        "Streaming SSR (available in React 18+) allows the server to send the HTML in chunks as it's generated, rather than waiting for the entire page to be ready. This improves TTFB. Combined with selective hydration, it allows critical parts of the UI to become interactive before the rest of the page has finished loading.",
    },
  ],
};

export default ssrPerformanceConcept;
