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
                href="https://twitter.com/nimitaihq"
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
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E89422] transition-colors overflow-hidden p-1.5"
                aria-label="Contact Nimitai on WhatsApp"
              >
                <img src="/whatsapp-logo.jpeg" alt="" className="w-full h-full object-contain" aria-hidden />
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
                <a href="mailto:hello@nimitai.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} />
                  hello@nimitai.com
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
          <p>Nimitai (formerly ConvertWise) — AI Meeting Intelligence</p>
        </div>
      </div>
    </footer>
  );
}
