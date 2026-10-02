import { CodeBlock } from '../components/CodeBlock'

interface Props {
  copyToClipboard: (text: string, id: string) => void
  copied: string | null
}

export function FilesSection({ copyToClipboard, copied }: Props) {
  const files = [
    {
      name: 'imatrix-agentic-v2.gguf',
      size: '13.01 MiB',
      sha: 'a219ff5f3ffabb4a4b7cc644cae3a44f647032e2016b3308843ac8650e59af69',
      desc: 'Матрица калибровки',
      type: 'calibration'
    },
    {
      name: 'Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf',
      size: '14.96 GiB',
      sha: 'd11d28b9b253fb7fc9de277a46af5bbd790c000d6bfdfe5648fd7b62ec2560b7',
      desc: 'IQ4_XS без MTP',
      type: 'model'
    },
    {
      name: 'Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8-plus-mtp.gguf',
      size: '15.38 GiB',
      sha: 'da6a418f30a7e6c6669b74179f6d533ca06016e02eba298d2b713a2900d7a1ba',
      desc: 'Production с MTP head',
      type: 'mtp'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Файлы репозитория</h3>
        <div className="space-y-4">
          {files.map((file, i) => (
            <div key={i} className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    file.type === 'calibration' ? 'bg-yellow-500/20 text-yellow-300' :
                    file.type === 'mtp' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-cyan-500/20 text-cyan-300'
                  }`}>
                    {file.type.toUpperCase()}
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
                  className="text-xs px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-300"
                >
                  {copied === `sha-${i}` ? '✓' : '📋'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-lg font-bold text-white mb-3">Скачивание</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Через huggingface-cli:</p>
            <CodeBlock lang="bash" id="dl1" copyToClipboard={copyToClipboard} copied={copied}
              code="huggingface-cli download cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF --local-dir ./model" />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Через git lfs:</p>
            <CodeBlock lang="bash" id="dl2" copyToClipboard={copyToClipboard} copied={copied}
              code={`git lfs install
git clone https://huggingface.co/cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF`} />
          </div>
        </div>
      </div>
    </div>
  )
}
