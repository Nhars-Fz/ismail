import { motion } from 'motion/react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section id="about" className={`py-16 px-6 transition-colors duration-500 ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img 
            src="https://images.pexels.com/photos/36925866/pexels-photo-36925866.jpeg" 
            alt="Artistic Portrait"
            className="w-full max-w-lg mx-auto md:ml-0 aspect-[3/4] object-cover rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-10"
        >
          <span className={`text-xs uppercase tracking-[0.5em] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Chronicle of Vision</span>
          <h2 className={`text-4xl md:text-5xl font-light leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Photography is not a <span className="font-bold">job</span>, it is my way of speaking with the world.
          </h2>
          <div className={`space-y-6 font-light leading-relaxed text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>
              Based in Paris, I've spent the last decade documenting the intersection of human emotion and architectural silence. My work seeks the quiet moments between events—the subtle shift in light before a storm, or the shared glance that defines a relationship.
            </p>
          </div>
          <div className={`grid grid-cols-2 gap-8 pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div>
              <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>120+</p>
              <p className={`text-xs uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Collaborations</p>
            </div>
            <div>
              <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>15+</p>
              <p className={`text-xs uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Exhibitions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
