import { useState } from "react";
import {
  Play,
  Smartphone,
  Users,
  Download,
  BarChart,
  ShoppingBag,
} from "lucide-react";
import ProductCard from "../components/common/ProductCard";

const EInvitations = () => {
  const eInvitationVideos = [
    {
      id: 1,
      title: "Pink Floral E-Invitation",
      description: "Animated floral design with romantic music",
      price: "₹499",
      videoPath: "videos/Dig-Invitation (1).mp4",
      thumbnail: "/images/thumbnail/1.png",
    },
    {
      id: 2,
      title: "Modern Gold E-Invite",
      description: "Dig-Invitation",
      price: "₹599",
      videoPath: "videos/Dig-Invitation (2).mp4",
      thumbnail: "/images/thumbnail/2.png",
    },
    {
      id: 3,
      title: "Royal Traditional E-Invite",
      description: "Traditional design with cultural music",
      price: "₹699",
      videoPath: "videos/Dig-Invitation (3).mp4",
      thumbnail: "/images/thumbnail/3.png",
    },
    {
      id: 4,
      title: "Pink Floral E-Invitation",
      description: "Animated floral design with romantic music",
      price: "₹499",
      videoPath: "videos/Dig-Invitation (4).mp4",
      thumbnail: "/images/thumbnail/4.png",
    },
    {
      id: 5,
      title: "Modern Gold E-Invite",
      description: "Dig-Invitation",
      price: "₹599",
      videoPath: "videos/Dig-Invitation (5).mp4",
      thumbnail: "/images/thumbnail/5.png",
    },
    {
      id: 6,
      title: "Royal Traditional E-Invite",
      description: "Traditional design with cultural music",
      price: "₹699",
      videoPath: "videos/Dig-Invitation (6).mp4",
      thumbnail: "/images/thumbnail/6.png",
    },
    {
      id: 7,
      title: "Pink Floral E-Invitation",
      description: "Animated floral design with romantic music",
      price: "₹499",
      videoPath: "videos/Dig-Invitation (7).mp4",
      thumbnail: "/images/thumbnail/7.png",
    },
    {
      id: 8,
      title: "Modern Gold E-Invite",
      description: "Dig-Invitation",
      price: "₹599",
      videoPath: "videos/Dig-Invitation (8).mp4",
      thumbnail: "/images/thumbnail/8.png",
    },

    {
      id: 9,
      title: "Royal Traditional E-Invite",
      description: "Traditional design with cultural music",
      price: "₹699",
      videoPath: "videos/Dig-Invitation (9).mp4",
      thumbnail: "/images/thumbnail/9.png",
    },
  ];

  // YouTube videos (aapka existing videos array)
  const youtubeVideos = [
    {
      id: 1,
      title: "E-Invitation Demo 1",
      src: "https://www.youtube.com/embed/Bsuqu5ABIcU",
    },
    {
      id: 2,
      title: "E-Invitation Demo 2",
      src: "https://www.youtube.com/embed/mNnglO_MaIE",
    },
    {
      id: 3,
      title: "E-Invitation Demo 3",
      src: "https://www.youtube.com/embed/AVuV2OFaS2o",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
          Digital E-Invitations
        </h1>
        <p className="text-gray-600 mt-4">
          Watch & Order Animated Video Invitations
        </p>
      </div>

      {/* SECTION 1: LOCAL E-INVITATION VIDEOS */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Our E-Invitation Collection
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Local video files - Direct play
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eInvitationVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* VIDEO PLAYER - YAHI FIX HAI */}
              <div className="p-4 bg-gray-100">
                <video
                  controls
                  className="w-full rounded-lg"
                  poster={video.thumbnail}
                  preload="metadata"
                >
                  <source src={video.videoPath} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {video.price}
                  </span>
                  <a
                    href={`https://wa.me/923001234567?text=Hello! I want to order this E-Invitation: ${video.title} (${video.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white py-2 rounded-lg hover:opacity-90"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: YOUTUBE VIDEOS (Social links) */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Video Inspiration
          </h2>
          <p className="text-gray-600 text-center mb-10">
            YouTube examples for ideas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow p-4">
                <div className="aspect-video mb-4">
                  <iframe
                    className="w-full h-full rounded-lg"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                <p className="text-sm text-gray-600">
                  Watch for design inspiration
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: Benefits */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Choose Our E-Invitations?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "Mobile Optimized",
              desc: "Perfect display on all devices",
            },
            {
              icon: <Download className="w-8 h-8" />,
              title: "Instant Delivery",
              desc: "Send to guests in seconds",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Easy Sharing",
              desc: "Share on WhatsApp, Instagram, Email",
            },
            {
              icon: <BarChart className="w-8 h-8" />,
              title: "Track Views",
              desc: "See who opened your invitation",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 text-pink-600">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Send us your wedding details and we'll create a custom animated
            e-invitation
          </p>
          <a
            href="https://wa.me/923001234567?text=Hello! I want to order a custom E-Invitation for my wedding."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            <span>💬</span>
            Chat on WhatsApp for Custom Design
          </a>
        </div>
      </div>
    </div>
  );
};

export default EInvitations;
