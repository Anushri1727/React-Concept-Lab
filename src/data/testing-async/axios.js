const axiosConcept = {
  id: "axios",
  title: "Axios",
  category: "Testing & Async",

  definition:
    "Axios is a popular, promise-based HTTP client for the browser and Node.js. It provides a more robust and convenient API compared to the native Fetch API.",

  syntax: "axios.get('https://api.example.com/data').then(res => console.log(res.data));",

  useCase:
    "Use Axios when you need advanced features like automatic JSON data transformation, request/response interceptors, automatic CSRF protection, or an easier way to cancel requests.",

  realLifeExamples: [
    "Setting a global base URL and authentication token for all API requests in an application.",
    "Automatically redirecting a user to the login page if any API request returns a 401 Unauthorized status (using interceptors).",
  ],

  codeExamples: [
    {
      id: "axios-interceptors",
      title: "1. Axios Interceptors",
      description:
        "Interceptors allow you to run your code or modify the request/response before it is handled by then or catch.",
      code: `import axios from 'axios';

// 1. Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

// 2. Request Interceptor: Add Auth Token to every request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Response Interceptor: Global error handling
apiClient.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // e.g., window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;`,
    }
  ],
  keyNotes: [
    "Unlike Fetch, Axios automatically throws an error (rejects the promise) for HTTP error statuses like 404 or 500.",
    "Axios automatically transforms JSON data. You don't need to call .json() on the response.",
    "The actual response data is found on the 'data' property of the response object (e.g., res.data).",
  ],
  commonMistakes: [
    {
      mistake: "Forgetting to access the .data property",
      wrong: `const res = await axios.get('/users');
setUsers(res); // Sets the whole axios response object, not just the payload`,
      correct: `const res = await axios.get('/users');
setUsers(res.data); // Correct`,
    },
  ],

  interviewQuestions: [
    {
      question: "Why might someone choose Axios over the native Fetch API?",
      answer:
        "Axios provides several quality-of-life improvements: 1) Automatic JSON data transformation. 2) Automatically rejecting promises on HTTP errors (4xx/5xx). 3) Request/response interceptors. 4) Better compatibility with older browsers.",
    },
  ],
};

export default axiosConcept;
