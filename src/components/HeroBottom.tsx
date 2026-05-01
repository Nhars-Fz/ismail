import { motion } from 'motion/react';

interface HeroBottomProps {
  darkMode: boolean;
}

export default function HeroBottom({ darkMode }: HeroBottomProps) {
  return (
    <section className={`relative h-screen/2 md:min-h-[50vh] flex items-center transition-colors duration-500 px-6 py-20 overflow-hidden ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6 justify-items-center">
            <h2 className={`text-4xl md:text-6xl font-display font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Capturing moments that <span className="text-[#00D492]">matter</span>
            </h2>
            <p className={`text-lg max-w-2xl font-light leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Every frame tells a story. From intimate portraits to architectural narratives, I create visual experiences that resonate with authenticity and emotion.
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2 justify-items-center">
              <p className="text-[#00D492] text-sm font-bold uppercase tracking-widest">Experience</p>
              <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>10+</p>
              <p className={`text-sm ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>Years in Photography</p>
            </div>
            <div className="space-y-2 justify-items-center">
              <p className="text-[#00D492] text-sm font-bold uppercase tracking-widest">Portfolio</p>
              <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>500+</p>
              <p className={`text-sm ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>Completed Projects</p>
            </div>
            <div className="space-y-2 justify-items-center">
              <p className="text-[#00D492] text-sm font-bold uppercase tracking-widest">Recognition</p>
              <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>25+</p>
              <p className={`text-sm ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>International Awards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
