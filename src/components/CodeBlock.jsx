function CodeBlock({ code }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
      <code>{code}</code>
    </pre>
  )
}

export default CodeBlock