import { motion } from 'motion/react';
import { Monitor, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

interface FeatureSlide {
  id: string;
  title: string;
  description: string[];
  image: string;
}

const features: FeatureSlide[] = [
  {
    id: 'dashboard',
    title: 'Sales Dashboard',
    description: [
      'Get a comprehensive overview of your sales pipeline, conversion rates, and upcoming meetings.',
      'Track key metrics like pipeline value, confidence scores, and meeting preparation status all in one place.',
    ],
    image: '/assets/dashboard.jpeg',
  },
  {
    id: 'audit',
    title: 'Sales Audit Report',
    description: [
      'AI-powered analysis of your sales calls with detailed SWOT insights.',
      'Understand your strengths, identify weaknesses, and get actionable recommendations to improve your win probability.',
    ],
    image: '/assets/leads.jpeg',
  },
//   {
//     id: 'all-agents',
//     title: 'All Agents',
//     description: [
//       'All agents in one place.',
//       'Audit Agent, Prep Agent, Live Agent, and Live Meeting Intelligence.',
//     ],
//     image: '/assets/all-agents.jpeg',
//   },
  {
    id: 'audit-agent',
    title: 'Audit Agent',
    description: [
      'Audit Agent analyzes your current pitch deck, demo flow, and past meeting recordings to identify weak points and optimization opportunities.',
    ],
    image: '/assets/audit-agent.jpeg',
  },
  {
    id: 'upload',
    title: 'Pitch Deck Upload',
    description: [
      'Upload your pitch deck and let our AI analyze your content.',
      'The system creates a personalized practice flow tailored to your presentation style and key talking points.',
    ],
    image: '/assets/prep-agent.jpeg',
  },
  {
    id: 'prep',
    title: 'Virtual Prep Session',
    description: [
      'Practice with your AI coach before important meetings.',
      'Get real-time feedback on your confidence, pace, clarity, and engagement while receiving personalized coaching insights.',
    ],
    image: '/assets/call-agent.jpeg',
  },
  {
    id: 'live-coaching',
    title: 'Live Meeting Intelligence',
    description: [
      'Real-time AI copilot provides live insights during your meetings.',
      'Track participant emotions, engagement levels, talk ratios, and receive instant guidance to optimize your sales conversations.',
    ],
    image: '/assets/intent.jpeg',
  },
  {
    id: 'outcome',
    title: 'Outcome',
    description: [
      'The outcome of the meeting.',
      'AI-powered analysis of the meeting outcome.',
    ],
    image: '/assets/outcome-agent.jpeg',
  },
];

export function HowItWorks() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [api, isPaused]);

  const currentFeature = features[current - 1] || features[0];

  return (
    <section 
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-600 dark:from-purple-900 via-purple-500 dark:via-purple-800 to-orange-500 dark:to-orange-700 relative overflow-hidden transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full shadow-sm">
              <Monitor className="text-white" size={14} />
              <span className="text-white text-sm">How it Works</span>
            </div>
          </div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-5xl mx-auto">
            The Only Meeting Intelligence{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Engagement Platform
            </span>{' '}
            You'll Need
          </h2>
        </motion.div>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto text-left leading-relaxed">
            <span className="text-white">Bring data together, </span>
            <span className="text-orange-500">power it with AI</span>
            <span className="text-white">, and deliver personalized customer experiences, at scale.</span>
          </p>
        </motion.div>

        {/* Main Image Display */}
        <div className="relative mb-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
                      <div className="aspect-[16/10] bg-gradient-to-br from-white/5 dark:from-white/5 to-white/10 dark:to-white/10 flex items-center justify-center backdrop-blur-sm">
                        <ImageWithFallback
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain p-3"
                        />
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Description */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-3xl mx-auto">
            {currentFeature.description[0]}
            <br />
            {currentFeature.description[1]}
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              api?.scrollPrev();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className="rounded-full h-10 w-10 border-2 border-white/30 bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                className={`h-2 rounded-full transition-all ${
                  index + 1 === current
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              api?.scrollNext();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className="rounded-full h-10 w-10 border-2 border-white/30 bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
}
