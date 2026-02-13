import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import WeddingStationery from '../components/common/WeddingStationery';
import { products } from '../config/data';
import { config } from '../config/config';
import { useState, useEffect } from 'react';

const Home = () => {
    // console.log('Videos data:', videos);
  const featuredProducts = products.slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const carouselImages = [
    {
      id: 1,
      title: "Royal Gold & Maroon Collection",
      description: "Traditional wedding cards with intricate gold foil embossing",
      image: "/images/gallery/size.png",
      color: "from-luxury-gold/20 to-luxury-navy/20"
    },
    {
      id: 2,
      title: "Modern Minimalist Invitations",
      description: "Clean, elegant designs for contemporary celebrations",
      image: "/images/gallery/2.png",
      color: "from-luxury-blush/20 to-luxury-rosegold/20"
    },
    {
      id: 3,
      title: "Floral & Botanical Theme",
      description: "Nature-inspired designs with delicate floral patterns",
      image: "/images/gallery/8.png ",
      color: "from-luxury-champagne/20 to-luxury-rosegold/20"
    },
    {
      id: 4,
      title: "Destination Wedding Series",
      description: "Exotic designs for beach and destination weddings",
      image: "/images/gallery/4.png",
      color: "from-luxury-navy/20 to-luxury-gold/20"
    }
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div>
      {/* Carousel Section - Added at the top */}
      <section className="relative h-[60vh] overflow-hidden">
        {carouselImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-10 font-light max-w-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
                    >
                      View Collection
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    
                    <a
                      href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(`Hi, I'm interested in the ${slide.title} collection. Can you share more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
                    >
                      Get Custom Quote
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-luxury-gold to-luxury-rosegold w-8' 
                  : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

     
      {/* Featured Products - Your existing section remains */}
      <section className="py-20 bg-white">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-luxury-navy mb-4">
              Featured Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after wedding card designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-luxury-rosegold hover:text-luxury-gold font-semibold text-lg"
            >
              View All Collections
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Value Proposition - Your existing section remains */}
      <section className="py-20 bg-gradient-to-b from-white to-luxury-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-luxury-navy mb-4">
              Why Choose Wedding House?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Handcrafted with Love",
                description: "Each design is created with meticulous attention to detail."
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Premium Quality",
                description: "We use only the finest materials and printing techniques."
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Custom Designs",
                description: "Personalized creations that reflect your unique style."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="inline-flex p-4 bg-luxury-blush text-luxury-rosegold rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-luxury-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Your existing section remains */}
      <section className="py-20 bg-luxury-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's craft the perfect wedding stationery for your special day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-full text-lg font-semibold hover:shadow-xl"
            >
              Start Your Order
            </a>
            
            <Link
              to="/ontact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-luxury-navy"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;