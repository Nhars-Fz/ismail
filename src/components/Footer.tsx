import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className="py-12 border-t border-gray-800 bg-[#1a1a1a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Left: Copyright */}
          <div className="text-sm text-gray-400">
            © 2026 Harry Azhary. All rights reserved.
          </div>

          {/* Center: Social Icons */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/ismail.azharry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/ismailazharry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Right: Quick Links */}
          <div className="flex space-x-6 text-xs uppercase tracking-widest font-medium text-gray-400">
            <a href="#contact" className="hover:opacity-50">Contact</a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-6"></div>

        {/* Bottom: Created By */}
        <div className="text-center text-sm text-gray-400">
          Created by <span ><a href="https://www.instagram.com/fz_waz" className="hover:opacity-50 hover:underline text-base text-white">Fz Shardn</a></span>
        </div>
      </div>
    </footer>
  );
}
