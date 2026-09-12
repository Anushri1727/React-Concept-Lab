import { useState } from "react"
import Header from "./components/Header"
import MainContainer from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import InterviewPrep from "./components/InterviewPrep"
import Footer from "./components/Footer"
import concepts from "./data/concepts"

function App() {
  const [selectedTopic, setSelectedTopic] = useState(concepts[0].children[0])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [viewMode, setViewMode] = useState('concepts') // 'concepts' or 'interview'

  const handleTopicSelect = (selectedTopic) => {
    setSelectedTopic(selectedTopic)
    setSidebarOpen(false)
    setViewMode('concepts') // Ensure we switch back if a topic is selected somehow
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      <Header 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <div className="flex h-[calc(100vh-73px)]">
        <Sidebar 
          selectedTopic={selectedTopic} 
          setSelectedTopic={handleTopicSelect} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          setViewMode={setViewMode}
        />
        <main className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-gray-50/50">
          {viewMode === 'concepts' ? (
            <MainContainer selectedTopic={selectedTopic} />
          ) : (
            <InterviewPrep />
          )}
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
