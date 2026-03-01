import { motion } from 'motion/react';

export function ScanningGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Grid lines */}
      <svg className="w-full h-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(232,148,34,0.2)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(249,115,22,0)" />
            <stop offset="50%" stopColor="rgba(249,115,22,0.8)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Scanning line - vertical */}
      <motion.div
        className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent blur-sm"
        animate={{
          y: ['-10%', '110%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Scanning line - horizontal */}
      <motion.div
        className="absolute left-0 w-32 h-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-sm"
        animate={{
          x: ['-10%', '110%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />

      {/* Corner indicators */}
      {[
        { top: '10%', left: '10%' },
        { top: '10%', right: '10%' },
        { bottom: '10%', left: '10%' },
        { bottom: '10%', right: '10%' },
      ].map((position, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8"
          style={position}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <path
              d="M 0 8 L 0 0 L 8 0 M 24 0 L 32 0 L 32 8 M 32 24 L 32 32 L 24 32 M 8 32 L 0 32 L 0 24"
              fill="none"
              stroke="url(#corner-gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="corner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E89422" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
