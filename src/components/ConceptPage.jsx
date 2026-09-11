// import conceptData from "../data/conceptData"
// import CodeBlock from "./CodeBlock"
// import LiveDemo from "./LiveDemo"

// function ConceptPage({ selectedTopic }) {
//   if (!selectedTopic) {
//     return (
//       <main className="flex-1 p-8">
//         <h1 className="text-3xl font-bold">
//           React Concept Lab
//         </h1>

//         <p className="mt-2 text-gray-600">
//           Select a concept from the sidebar.
//         </p>
//       </main>
//     )
//   }
//   const concept = conceptData[selectedTopic.id]

//   return (
//     <main className="flex-1 p-8">

//       {/* Title */}
//       <h1 className="text-4xl font-bold">
//         {concept?.title}
//       </h1>

//       <p className="mt-2 text-gray-500">
//         {concept?.category}
//       </p>


//       {/* Definition */}
//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold">
//           Definition
//         </h2>

//         <p className="mt-2 text-gray-700">
//           {concept?.definition}
//         </p>
//       </section>


//       {/* Syntax */}
//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold">
//           Syntax
//         </h2>

//         <CodeBlock code={concept?.syntax} />
//       </section>


//       {/* Use Case */}
//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold">
//           When / Why to Use
//         </h2>

//         <p className="mt-2 text-gray-700">
//           {concept?.useCase}
//         </p>
//       </section>


//       {/* Real Life Examples */}
//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold">
//           Real-Life Examples
//         </h2>

//         <ul className="mt-3 list-disc pl-6">
//           {concept?.realLifeExamples?.map(
//             (example) => (
//               <li key={example}>
//                 {example}
//               </li>
//             )
//           )}
//         </ul>
//       </section>

//       {/* Code Examples */}
//       <section className="mt-8">

//         <h2 className="text-2xl font-semibold">
//           Main Code Examples
//         </h2>

//         {concept?.codeExamples?.map(
//           (example) => (
//             <div
//               key={example.title}
//               className="mt-6 rounded-lg border p-5"
//             >

//               <h3 className="text-xl font-semibold">
//                 {example.title}
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 {example.description}
//               </p>

//               <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-stretch">

//                 {/* Code */}
//                 {/* <div className="min-w-0 flex-1 ">
//                   <CodeBlock code={example.code} />
//                 </div> */}

//                 {/* Live Demo */}
//                 <div className="min-w-0 flex-1 rounded-lg border p-5">
//                   <h4 className="mb-3 font-semibold">
//                     Live Demo
//                   </h4>

//                   <LiveDemo code={example.code} />
//                 </div>

//               </div>
//             </div>
//           )
//         )}

//       </section>
//       {/* KeyNotes */}
//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold">
//           KeyNotes
//         </h2>
//         {concept?.keyNotes?.map(
//           (item, index) => (
//             <div
//               key={index}
//               className="mt-4 rounded-md "
//             >
//               <li>
//                 <ol>{item}</ol>
//               </li>
//             </div>
//           )
//         )}
//       </section>

//       {/* Common Mistakes */}

//       <section className="mt-10">
//   <h2 className="text-2xl font-semibold text-gray-900">
//     Common Mistakes
//   </h2>

//   <p className="mt-2 text-sm text-gray-500">
//     Avoid these common mistakes when working with this concept.
//   </p>

//   <div className="mt-5 space-y-5">
//     {concept?.commonMistakes?.map((item, index) => (
//       <div
//         key={index}
//         className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
//       >
//         {/* Mistake */}
//         <div className="mb-4">
//           <p className="mb-1 text-sm font-semibold text-gray-700">
//             Mistake
//           </p>

//           <p className="text-gray-800">
//             {item.mistake}
//           </p>
//         </div>

//         {/* Wrong */}
//         <div className="mb-4">
//           <p className="mb-2 text-sm font-semibold text-red-600">
//             ❌ Wrong
//           </p>

//           <pre className="overflow-x-auto rounded-lg bg-red-50 p-4 text-sm text-red-800">
//             <code>{item.wrong}</code>
//           </pre>
//         </div>

//         {/* Correct */}
//         <div>
//           <p className="mb-2 text-sm font-semibold text-green-600">
//             ✓ Correct
//           </p>

//           <pre className="overflow-x-auto rounded-lg bg-green-50 p-4 text-sm text-green-800">
//             <code>{item.correct}</code>
//           </pre>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* Interview Questions */}
//       <section className="mt-8">

//         <h2 className="text-2xl font-semibold">
//           Interview Questions
//         </h2>

//         {concept?.interviewQuestions?.map(
//           (item, index) => (
//             <div
//               key={item.question}
//               className="mt-4 rounded-lg border p-5"
//             >

