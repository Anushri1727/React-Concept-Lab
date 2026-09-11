import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import concepts from "../data/concepts"

function Sidebar({
  selectedTopic,
  setSelectedTopic,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [expandedSections, setExpandedSections] = useState(["hooks"])

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          sidebar-scrollbar
          absolute left-0 top-0 z-40 h-full w-72
          overflow-y-auto
          border-r border-indigo-100
          bg-indigo-50/95
          px-3 py-4
          shadow-xl
          backdrop-blur-sm
          transition-transform duration-300

          md:static
          md:z-auto
          md:block
          md:w-64
          md:translate-x-0
          md:shadow-none

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="mb-5 rounded-xl bg-white px-4 py-4 shadow-sm">
          <h2 className="text-base font-semibold text-indigo-700">
            React Concepts
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Choose a topic to practice
          </p>
        </div>

        {/* Main Categories */}
        <nav className="space-y-1">
          {concepts.map((category) => {
            const isExpanded = expandedSections.includes(category.id)

            return (
              <div key={category.id}>
                {/* Category */}
                <button
                  onClick={() => toggleSection(category.id)}
                  className={`
                    flex w-full items-center justify-between
                    rounded-lg px-3 py-2.5
                    text-left
                    transition-colors
                    ${isExpanded
                      ? "bg-white text-indigo-700"
                      : "text-gray-700 hover:bg-white/70 hover:text-indigo-700"
                    }
                  `}
                >
                  <span className="text-sm font-semibold">
                    {category.title}
                  </span>

                  {isExpanded ? (
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className="text-gray-400"
                    />
                  ) : (
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      className="text-gray-400"
                    />
                  )}
                </button>

                {/* Topics */}
                {isExpanded && (
                  <div className="ml-3 mt-1 space-y-0.5 border-l border-indigo-200 pl-3">
                    {category.children?.map((concept) => (
                      <button
                        key={concept.id}
                        onClick={() => setSelectedTopic(concept)}
                        className={`
                          w-full rounded-md px-3 py-2
                          text-left text-sm
                          transition-colors
                          ${selectedTopic?.id === concept.id
                            ? "bg-indigo-600 font-medium text-white"
                            : "text-gray-600 hover:bg-white hover:text-indigo-600"
                          }
                        `}
                      >
                        {concept.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar