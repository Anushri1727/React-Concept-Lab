import concepts from "../data/concepts"

function Sidebar({ selectedTopic, setSelectedTopic }) {
  return (
    <aside className="w-64 border-r p-4 min-h-screen">

      <h2 className="mb-6 font-bold text-lg">
        Topics
      </h2>

      {concepts.map((category) => (
        <div key={category.id} className="mb-5">

          {/* Category */}
          <h3 className="mb-2 font-semibold">
            {category.title}
          </h3>

          {/* Concepts */}
          <div className="ml-3 space-y-1">

            {category.children?.map((concept) => (
              <p
                key={concept.id}
                onClick={() => setSelectedTopic(concept)}
                className={`cursor-pointer rounded px-2 py-1 text-sm ${
                  selectedTopic?.id === concept.id
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {concept.title}
              </p>
            ))}

          </div>

        </div>
      ))}

    </aside>
  )
}

export default Sidebar