//               <h3 className="font-semibold">
//                 {index + 1}. {item.question}
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 {item.answer}
//               </p>

//             </div>
//           )
//         )}

//       </section>

//     </main>
//   )
// }

// export default ConceptPage



import conceptData from "../data/conceptData"
import CodeBlock from "./CodeBlock"
import LiveDemo from "./LiveDemo"

function ConceptPage({ selectedTopic }) {
  if (!selectedTopic) {
    return (
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900">
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
    <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">

      {/* ================= TITLE ================= */}
      <div className="border-b border-gray-200 pb-7">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {concept?.title}
          </h1>

          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
            {concept?.category}
          </span>
        </div>

        <p className="mt-3 max-w-3xl text-gray-500">
          Understand the concept, practice with examples, and prepare for
          React interviews.
        </p>
      </div>


      {/* ================= DEFINITION ================= */}
      <section className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50/40 p-6">
        <h2 className="text-lg font-bold text-gray-900">
          Definition
        </h2>

        <p className="mt-3 leading-7 text-gray-700">
          {concept?.definition}
        </p>
      </section>


      {/* ================= SYNTAX ================= */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">
          Syntax
        </h2>

        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
          <CodeBlock code={concept?.syntax} />
        </div>
      </section>


      {/* ================= USE CASE ================= */}
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">
          When / Why to Use
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          {concept?.useCase}
        </p>
      </section>


      {/* ================= REAL LIFE ================= */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">
          Real-Life Examples
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {concept?.realLifeExamples?.map((example, index) => (
            <div
              key={example}
              className="rounded-lg border border-gray-200 bg-white p-4 transition hover:border-indigo-200 hover:shadow-sm"
            >
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">
                  {index + 1}
                </span>

                <p className="text-sm leading-6 text-gray-700">
                  {example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= CODE EXAMPLES ================= */}
      <section className="mt-10">

        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900">
            Main Code Examples
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Study the code and experiment with the live demo.
          </p>
        </div>


        {concept?.codeExamples?.map((example, index) => (
          <div
            key={example.title}
            className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >

            {/* Example Header */}
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                  {index + 1}
                </span>

                <h3 className="text-lg font-bold text-gray-900">
                  {example.title}
                </h3>
              </div>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {example.description}
              </p>
            </div>


            {/* Code + Demo */}
            <div className="grid gap-5 p-5 lg:grid-cols-2">

              {/* Code */}
              <div className="min-w-0 overflow-hidden rounded-lg border border-gray-200">
                <div className="border-b bg-gray-50 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Code
                  </span>
                </div>

                <CodeBlock code={example.code} />
              </div>


              {/* Live Demo */}
              <div className="min-w-0 overflow-hidden rounded-lg border border-gray-200">
                <div className="border-b bg-gray-50 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Live Demo
                  </span>
                </div>

                <div className="p-4">
                  <LiveDemo code={example.code} />
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>


      {/* ================= KEY NOTES ================= */}
      <section className="mt-10">

        <h2 className="text-xl font-bold text-gray-900">
          Key Notes
        </h2>

        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

          <ul className="space-y-3">
            {concept?.keyNotes?.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm leading-6 text-gray-700"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />

                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>


      {/* ================= COMMON MISTAKES ================= */}
      <section className="mt-10">

        <h2 className="text-xl font-bold text-gray-900">
          Common Mistakes
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Avoid these common mistakes when working with this concept.
        </p>

        <div className="mt-5 space-y-5">

          {concept?.commonMistakes?.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >

              {/* Mistake */}
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                    {index + 1}
                  </span>

                  <p className="text-sm font-bold text-gray-800">
                    {item.mistake}
                  </p>
                </div>
              </div>


              {/* Wrong */}
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-red-600">
                  ❌ Wrong
                </p>

                <pre className="overflow-x-auto rounded-lg bg-red-50 p-4 text-sm text-red-800">
                  <code>{item.wrong}</code>
                </pre>
              </div>


              {/* Correct */}
              <div>
                <p className="mb-2 text-sm font-semibold text-green-600">
                  ✓ Correct
                </p>

                <pre className="overflow-x-auto rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  <code>{item.correct}</code>
                </pre>
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* ================= INTERVIEW ================= */}
      <section className="mt-10 pb-10">

        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900">
            Interview Questions
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Questions you should be able to answer confidently in an interview.
          </p>
        </div>


        <div className="space-y-4">

          {concept?.interviewQuestions?.map((item, index) => (
            <div
              key={item.question}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >

              <div className="flex gap-4">

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
                  Q{index + 1}
                </span>

                <div>
                  <h3 className="font-semibold leading-6 text-gray-900">
                    {item.question}
                  </h3>

                  <div className="mt-3 rounded-lg bg-gray-50 p-4">
                    <p className="text-sm leading-6 text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  )
}

export default ConceptPage