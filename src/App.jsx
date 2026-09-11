import { useState } from "react"
import Header from "./components/Header"
import MainContainer from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import concepts from "./data/concepts"

function App() {
  const [selectedTopic, setSelectedTopic] = useState(concepts[0])
  return (
    <div className="min-h-screen">
      <Header/>
      <div className="flex">
        <Sidebar selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
        <MainContainer selectedTopic={selectedTopic}/>
      </div>
    </div>
  )
}

export default App
