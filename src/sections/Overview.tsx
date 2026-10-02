export function OverviewSection() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Что это за модель?</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            <strong className="text-white">Qwen3.8-27B-Uncensored-Cyber</strong> — специализированная языковая модель для кибербезопасности и агентного программирования.
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
            Данный репозиторий содержит <strong className="text-white">GGUF квантизации</strong> с importance matrix, калиброванной на реальных агентных сессиях.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Ключевые особенности</h3>
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
              <span>Поддержка MTP (Multi-Token Prediction)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>262K контекст</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Важные замечания</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Квантизовано из Q8_0, не из BF16 (вторичная квантизация)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Модель без цензуры — для offensive security</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>imatrix оптимизирован для агентного кодинга</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Для мультимодальности нужен отдельный vision projector</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">!</span>
              <span>Лицензия Apache 2.0</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Производительность</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-cyan-400">1.20x</div>
            <div className="text-sm text-gray-400 mt-1">Быстрее чем Q5_K_M</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">0.42%</div>
            <div className="text-sm text-gray-400 mt-1">ΔPPL vs Q5_K_M</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400">7/7</div>
            <div className="text-sm text-gray-400 mt-1">Верная копия литералов</div>
          </div>
        </div>
      </div>
    </div>
  )
}
