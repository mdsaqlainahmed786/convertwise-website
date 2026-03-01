import { motion } from 'motion/react';

export function DataVisualization() {
  const bars = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    height: Math.random() * 60 + 20,
    delay: i * 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around gap-2 px-8 pb-8">
        {bars.map((bar) => (
          <motion.div
            key={bar.id}
            className="flex-1 rounded-t-lg bg-gradient-to-t from-[#E89422] to-orange-500"
            initial={{ height: 0 }}
            animate={{
              height: [`${bar.height}%`, `${(bar.height + 20) % 80}%`, `${bar.height}%`],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: bar.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated line chart */}
      <svg className="absolute top-0 left-0 w-full h-2/3">
        <motion.path
          d="M 0 50 Q 25 20, 50 30 T 100 50 T 150 40 T 200 60"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ transform: 'scale(5)' }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E89422" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data points */}
      {[15, 35, 55, 75].map((x, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#E89422] to-orange-500"
          style={{
            left: `${x}%`,
            top: `${20 + Math.random() * 30}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
