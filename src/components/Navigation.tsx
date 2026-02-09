import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ConvertWiseLogo } from './ConvertWiseLogo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Registration submitted:', formData);
    // You can add API call here
    setIsDialogOpen(false);
    setFormData({ name: '', email: '', phone: '' });
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" style={{ zIndex: 50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center">
              <ConvertWiseLogo />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/#product" className="text-gray-700 hover:text-gray-900 transition-colors">
                Product
              </a>
              <Link to="/about" className={`${location.pathname === '/about' ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900 transition-colors`}>
                About
              </Link>
              <a href="/#resources" className="text-gray-700 hover:text-gray-900 transition-colors">
                Resources
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDialogOpen(true);
              }}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors cursor-pointer active:bg-purple-800"
              style={{ position: 'relative', zIndex: 51, pointerEvents: 'auto' }}
              aria-label="Get started with ConvertWise AI sales automation platform"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <a href="/#product" className="block text-gray-700">Product</a>
            <Link to="/about" className={`block ${location.pathname === '/about' ? 'text-gray-900' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
              About
            </Link>
            <a href="/#resources" className="block text-gray-700">Resources</a>
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsDialogOpen(true);
              }}
              className="w-full px-6 py-2 bg-purple-600 text-white rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {isDialogOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => {
            setIsDialogOpen(false);
          }}
          style={{ zIndex: 9999 }}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ zIndex: 10000 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Exclusive Access</h2>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              This is limited to exclusive members. To enroll your interest, please register with your name, email, and phone number.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
