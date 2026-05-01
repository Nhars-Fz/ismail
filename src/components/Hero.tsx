import { motion } from "motion/react";
import { Instagram, Linkedin, Facebook } from "lucide-react"; 
interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) { 
  return (
    <section  id="home"
      className={`relative min-h-screen flex items-center transition-colors duration-500 px-6 pt-20 md:pt-0 overflow-x-hidden ${darkMode ? "bg-[#121212]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-stretch gap-12 md:gap-15">
        {/* Left Side: Image and Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 flex items-center justify-center pt-3 md:pt-0"
        >
          <div className="relative w-full max-w-[200px] md:max-w-[420px]">
            <div className="rounded-tl-4xl rounded-br-4xl relative aspect-[4/5] bg-[#3B3C46] overflow-hidden">
              <img
                src="/src/img/ism.jpg"
                alt="Photographer"
                className="w-full h-full object-cover brightness-90"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Stats Overlay */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute -right-7 md:-right-8 bottom-2 bg-[#2D2E37] p-3 md:p-8 shadow-2xl z-10 rounded-tl-3xl rounded-br-3xl"
            >
              <div className="text-white">
                <span className="text-4xl md:text-7xl font-bold block leading-none">
                  Ismail{" "}
                </span>
                <span className="text-[#00D492] md:text-4xl font-bold tracking-tighter uppercase">
                  Azhari
                </span>
              </div>
            </motion.div>

            <div className="absolute -bottom-9 left-0 text-white/30 font-display font-medium uppercase tracking-[0.3em] text-xs">
              Professional Photographer
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text and CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }} 
          className={`flex-1 flex flex-col justify-center pb-0 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Lensa Portraiture.
            </h2>
          </div>

          <div className="max-w-md space-y-6 mt-8">
            <h3 className="text-3xl md:text-4xl leading-tight font-medium">
              Professional <span className="text-[#00D492]">Photographer</span>,
              Turning your story into timeless frames.
            </h3>
            <p className="  font-light leading-relaxed">
              I am a professional photographer based in Paris, dedicated to
              helping you capture and build your visual identity through
              authentic storytelling.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mt-6">
            <a href="#contact" 
            className="bg-[#00D492] text-[#2D2E37] px-8 md:px-10 py-3 md:py-4 rounded-tl-3xl rounded-br-3xl font-bold text-sm md:text-base tracking-tight hover:brightness-110 transition-all uppercase w-full md:w-auto text-center">
              Contact Me
            </a>
            <a href="https://drive.google.com/your-cv-link" target="_blank" rel="noopener noreferrer" 
            className={`border-2 px-8 md:px-10 py-3 md:py-4 rounded-tl-3xl rounded-br-3xl font-bold text-sm md:text-base tracking-tight hover:opacity-80 transition-all uppercase w-full md:w-auto text-center ${darkMode ? 'border-white text-white' : 'border-gray-900 text-gray-900'}`}>
              Download CV
            </a>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ismail.azharry" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={30} />
              </a>
              <a href="https://www.instagram.com/ismailazharry" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={30} />
              </a>
              <a href="https://www.linkedin.com" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={30} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
