interface Props {
  code: string
  id: string
  copyToClipboard: (text: string, id: string) => void
  copied: string | null
  lang?: string
}

export function CodeBlock({ code, id, copyToClipboard, copied, lang }: Props) {
  return (
    <div className="relative group">
      {lang && (
        <div className="absolute top-0 left-0 px-2 py-0.5 bg-gray-700 rounded-tl-lg rounded-br text-xs text-gray-400 font-mono">
          {lang}
        </div>
      )}
      <pre className={`bg-gray-800 rounded-lg border border-gray-700 overflow-x-auto text-sm font-mono text-gray-300 ${lang ? 'pt-8' : 'p-4'}`}>
        <code className="block p-4">{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-2 right-2 px-2 py-1 rounded bg-gray-700/80 hover:bg-gray-600 text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied === id ? '✓' : '📋 Copy'}
      </button>
    </div>
  )
}
