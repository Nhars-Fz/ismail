import { motion } from 'motion/react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  return (
    <section id="contact" className={`py-30 px-6 transition-colors duration-500 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic ${darkMode ? 'text-white' : 'text-gray-900'}`}>Let's build <br /> something <br /> timeless.</h2>
            <div className="space-y-4">
              <p className={`text-sm uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Inquiries</p>
              <a href="mailto:hello@lensa.com" className={`text-2xl md:text-3xl hover:underline underline-offset-8 transition-all ${darkMode ? 'text-white' : 'text-gray-900'}`}>hello@lensa.com</a>
            </div>
          </div>
          <div className="flex-1 pt-6 md:pt-0">
            <form className="grid grid-cols-1 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Name</label>
                <input type="text" className={`w-full bg-transparent border-b py-4 focus:outline-none transition-colors ${darkMode ? 'border-gray-700 text-white placeholder-gray-400 focus:border-white' : 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-900'}`} placeholder="Type your name..." />
              </div>
              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Project Type</label>
                <input type="text" className={`w-full bg-transparent border-b py-4 focus:outline-none transition-colors ${darkMode ? 'border-gray-700 text-white placeholder-gray-400 focus:border-white' : 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-900'}`} placeholder="Editorial, Commercial, Portrait..." />
              </div>
              <div className="space-y-2">
                <label className={`text-xs uppercase tracking-widest font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Message</label>
                <textarea rows={4} className={`w-full bg-transparent border-b py-4 focus:outline-none transition-colors resize-none ${darkMode ? 'border-gray-700 text-white placeholder-gray-400 focus:border-white' : 'border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-900'}`} placeholder="Tell me about your vision..."></textarea>
              </div>
              <button className={`py-5 px-10 rounded-full font-bold uppercase tracking-widest text-xs hover:opacity-80 transition-opacity w-fit mt-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
