interface Props {
  copyToClipboard: (text: string, id: string) => void
  copied: string | null
}

export function ReadmeSection({ copyToClipboard, copied }: Props) {
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
git clone https://github.com/YOUR_USERNAME/qwen3-cyber-gguf.git
cd qwen3-cyber-gguf

# Скачиваем модель
bash scripts/download.sh

# Запускаем сервер
bash scripts/run_server.sh
\`\`\`

### Ollama

\`\`\`bash
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

- [philbert440](https://huggingface.co/philbert440) — модель Cyber
- [Qwen Team](https://huggingface.co/Qwen) — Qwen3.8-27B
- [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — GGUF формат`

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Готовый README.md</h3>
          <button
            onClick={() => copyToClipboard(readmeContent, 'readme-full')}
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
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
        <h3 className="text-lg font-bold text-white mb-3">Структура репозитория</h3>
        <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
          <pre className="text-gray-300">{`qwen3-cyber-gguf/
├── README.md
├── LICENSE
├── .gitignore
├── Dockerfile
├── scripts/
│   ├── download.sh
│   └── run_server.sh
├── configs/
│   └── ollama-modelfile
└── models/ (в .gitignore)
    └── *.gguf`}</pre>
        </div>
      </div>
    </div>
  )
}
