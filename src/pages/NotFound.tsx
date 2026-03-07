import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Sparkles, ArrowRight, MapPin } from 'lucide-react';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Nimitai</title>
        <meta name="description" content="This page doesn't exist. Head back to Nimitai — AI meeting intelligence for B2B sales teams." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="relative min-h-[calc(100vh-5rem)] pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 dark:from-amber-900/20 via-white dark:via-gray-900 to-orange-50 dark:to-orange-900/20 transition-colors flex items-center">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(232,148,34,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,148,34,0.4) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />

        {/* Orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(232,148,34,0.08) 0%, transparent 65%)' }}
        />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          {/* 404 number */}
          <div
            className="relative inline-block mb-2"
          >
            <span className="text-[10rem] sm:text-[12rem] lg:text-[14rem] font-bold leading-none select-none bg-gradient-to-br from-gray-200 dark:from-gray-700 via-amber-100 dark:via-amber-900/40 to-orange-100 dark:to-orange-900/30 bg-clip-text text-transparent">
              404
            </span>
          </div>

          <div
            className="flex items-center justify-center gap-2 mb-6"
          >
            <MapPin className="text-[#E89422] dark:text-[#F5B040]" size={20} aria-hidden />
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">This page took a wrong turn</span>
          </div>

          <p
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            The link you followed doesn't exist or was moved. No worries — here's how to get back on track.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E89422] to-[#963C00] text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:shadow-amber-500/25 transition-colors duration-300"
            >
              <Home size={20} className="group-hover:scale-110 transition-transform" aria-hidden />
              Back to home
            </Link>
            <Link
              to="/pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-white/10 border-2 border-gray-200 dark:border-white/20 text-gray-900 dark:text-white rounded-full font-medium hover:border-[#E89422] dark:hover:border-[#E89422] hover:text-[#E89422] dark:hover:text-[#F5B040] transition-colors duration-300"
            >
              View pricing
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-600 dark:text-gray-400 hover:text-[#E89422] dark:hover:text-[#F5B040] font-medium transition-colors"
            >
              <Sparkles size={18} aria-hidden />
              Read the blog
            </Link>
          </div>

          <p
            className="mt-12 text-sm text-gray-500 dark:text-gray-500"
          >
            If you think this is a mistake, drop us a line at{' '}
            <a href="mailto:info@nimitai.com" className="text-[#E89422] dark:text-[#F5B040] hover:underline">
              info@nimitai.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
