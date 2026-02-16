import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={image.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="mb-8 break-inside-avoid"
          >
            <div
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    {image.category && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        {image.category}
                      </span>
                    )}
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <p className="font-serif text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <p className="text-xl font-serif">{selectedImage.alt}</p>
              {selectedImage.category && (
                <span className="text-gray-300">{selectedImage.category}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
