import { CodeBlock } from '../components/CodeBlock'

interface Props {
  copyToClipboard: (text: string, id: string) => void
  copied: string | null
}

export function InstructionSection({ copyToClipboard, copied }: Props) {
  return (
    <div className="space-y-6">
      <Step number={1} title="Клонируем и настраиваем репозиторий">
        <CodeBlock lang="bash" id="s1" copyToClipboard={copyToClipboard} copied={copied} code={`mkdir qwen3-cyber-gguf && cd qwen3-cyber-gguf
git init

# Структура
mkdir -p scripts configs docs models
touch README.md .gitignore LICENSE`} />
      </Step>
      <Step number={2} title="Создаём .gitignore">
        <CodeBlock lang="gitignore" id="s2" copyToClipboard={copyToClipboard} copied={copied} code={`# Большие файлы моделей
*.gguf
*.bin
*.safetensors

# Python
__pycache__/
*.pyc
.venv/

# OS
.DS_Store
Thumbs.db`} />
      </Step>
      <Step number={3} title="Скрипт загрузки модели">
        <CodeBlock lang="bash" id="s3" copyToClipboard={copyToClipboard} copied={copied} code={`#!/bin/bash
# scripts/download.sh
MODEL_DIR="./models"
mkdir -p "$MODEL_DIR"

pip install huggingface_hub

huggingface-cli download \\
  cyjin-yl/Qwen3.8-27B-Uncensored-Cyber-agentic-imatrix-GGUF \\
  Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf \\
  --local-dir "$MODEL_DIR"

echo "SHA-256:"
sha256sum "$MODEL_DIR/"*.gguf`} />
      </Step>
      <Step number={4} title="Скрипт запуска сервера">
        <CodeBlock lang="bash" id="s4" copyToClipboard={copyToClipboard} copied={copied} code={`#!/bin/bash
# scripts/run_server.sh
MODEL="./models/Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf"
CTX=$1
GPU=$2
PORT=$3

./llama-server -m "$MODEL" -c "$CTX" -ngl "$GPU" --host 0.0.0.0 --port "$PORT"`} />
      </Step>
      <Step number={5} title="Конфиг для Ollama">
        <CodeBlock lang="text" id="s5" copyToClipboard={copyToClipboard} copied={copied} code={`# configs/ollama-modelfile
FROM ./models/Qwen3.8-27B-Uncensored-Cyber-IQ4_XS-imatrix-fromq8.gguf
PARAMETER num_ctx 8192
PARAMETER num_gpu 99
SYSTEM "You are a cybersecurity assistant."`} />
      </Step>
      <Step number={6} title="Dockerfile (опционально)">
        <CodeBlock lang="dockerfile" id="s6" copyToClipboard={copyToClipboard} copied={copied} code={`FROM ghcr.io/ggml-org/llama.cpp:server
WORKDIR /app
COPY scripts/ ./scripts/
COPY configs/ ./configs/
RUN chmod +x scripts/*.sh
EXPOSE 8080
ENTRYPOINT ["./scripts/run_server.sh"]`} />
      </Step>
      <Step number={7} title="Публикация на GitHub">
        <CodeBlock lang="bash" id="s7" copyToClipboard={copyToClipboard} copied={copied} code={`chmod +x scripts/*.sh
git add .
git commit -m "Initial: Qwen3.8-27B-Cyber GGUF setup"
git remote add origin https://github.com/YOUR_USER/qwen3-cyber-gguf.git
git branch -M main
git push -u origin main`} />
      </Step>
    </div>
  )
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold text-white">{number}</div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  )
}
