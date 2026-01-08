import React from 'react'
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { authenticated, login, logout } = usePrivy();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition">
              ✍️ AI Writer
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 transition font-medium text-sm"
            >
              Home
            </Link>
            {authenticated && (
              <Link 
                to="/write" 
                className="text-gray-600 hover:text-gray-900 transition font-medium text-sm"
              >
                Write
              </Link>
            )}
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-gray-900 transition font-medium text-sm"
            >
              About
            </Link>
            {authenticated ? (
              <button
                onClick={logout}
                className="text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-lg font-medium transition text-sm border border-gray-300 hover:border-gray-400"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg font-bold transition text-sm"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl text-gray-900">
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 space-y-2 pb-3 border-t border-gray-200 pt-3">
            <Link 
              to="/" 
              className="block text-gray-600 hover:text-gray-900 transition font-medium px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {authenticated && (
              <Link 
                to="/write" 
                className="block text-gray-600 hover:text-gray-900 transition font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Write
              </Link>
            )}
            <Link 
              to="/about" 
              className="block text-gray-600 hover:text-gray-900 transition font-medium px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {authenticated ? (
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg font-medium transition text-left border border-gray-300 hover:border-gray-400 mt-2"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  login();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg font-bold transition text-left mt-2"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;