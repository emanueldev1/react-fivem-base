import { useState } from 'react'
import quasarLogo from './assets/quasar-logo-with-text.png'
import { debugData } from './utils/debugData'

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="flex justify-center mb-8">
        <a href="https://github.com/emanueldev1" target="_blank" className="group">
          <img 
            src={quasarLogo} 
            className="w-64 sm:w-80 md:w-96 h-auto transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(100,108,255,0.7)]" 
            alt="Quasar Store logo" 
          />
        </a>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
        Quasar Store FiveM Template
      </h1>
      <div className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg max-w-md w-full">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-300 text-center">
          Edit <code className="text-indigo-400">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-400 text-center">
        Created by{' '}
        <a 
          href="https://github.com/emanueldev1" 
          target="_blank" 
          className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
        >
          emanueldev1
        </a>{' '}
        for Quasar Store
      </p>
    </div>
  )
}

export default App