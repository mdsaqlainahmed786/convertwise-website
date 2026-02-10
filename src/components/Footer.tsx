import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl flex items-center justify-center">
                R
              </div>
              <div>
                <div>Renai Technologies</div>
                <div className="text-sm text-gray-400 dark:text-gray-500">Intelligence with Empathy</div>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Once in a decade. Built with intent.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/convertwise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/convertwise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/convertwise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="/#product" className="hover:text-white dark:hover:text-gray-200 transition-colors">ConvertWise</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">DigitalPatron AI</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><Link to="/about" className="hover:text-white dark:hover:text-gray-200 transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 dark:text-gray-500">
              <li>
                <a href="mailto:hello@convertwise.site" className="flex items-center gap-2 hover:text-white dark:hover:text-gray-200 transition-colors">
                  <Mail size={18} />
                  <span>hello@convertwise.site</span>
                </a>
              </li>
              <li>
                <a href="tel:+919915494146" className="flex items-center gap-2 hover:text-white dark:hover:text-gray-200 transition-colors">
                  <Phone size={18} />
                  <span>+91-9915494146</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 dark:border-gray-700 text-center text-gray-400 dark:text-gray-500 transition-colors">
          <p>&copy; 2024 Renai Technologies Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
