import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiArrowRight, FiBook, FiPenTool, FiTarget } from 'react-icons/fi'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ✍️ AI Writing Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Transform your writing with AI-powered corrections and improvements. 
            Fix spelling, grammar, and rephrase sentences to sound more natural and professional.
          </p>
          <Link 
            to="/write"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            Start Writing <FiArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-800 bg-opacity-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Spell Check */}
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg border border-slate-600 hover:border-blue-400 transition">
              <div className="flex items-center mb-4">
                <FiCheckCircle className="text-3xl text-green-400 mr-4" />
                <h3 className="text-xl font-bold">Spell Check</h3>
              </div>
              <p className="text-gray-300">
                Instantly fix spelling mistakes while preserving your sentence structure and meaning.
              </p>
            </div>

            {/* Grammar Check */}
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg border border-slate-600 hover:border-blue-400 transition">
              <div className="flex items-center mb-4">
                <FiBook className="text-3xl text-blue-400 mr-4" />
                <h3 className="text-xl font-bold">Grammar Check</h3>
              </div>
              <p className="text-gray-300">
                Correct grammar errors and improve sentence structure for better readability.
              </p>
            </div>

            {/* Rephrase */}
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg border border-slate-600 hover:border-blue-400 transition">
              <div className="flex items-center mb-4">
                <FiPenTool className="text-3xl text-purple-400 mr-4" />
                <h3 className="text-xl font-bold">Rephrase</h3>
              </div>
              <p className="text-gray-300">
                Rewrite sentences to sound more natural, fluent, and professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Perfect For</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <FiTarget className="text-2xl text-blue-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Students</h3>
              <p className="text-gray-300">Polish your essays, assignments, and research papers effortlessly.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiTarget className="text-2xl text-cyan-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Writers & Bloggers</h3>
              <p className="text-gray-300">Improve readability and ensure your content is error-free.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiTarget className="text-2xl text-purple-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Non-Native Speakers</h3>
              <p className="text-gray-300">Learn natural phrasing and improve your English writing.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FiTarget className="text-2xl text-green-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Professionals</h3>
              <p className="text-gray-300">Create polished emails, reports, and professional communications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Writing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start using AI Writing Assistant today. It's free, fast, and easy to use.
          </p>
          <Link 
            to="/write"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Started Now <FiArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-slate-900 py-12 mt-12 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>Powered by GROQ API with Llama 3.1 Models</p>
          <p className="mt-2">© 2026 AI Writing Assistant. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}

export default Home