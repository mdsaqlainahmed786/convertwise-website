import { useEffect, useState } from 'react';
import { Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface FeatureSlide {
  id: string;
  title: string;
  alt: string;
  description: string[];
  image: string;
}

const features: FeatureSlide[] = [
  {
    id: 'dashboard',
    title: 'Sales Dashboard',
    alt: 'Nimitai AI sales dashboard showing pipeline value, confidence scores, and meeting preparation status',
    description: [
      'Get a comprehensive overview of your sales pipeline, conversion rates, and upcoming meetings.',
      'Track key metrics like pipeline value, confidence scores, and meeting preparation status all in one place.',
    ],
    image: '/assets/dashboard.jpeg',
  },
  {
    id: 'audit',
    title: 'Sales Audit Report',
    alt: 'AI-powered sales call audit report with SWOT analysis, win probability scoring, and coaching recommendations',
    description: [
      'AI-powered analysis of your sales calls with detailed SWOT insights.',
      'Understand your strengths, identify weaknesses, and get actionable recommendations to improve your win probability.',
    ],
    image: '/assets/leads.jpeg',
  },
//   {
//     id: 'all-agents',
//     title: 'All Agents',
//     alt: 'All Nimitai AI agents overview — Audit Agent, Prep Agent, Live Agent, and Meeting Intelligence',
//     description: [
//       'All agents in one place.',
//       'Audit Agent, Prep Agent, Live Agent, and Live Meeting Intelligence.',
//     ],
//     image: '/assets/all-agents.jpeg',
//   },
  {
    id: 'audit-agent',
    title: 'Audit Agent',
    alt: 'Nimitai Audit Agent analyzing pitch deck and sales call recordings to identify weak points and objection patterns',
    description: [
      'Audit Agent analyzes your current pitch deck, demo flow, and past meeting recordings to identify weak points and optimization opportunities.',
    ],
    image: '/assets/audit-agent.jpeg',
  },
  {
    id: 'upload',
    title: 'Pitch Deck Upload',
    alt: 'Uploading a sales pitch deck into Nimitai for AI analysis and personalized coaching flow creation',
    description: [
      'Upload your pitch deck and let our AI analyze your content.',
      'The system creates a personalized practice flow tailored to your presentation style and key talking points.',
    ],
    image: '/assets/prep-agent.jpeg',
  },
  {
    id: 'prep',
    title: 'Virtual Prep Session',
    alt: 'Nimitai virtual sales prep session with AI coach providing real-time feedback on confidence, pace, and clarity',
    description: [
      'Practice with your AI coach before important meetings.',
      'Get real-time feedback on your confidence, pace, clarity, and engagement while receiving personalized coaching insights.',
    ],
    image: '/assets/call-agent.jpeg',
  },
  {
    id: 'live-coaching',
    title: 'Live Meeting Intelligence',
    alt: 'Nimitai live meeting intelligence dashboard showing participant emotions, talk ratios, and real-time AI sales coaching',
    description: [
      'Real-time AI copilot provides live insights during your meetings.',
      'Track participant emotions, engagement levels, talk ratios, and receive instant guidance to optimize your sales conversations.',
    ],
    image: '/assets/intent.jpeg',
  },
  {
    id: 'outcome',
    title: 'Outcome',
    alt: 'Nimitai AI-powered meeting outcome analysis with deal risk signals and next-step recommendations',
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070B18] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/30 to-transparent" />

      {/* Static gradient orbs */}
      <div className="absolute -top-32 right-0 w-[700px] h-[700px] bg-[#E89422] rounded-full blur-[160px] opacity-[0.09]" />
      <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] bg-[#963C00] rounded-full blur-[150px] opacity-[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-amber-700 rounded-full blur-[130px] opacity-[0.07]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />


      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E89422]/10 backdrop-blur-sm border border-[#E89422]/25 rounded-full mb-6">
            <Monitor className="text-[#E89422]" size={14} />
            <span className="text-[#E89422] text-sm tracking-wide">How it Works</span>
          </div>

          <h2 className="mb-5 text-white text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-5xl mx-auto">
            How Nimitai's{' '}
            <span className="bg-gradient-to-r from-[#F5B040] to-[#E89422] bg-clip-text text-transparent">AI Meeting Intelligence</span>{' '}
            Works
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Three specialized AI agents handle pre-call preparation, live signal detection, and post-call analysis — giving your sales team a complete intelligence advantage at every stage of the deal.
          </p>
        </div>

        <div className="relative mb-6">
          {/* Glow behind the card */}
          <div className="absolute inset-0 bg-[#E89422]/10 rounded-2xl blur-2xl scale-95 pointer-events-none" />
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id} className="basis-full">
                  <div className="relative bg-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                    {/* Inner top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/30 to-transparent" />
                    <div className="aspect-[16/10] flex items-center justify-center">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-full object-contain p-3"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div key={current} className="text-center mb-8">
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {currentFeature.description[0]}
            {currentFeature.description[1] && <> {currentFeature.description[1]}</>}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              api?.scrollPrev();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className="rounded-full h-10 w-10 border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#E89422]/40 transition-all text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index + 1 === current
                    ? 'w-8 bg-[#E89422]'
                    : 'w-1.5 bg-white/25 hover:bg-white/40'
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
            className="rounded-full h-10 w-10 border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#E89422]/40 transition-all text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent" />
    </section>
  );
}
