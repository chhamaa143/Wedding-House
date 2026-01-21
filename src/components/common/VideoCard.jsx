import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg"
    >
      <div className="aspect-video relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
          {video.title}
        </h3>
        <p className="text-gray-600">
          {video.description || "Watch our premium wedding card designs in action"}
        </p>
      </div>
    </motion.div>
  );
};

export default VideoCard;