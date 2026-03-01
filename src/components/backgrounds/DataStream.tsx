import { motion } from 'motion/react';

export function DataStream() {
  const streams = Array.from({ length: 8 }, (_, i) => i);
  const dataPoints = ['01', '10', '11', '00', '01', '11', '10', '00'];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {streams.map((stream) => (
        <div
          key={stream}
          className="absolute"
          style={{
            left: `${10 + stream * 12}%`,
            top: 0,
            height: '100%',
          }}
        >
          {/* Vertical line */}
          <motion.div
            className="w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent"
            animate={{
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: stream * 0.3,
              ease: "easeInOut"
            }}
          />

          {/* Flowing data points */}
          {[0, 1, 2].map((point) => (
            <motion.div
              key={point}
              className="absolute left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-mono bg-gradient-to-r from-[#E89422] to-orange-500 text-white rounded"
              initial={{ y: -20 }}
              animate={{
                y: ['0%', '120%'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: stream * 0.5 + point * 1.5,
                ease: "linear"
              }}
            >
              {dataPoints[Math.floor(Math.random() * dataPoints.length)]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
