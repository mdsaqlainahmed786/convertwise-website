import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import { CircuitBoard } from './backgrounds/CircuitBoard';
import { DataStream } from './backgrounds/DataStream';

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-orange-500 text-white relative overflow-hidden">
      {/* AI-themed background layers */}
      <CircuitBoard />
      <DataStream />
      
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="mb-6 text-4xl sm:text-5xl">
          Transform Every Meeting
        </h2>
        <p className="mb-12 text-xl">
          Join select partners achieving 4× close rate improvements with AI that reads emotion and predicts moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
            Request Early Access
          </button>
          <a 
            href="https://youtu.be/Mgck6m2Flz0?si=bFzgfqnZ6hTLmU7p"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-all flex items-center gap-2"
          >
            <Play size={20} />
            Watch 2-Minute Demo
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm opacity-90">
          <span>47 active partners / 12 spots available</span>
          <span className="hidden sm:inline">•</span>
          <span>See ConvertWise in action</span>
        </div>
        
        <p className="mt-8 text-sm opacity-75">
          Next cohort opens March 15, 2025. Public launch Q3 2025.
        </p>
      </div>
    </section>
  );
}