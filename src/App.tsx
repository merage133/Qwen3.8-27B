import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'files' | 'usage' | 'github' | 'readme'>('overview')
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const tabs = [
    { id: 'overview' as const, label: 'Обзор', icon: '📋' },
    { id: 'files' as const, label: 'Файлы', icon: '📁' },
    { id: 'usage' as const, label: 'Использование', icon: '🚀' },
    { id: 'github' as const, label: 'Для GitHub', icon: '🐙' },
    { id: 'readme' as const, label: 'README', icon: '📝' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xl">
              🧠
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Qwen3.8-27B-Uncensored-Cyber</h1>
              <p className="text-xs text-gray-400">GGUF Quantization Guide & GitHub Repository Preparation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              GGUF • IQ4_XS • Agentic IMatrix
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
              Qwen3.8-27B Uncensored Cyber
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
              GGUF квантизация модели для кибербезопасности и агентного программирования.
              Калибровка на основе реальной агентной активности, а не общего текста.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-cyan-400">⚡</span>
                <span>~4.25 bpw</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-purple-400">📦</span>
                <span>14.96 GiB</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-green-400">🎯</span>
                <span>PPL: 2.6989</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-yellow-400">📐</span>
                <span>262K context</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-wrap gap-2 border-b border-gray-800 pb-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 rounded-t-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gray-800 text-white border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'files' && <FilesTab copyToClipboard={copyToClipboard} copied={copied} />}
        {activeTab === 'usage' && <UsageTab copyToClipboard={copyToClipboard} copied={copied} />}
        {activeTab === 'github' && <GitHubTab copyToClipboard={copyToClipboard} copied={copied} />}
        {activeTab === 'readme' && <ReadmeTab copyToClipboard={copyToClipboard} copied={copied} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>Model by <a href="https://huggingface.co/philbert440" className="text-purple-400 hover:underline">philbert440</a> • 
          Base by <a href="https://huggingface.co/Qwen" className="text-cyan-400 hover:underline">Qwen Team</a> • 
          Quantization by <a href="https://huggingface.co/cyjin-yl" className="text-green-400 hover:underline">cyjin-yl</a></p>
          <p className="mt-2">License: Apache 2.0</p>
        </div>
      </footer>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-8">
      {/* What is this */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🔍</span> Что это за модель?
        </h3>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Qwen3.8-27B-Uncensored-Cyber</strong> — это специализированная языковая модель,
            созданная для задач кибербезопасности и агентного программирования. Модель основана на Qwen3.8-27B и
            прошла через несколько этапов модификации:
          </p>
          <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400 mb-2">Линейка модели:</div>
            <div className="space-y-1">
              <div className="text-white">Qwen3.8-27B <span className="text-gray-500">— Qwen team</span></div>
              <div className="text-purple-300">  └─ Uncensored-Aggressive <span className="text-gray-500">— α=1.15, refusal ablation</span></div>
              <div className="text-cyan-300">       └─ Uncensored-Cyber <span className="text-gray-500">— cyber peel, β=1.0</span></div>
              <div className="text-green-300">            └─ <span className="text-yellow-300">Этот репозиторий</span> <span className="text-gray-500">— только квантизация</span></div>
            </div>
          </div>
          <p>
            Данный репозиторий содержит <strong className="text-white">GGUF квантизации</strong> с использованием
            importance matrix (imatrix), калиброванной на реальных агентных сессиях программирования,
            а не на общем тексте из Wikipedia.
          </p>
        </div>
      </div>

      {/* Key features */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">🎯</span> Ключевые особенности
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Калибровка на реальных агентных сессиях (42 сессии, 648 диалогов)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Сохранение точности tool-call JSON и имён инструментов</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Точное воспроизведение путей, хешей, UUID</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Поддержка MTP (Multi-Token Prediction) для ускорения</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>262K контекст</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Мультимодальность (vision tower сохранён)</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">⚠️</span> Важные замечания
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Квантизовано из Q8_0, не из BF16 (вторичная квантизация)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Модель без цензуры — предназначена для offensive security</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>imatrix оптимизирован для агентного кодинга, не для креативного письма</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Для мультимодальности нужен отдельный vision projector</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Лицензия Apache 2.0 (унаследована от базовой модели)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Performance */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">📊</span> Производительность
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-cyan-400">1.20x</div>
            <div className="text-sm text-gray-400 mt-1">Быстрее чем Q5_K_M</div>
            <div className="text-xs text-gray-500 mt-1">на V100 + FastLLM</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">0.42%</div>
            <div className="text-sm text-gray-400 mt-1">ΔPPL vs Q5_K_M</div>
            <div className="text-xs text-gray-500 mt-1">Минимальная потеря качества</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400">7/7</div>
            <div className="text-sm text-gray-400 mt-1">Верная копия литералов</div>
            <div className="text-xs text-gray-500 mt-1">Пути, UUID, хеши</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilesTab({ copyToClipboard, copied }: { copyToClipboard: (text: string, id: string) => void, copied: string | null }) {
  const files = [
    {
      name: 'imatrix-agentic-v2.gguf',
      size: '13.01 MiB',
      sha: 'a219ff5f3ffabb4a4b7cc644cae3a44f647032e2016b3308843ac8650e59af69',
      desc: 'Матрица калибровки (importance matrix)',
      type: 'calibration'
    },
    {
      name: 'Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf',
      size: '14.96 GiB',
      sha: 'd11d28b9b253fb7fc9de277a46af5bbd790c000d6bfdfe5648fd7b62ec2560b7',
      desc: 'IQ4_XS текстовые веса без MTP тензоров',
      type: 'model'
    },
    {
      name: 'Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8-plus-mtp.gguf',
      size: '15.38 GiB',
      sha: 'da6a418f30a7e6c6669b74179f6d533ca06016e02eba298d2b713a2900d7a1ba',
      desc: 'Production-артефакт с MTP head',
      type: 'model-mtp'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-2">Файлы репозитория</h3>
        <p className="text-gray-400 text-sm mb-6">
          Все файлы доступны на Hugging Face. SHA-256 хеши позволяют проверить целостность.
        </p>

        <div className="space-y-4">
          {files.map((file, i) => (
            <div key={i} className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    file.type === 'calibration' ? 'bg-yellow-500/20 text-yellow-300' :
                    file.type === 'model-mtp' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-cyan-500/20 text-cyan-300'
                  }`}>
                    {file.type === 'calibration' ? 'IMATRIX' : file.type === 'model-mtp' ? 'MODEL+MTP' : 'MODEL'}
                  </span>
                  <span className="text-white font-mono text-sm">{file.name}</span>
                </div>
                <span className="text-gray-400 text-sm">{file.size}</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{file.desc}</p>
              <div className="flex items-center gap-2">
                <code className="text-xs text-gray-500 font-mono truncate flex-1">SHA-256: {file.sha}</code>
                <button
                  onClick={() => copyToClipboard(file.sha, `sha-${i}`)}
                  className="text-xs px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
                >
                  {copied === `sha-${i}` ? '✓' : '📋'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-lg font-bold text-white mb-3">📥 Скачивание</h3>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-400 mb-1">Через huggingface-cli:</p>
            <CodeBlock
              code="huggingface-cli download cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF --local-dir ./model"
              id="download-cli"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Через wget:</p>
            <CodeBlock
              code={`wget https://huggingface.co/cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF/resolve/main/Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf`}
              id="download-wget"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Через git lfs:</p>
            <CodeBlock
              code={`git lfs install\ngit clone https://huggingface.co/cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF`}
              id="download-git"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function UsageTab({ copyToClipboard, copied }: { copyToClipboard: (text: string, id: string) => void, copied: string | null }) {
  return (
    <div className="space-y-6">
      {/* llama.cpp */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🦙</span> llama.cpp
        </h3>
        <CodeBlock
          code={`# Запуск сервера
./llama-server \\
  -m Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf \\
  -c 8192 \\
  -ngl 99 \\
  --host 0.0.0.0 --port 8080

# Или чат напрямую
./llama-cli \\
  -m Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf \\
  -c 8192 -ngl 99 \\
  --conversation`}
          id="llama-cpp"
          copyToClipboard={copyToClipboard}
          copied={copied}
        />
      </div>

      {/* Ollama */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🐋</span> Ollama
        </h3>
        <p className="text-gray-400 text-sm mb-3">
          Создайте Modelfile для импорта GGUF в Ollama:
        </p>
        <CodeBlock
          code={`# Modelfile
FROM ./Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf

PARAMETER num_ctx 8192
PARAMETER num_gpu 99

TEMPLATE """{{- if .System }}{{ .System }}{{ end }}
{{- range .Messages }}
{{- if eq .Role "user" }}
<|im_start|>user
{{ .Content }}<|im_end|>
{{- else if eq .Role "assistant" }}
<|im_start|>assistant
{{ .Content }}<|im_end|>
{{- end }}
{{- end }}
<|im_start|>assistant"""

SYSTEM "You are a helpful cybersecurity assistant."`}
          id="ollama"
          copyToClipboard={copyToClipboard}
          copied={copied}
        />
        <div className="mt-3">
          <p className="text-sm text-gray-400 mb-1">Создание и запуск:</p>
          <CodeBlock
            code={`ollama create qwen-cyber -f Modelfile
ollama run qwen-cyber`}
            id="ollama-run"
            copyToClipboard={copyToClipboard}
            copied={copied}
          />
        </div>
      </div>

      {/* LM Studio */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💻</span> LM Studio
        </h3>
        <div className="text-gray-300 space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Скачайте и установите <a href="https://lmstudio.ai" className="text-cyan-400 hover:underline">LM Studio</a></li>
            <li>Откройте LM Studio и перейдите в раздел "My Models"</li>
            <li>Нажмите "Import" и выберите скачанный .gguf файл</li>
            <li>Или используйте поиск — модель может быть доступна в каталоге</li>
            <li>Настройте контекст (рекомендуется 8192+) и GPU layers (99 для полной загрузки на GPU)</li>
          </ol>
        </div>
      </div>

      {/* FastLLM */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">⚡</span> FastLLM (Production)
        </h3>
        <p className="text-gray-400 text-sm mb-3">
          Конфигурация, использованная для бенчмарков (V100 32GB):
        </p>
        <CodeBlock
          code={`# Production config
Model: IQ4_XS-imatrix-fromq8-plus-mtp
KV Cache: turbo3
Batch: 4
Context: 262,144 tokens
GPU: V100 32GB (SM70)`}
          id="fastllm"
          copyToClipboard={copyToClipboard}
          copied={copied}
        />
      </div>

      {/* VRAM requirements */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-lg font-bold text-white mb-3">💾 Требования к VRAM</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-3 text-gray-400">Контекст</th>
                <th className="text-left py-2 px-3 text-gray-400">VRAM (IQ4_XS)</th>
                <th className="text-left py-2 px-3 text-gray-400">Рекомендуемая GPU</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-2 px-3">4K</td>
                <td className="py-2 px-3">~16 GB</td>
                <td className="py-2 px-3">RTX 4090, V100 32GB</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-3">8K</td>
                <td className="py-2 px-3">~18 GB</td>
                <td className="py-2 px-3">V100 32GB, A100</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-3">32K</td>
                <td className="py-2 px-3">~24 GB</td>
                <td className="py-2 px-3">A100 40GB, RTX 3090/4090</td>
              </tr>
              <tr>
                <td className="py-2 px-3">262K</td>
                <td className="py-2 px-3">~32 GB</td>
                <td className="py-2 px-3">V100 32GB, A100 80GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function GitHubTab({ copyToClipboard, copied }: { copyToClipboard: (text: string, id: string) => void, copied: string | null }) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🐙</span> Подготовка репозитория для GitHub
        </h3>
        <p className="text-gray-400 mb-6">
          Пошаговая инструкция по созданию GitHub-репозитория с документацией и скриптами для работы с моделью.
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-white font-bold mb-2">Шаг 1: Создание структуры репозитория</h4>
            <CodeBlock
              code={`mkdir qwen3.8-27b-cyber-gguf && cd qwen3.8-27b-cyber-gguf
git init

# Создаём структуру
mkdir -p scripts configs docs
touch README.md
touch .gitignore
touch LICENSE`}
              id="step1"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>

          {/* Step 2 */}
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-white font-bold mb-2">Шаг 2: .gitignore</h4>
            <CodeBlock
              code={`# Model files (too large for GitHub)
*.gguf
*.bin
*.safetensors

# But keep scripts and configs
!scripts/*.py
!scripts/*.sh
!configs/*.yaml

# Python
__pycache__/
*.pyc
.venv/
venv/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/`}
              id="step2"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>

          {/* Step 3 */}
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-white font-bold mb-2">Шаг 3: Скрипт загрузки модели</h4>
            <CodeBlock
              code={`#!/bin/bash
# scripts/download.sh

MODEL_DIR="./models"
mkdir -p "$MODEL_DIR"

echo "Downloading Qwen3.8-27B-Uncensored-Cyber GGUF..."

# Option 1: huggingface-cli
pip install huggingface_hub

huggingface-cli download \\
  cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF \\
  Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf \\
  --local-dir "$MODEL_DIR"

echo "Download complete! Model saved to $MODEL_DIR"
echo "SHA-256 verification:"
sha256sum "$MODEL_DIR/Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf"`}
              id="step3"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>

          {/* Step 4 */}
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-white font-bold mb-2">Шаг 4: Скрипт запуска</h4>
            <CodeBlock
              code={`#!/bin/bash
# scripts/run_server.sh

MODEL_PATH="./models/Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf"
CONTEXT_SIZE=\${1:-8192}
GPU_LAYERS=\${2:-99}
PORT=\${3:-8080}

if [ ! -f "$MODEL_PATH" ]; then
  echo "Model not found. Run scripts/download.sh first."
  exit 1
fi

echo "Starting llama.cpp server..."
echo "  Model: $MODEL_PATH"
echo "  Context: $CONTEXT_SIZE"
echo "  GPU Layers: $GPU_LAYERS"
echo "  Port: $PORT"

./llama-server \\
  -m "$MODEL_PATH" \\
  -c "$CONTEXT_SIZE" \\
  -ngl "$GPU_LAYERS" \\
  --host 0.0.0.0 \\
  --port "$PORT"`}
              id="step4"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>

          {/* Step 5 */}
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-white font-bold mb-2">Шаг 5: Docker (опционально)</h4>
            <CodeBlock
              code={`# Dockerfile
FROM ghcr.io/ggml-org/llama.cpp:server

WORKDIR /app

COPY scripts/ ./scripts/
COPY configs/ ./configs/

RUN chmod +x scripts/*.sh

EXPOSE 8080

ENTRYPOINT ["./scripts/run_server.sh"]`}
              id="step5"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>

          {/* Step 6 */}
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-white font-bold mb-2">Шаг 6: Публикация на GitHub</h4>
            <CodeBlock
              code={`# Создаём репозиторий на GitHub, затем:
git remote add origin https://github.com/YOUR_USERNAME/qwen3.8-27b-cyber-gguf.git
git add .
git commit -m "Initial commit: Qwen3.8-27B-Uncensored-Cyber GGUF setup"
git branch -M main
git push -u origin main`}
              id="step6"
              copyToClipboard={copyToClipboard}
              copied={copied}
            />
          </div>
        </div>
      </div>

      {/* Structure */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-lg font-bold text-white mb-3">📂 Итоговая структура репозитория</h3>
        <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
          <pre className="text-gray-300">{`qwen3.8-27b-cyber-gguf/
├── README.md              # Основная документация
├── LICENSE                # Apache 2.0
├── .gitignore             # Игнорирование больших файлов
├── Dockerfile             # Контейнеризация (опционально)
├── docker-compose.yml     # Docker Compose (опционально)
├── scripts/
│   ├── download.sh        # Загрузка модели с HF
│   ├── run_server.sh      # Запуск llama.cpp сервера
│   ├── run_chat.sh        # Интерактивный чат
│   └── verify.sh          # Проверка SHA-256
├── configs/
│   ├── ollama-modelfile   # Конфиг для Ollama
│   └── server-config.yaml # Параметры сервера
├── docs/
│   ├── usage.md           # Подробное руководство
│   ├── benchmarks.md      # Результаты тестов
│   └── troubleshooting.md # Решение проблем
└── models/                # (в .gitignore)
    └── *.gguf             # Скачанные модели`}</pre>
        </div>
      </div>
    </div>
  )
}

function ReadmeTab({ copyToClipboard, copied }: { copyToClipboard: (text: string, id: string) => void, copied: string | null }) {
  const readmeContent = `# Qwen3.8-27B-Uncensored-Cyber — GGUF

GGUF квантизация модели [Qwen3.8-27B-Uncensored-Cyber](https://huggingface.co/philbert440/Qwen3.8-27B-Uncensored-Cyber) с importance matrix, калиброванной на реальных агентных сессиях программирования.

> ⚠️ **Модель без цензуры**, специализирована для кибербезопасности. Используйте ответственно.

## 📋 Описание

- **Базовая модель:** Qwen3.8-27B (Qwen Team)
- **Автор модификации:** philbert440
- **Квантизация:** cyjin-yl (agentic imatrix)
- **Формат:** GGUF (IQ4_XS)
- **Размер:** ~15 GB
- **Контекст:** до 262K токенов
- **Лицензия:** Apache 2.0

## 🚀 Быстрый старт

### Требования

- 16+ GB VRAM (для IQ4_XS)
- llama.cpp или совместимый runtime
- CUDA-совместимая GPU (рекомендуется)

### Установка

\`\`\`bash
# Клонируем репозиторий
git clone https://github.com/YOUR_USERNAME/qwen3.8-27b-cyber-gguf.git
cd qwen3.8-27b-cyber-gguf

# Скачиваем модель
bash scripts/download.sh

# Запускаем сервер
bash scripts/run_server.sh
\`\`\`

### Ollama

\`\`\`bash
# Создаём модель из Modelfile
ollama create qwen-cyber -f configs/ollama-modelfile
ollama run qwen-cyber
\`\`\`

### LM Studio

1. Скачайте GGUF файл
2. Импортируйте в LM Studio
3. Настройте GPU Layers: 99
4. Context Length: 8192+

## 📊 Производительность

| Метрика | Значение |
|---------|----------|
| PPL (IQ4_XS + imatrix) | 2.6989 ± 0.0471 |
| Скорость vs Q5_K_M | 1.20x быстрее |
| Верная копия литералов | 7/7 |
| MTP acceptance rate | 92.19% |

## 📁 Файлы

| Файл | Размер | Назначение |
|------|--------|------------|
| IQ4_XS (без MTP) | 14.96 GiB | Стандартное использование |
| IQ4_XS + MTP | 15.38 GiB | Production с MTP |
| imatrix | 13.01 MiB | Калибровочная матрица |

## 🔗 Ссылки

- [Оригинальная модель на HuggingFace](https://huggingface.co/cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF)
- [Базовая модель (philbert440)](https://huggingface.co/philbert440/Qwen3.8-27B-Uncensored-Cyber)
- [Qwen3.8-27B (Qwen Team)](https://huggingface.co/Qwen/Qwen3.8-27B)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)

## 📄 Лицензия

Apache 2.0 — унаследована от базовой модели.

## 🙏 Благодарности

- [philbert440](https://huggingface.co/philbert440) — модель Cyber и Uncensored
- [Qwen Team](https://huggingface.co/Qwen) — Qwen3.8-27B
- [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — GGUF формат и инструменты`

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">📝</span> Готовый README.md
          </h3>
          <button
            onClick={() => copyToClipboard(readmeContent, 'readme-full')}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors flex items-center gap-2"
          >
            {copied === 'readme-full' ? '✓ Скопировано!' : '📋 Копировать всё'}
          </button>
        </div>
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 overflow-x-auto">
          <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
            {readmeContent}
          </pre>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-lg font-bold text-white mb-3">💡 Советы для GitHub</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">🏷️ Topics / Теги</h4>
            <div className="flex flex-wrap gap-2">
              {['llm', 'gguf', 'qwen', 'cybersecurity', 'llama-cpp', 'quantization', 'ai-model', 'local-llm'].map(tag => (
                <span key={tag} className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">📌 Рекомендации</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Добавьте GitHub Actions для CI</li>
              <li>• Настройте Issue templates</li>
              <li>• Добавьте скриншоты/демо</li>
              <li>• Укажите совместимость с GPU</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function CodeBlock({ code, id, copyToClipboard, copied }: { code: string, id: string, copyToClipboard: (text: string, id: string) => void, copied: string | null }) {
  return (
    <div className="relative group">
      <pre className="bg-gray-800 rounded-lg border border-gray-700 p-4 overflow-x-auto text-sm font-mono text-gray-300">
        <code>{code}</code>
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

export default App
