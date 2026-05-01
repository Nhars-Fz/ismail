import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialProps {
  darkMode: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Abraham Linkon',
    role: 'Developer & Freelancer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    text: 'Lorem ipsum dolor sit amet, consetetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat sed diam.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Shofiq Hammad',
    role: 'Developer & Freelancer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    text: 'Lorem ipsum dolor sit amet, consetetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat sed diam.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Moretti',
    role: 'Lead Architect, Studio V',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    text: 'Working with Lensa was an experience in mindfulness. They didn\'t just take pictures; they captured the soul of our architecture and the life within it.',
    rating: 5,
  },
];

export default function Testimonial({ darkMode }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className={`py-32 transition-colors duration-500 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className={`inline-block px-4 py-1 border rounded-full text-[10px] uppercase tracking-widest ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
              Testimonial
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Client Say Something
            </h2>
            <div className="flex justify-center">
              <div className={`w-12 h-1 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left - Image */}
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                key={`content-${current.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-6"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {current.text}
                </p>

                {/* Name & Role */}
                <div>
                  <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {current.name}
                  </h4>
                  <p className={`text-sm uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {current.role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className={`p-3 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? darkMode
                        ? 'bg-white w-8'
                        : 'bg-black w-8'
                      : darkMode
                        ? 'bg-gray-600'
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
