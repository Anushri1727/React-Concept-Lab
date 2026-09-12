import React, { useState } from 'react';
import interviewQuestions from '../data/interviewQuestions';
import { ChevronDown, ChevronUp } from 'lucide-react';

function InterviewPrep() {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  // Group questions by category
  const groupedQuestions = interviewQuestions.reduce((acc, q) => {
    if (!acc[q.category]) {
      acc[q.category] = [];
    }
    acc[q.category].push(q);
    return acc;
  }, {});

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-8">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-3xl font-extrabold text-indigo-900 sm:text-4xl">
          React Interview Prep
        </h1>
        <p className="text-lg text-indigo-600">
          Top 50 essential questions to master your next React interview, covering all core concepts.
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedQuestions).map(([category, questions]) => (
          <div key={category} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-indigo-50">
            <h2 className="mb-4 border-b border-indigo-100 pb-2 text-2xl font-bold text-indigo-800">
              {category}
            </h2>
            <div className="space-y-3">
              {questions.map((q) => {
                const isOpen = openQuestionId === q.id;
                return (
                  <div
                    key={q.id}
                    className="overflow-hidden rounded-lg border border-indigo-50 transition-all hover:border-indigo-200"
                  >
                    <button
                      onClick={() => toggleQuestion(q.id)}
                      className="flex w-full items-center justify-between bg-indigo-50/30 px-4 py-3 text-left font-medium text-indigo-900 transition-colors hover:bg-indigo-50 focus:outline-none"
                    >
                      <span className="flex-1 pr-4">
                        <span className="mr-2 text-indigo-400">{q.id}.</span>
                        {q.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 flex-shrink-0 text-indigo-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 flex-shrink-0 text-indigo-400" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="bg-white px-4 py-4 text-gray-700 leading-relaxed border-t border-indigo-50">
                        <p className="whitespace-pre-wrap">{q.answer}</p>
                        {q.codeSnippet && (
                          <div className="mt-4 overflow-x-auto rounded-md bg-gray-900 p-4">
                            <pre className="text-sm text-gray-100">
                              <code>{q.codeSnippet}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewPrep;
