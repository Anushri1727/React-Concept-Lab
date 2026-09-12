const skeletonShimmerConcept = {
  id: "skeleton-shimmer",
  title: "Skeleton / Shimmer",
  category: "Production & Best Practices",

  definition:
    "Skeleton screens (often with a 'shimmer' animation) are blank pages or components that roughly match the layout of the content that is about to load. They act as a placeholder while asynchronous data is being fetched.",

  syntax: "// Usually implemented via CSS animations on gray boxes",

  useCase:
    "Use skeleton screens instead of traditional loading spinners to improve the perceived performance of your application. They reduce user frustration by giving a hint of the layout to come.",

  realLifeExamples: [
    "YouTube's video grid before the thumbnails load.",
    "Facebook's news feed placeholders.",
    "LinkedIn's profile section before details are fetched.",
  ],

  codeExamples: [
    {
      id: "css-shimmer",
      title: "1. Basic CSS Shimmer Effect",
      description:
        "A skeleton is mostly just HTML structure combined with a CSS gradient animation.",
      code: `import React, { useState, useEffect } from 'react';
import './Shimmer.css'; // Assume the CSS below is in this file

// The Skeleton Component
const UserCardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar shimmer"></div>
      <div className="skeleton-text">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-subtitle shimmer"></div>
      </div>
    </div>
  );
};

// The Actual Component
const UserCard = ({ user }) => {
  return (
    <div className="real-card">
      <img src={user.avatar} alt="avatar" />
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate network delay
    setTimeout(() => {
      setUser({
        name: "Jane Doe",
        email: "jane@example.com",
        avatar: "https://via.placeholder.com/50"
      });
    }, 2500);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile</h2>
      {user ? <UserCard user={user} /> : <UserCardSkeleton />}
    </div>
  );
}

export default App;

/* --- Shimmer.css Content ---
.skeleton-card { display: flex; gap: 15px; padding: 15px; border: 1px solid #ddd; }
.skeleton-avatar { width: 50px; height: 50px; border-radius: 50%; background: #eee; }
.skeleton-text { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.skeleton-title { height: 20px; width: 60%; background: #eee; }
.skeleton-subtitle { height: 15px; width: 40%; background: #eee; }

.shimmer {
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
*/`,
    }
  ],
  keyNotes: [
    "Skeleton screens improve 'perceived performance'. The app doesn't load any faster, but it feels faster to the user because their eyes are drawn to the structure rather than a static spinner.",
    "Skeletons should mimic the final layout as closely as possible to prevent jarring layout shifts when the real content arrives (preventing Cumulative Layout Shift issues).",
  ],
  commonMistakes: [
    {
      mistake: "Using skeletons for very fast operations",
      wrong: "Flashing a skeleton on the screen for 100ms when data loads almost instantly.",
      correct: "If data loads very quickly, the flash of the skeleton is more distracting than helpful. Consider delaying the skeleton rendering by a few hundred milliseconds so it only shows on slow connections.",
    },
  ],

  interviewQuestions: [
    {
      question: "Why are skeleton screens often preferred over traditional loading spinners?",
      answer:
        "They provide better perceived performance by giving the user a sense of progress and context about what type of content is loading, reducing psychological wait time.",
    },
  ],
};

export default skeletonShimmerConcept;
