import { Sandpack } from "@codesandbox/sandpack-react"

function LiveDemo({code}){
    return (
        <Sandpack
             template="react"
             files={{"/App.js": {code:code}}}
             options={{showNavigator:false, showTabs:false, showLineNumbers:true, editorHeight:380, }}
        />
    )
}

export default LiveDemo