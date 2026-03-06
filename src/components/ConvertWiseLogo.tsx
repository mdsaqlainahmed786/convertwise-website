
export function ConvertWiseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center shrink-0 self-center ${className}`}>
      {/* Light mode logo */}
      <img
        src="/logo-light-nimitai-cropped.png"
        alt="Nimitai"
        className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-opacity duration-200 hover:opacity-90 dark:hidden"
      />
      {/* Dark mode logo — ambient glow effect */}
      <div className="hidden dark:flex items-center relative">
        {/* Ambient glow blob — picks up brand colors */}
        <div
          className="absolute inset-0 rounded-2xl blur-2xl opacity-60 scale-125"
          style={{ background: 'linear-gradient(120deg, rgba(180,60,220,0.45) 0%, rgba(232,148,34,0.35) 55%, rgba(220,80,40,0.40) 100%)' }}
          aria-hidden
        />
        {/* Frosted glass container */}
        <div className="relative flex items-center rounded-xl px-3 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] shadow-[0_2px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] transition-opacity duration-200 hover:opacity-90">
          <img
            src="/logo-dark-nimitai-cropped.png"
            alt="Nimitai"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

