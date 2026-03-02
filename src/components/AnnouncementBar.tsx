import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const STORAGE_KEY = 'nimitai-rebrand-dismissed';
const BAR_HEIGHT = 36; // px — must match the actual rendered height

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  // Push the fixed nav down when bar is visible
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--announcement-bar-h',
      dismissed ? '0px' : `${BAR_HEIGHT}px`
    );
    return () => {
      document.documentElement.style.setProperty('--announcement-bar-h', '0px');
    };
  }, [dismissed]);

  if (dismissed) return null;

  function handleDismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-[#0A0400] text-white text-[13px]"
      style={{ height: BAR_HEIGHT }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#963C00]/30 via-transparent to-[#963C00]/30" />
      <div className="relative h-full max-w-7xl mx-auto flex items-center justify-center gap-x-2 px-10 sm:px-4">
        <p className="text-center leading-none">
          <span className="text-white/60">ConvertWise is now </span>
          <span className="font-semibold bg-gradient-to-r from-[#E89422] to-[#F5B040] bg-clip-text text-transparent">
            Nimitai
          </span>
          <span className="text-white/30 mx-2">|</span>
          <Link
            to="/blog/why-nimitai-name"
            className="inline-flex items-center gap-1 font-medium text-[#F5B040]/90 hover:text-white transition-colors"
          >
            The story behind the name
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/30 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
