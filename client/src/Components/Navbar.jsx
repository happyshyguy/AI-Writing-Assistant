import React from 'react'
import {usePrivy} from '@privy-io/react-auth'
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const {authenticated, login, logout, user, ready} = usePrivy();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!ready) {
    return <div>Loading...</div>;
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
              ✍️ AI Writer
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="hover:text-blue-400 transition font-medium"
            >
              Home
            </Link>
            <Link 
              to="/write" 
              className="hover:text-blue-400 transition font-medium"
            >
              Write
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-400 transition font-medium"
            >
              About
            </Link>
            
            {authenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">
                  {user?.email?.address || 'User'}
                </span>
                <button 
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={login}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition font-medium"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl">
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t border-slate-700 pt-4">
            <Link 
              to="/" 
              className="block hover:text-blue-400 transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/write" 
              className="block hover:text-blue-400 transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Write
            </Link>
            <Link 
              to="/about" 
              className="block hover:text-blue-400 transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            {authenticated ? (
              <div>
                <p className="text-sm text-gray-300 mb-2">
                  {user?.email?.address || 'User'}
                </p>
                <button 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  login();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition font-medium"
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