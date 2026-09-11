import conceptData from "../data/conceptData"
import CodeBlock from "./CodeBlock"
import LiveDemo from "./LiveDemo"

function ConceptPage({ selectedTopic }) {
  if (!selectedTopic) {
    return (
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">
          React Concept Lab
        </h1>

        <p className="mt-2 text-gray-600">
          Select a concept from the sidebar.
        </p>
      </main>
    )
  }

  const concept = conceptData[selectedTopic.id]

  return (
    <main className="flex-1 p-8">

      {/* Title */}
      <h1 className="text-4xl font-bold">
        {concept?.title}
      </h1>

      <p className="mt-2 text-gray-500">
        {concept?.category}
      </p>


      {/* Definition */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          Definition
        </h2>

        <p className="mt-2 text-gray-700">
          {concept?.definition}
        </p>
      </section>


      {/* Syntax */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          Syntax
        </h2>

        <CodeBlock code={concept?.syntax} />
      </section>


      {/* Use Case */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          When / Why to Use
        </h2>

        <p className="mt-2 text-gray-700">
          {concept?.useCase}
        </p>
      </section>


      {/* Real Life Examples */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          Real-Life Examples
        </h2>

        <ul className="mt-3 list-disc pl-6">
          {concept?.realLifeExamples?.map(
            (example) => (
              <li key={example}>
                {example}
              </li>
            )
          )}
        </ul>
      </section>

      {/* Code Examples */}
      <section className="mt-8">

        <h2 className="text-2xl font-semibold">
          Main Code Examples
        </h2>

        {concept?.codeExamples?.map(
          (example) => (
            <div
              key={example.title}
              className="mt-6 rounded-lg border p-5"
            >

              <h3 className="text-xl font-semibold">
                {example.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {example.description}
              </p>

              <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-stretch">

                {/* Code */}
                <div className="min-w-0 flex-1 ">
                  <CodeBlock code={example.code} />
                </div>

                {/* Live Demo */}
                <div className="min-w-0 flex-1 rounded-lg border p-5">
                  <h4 className="mb-3 font-semibold">
                    Live Demo
                  </h4>

                  <LiveDemo code={example.code} />
                </div>

              </div>
            </div>
          )
        )}

      </section>
      {/* KeyNotes */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          KeyNotes
        </h2>
        {concept?.keyNotes?.map(
          (item, index) => (
            <div
              key={index}
              className="mt-4 rounded-md "
            >
              <li>
                <ol>{item}</ol>
              </li>
            </div>
          )
        )}
      </section>

      {/* Common Mistakes */}

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          Common Mistakes
        </h2>

        <ol className="list-decimal pl-6">
          {concept?.commonMistakes?.map((item, index) => (
            <li
              key={index}
              className="mt-4"
            >
              <div>
                <span className="font-bold">Mistake: </span>
                {item.mistake}
              </div>

              <div>
                <span className="font-bold">Wrong: </span>
                {item.wrong}
              </div>

              <div>
                <span className="font-bold">Correct: </span>
                {item.correct}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Interview Questions */}
      <section className="mt-8">

        <h2 className="text-2xl font-semibold">
          Interview Questions
        </h2>

        {concept?.interviewQuestions?.map(
          (item, index) => (
            <div
              key={item.question}
              className="mt-4 rounded-lg border p-5"
            >

              <h3 className="font-semibold">
                {index + 1}. {item.question}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.answer}
              </p>

            </div>
          )
        )}

      </section>

    </main>
  )
}

export default ConceptPage