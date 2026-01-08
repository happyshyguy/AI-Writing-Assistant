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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
            ✍️ Writing Assistant
          </h1>
          <p className="text-gray-600 text-lg">
            Improve your text with AI-powered corrections and refinements
          </p>
        </div>

        {/* Tool Selection Tabs */}
        <div className="bg-white rounded-t-lg border border-gray-200 p-4 flex gap-2 mb-0 overflow-x-auto">
          <button
            onClick={() => {
              setActiveTab('spell')
              setOutputText('')
              setError('')
            }}
            className={`px-6 py-2.5 rounded-lg font-semibold transition whitespace-nowrap text-sm ${
              activeTab === 'spell'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:text-gray-900 border border-gray-200'
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
            className={`px-6 py-2.5 rounded-lg font-semibold transition whitespace-nowrap text-sm ${
              activeTab === 'grammar'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:text-gray-900 border border-gray-200'
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
            className={`px-6 py-2.5 rounded-lg font-semibold transition whitespace-nowrap text-sm ${
              activeTab === 'analyze'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:text-gray-900 border border-gray-200'
            }`}
          >
            ✨ Rephrase
          </button>
        </div>

        {/* Main Content Area */}
        <div className="bg-white border border-t-0 border-gray-200 rounded-b-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                📝 Your Text
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste or type your text here..."
                className="w-full h-80 p-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 resize-none"
              />
              <div className="mt-4 flex gap-2 flex-wrap">
                <button
                  onClick={() => handleApiCall(
                    activeTab === 'spell' ? 'spellCheck' :
                    activeTab === 'grammar' ? 'grammarCheck' :
                    'analyze'
                  )}
                  disabled={loading || !inputText.trim()}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-black transition shadow-md"
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
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 px-6 py-2 rounded-lg font-semibold transition border border-gray-300"
                >
                  <FiRefreshCw />
                  Clear
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                ✨ Result
              </label>
              <textarea
                value={outputText}
                readOnly
                placeholder="Your corrected text will appear here..."
                className="w-full h-80 p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none resize-none"
              />
              <div className="mt-4 flex gap-2 flex-wrap">
                <button
                  onClick={copyToClipboard}
                  disabled={!outputText}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg font-black transition shadow-md ${
                    outputText
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  title="Copy to clipboard"
                >
                  <FiCopy />
                  {copyTooltip ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={useOutput}
                  disabled={!outputText}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg font-black transition shadow-md ${
                    outputText
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
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
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <FiAlertCircle className="text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-red-900">Error</p>
                <p className="text-red-800 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <FiCheck className="text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-green-900">{success}</p>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">How to use:</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>✓ Enter or paste your text in the left box</li>
              <li>✓ Select the correction type (Spell Check, Grammar Check, or Rephrase)</li>
              <li>✓ Click the button to process your text</li>
              <li>✓ Copy the result or use it as input for further improvements</li>
            </ul>
          </div>
        </div>

        {/* Server Status Info */}
        <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg text-center text-gray-500 text-sm">
          <p>Powered by GROQ API | Llama 3.1 Model | Server: {API_BASE_URL}</p>
        </div>
      </div>
    </div>
  )
}

export default Editor