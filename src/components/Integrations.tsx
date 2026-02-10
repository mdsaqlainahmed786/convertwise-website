import { Video, Calendar, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

export function Integrations() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 dark:from-gray-800 via-purple-50/30 dark:via-purple-900/20 to-orange-50/30 dark:to-orange-900/20 relative overflow-hidden transition-colors">
      {/* Animated background particles */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-30"
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-30"
        animate={{
          y: [0, 60, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p 
          className="mb-8 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Easily integrates with your existing meeting tools
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          <IntegrationItem
            icon={<Video size={24} />}
            name="Google Meet"
            gradient="from-blue-500 to-blue-600"
            delay={0}
          />
          
          <IntegrationItem
            icon={<Calendar size={24} />}
            name="Microsoft Teams"
            gradient="from-blue-600 to-purple-600"
            delay={0.2}
          />
          
          <IntegrationItem
            icon={<Monitor size={24} />}
            name="Zoom"
            gradient="from-blue-500 to-blue-700"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function IntegrationItem({
  icon,
  name,
  gradient,
  delay
}: {
  icon: React.ReactNode;
  name: string;
  gradient: string;
  delay: number;
}) {
  return (
    <motion.div 
      className="flex items-center gap-3 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div 
        className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
        whileHover={{ rotate: 5 }}
      >
        {icon}
      </motion.div>
      <span className="text-xl text-gray-900 dark:text-white">{name}</span>
    </motion.div>
  );
}
