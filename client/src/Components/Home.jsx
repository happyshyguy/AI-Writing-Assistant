import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiArrowRight, FiBook, FiPenTool, FiTarget } from 'react-icons/fi'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            ✍️ AI Writing Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your writing with AI-powered corrections and improvements. 
            Fix spelling, grammar, and rephrase sentences to sound more natural and professional.
          </p>
          <Link 
            to="/write"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-base py-3 px-8 rounded-lg transition shadow-lg"
          >
            Start Writing <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Spell Check */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition hover:shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <FiCheckCircle className="text-3xl text-indigo-600 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-900">Spell Check</h3>
              </div>
              <p className="text-gray-600">
                Instantly fix spelling mistakes while preserving your sentence structure and meaning.
              </p>
            </div>

            {/* Grammar Check */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition hover:shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <FiBook className="text-3xl text-indigo-600 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-900">Grammar Check</h3>
              </div>
              <p className="text-gray-600">
                Correct grammar errors and improve sentence structure for better readability.
              </p>
            </div>

            {/* Rephrase */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition hover:shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <FiPenTool className="text-3xl text-indigo-600 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-900">Rephrase</h3>
              </div>
              <p className="text-gray-600">
                Rewrite sentences to sound more natural, fluent, and professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Perfect For</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <FiTarget className="text-2xl text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Students</h3>
                <p className="text-gray-600">Polish your essays, assignments, and research papers effortlessly.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiTarget className="text-2xl text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Writers & Bloggers</h3>
                <p className="text-gray-600">Improve readability and ensure your content is error-free.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiTarget className="text-2xl text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Non-Native Speakers</h3>
                <p className="text-gray-600">Learn natural phrasing and improve your English writing.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiTarget className="text-2xl text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professionals</h3>
                <p className="text-gray-600">Create polished emails, reports, and professional communications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Improve Your Writing?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start using AI Writing Assistant today. It's free, fast, and easy to use.
          </p>
          <Link 
            to="/write"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-base py-3 px-8 rounded-lg transition shadow-lg"
          >
            Get Started Now <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Powered by GROQ API with Llama 3.1 Models</p>
          <p className="mt-2">© 2026 AI Writing Assistant. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}

export default Home