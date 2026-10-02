import { useState } from 'react'
import { InstructionSection } from './sections/Instruction'
import { OverviewSection } from './sections/Overview'
import { FilesSection } from './sections/Files'
import { ReadmeSection } from './sections/Readme'

type TabId = 'instruction' | 'overview' | 'files' | 'readme'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('instruction')
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'instruction', label: 'Инструкция', icon: '📖' },
    { id: 'overview', label: 'О модели', icon: '📋' },
    { id: 'files', label: 'Файлы', icon: '📁' },
    { id: 'readme', label: 'README.md', icon: '📝' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xl">🧠</div>
            <div>
              <h1 className="text-lg font-bold text-white">Qwen3.8-27B-Uncensored-Cyber GGUF</h1>
              <p className="text-xs text-gray-400">Инструкция по подготовке репозитория для GitHub</p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              GGUF • IQ4_XS • Agentic IMatrix • Apache 2.0
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-3">
              Подготовка репозитория для GitHub
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Пошаговая инструкция: от скачивания модели с HuggingFace до публикации готового репозитория на GitHub
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap gap-1 border-b border-gray-800">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium transition-all rounded-t-lg ${
                activeTab === tab.id
                  ? 'bg-gray-800 text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'instruction' && <InstructionSection copyToClipboard={copyToClipboard} copied={copied} />}
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'files' && <FilesSection copyToClipboard={copyToClipboard} copied={copied} />}
        {activeTab === 'readme' && <ReadmeSection copyToClipboard={copyToClipboard} copied={copied} />}
      </main>

      <footer className="border-t border-gray-800 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Model: <a href="https://huggingface.co/philbert440/Qwen3.8-27B-Uncensored-Cyber" className="text-purple-400 hover:underline">philbert440</a> • Base: <a href="https://huggingface.co/Qwen/Qwen3.8-27B" className="text-cyan-400 hover:underline">Qwen</a> • Quant: <a href="https://huggingface.co/cyjin-yl" className="text-green-400 hover:underline">cyjin-yl</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
