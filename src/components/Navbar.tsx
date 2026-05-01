import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-white/10 dark:bg-black/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-display font-bold tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}
        >
           
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-12">
          {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm uppercase tracking-widest hover:opacity-50 transition-opacity ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              {item}
            </a>
          ))}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={darkMode ? 'text-white' : 'text-gray-900'}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed inset-0 z-30 flex flex-col items-center justify-center space-y-8 text-3xl font-display font-medium ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}
        >
          <a onClick={() => setIsMenuOpen(false)} href="#home">Home</a>
          <a onClick={() => setIsMenuOpen(false)} href="#about">About</a>
          <a onClick={() => setIsMenuOpen(false)} href="#gallery">Gallery</a>
          <a onClick={() => setIsMenuOpen(false)} href="#contact">Contact</a>
        </motion.div>
      )}
    </>
  );
}
