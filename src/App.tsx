/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Twitter, Mail, ArrowRight, Menu, X, Linkedin } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HeroBottom from './components/HeroBottom';
import Navbar from './components/Navbar';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'dark bg-[#1a1a1a] text-white' : 'bg-white text-gray-900'}`}>
      
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section (Reference: image.png) */}
      <Hero darkMode={darkMode} />
 
      <HeroBottom darkMode={darkMode} />
 
      <About darkMode={darkMode} />
 
      <div className={`transition-colors duration-500 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
        <Gallery darkMode={darkMode} />
      </div>
 
      <Testimonial darkMode={darkMode} />
 
      <Contact darkMode={darkMode} />
 
      <Footer darkMode={darkMode} />
    </div>
  );
}