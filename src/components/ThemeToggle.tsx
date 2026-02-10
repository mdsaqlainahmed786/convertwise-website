import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, [theme]);

  if (!mounted) {
    return (
      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
      </div>
    );
  }

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
        isDark ? 'bg-blue-600' : 'bg-gray-300'
      }`}
      aria-label="Toggle theme"
      role="switch"
      aria-checked={isDark}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 flex items-center justify-center ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-gray-600" />
        ) : (
          <Sun className="h-3 w-3 text-gray-600" />
        )}
      </span>
    </button>
  );
}
