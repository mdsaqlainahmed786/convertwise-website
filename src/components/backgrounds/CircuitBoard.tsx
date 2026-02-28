import { motion } from 'motion/react';

export function CircuitBoard() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal lines */}
        {[20, 40, 60, 80].map((y, index) => (
          <g key={`h-${y}`}>
            <motion.line
              x1="0%"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="url(#circuit-gradient)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "linear"
              }}
            />
            {/* Connection points */}
            {[15, 35, 55, 75, 95].map((x) => (
              <motion.circle
                key={`${x}-${y}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r="2"
                fill="url(#node-gradient)"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </g>
        ))}

        {/* Vertical lines */}
        {[15, 35, 55, 75, 95].map((x, index) => (
          <motion.line
            key={`v-${x}`}
            x1={`${x}%`}
            y1="0%"
            x2={`${x}%`}
            y2="100%"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "linear"
            }}
          />
        ))}

        {/* Animated pulse traveling through circuit */}
        <motion.circle
          r="4"
          fill="#f97316"
          filter="blur(2px)"
          animate={{
            cx: ['15%', '35%', '55%', '75%', '95%', '95%', '75%', '55%', '35%', '15%'],
            cy: ['20%', '20%', '40%', '40%', '60%', '80%', '80%', '60%', '40%', '20%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E89422" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="node-gradient">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#E89422" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
