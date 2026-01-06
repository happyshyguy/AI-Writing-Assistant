import React, { useState } from 'react'
import axios from 'axios'
import { FiCheck, FiCopy, FiRefreshCw, FiAlertCircle, FiLoader } from 'react-icons/fi'

const Editor = () => {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [activeTab, setActiveTab] = useState('spell') // 'spell', 'grammar', 'analyze'
  const [copyTooltip, setCopyTooltip] = useState(false)

  // Configure axios base URL for API calls
  const API_BASE_URL = 'http://localhost:8000/api'

  const handleApiCall = async (endpoint) => {
    if (!inputText.trim()) {
      setError('Please enter some text first!')
      return
    }

    setLoading(true)
    setError('')
    setSuccess('')
    setOutputText('')

    try {
      const response = await axios.post(`${API_BASE_URL}/${endpoint}`, {
        sentence: inputText
      })

      if (response.data.success) {
        setOutputText(response.data.result)
        setSuccess(`✓ ${endpoint === 'spellCheck' ? 'Spell check' : endpoint === 'grammarCheck' ? 'Grammar check' : 'Rephrase'} completed!`)
        setTimeout(() => setSuccess(''), 3000)
      }
    } catch (err) {
      console.error('API Error:', err)
      setError(
        err.response?.data?.error || 
        err.message || 
        'An error occurred. Make sure the server is running on http://localhost:8000'
      )
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
    setCopyTooltip(true)
    setTimeout(() => setCopyTooltip(false), 2000)
  }

  const clearAll = () => {
    setInputText('')
    setOutputText('')
    setError('')
    setSuccess('')
  }

  const useOutput = () => {
    if (outputText) {
      setInputText(outputText)
      setOutputText('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            ✍️ Writing Assistant
          </h1>
          <p className="text-gray-400 text-lg">
            Improve your text with AI-powered corrections and refinements
          </p>
        </div>

        {/* Tool Selection Tabs */}
        <div className="bg-slate-800 rounded-t-lg border border-slate-700 p-4 flex gap-2 mb-0 overflow-x-auto">
          <button
            onClick={() => {
              setActiveTab('spell')
              setOutputText('')
              setError('')
            }}
            className={`px-6 py-2 rounded font-semibold transition whitespace-nowrap ${
              activeTab === 'spell'
                ? 'bg-green-500 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            🔍 Spell Check
          </button>
          <button
            onClick={() => {
              setActiveTab('grammar')
              setOutputText('')
              setError('')
            }}
            className={`px-6 py-2 rounded font-semibold transition whitespace-nowrap ${
              activeTab === 'grammar'
                ? 'bg-blue-500 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            📚 Grammar Check
          </button>
          <button
            onClick={() => {
              setActiveTab('analyze')
              setOutputText('')
              setError('')
            }}
            className={`px-6 py-2 rounded font-semibold transition whitespace-nowrap ${
              activeTab === 'analyze'
                ? 'bg-purple-500 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            ✨ Rephrase
          </button>
        </div>

        {/* Main Content Area */}
        <div className="bg-slate-800 border border-t-0 border-slate-700 rounded-b-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-200">
                📝 Your Text
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste or type your text here..."
                className="w-full h-80 p-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 resize-none"
              />
              <div className="mt-4 flex gap-2 flex-wrap">
                <button
                  onClick={() => handleApiCall(
                    activeTab === 'spell' ? 'spellCheck' :
                    activeTab === 'grammar' ? 'grammarCheck' :
                    'analyze'
                  )}
                  disabled={loading || !inputText.trim()}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-2 rounded-lg font-semibold transition"
                >
                  {loading ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FiCheck />
                      {activeTab === 'spell' ? 'Spell Check' :
                       activeTab === 'grammar' ? 'Grammar Check' :
                       'Rephrase'}
                    </>
                  )}
                </button>
                <button
                  onClick={clearAll}
                  disabled={!inputText && !outputText}
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 disabled:bg-gray-700 disabled:cursor-not-allowed px-6 py-2 rounded-lg font-semibold transition"
                >
                  <FiRefreshCw />
                  Clear
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-200">
                ✨ Result
              </label>
              <textarea
                value={outputText}
                readOnly
                placeholder="Your corrected text will appear here..."
                className="w-full h-80 p-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none resize-none"
              />
              <div className="mt-4 flex gap-2 flex-wrap">
                <button
                  onClick={copyToClipboard}
                  disabled={!outputText}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition relative ${
                    outputText
                      ? 'bg-cyan-600 hover:bg-cyan-700 cursor-pointer'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                  title="Copy to clipboard"
                >
                  <FiCopy />
                  {copyTooltip ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={useOutput}
                  disabled={!outputText}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition ${
                    outputText
                      ? 'bg-purple-600 hover:bg-purple-700 cursor-pointer'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                  title="Use this as input for further processing"
                >
                  <FiRefreshCw />
                  Use This
                </button>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-900 bg-opacity-50 border border-red-500 rounded-lg flex items-start gap-3">
              <FiAlertCircle className="text-red-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-red-400">Error</p>
                <p className="text-red-200 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mt-6 p-4 bg-green-900 bg-opacity-50 border border-green-500 rounded-lg flex items-start gap-3">
              <FiCheck className="text-green-400 mt-1 flex-shrink-0" />
              <p className="text-green-200">{success}</p>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 p-4 bg-slate-700 bg-opacity-50 rounded-lg border border-slate-600">
            <h3 className="font-semibold text-gray-200 mb-2">How to use:</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>✓ Enter or paste your text in the left box</li>
              <li>✓ Select the correction type (Spell Check, Grammar Check, or Rephrase)</li>
              <li>✓ Click the button to process your text</li>
              <li>✓ Copy the result or use it as input for further improvements</li>
            </ul>
          </div>
        </div>

        {/* Server Status Info */}
        <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg text-center text-gray-400 text-sm">
          <p>Powered by GROQ API | Llama 3.1 Model | Server: {API_BASE_URL}</p>
        </div>
      </div>
    </div>
  )
}

export default Editor