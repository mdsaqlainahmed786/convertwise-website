import { motion } from 'motion/react';
import { Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
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
  {
    id: 'all-agents',
    title: 'All Agents',
    description: [
      'All agents in one place.',
      'Audit Agent, Prep Agent, Live Agent, and Live Meeting Intelligence.',
    ],
    image: '/assets/all-agents.jpeg',
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
      'The outcome of the meeting is the outcome of the meeting.',
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
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full shadow-sm">
            <Monitor className="text-white" size={14} />
            <span className="text-white text-sm">Platform Overview</span>
          </div>
          <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            The only customer engagement platform you'll ever need
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
            Bring data together, power it with AI, and deliver personalized customer experiences, at scale.
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
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border-2 border-white/20 dark:border-gray-700">
                      <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 dark:from-gray-900 to-gray-100 dark:to-gray-800 flex items-center justify-center">
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
