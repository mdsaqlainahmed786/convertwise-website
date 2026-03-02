import { useState, useRef, useEffect } from 'react';
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
  const [isAltOpen, setIsAltOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [mobileAltOpen, setMobileAltOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
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

  const navLinkClass = (path?: string) =>
    `text-sm font-medium transition-colors hover:text-[#E89422] dark:hover:text-[#F5B040] ${
      path && location.pathname === path
        ? 'text-[#E89422] dark:text-[#F5B040]'
        : 'text-gray-700 dark:text-gray-300'
    }`;

  return (
    <nav className="fixed left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-white/[0.06] transition-[top] duration-200" style={{ zIndex: 50, top: 'var(--announcement-bar-h, 0px)' }}>
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
            <a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white text-sm font-medium rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors shadow-lg hover:shadow-xl"
              aria-label="Get started with Nimitai AI meeting intelligence"
            >
              Get Started
            </a>
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
        <div className="md:hidden border-t border-gray-200 dark:border-white/[0.06] bg-white dark:bg-[#070B18] transition-colors max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            <a href="/#product" className="block py-3 text-gray-700 dark:text-gray-300 text-sm font-medium" onClick={() => setIsOpen(false)}>
              Product
            </a>

            {/* Alternatives accordion */}
            <div>
              <button
                onClick={() => setMobileAltOpen(!mobileAltOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Alternatives
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 text-gray-400 ${mobileAltOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileAltOpen && (
                <div className="pb-2 pl-3 space-y-0.5">
                  {alternatives.map((alt) => (
                    <Link
                      key={alt.href}
                      to={alt.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 pl-3 text-sm text-gray-500 dark:text-gray-400 hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors border-l-2 border-gray-100 dark:border-gray-800 hover:border-[#E89422]"
                    >
                      {alt.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tools accordion */}
            <div>
              <button
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Tools
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 text-gray-400 ${mobileToolsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileToolsOpen && (
                <div className="pb-2 pl-3 space-y-0.5">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      to={tool.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 pl-3 text-sm text-gray-500 dark:text-gray-400 hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors border-l-2 border-gray-100 dark:border-gray-800 hover:border-[#E89422]"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="block py-3 text-gray-700 dark:text-gray-300 text-sm font-medium" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link to="/blog" className="block py-3 text-gray-700 dark:text-gray-300 text-sm font-medium" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link to="/about" className="block py-3 text-gray-700 dark:text-gray-300 text-sm font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800 mt-2">
              <Link to="/login" className="text-sm font-bold text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(false)}>Log In</Link>
              <ThemeToggle />
            </div>
            <a
              href="https://nilanshgupta.typeform.com/to/UNvZIrgu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white text-sm font-medium rounded-full hover:from-[#C47010] hover:to-[#963C00] transition-colors mt-3"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

    </nav>
  );
}
