import React from 'react'
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;