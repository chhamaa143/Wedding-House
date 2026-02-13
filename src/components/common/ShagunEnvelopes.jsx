import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Gift,
  Box,
  Mail,
  Truck,
  Star,
  IndianRupee,
  Plus,
  Minus,
  X,
  CheckCircle,
  Users,
  Tag,
  Palette,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Add react-icons for WhatsApp

const ShagunEnvelopes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const whatsappNumber = "918120461118";

  const categories = [
    {
      id: "all",
      name: "All Envelopes",
      icon: <Package className="w-6 h-6" />,
      count: 6,
    },
    {
      id: "pocket",
      name: "Pocket Envelopes",
      icon: <Gift className="w-6 h-6" />,
      count: 0,
    },
    {
      id: "regular",
      name: "Regular Envelopes",
      icon: <Mail className="w-6 h-6" />,
      count: 6,
    },
    {
      id: "box",
      name: "Box Envelopes",
      icon: <Box className="w-6 h-6" />,
      count: 0,
    },
  ];

  const envelopes = [
    {
      id: 1,
      name: "Copper Foil Env.",
      category: "Regular",
      price: "₹80",
      description:
        "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      features: ["Golden Foil Printing", "Velvet Touch", "Secure Closure"],
      sizes: ["Standard Size"],
      image: "/images/products/copperfoil.png",
      popular: true,
      minOrder: 100,
    },
    {
      id: 2,
      name: "Silver Foil Env.",
      category: "Regular",
      price: "₹75",
      description:
        "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      features: ["Premium Red Paper", " Silver Foil", "Double Layer"],
      sizes: ["Standard Size"],
      image: "/images/products/silverfoil.png",
      popular: false,
      minOrder: 100,
    },
    {
      id: 3,
      name: "Gold Foil Env.",
      category: "regular",
      price: "₹70",
      description:
        "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      features: ["Premium Paper", "Gold Foil ", "Custom Printing"],
      sizes: ["Standard Size"],
      image: "/images/products/Goldfoil.png",
      popular: true,
      minOrder: 100,
    },
    {
      id: 4,
      name: "Matt Finish Env.",
      category: "regular",
      price: "₹45",
      description:
        "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      features: ["Designer Patterns", "Matt finish", "Pearl Finish"],
      sizes: ["Standard Size"],
      image: "/images/products/Mattfinish.png",
      popular: true,
      minOrder: 100,
    },
    {
      id: 5,
      name: "Gloss Finish Env.",
      category: "Regular",
      price: "45",
      description:
        "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      features: ["Magnetic Closure", "Premium Board", "Custom Lining"],
      sizes: ["Standard Size"],
      image: "/images/products/Glossfinish.png",
      popular: true,
      minOrder: 100,
    },
    {
      id: 6,
      name: "Royal Shagun Env.",
      category: "Regular",
      price: "₹60",
      description:
        "Celebrate special moments with beautifully designed Shagun envelopes. Perfect for weddings, festivals, ceremonies, and gifting,our custom envelopes add elegance and personal touch to your heartfelt blessings.",
      features: ["Magnetic Closure", "Premium Board", "Custom Lining"],
      features: ["Velvet Lining", "Golden Hardware", "Ribbon Tie"],
      sizes: ["Standard Size"],
      image: "/images/products/Royal.png",
      popular: true,
      minOrder: 100,
    },
  ];

  const filteredEnvelopes =
    selectedCategory === "all"
      ? envelopes
      : envelopes.filter((item) => item.category === selectedCategory);

  const handleWhatsAppOrder = (envelope) => {
    const message = `Hello! I'm interested in Shagun Envelopes.\n\nProduct: ${envelope.name}\nCategory: ${envelope.category}\nPrice: ${envelope.price}\n\nPlease provide more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleQuickOrder = (envelope) => {
    setSelectedEnvelope(envelope);
    setQuantity(envelope.minOrder);
    setShowModal(true);
  };

  const handleBulkInquiry = () => {
    const message = `Hello! I'm interested in bulk order of Shagun Envelopes.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const sendOrder = () => {
    if (selectedEnvelope) {
      const message = `Hello! I want to order:\n\nProduct: ${selectedEnvelope.name}\nQuantity: ${quantity}\nPrice: ${selectedEnvelope.price}\n\nPlease confirm availability.`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      setShowModal(false);
    }
  };

  // If using FaWhatsapp from react-icons, install it: npm install react-icons
  // Or use a text alternative

  return (
    <div className="min-h-screen bg-luxury-ivory">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-luxury-blush  text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-luxury-gold/20 rounded-full mb-6">
              <Gift className="w-12 h-12 text-luxury-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
              Premium Shagun Envelopes
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10">
              Beautiful envelopes for weddings and special occasions
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Package className="w-5 h-5 text-luxury-gold" />
                <span className="text-gray-500">3 Categories</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-luxury-gold" />
                <span className="text-gray-500">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Truck className="w-5 h-5 text-luxury-gold" />
                <span className="text-gray-500">Fast Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-4">
              Choose Your Style
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our premium collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-br from-luxury-gold to-luxury-rosegold text-white shadow-xl"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div
                    className={`p-3 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-white/20"
                        : "bg-white"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-75">
                      {category.count} Designs
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Envelopes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEnvelopes.map((envelope, index) => (
              <motion.div
                key={envelope.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Popular Badge */}
                {envelope.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Star className="w-4 h-4" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={envelope.image}
                    alt={envelope.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button
                        onClick={() => handleQuickOrder(envelope)}
                        className="w-full bg-white text-luxury-navy py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Quick Order
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-luxury-blush text-luxury-rosegold rounded-full text-sm font-medium">
                      {envelope.category === "pocket"
                        ? "Pocket"
                        : envelope.category === "regular"
                          ? "Regular"
                          : "Box"}
                    </span>
                    <div className="flex items-center text-luxury-gold font-bold">
                      <IndianRupee className="w-4 h-4" />
                      <span>{envelope.price}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {envelope.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {envelope.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {envelope.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sizes:</span>
                      <span className="text-gray-700 font-medium">
                        {envelope.sizes.join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Min. Order:</span>
                      <span className="text-gray-700 font-medium">
                        {envelope.minOrder} pieces
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => handleWhatsAppOrder(envelope)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      {/* Use text if icon not available */}
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleQuickOrder(envelope)}
                      className="px-4 py-2 border border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold hover:text-white transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-rosegold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-6">
                Need Envelopes in Bulk?
              </h2>
              <p className="text-gray-600 mb-10">
                Special discounts for bulk orders
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  {
                    icon: <Tag className="w-8 h-8" />,
                    title: "Wholesale Prices",
                    desc: "Special rates",
                  },
                  {
                    icon: <Palette className="w-8 h-8" />,
                    title: "Custom Printing",
                    desc: "Add your logo",
                  },
                  {
                    icon: <Truck className="w-8 h-8" />,
                    title: "Free Shipping",
                    desc: "Above ₹10,000",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <div className="inline-flex p-3 bg-luxury-blush text-luxury-rosegold rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handleBulkInquiry}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Bulk Order Inquiry</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-4">
              Choose the Right Envelope
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-luxury-navy text-white">
                  <th className="py-4 px-6 text-left font-serif text-lg">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-left font-serif text-lg">
                    Pocket
                  </th>
                  <th className="py-4 px-6 text-left font-serif text-lg">
                    Regular
                  </th>
                  <th className="py-4 px-6 text-left font-serif text-lg">
                    Box
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Best For", "Cash gifts", "Letters, cards", "Premium gifts"],
                  ["Price", "₹49 - ₹349", "₹29 - ₹249", "₹99 - ₹799"],
                  ["Min. Order", "50 pieces", "100 pieces", "25 pieces"],
                ].map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      {row[0]}
                    </td>
                    <td className="py-4 px-6 text-gray-700">{row[1]}</td>
                    <td className="py-4 px-6 text-gray-700">{row[2]}</td>
                    <td className="py-4 px-6 text-gray-700">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-4 bg-white/10 rounded-full mb-6">
              <Gift className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get premium quality envelopes delivered
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello! I want to order Shagun Envelopes.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Order on WhatsApp</span>
              </a>
              <button
                onClick={handleBulkInquiry}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-luxury-navy transition-all duration-300"
              >
                <Users className="w-6 h-6" />
                Bulk Order
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hello! I want to order Shagun Envelopes.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-white font-bold">WA</span>
      </motion.a>

      {/* Order Modal */}
      {showModal && selectedEnvelope && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-xl font-serif font-semibold text-gray-900">
                Order {selectedEnvelope.name}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Product Info */}
              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={selectedEnvelope.image}
                    alt={selectedEnvelope.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-gray-900 mb-2">
                    {selectedEnvelope.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {selectedEnvelope.description}
                  </p>
                  <div className="flex items-center text-luxury-gold font-bold">
                    <IndianRupee className="w-4 h-4" />
                    <span>{selectedEnvelope.price}</span>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quantity
                </label>
                <div className="flex items-center justify-between max-w-xs">
                  <button
                    onClick={() =>
                      setQuantity(
                        Math.max(selectedEnvelope.minOrder, quantity - 1),
                      )
                    }
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {quantity}
                    </div>
                    <div className="text-sm text-gray-500">pieces</div>
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Minimum: {selectedEnvelope.minOrder} pieces
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                <div className="space-y-2">
                  {selectedEnvelope.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t px-6 py-4 rounded-b-2xl">
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={sendOrder}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ShagunEnvelopes;
