// components/WeddingStationeryCatalogue.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Filter,
  Search,
  Package,
  Clock,
  Star,
  ShoppingBag,
  ChevronRight,
  MessageCircle,
  Truck,
  Shield,
  Palette,
} from "lucide-react";

const WeddingStationeryCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);

  // WhatsApp Configuration
  const whatsappNumber = "8120461118"; // Replace with your number
  const whatsappMessage = (item) =>
    `Hello! I'm interested in ordering:\n\n📦 *${item.name}*\n💰 Price: ${item.price}\n📋 Category: ${item.category}\n\nPlease send me more details and let me know how to proceed with ordering.`;

  // Stationery Categories
  const categories = [
    {
      id: "invitations",
      name: "Wedding Invitations",
      icon: "💌",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "Envelopes",
      name: "Shagun Envelopes",
      icon: "📜",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "Cards & Tags",
      name: "Cards & Tags",
      icon: "🍽️",
      color: "from-emerald-500 to-green-500",
    },
    {
      id: "Bags & Box",
      name: "Bags",
      icon: "🎁",
      color: "from-yellow-500 to-violet-500",
    },
    {
      id: "Wedding Gifts",
      name: "Gifts",
      icon: "🎀",
      color: "from-amber-500 to-orange-500",
    },
    // {
    //   id: "combo",
    //   name: "Complete Packages",
    //   icon: "📦",
    //   color: "from-red-500 to-pink-500",
    // },
  ];

  // Stationery Products with actual images
  const stationeryProducts = [
    // INVITATIONS
    {
      id: 1,
      name: "Classic Wedding Card",
      category: "invitations",
      price: "₹230 Per Card",
      description: "Celebrate love with our exquisitely designed wedding cards, crafted to reflect your unique journey. Whether you prefer traditional elegance or modern minimalism, our collection offers a wide range of customizable designs to suit every wedding theme.",
      image: "/images/products/classic-card (1).png",
      tags: ["Premium", "Gold Foil", "Traditional"],
      delivery: "2-3 days",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Premium Wed Card",
      category: "invitations",
      price: "₹450 Per Card",
      description: "Celebrate love with our exquisitely designed wedding cards, crafted to reflect your unique journey. Whether you prefer traditional elegance or modern minimalism, our collection offers a wide range of customizable designs to suit every wedding theme.",
      image: "/images/products/premium (3).webp",
      tags: ["Modern", "Laser Cut", "Minimalist"],
      delivery: "2-5 days",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Gold Effected Wedding Card",
      category: "invitations",
      price: "₹480 Per Card",
      description: "Celebrate love with our exquisitely designed wedding cards, crafted to reflect your unique journey. Whether you prefer traditional elegance or modern minimalism, our collection offers a wide range of customizable designs to suit every wedding theme.",
      image: "/images/products/gold-Foil (4).png",
      tags: ["Islamic", "Arabic", "Premium"],
      delivery: "3-4 days",
      rating: 4.9,
    },

    {
      id: 4,
      name: "Ceremony Program Booklet",
      category: "invitations",
      price: "₹799",
      description: "Detailed wedding ceremony timeline and information",
      image: "/images/products/Royal (2).png",
      tags: ["Booklet", "Bilingual", "Informative"],
      delivery: "3-5 days",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Pocket Wedding Timeline",
      category: "invitations",
      price: "₹349",
      description: "Compact pocket-sized ceremony schedule",
      image: "/images/products/special-card (4).png",
      tags: ["Pocket", "Minimalist", "Convenient"],
      delivery: "5-7 days",
      rating: 4.4,
    },

    {
      id: 6,
      name: "Gold Foil Menu Cards",
      category: "invitations",
      price: "₹399",
      description: "Elegant menu cards with gold foil detailing",
      image: "/images/products/vivah-sutra (2).png",
      tags: ["Gold Foil", "Luxury", "Reception"],
      delivery: "7-10 days",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Place Card Set (50 pcs)",
      category: "invitations",
      price: "₹1,499",
      description: "Personalized place cards for seating arrangement",
      image: "/images/products/Wed-Card-2 (16).png",
      tags: ["Personalized", "Calligraphy", "Elegant"],
      delivery: "10-14 days",
      rating: 4.8,
    },

    // Envelopes
    {
      id: 8,
      name: "Copper Foil Env.",
      category: "Envelopes",
      price: "₹80",
      description: "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      image: "/images/products/copperfoil.png",
      tags: ["Matching", "Elegant", "Appreciation"],
      delivery: "1-day",
      rating: 4.5,
    },
{
      id: 9,
      name: "Silver Foil Env.",
      category: "Envelopes",
      price: "₹75",
      description: "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      image: "/images/products/silverfoil.png",
      tags: ["Matching", "Elegant", "Appreciation"],
      delivery: "1-day",
      rating: 4.5,
    },
    // Cards & Tags
    {
      id: 10,
      name: "Luggage Tagt",
      category: "Cards & Tags",
      price: "₹8 Per PC",
      description: "Add a unique and personal touch to your wedding with our beautifully crafted ﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿Wedding Luggage Tag Cards With Dori.",
      image: "/images/products/card.png",
      tags: ["Seating", "Display", "Elegant"],
      delivery: "1-2 days",
      rating: 4.7,
    },
    {
      id: 11,
      name: "Bottle Tag",
      category: "Cards & Tags",
      price: "₹8 per pc",
      description: "Make your big day unforgettable with our exquisitely designed wedding Bottle Tag",
      image: "/images/products/bottle-tag.webp",
      tags: ["Bar", "Drinks", "Modern"],
      delivery: "1-2 days",
      rating: 4.3,
    },

    // Bags
    // {
    //   id: 12,
    //   name: "Complete Luxury Package",
    //   category: "combo",
    //   price: "₹8,999",
    //   description: "Everything you need for a luxury wedding",
    //   image: "/images/stationery/combo-1.jpg",
    //   tags: ["Complete", "Luxury", "All-in-One"],
    //   delivery: "14-21 days",
    //   rating: 4.9,
    //   bestseller: true,
    // },
    // {
    //   id: 13,
    //   name: "Budget Friendly Combo",
    //   category: "combo",
    //   price: "₹4,499",
    //   description: "Essential stationery at affordable price",
    //   image: "/images/stationery/combo-2.jpg",
    //   tags: ["Budget", "Essential", "Value"],
    //   delivery: "10-14 days",
    //   rating: 4.6,
    // },
  ];

  // Filter products
  const filteredProducts =
    selectedCategory === "all"
      ? stationeryProducts
      : stationeryProducts.filter(
          (product) => product.category === selectedCategory,
        );

  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(whatsappMessage(product));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleBulkOrder = () => {
    if (selectedItems.length === 0) return;

    const itemsList = selectedItems
      .map((item) => `• ${item.name} - ${item.price}`)
      .join("\n");

    const total = selectedItems.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
      return sum + price;
    }, 0);

    const message = encodeURIComponent(
      `Hello! I would like to order the following items:\n\n${itemsList}\n\n💰 Total: ₹${total}\n\nPlease create a custom package for me with these items.`,
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-luxury-blush via-white to-luxury-champagne">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
            Complete Wedding Stationery Collection
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Everything you need for your perfect wedding - from invitations to
            thank you cards
          </p>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === "all" ? "bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${selectedCategory === cat.id ? `bg-gradient-to-r ${cat.color} text-white` : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gradient-to-r from-yellow-50 to-pink-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Truck className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-bold">Free Delivery</div>
              <div className="text-sm text-gray-600">Over ₹5,000</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-bold">Quality Guarantee</div>
              <div className="text-sm text-gray-600">100% Satisfaction</div>
            </div>
            <div className="text-center">
              <Palette className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-bold">Custom Designs</div>
              <div className="text-sm text-gray-600">Personalized Options</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-bold">Fast Turnaround</div>
              <div className="text-sm text-gray-600">5-10 Days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Selected Items Bar */}
        {selectedItems.length > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-br from-luxury-blush via-white to-luxury-champagne rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-lg">
                  {selectedItems.length} items selected
                </div>
                <div className="text-gray-600">
                  Total: ₹
                  {selectedItems.reduce((sum, item) => {
                    const price = parseInt(item.price.replace(/[^0-9]/g, ""));
                    return sum + price;
                  }, 0)}
                </div>
              </div>
              <button
                onClick={handleBulkOrder}
                className="bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Order All via WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {product.bestseller && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    BESTSELLER
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => {
                      if (
                        selectedItems.find((item) => item.id === product.id)
                      ) {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item.id !== product.id,
                          ),
                        );
                      } else {
                        setSelectedItems([...selectedItems, product]);
                      }
                    }}
                    className={`p-2 rounded-full ${selectedItems.find((item) => item.id === product.id) ? "bg-green-500 text-white" : "bg-white/90 text-gray-700 hover:bg-yellow-500 hover:text-white"}`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-3 py-1 bg-yellow-100 text-gray-700 rounded-full">
                    {categories.find((c) => c.id === product.category)?.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Name & Description */}
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-luxury-gold font-bold">
                      {product.price}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <Clock className="w-4 h-4" />
                      {product.delivery}
                    </div>
                  </div>
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="px-5 flex items-center justify-center gap-2 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white py-2 rounded-lg hover:opacity-90"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found in this category
            </h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Bulk Order CTA */}
        <div className="mt-16 bg-gradient-to-br from-luxury-blush rounded-2xl p-8 text-center text-black">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Tell us your requirements and we'll create a personalized stationery
            package just for your wedding
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hello! I need help creating a custom wedding stationery package. Can you help me with this?",
              );
              window.open(
                `https://wa.me/${whatsappNumber}?text=${message}`,
                "_blank",
              );
            }}
            className=" bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Chat for Custom Package
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeddingStationeryCatalogue;
