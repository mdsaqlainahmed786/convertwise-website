import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E89422] to-[#963C00] rounded-xl flex items-center justify-center text-sm font-bold">
                N
              </div>
              <div>
                <div className="font-semibold">Nimitai</div>
                <div className="text-xs text-gray-400">The signal behind every close.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              AI conversation intelligence for B2B SaaS sales teams. Private beta — waitlist now open.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/nimitai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E89422] transition-colors"
                aria-label="Nimitai on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://x.com/Nimit_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E89422] transition-colors"
                aria-label="Nimitai on Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/nimitaihq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E89422] transition-colors"
                aria-label="Nimitai on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="http://wa.me/919915494146"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E89422] transition-colors"
                aria-label="Contact Nimitai on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/ai-meeting-assistant" className="hover:text-white transition-colors">AI Meeting Assistant</Link></li>
              <li><Link to="/ai-notetaker" className="hover:text-white transition-colors">AI Notetaker for Sales</Link></li>
              <li><Link to="/ai-meeting-copilot" className="hover:text-white transition-colors">AI Meeting Co-Pilot</Link></li>
              <li><Link to="/ai-sales-coaching" className="hover:text-white transition-colors">AI Sales Coaching</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors font-medium text-[#F5B040]">Pricing</Link></li>
            </ul>
          </div>

          {/* Alternatives */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Alternatives</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/alternatives/gong-alternative" className="hover:text-white transition-colors">Gong Alternative</Link></li>
              <li><Link to="/alternatives/fathom-alternative" className="hover:text-white transition-colors">Fathom Alternative</Link></li>
              <li><Link to="/alternatives/fireflies-alternative" className="hover:text-white transition-colors">Fireflies Alternative</Link></li>
              <li><Link to="/alternatives/tldv-alternative" className="hover:text-white transition-colors">tl;dv Alternative</Link></li>
              <li><Link to="/alternatives/chorus-alternative" className="hover:text-white transition-colors">Chorus Alternative</Link></li>
              <li><Link to="/alternatives/otter-alternative" className="hover:text-white transition-colors">Otter.ai Alternative</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/blog/gong-competitors-alternatives" className="hover:text-white transition-colors">Gong Competitors 2026</Link></li>
              <li><Link to="/blog/gong-pricing-2026" className="hover:text-white transition-colors">Gong Pricing 2026</Link></li>
              <li><Link to="/blog/best-sales-call-recording-software-startups" className="hover:text-white transition-colors">Best Sales Call Recording</Link></li>
              <li><Link to="/blog/conversation-intelligence-guide" className="hover:text-white transition-colors">Conversation Intelligence Guide</Link></li>
              <li><Link to="/blog/how-to-analyze-sales-calls" className="hover:text-white transition-colors">How to Analyze Sales Calls</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Nimitai</Link></li>
              <li>
                <a href="mailto:info@nimitai.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} />
                  info@nimitai.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Private beta — waitlist</p>
              <p className="text-xs font-semibold text-white">$149/seat/month</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; 2026 REN AI Technologies Private Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://fazier.com/launches/nimitai.com" target="_blank" rel="noopener noreferrer">
              {/* Below-fold badge — lazy load, explicit dimensions */}
              <img
                src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=light"
                width={120}
                height={40}
                loading="lazy"
                decoding="async"
                alt="Fazier badge"
              />
            </a>
            <p>Nimitai (formerly ConvertWise) — AI Meeting Intelligence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
