import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { videos } from "../config/data";

const Videos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [muted, setMuted] = useState({});

  const handlePlayPause = (videoId) => {
    const videoElement = document.getElementById(`video-${videoId}`);

    if (!videoElement) return;

    if (playingVideo === videoId) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      // Pause any currently playing video
      if (playingVideo) {
        const currentVideo = document.getElementById(`video-${playingVideo}`);
        if (currentVideo) currentVideo.pause();
      }

      videoElement.play();
      setPlayingVideo(videoId);
    }
  };

  const handleMuteToggle = (videoId) => {
    const videoElement = document.getElementById(`video-${videoId}`);
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setMuted((prev) => ({ ...prev, [videoId]: videoElement.muted }));
    }
  };

  const handleVideoEnd = (videoId) => {
    setPlayingVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-luxury-blush via-white to-luxury-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
              Video Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our wedding cards come to life. See the craftsmanship,
              materials, and designs in motion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl"
              >
                {/* Video Container */}
                <div className="relative aspect-video">
                  {video.src.includes("youtube.com") ||
                  video.src.includes("youtu.be") ? (
                    // YouTube embed
                    <iframe
                      src={video.src}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    // Local video
                    <>
                      <video
                        id={`video-${video.id}`}
                        src={video.src}
                        poster={video.thumbnail}
                        className="w-full h-full object-cover"
                        onEnded={() => handleVideoEnd(video.id)}
                        muted={muted[video.id] || true}
                        loop
                      />

                      {/* Custom Controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handlePlayPause(video.id)}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              >
                                {playingVideo === video.id ? (
                                  <Pause className="w-6 h-6 text-white" />
                                ) : (
                                  <Play className="w-6 h-6 text-white" />
                                )}
                              </button>
                              <button
                                onClick={() => handleMuteToggle(video.id)}
                                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              >
                                {muted[video.id] ? (
                                  <VolumeX className="w-5 h-5 text-white" />
                                ) : (
                                  <Volume2 className="w-5 h-5 text-white" />
                                )}
                              </button>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-white">
                              {video.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600">
                    {video.src.includes("youtube.com") ||
                    video.src.includes("youtu.be")
                      ? "YouTube video showcasing our premium wedding card designs"
                      : "Behind-the-scenes look at our design and printing process"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-luxury-gold/10 to-luxury-rosegold/10 rounded-3xl max-w-3xl">
              <h3 className="text-2xl font-serif font-bold text-luxury-navy mb-4">
                Want to See More?
              </h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media for regular updates, behind-the-scenes
                content, and new design launches. See our cards in action and
                get inspired for your special day.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/print.karao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-shadow"
                >
                  Follow on Instagram
                </a>
                <a
                  href="https://www.youtube.com/@PrintKarao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 text-white rounded-full hover:shadow-lg transition-shadow"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
