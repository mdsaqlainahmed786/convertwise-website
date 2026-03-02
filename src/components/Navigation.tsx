import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ConvertWiseLogo } from './ConvertWiseLogo';
import { ThemeToggle } from './ThemeToggle';

const alternatives = [
  { label: 'Gong Alternative', href: '/alternatives/gong-alternative' },
  { label: 'Fathom Alternative', href: '/alternatives/fathom-alternative' },
  { label: 'Fireflies Alternative', href: '/alternatives/fireflies-alternative' },
  { label: 'tl;dv Alternative', href: '/alternatives/tldv-alternative' },
  { label: 'Chorus Alternative', href: '/alternatives/chorus-alternative' },
  { label: 'Otter.ai Alternative', href: '/alternatives/otter-alternative' },
];

const tools = [
  { name: 'AI Meeting Assistant', href: '/ai-meeting-assistant', description: 'Real-time AI for every sales call' },
  { name: 'AI Notetaker for Sales', href: '/ai-notetaker', description: 'Beyond notes — full sales intelligence' },
  { name: 'AI Meeting Co-Pilot', href: '/ai-meeting-copilot', description: 'Live coaching during meetings' },
  { name: 'AI Sales Coaching', href: '/ai-sales-coaching', description: 'Automated rep coaching from call data' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAltOpen, setIsAltOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const location = useLocation();
  const altRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (altRef.current && !altRef.current.contains(event.target as Node)) {
        setIsAltOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    setIsDialogOpen(false);
    setFormData({ name: '', email: '', phone: '' });
    alert('Thank you for your interest! We will contact you soon.');
  };

  const navLinkClass = (path?: string) =>
    `text-sm font-medium transition-colors hover:text-[#E89422] dark:hover:text-[#F5B040] ${
      path && location.pathname === path
        ? 'text-[#E89422] dark:text-[#F5B040]'
        : 'text-gray-700 dark:text-gray-300'
    }`;

  return (
    <nav className="fixed left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/[0.06] transition-[top] duration-200" style={{ zIndex: 50, top: 'var(--announcement-bar-h, 0px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center" aria-label="Nimitai home">
              <ConvertWiseLogo />
            </Link>

            <div className="hidden md:flex items-center gap-7">
              <a href="/#product" className={navLinkClass()}>
                Product
              </a>

              {/* Alternatives dropdown */}
              <div className="relative" ref={altRef}>
                <button
                  onClick={() => setIsAltOpen(!isAltOpen)}
                  className={`${navLinkClass()} flex items-center gap-1`}
                  aria-expanded={isAltOpen}
                  aria-haspopup="true"
                >
                  Alternatives
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isAltOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isAltOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                    {alternatives.map((alt) => (
                      <Link
                        key={alt.href}
                        to={alt.href}
                        onClick={() => setIsAltOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors"
                      >
                        {alt.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Tools dropdown */}
              <div className="relative" ref={toolsRef}>
                <button
                  onClick={() => setIsToolsOpen(!isToolsOpen)}
                  className={`${navLinkClass()} flex items-center gap-1`}
                  aria-expanded={isToolsOpen}
                  aria-haspopup="true"
                >
                  Tools
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isToolsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                    {tools.map((tool) => (
                      <Link
                        key={tool.href}
                        to={tool.href}
                        onClick={() => setIsToolsOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors"
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/pricing" className={navLinkClass('/pricing')}>
                Pricing
              </Link>

              <Link to="/blog" className={navLinkClass('/blog')}>
                Blog
              </Link>

              <Link to="/about" className={navLinkClass('/about')}>
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/login"
              className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Log In
            </Link>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDialogOpen(true);
              }}
              className="px-6 py-2 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white text-sm font-medium rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all shadow-lg hover:shadow-xl cursor-pointer"
              style={{ position: 'relative', zIndex: 51, pointerEvents: 'auto' }}
              aria-label="Get started with Nimitai AI meeting intelligence"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-white/[0.06] bg-white dark:bg-[#070B18] transition-colors">
          <div className="px-4 py-4 space-y-1">
            <a href="/#product" className="block py-2 text-gray-700 dark:text-gray-300 text-sm" onClick={() => setIsOpen(false)}>
              Product
            </a>

            <div className="py-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Alternatives</p>
              {alternatives.map((alt) => (
                <Link
                  key={alt.href}
                  to={alt.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 pl-3 text-sm text-gray-600 dark:text-gray-400 hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors"
                >
                  {alt.label}
                </Link>
              ))}
            </div>

            <div className="py-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tools</p>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  to={tool.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 pl-3 text-sm text-gray-600 dark:text-gray-400 hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors"
                >
                  {tool.name}
                </Link>
              ))}
            </div>

            <Link to="/pricing" className="block py-2 text-gray-700 dark:text-gray-300 text-sm" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link to="/blog" className="block py-2 text-gray-700 dark:text-gray-300 text-sm" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 dark:text-gray-300 text-sm" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
              <a href="/login" className="text-sm font-bold text-gray-700 dark:text-gray-300">Log In</a>
              <ThemeToggle />
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsDialogOpen(true);
              }}
              className="w-full px-6 py-2 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Sign-up dialog */}
      {isDialogOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsDialogOpen(false)}
          style={{ zIndex: 9999 }}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 relative transition-colors"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 10000 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Apply for Founding Access</h2>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Nimitai is in private beta. Founding teams get locked pricing at $149/seat/month, private onboarding, and direct access to the founders.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#E89422] focus:border-[#E89422] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#E89422] focus:border-[#E89422] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#E89422] focus:border-[#E89422] outline-none transition-colors"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-all"
                >
                  Apply for Access
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
