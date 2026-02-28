import { motion } from 'motion/react';

export function AIProcessing() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-25">
      {/* Central processing hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Rotating rings */}
        {[0, 1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{
              width: 100 + ring * 60,
              height: 100 + ring * 60,
              borderColor: ring % 2 === 0 ? 'rgba(232,148,34,0.3)' : 'rgba(249,115,22,0.3)',
            }}
            animate={{
              rotate: ring % 2 === 0 ? 360 : -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 10 + ring * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: ring * 0.5,
              },
            }}
          />
        ))}

        {/* Central core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#E89422] to-orange-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbiting nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <motion.div
            key={angle}
            className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500"
            style={{
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              },
            }}
            initial={{
              x: Math.cos((angle * Math.PI) / 180) * 120,
              y: Math.sin((angle * Math.PI) / 180) * 120,
            }}
          />
        ))}
      </div>

      {/* Processing indicators in corners */}
      {[
        { top: '15%', left: '15%', rotate: 0 },
        { top: '15%', right: '15%', rotate: 90 },
        { bottom: '15%', left: '15%', rotate: 270 },
        { bottom: '15%', right: '15%', rotate: 180 },
      ].map((position, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={position}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <motion.circle
              cx="20"
              cy="20"
              r="15"
              fill="none"
              stroke="url(#processing-gradient)"
              strokeWidth="2"
              strokeDasharray="30 70"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <defs>
              <linearGradient id="processing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
