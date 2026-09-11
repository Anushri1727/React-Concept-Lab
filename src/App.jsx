import { useState } from "react"
import Header from "./components/Header"
import MainContainer from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import concepts from "./data/concepts"

function App() {
  const [selectedTopic, setSelectedTopic] = useState(concepts[0].children[0])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleTopicSelect = (selectedTopic) => {
    setSelectedTopic(selectedTopic)
    setSidebarOpen(false)
  }
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      <Header sidebarOpen={sidebarOpen} setSelectedTopic={setSelectedTopic} setSidebarOpen={setSidebarOpen}/>
      <div className="flex h-[calc(100vh-73px)]">
        <Sidebar selectedTopic={selectedTopic} setSelectedTopic={handleTopicSelect} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main className="min-w-0 flex-1 overflow-y-auto">
          <MainContainer selectedTopic={selectedTopic} />
        </main>
      </div>
    </div>
  )
}

export default App
