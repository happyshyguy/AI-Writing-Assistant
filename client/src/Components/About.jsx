import React from 'react'
import { FiGithub, FiExternalLink, FiCode, FiServer, FiDatabase } from 'react-icons/fi'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">About AI Writing Assistant</h1>
          <p className="text-xl text-gray-600">
            Your personal AI-powered writing companion
          </p>
        </div>

        {/* Project Overview */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AI Writing Assistant is a modern web application designed to help users improve their writing quality by leveraging artificial intelligence. Whether you need to fix spelling mistakes, correct grammar errors, or rephrase sentences for better clarity and flow, this tool provides instant, intelligent feedback powered by cutting-edge LLM technology.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Built with a focus on simplicity and effectiveness, the application provides a clean, intuitive interface that makes writing improvement accessible to everyone—from students and professionals to non-native English speakers and content creators.
          </p>
        </section>

        {/* Key Features */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Spell Check</h3>
              <p className="text-gray-600 text-sm">
                Instantly fix spelling mistakes while preserving the original sentence structure and meaning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Grammar Check</h3>
              <p className="text-gray-600 text-sm">
                Correct grammatical errors and improve sentence structure for better readability and professionalism.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Rephrase</h3>
              <p className="text-gray-600 text-sm">
                Rewrite sentences to sound more natural, fluent, and engaging while maintaining your original intent.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Technology Stack</h2>
          
          <div className="space-y-6">
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiCode className="text-2xl text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">Frontend</h3>
              </div>
              <ul className="text-gray-600 space-y-1 ml-8">
                <li>• <strong>React 19</strong> - Modern UI library with hooks</li>
                <li>• <strong>Vite</strong> - Ultra-fast build tool and dev server</li>
                <li>• <strong>TailwindCSS</strong> - Utility-first CSS framework</li>
                <li>• <strong>React Router</strong> - Client-side routing</li>
                <li>• <strong>Axios</strong> - HTTP client for API calls</li>
                <li>• <strong>React Icons</strong> - Beautiful icon library</li>
                <li>• <strong>Privy</strong> - User authentication</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiServer className="text-2xl text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">Backend</h3>
              </div>
              <ul className="text-gray-600 space-y-1 ml-8">
                <li>• <strong>Node.js</strong> - JavaScript runtime</li>
                <li>• <strong>Express.js</strong> - Minimal and flexible web framework</li>
                <li>• <strong>Axios</strong> - HTTP requests to external APIs</li>
                <li>• <strong>dotenv</strong> - Environment variable management</li>
                <li>• <strong>CORS</strong> - Cross-origin resource sharing</li>
              </ul>
            </div>

            {/* LLM & AI */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiDatabase className="text-2xl text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">AI & LLM</h3>
              </div>
              <ul className="text-gray-600 space-y-1 ml-8">
                <li>• <strong>GROQ API</strong> - High-performance LLM inference</li>
                <li>• <strong>Llama 3.1 8B Instant</strong> - Fast and efficient language model</li>
                <li>• <strong>OpenAI-compatible API</strong> - Standard API endpoint format</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Architecture</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The application follows a clean client-server architecture:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg text-gray-600 space-y-2 font-mono text-sm border border-gray-200">
            <p><span className="text-indigo-600 font-semibold">Client (React)</span> → User enters text</p>
            <p className="text-center text-gray-400">↓</p>
            <p><span className="text-indigo-600 font-semibold">HTTP Request</span> → Sent to Express Server</p>
            <p className="text-center text-gray-400">↓</p>
            <p><span className="text-indigo-600 font-semibold">Server (Express)</span> → Validates & forwards to GROQ</p>
            <p className="text-center text-gray-400">↓</p>
            <p><span className="text-indigo-600 font-semibold">GROQ LLM API</span> → Processes with Llama model</p>
            <p className="text-center text-gray-400">↓</p>
            <p><span className="text-indigo-600 font-semibold">Response Flow</span> → Back to Client & Display</p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-2">👨‍🎓 Students</h3>
              <p className="text-indigo-700 text-sm">Polish essays, assignments, and research papers for better grades.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-2">✍️ Content Creators</h3>
              <p className="text-indigo-700 text-sm">Ensure blogs, articles, and social media content are error-free.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-2">🌍 Non-Native Speakers</h3>
              <p className="text-indigo-700 text-sm">Learn natural phrasing and improve English writing skills.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-2">💼 Professionals</h3>
              <p className="text-indigo-700 text-sm">Create polished emails, reports, and professional communications.</p>
            </div>
          </div>
        </section>

        {/* Author Info */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About the Creator</h2>
          <div className="flex items-start gap-4">
            <div>
              <p className="text-gray-600 mb-2">
                <strong className="text-gray-900">Project:</strong> AI Writing Assistant
              </p>
              <p className="text-gray-600 mb-2">
                <strong className="text-gray-900">Creator:</strong> Aryan Gupta
              </p>
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-900">Status:</strong> Version 1.0 - Complete & Functional
              </p>
              <p className="text-gray-600 leading-relaxed">
                This project showcases full-stack development skills combining modern frontend frameworks (React, Vite, TailwindCSS) with robust backend architecture (Node.js, Express) and seamless integration with cutting-edge AI services (GROQ LLM API). Built as a practical solution for real-world writing improvement needs.
              </p>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Future Improvements</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1 font-semibold">→</span>
              <p className="text-gray-600">Comprehensive unit and integration tests</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1 font-semibold">→</span>
              <p className="text-gray-600">Advanced editor panel with diff view and multiple sentences</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1 font-semibold">→</span>
              <p className="text-gray-600">User authentication and personalized usage tracking</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1 font-semibold">→</span>
              <p className="text-gray-600">API caching and rate limiting for optimized performance</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1 font-semibold">→</span>
              <p className="text-gray-600">Multi-language support and localization</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1 font-semibold">→</span>
              <p className="text-gray-600">Browser extensions for in-page text correction</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">
            © 2026 AI Writing Assistant. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Built with React, Node.js, Express, and GROQ API
          </p>
        </div>
      </div>
    </div>
  )
}

export default About