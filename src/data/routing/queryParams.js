const queryParamsConcept = {
  id: "query-params",
  title: "Query Parameters",
  category: "Routing",

  definition:
    "Query parameters are a defined set of parameters attached to the end of a URL. They are used to pass data to a route that doesn't fit neatly into the hierarchical path structure, often used for filtering, sorting, or pagination.",

  syntax: "// URL: /products?sort=price&category=shoes \n const [searchParams, setSearchParams] = useSearchParams();",

  useCase:
    "Use query parameters to maintain state in the URL so that users can share links to specific views (like a filtered search result) or refresh the page without losing their current filters.",

  realLifeExamples: [
    "Search pages: /search?q=laptop",
    "Pagination: /articles?page=3",
    "Sorting and filtering: /shoes?brand=nike&sort=lowest-price",
  ],

  codeExamples: [
    {
      id: "search-params-hook",
      title: "1. Reading and Updating Query Params",
      description:
        "The useSearchParams hook works similarly to useState, but it stores the state in the URL's query string.",
      code: `import React from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';

function ProductList() {
  // searchParams is a URLSearchParams object
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read parameters
  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'name';

  // Update parameters
  const updateFilter = (newCategory) => {
    setSearchParams({ category: newCategory, sort }); 
  };

  return (
    <div>
      <h2>Products</h2>
      <p>Current Filter: {category}</p>
      
      <button onClick={() => updateFilter('Electronics')}>Electronics</button>
      <button onClick={() => updateFilter('Books')}>Books</button>
      <button onClick={() => setSearchParams({})}>Clear Filters</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;`,
    }
  ],
  keyNotes: [
    "Query params come after the ? in a URL and are separated by &.",
    "Unlike dynamic route parameters (/:id), query parameters are optional and don't affect which route is matched.",
    "The useSearchParams hook returns a URLSearchParams instance, which means you have to use methods like .get() and .set() to interact with the values.",
    "Storing state in the URL (query params) is a best practice for filterable/sortable lists because it allows users to bookmark and share the exact view.",
  ],
  commonMistakes: [
    {
      mistake: "Treating searchParams as a plain object",
      wrong: `const category = searchParams.category;`,
      correct: `const category = searchParams.get('category');`,
    },
  ],

  interviewQuestions: [
    {
      question: "When should you use Query Parameters vs Dynamic Route Parameters?",
      answer:
        "Use Dynamic Route Parameters (/:id) for required identifiers that designate a specific resource (e.g., /users/123). Use Query Parameters (?filter=active) for optional modifiers like sorting, filtering, or pagination that apply to a view.",
    },
  ],
};

export default queryParamsConcept;
