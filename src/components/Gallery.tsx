import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  title: string;
  category: string;
}

interface GalleryProps {
  darkMode: boolean;
}

const images: Image[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop', title: 'Urban Silence', category: 'Street' },
  { id: 2, url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1000&auto=format&fit=crop', title: 'Desert Breath', category: 'Nature' },
  { id: 3, url: 'https://images.pexels.com/photos/16628677/pexels-photo-16628677.jpeg'},
  { id: 4, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop', title: 'Mist Peaks', category: 'Nature' },
  { id: 5, url: 'https://images.pexels.com/photos/6395651/pexels-photo-6395651.jpeg' },  
  { id: 6, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop', title: 'City Motion', category: 'Street' },
];

export default function Gallery({ darkMode }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: Image, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIdx]);
    setCurrentIndex(nextIdx);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIdx]);
    setCurrentIndex(prevIdx);
  };

  return (
    <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Selected Works</h2>
        <div className={`w-20 h-1 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => openLightbox(image, index)}
            className={`group relative aspect-[4/5] overflow-hidden cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase tracking-widest mb-1">{image.category}</span>
              <h3 className="text-xl font-medium">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              layoutId={`image-${selectedImage.id}`}
              className="max-w-4xl max-h-screen flex flex-col items-center"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-light tracking-wide">{selectedImage.title}</h3>
                <p className="text-sm text-gray-400 mt-2 uppercase tracking-widest">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
