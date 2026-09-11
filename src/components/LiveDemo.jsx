import { useState } from "react"
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react"

function LiveDemo({ code }) {
  const [activeTab, setActiveTab] = useState("preview")

  const tabs = [
    { id: "code", label: "Code" },
    { id: "preview", label: "Preview" },
    { id: "console", label: "Console" },
  ]

  return (
    <SandpackProvider
      template="react"
      files={{
        "/App.js": {
          code: code,
        },
      }}
    >
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wide transition ${
                activeTab === tab.id
                  ? "border-b-2 border-indigo-600 bg-white text-indigo-600"
                  : "text-gray-500 hover:bg-white hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code */}
        <div
          className={activeTab === "code" ? "block" : "hidden"}
        >
          <SandpackLayout>
            <SandpackCodeEditor
              showTabs={false}
              showLineNumbers={true}
              showInlineErrors={true}
              wrapContent={true}
              style={{
                height: 360,
                width: "100%",
              }}
            />
          </SandpackLayout>
        </div>

        {/* Preview */}
        <div
          className={activeTab === "preview" ? "block" : "hidden"}
        >
          <SandpackLayout>
            <SandpackPreview
              showOpenInCodeSandbox={true}
              showRefreshButton={true}
              style={{
                minHeight: 360,
                width: "100%",
              }}
            />
          </SandpackLayout>
        </div>

        {/* Console */}
        <div
          className={activeTab === "console" ? "block" : "hidden"}
        >
          <SandpackLayout>
            <SandpackConsole
              style={{
                height: 360,
                width: "100%",
              }}
            />
          </SandpackLayout>
        </div>

      </div>
    </SandpackProvider>
  )
}

export default LiveDemo