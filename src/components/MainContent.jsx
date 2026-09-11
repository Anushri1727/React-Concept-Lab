import ConceptPage from "./ConceptPage"

function MainContainer({selectedTopic}){
    console.log(selectedTopic)
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
    return (
        <main className="flex-1 p-6">
            
            <ConceptPage selectedTopic={selectedTopic}/>
        </main>
    )
}
export default MainContainer