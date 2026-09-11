import ConceptPage from "./ConceptPage"

function MainContainer({selectedTopic}){
    return (
        <main className="flex-1 p-6">
            <ConceptPage selectedTopic={selectedTopic}/>
        </main>
    )
}
export default MainContainer