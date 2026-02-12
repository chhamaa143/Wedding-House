// components/WeddingCardItineraryHamper.jsx
import { useState } from "react";
import {
  Gift,
  Package,
  Truck,
  Box,
  Star,
  Heart,
  Sparkles,
  CheckCircle,
  MessageCircle,
  ShoppingBag,
  Tag,
  Award,
  Shield,
  Clock,
  Calendar,
  Palette,
  Edit3,
  Printer,
  Scissors,
  Layers,
  Paperclip,
  BookOpen,
  MapPin,
  Users,
  Camera,
  Music,
  ChefHat,
} from "lucide-react";

const WeddingCardItineraryHamper = () => {
  const [selectedHampers, setSelectedHampers] = useState([]);
  const [cardQuantity, setCardQuantity] = useState(100);
  const [itineraryQuantity, setItineraryQuantity] = useState(50);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const whatsappNumber = "918120461118";

  // Wedding Card & Itinerary Hampers
  const hampers = [
    {
      id: "essential",
      name: "Essential Delivery Hamper",
      type: "cards",
      price: "₹1,499",
      color: "from-blue-100 to-blue-50",
      borderColor: "border-blue-200",
      icon: <Package className="w-8 h-8" />,
      features: [
        "Cardboard gift box",
        "Tissue paper wrapping",
        "Basic thank you note",
        "Plain delivery envelope",
        "Quantity up to 100 cards",
      ],
      includes: [
        "Safe packaging",
        "Address labels",
        "Basic protection",
        "Standard delivery",
      ],
      bestFor: "Local deliveries, simple weddings",
      deliveryTime: "3-5 days",
      minOrder: 50,
      popular: false,
    },
    {
      id: "premium",
      name: "Premium Presentation Hamper",
      type: "cards-itinerary",
      price: "₹3,999",
      color: "from-purple-100 to-pink-50",
      borderColor: "border-purple-300",
      icon: <Gift className="w-8 h-8" />,
      features: [
        "Premium gift box with window",
        // "Silk ribbon wrapping",
        "Personalized thank you cards",
        "Custom tissue paper",
        "Embossed envelope",
        "Card quantity up to 200",
        "Itinerary prints included",
      ],
      includes: [
        "Luxury packaging",
        "Gold foil accents",
        "Moisture protection",
        "Priority delivery",
        "Tracking number",
      ],
      bestFor: "Medium weddings, corporate clients",
      deliveryTime: "5-7 days",
      minOrder: 100,
      popular: true,
    },
    {
      id: "luxury",
      name: "Luxury Experience Hamper",
      type: "complete-package",
      price: "₹7,999",
      color: "from-amber-100 to-yellow-50",
      borderColor: "border-amber-300",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "Luxury wooden gift box",
        "Velvet lining interior",
        "Handwritten thank you notes",
        "Gold foil wrapping",
        "Custom monogrammed envelopes",
        "Unlimited card quantity",
        "Premium itinerary booklet",
        "Coordination guide included",
        "VIP delivery service",
      ],
      includes: [
        "White-glove delivery",
        "Personal delivery manager",
        "Insurance coverage",
        "Same-day dispatch",
        "Live tracking",
        "Recipient confirmation",
      ],
      bestFor: "Destination weddings, luxury events",
      deliveryTime: "7-10 days",
      minOrder: 150,
      popular: false,
    },
  ];

  // Additional Hamper Add-ons
  const addons = [
    {
      id: "ribbon",
      name: "Personalized Silk Ribbon",
      price: "₹299",
      // icon: <Ribbon className="w-6 h-6" />,
      description: "Custom printed ribbon with couple's names",
      category: "packaging",
      minOrder: 50,
    },
    {
      id: "wax-seal",
      name: "Custom Wax Seal",
      price: "₹499",
      icon: <Star className="w-6 h-6" />,
      description: "Personalized wax seal for envelopes",
      category: "packaging",
      minOrder: 100,
    },
    {
      id: "scented",
      name: "Scented Tissue Paper",
      price: "₹199",
      icon: <Sparkles className="w-6 h-6" />,
      description: "Rose or sandalwood scented tissue paper",
      category: "packaging",
      minOrder: 50,
    },
    {
      id: "thank-you",
      name: "Premium Thank You Cards",
      price: "₹699",
      icon: <Heart className="w-6 h-6" />,
      description: "Matching thank you card set",
      category: "cards",
      minOrder: 50,
    },
    {
      id: "booklet",
      name: "Itinerary Presentation Booklet",
      price: "₹899",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Hardcover itinerary presentation",
      category: "itinerary",
      minOrder: 25,
    },
    {
      id: "map",
      name: "Custom Wedding Map",
      price: "₹599",
      icon: <MapPin className="w-6 h-6" />,
      description: "Illustrated venue map for guests",
      category: "itinerary",
      minOrder: 50,
    },
  ];

  // Card & Itinerary Design Services
  const designServices = [
    {
      id: "card-design",
      name: "Wedding Card Design",
      icon: <Palette className="w-6 h-6" />,
      price: "₹1,999",
      features: [
        "3 design concepts",
        "Unlimited revisions",
        "Premium fonts & graphics",
        "Print-ready files",
        "Color matching",
      ],
      timeline: "3-5 days",
    },
    {
      id: "itinerary-design",
      name: "Itinerary Design",
      icon: <Calendar className="w-6 h-6" />,
      price: "₹2,499",
      features: [
        "Custom timeline layout",
        "Event graphics & icons",
        "Venue maps",
        "Coordinator contacts",
        "Print & digital versions",
      ],
      timeline: "4-6 days",
    },
    {
      id: "matching-set",
      name: "Matching Set Design",
      icon: <Layers className="w-6 h-6" />,
      price: "₹3,999",
      features: [
        "Card & itinerary matching design",
        "Complete brand identity",
        "Stationery suite",
        "Digital assets",
        "Print coordination",
      ],
      timeline: "7-10 days",
    },
  ];

  const calculateTotal = () => {
    let total = 0;

    // Add selected hamper price
    if (selectedHampers.length > 0) {
      selectedHampers.forEach((hamper) => {
        total += parseInt(hamper.price.replace(/[^0-9]/g, "") || 0);
      });
    }

    // Add addons
    selectedAddons.forEach((addon) => {
      total += parseInt(addon.price.replace(/[^0-9]/g, "") || 0);
    });

    // Add quantity extras
    if (cardQuantity > 100) {
      total += Math.floor((cardQuantity - 100) / 50) * 500;
    }
    if (itineraryQuantity > 50) {
      total += Math.floor((itineraryQuantity - 50) / 25) * 300;
    }

    return total;
  };

  const handleWhatsAppOrder = () => {
    let message = "🎁 *WEDDING CARD & ITINERARY HAMPER ORDER* 🎁\n\n";

    message += "📦 *SELECTED HAMPERS:*\n";
    if (selectedHampers.length > 0) {
      selectedHampers.forEach((hamper) => {
        message += `• ${hamper.name} - ${hamper.price}\n`;
      });
    } else {
      message += "No hamper selected\n";
    }

    message += `\n📊 *QUANTITIES:*\n`;
    message += `Wedding Cards: ${cardQuantity} pieces\n`;
    message += `Itineraries: ${itineraryQuantity} pieces\n`;

    if (selectedAddons.length > 0) {
      message += `\n✨ *ADDITIONAL ADD-ONS:*\n`;
      selectedAddons.forEach((addon) => {
        message += `• ${addon.name} - ${addon.price}\n`;
      });
    }

    message += `\n💰 *ESTIMATED TOTAL:* ₹${calculateTotal().toLocaleString()}\n\n`;
    message += `🚚 *SERVICES INCLUDED:*\n`;
    message += `• Professional Packaging\n`;
    message += `• Safe Delivery\n`;
    message += `• Quality Assurance\n`;
    message += `• Tracking Support\n\n`;
    message += `Please contact me to discuss details and place order!`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-rose-50/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 via-rose-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Gift className="w-12 h-12" />
            </div>
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Package className="w-12 h-12" />
            </div>
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Truck className="w-12 h-12" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wedding Card & Itinerary
            <span className="block text-amber-300">Premium Hamper Service</span>
          </h1>

          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Beautifully packaged wedding cards and itineraries delivered with
            care. Make your wedding stationery unforgettable.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5" />
              <span>Safe Packaging</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Truck className="w-5 h-5" />
              <span>Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Award className="w-5 h-5" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hamper Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hamper Packages */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <Gift className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold">Select Hamper Package</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hampers.map((hamper) => {
                  const isSelected = selectedHampers.find(
                    (h) => h.id === hamper.id,
                  );
                  return (
                    <div
                      key={hamper.id}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedHampers(
                            selectedHampers.filter((h) => h.id !== hamper.id),
                          );
                        } else {
                          // Allow only one hamper selection
                          setSelectedHampers([hamper]);
                        }
                      }}
                      className={`cursor-pointer rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${isSelected ? `${hamper.borderColor} shadow-xl` : "border-gray-200 hover:border-gray-300"}`}
                    >
                      {/* Header */}
                      <div className={`p-6 rounded-t-xl ${hamper.color}`}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-white rounded-lg">
                            {hamper.icon}
                          </div>
                          {hamper.popular && (
                            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold mb-2">
                          {hamper.name}
                        </h3>
                        <div className="text-2xl font-bold mb-4">
                          {hamper.price}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {hamper.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ShoppingBag className="w-4 h-4" />
                          <span>Min: {hamper.minOrder} cards</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="p-6">
                        <div className="space-y-3 mb-6">
                          {hamper.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                          <div className="text-sm font-medium text-gray-700 mb-3">
                            Includes:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {hamper.includes.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Selection Indicator */}
                        {isSelected && (
                          <div className="mt-6 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2 text-green-700">
                              <CheckCircle className="w-5 h-5" />
                              <span className="font-medium">Selected</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Tag className="w-6 h-6 text-blue-600" />
                Select Quantities
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Wedding Cards Quantity */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-lg">Wedding Cards</div>
                      <div className="text-sm text-gray-600">
                        Invitations & Save the Dates
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {cardQuantity}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="range"
                      min="50"
                      max="500"
                      step="50"
                      value={cardQuantity}
                      onChange={(e) =>
                        setCardQuantity(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />

                    <div className="flex justify-between text-sm text-gray-600">
                      <span>50 cards</span>
                      <span>100</span>
                      <span>200</span>
                      <span>300</span>
                      <span>400</span>
                      <span>500+ cards</span>
                    </div>

                    <div className="text-sm text-gray-500 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Includes envelopes for all cards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Extra charges apply above 100 cards</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Itinerary Quantity */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-lg">Itinerary Prints</div>
                      <div className="text-sm text-gray-600">
                        Wedding schedule & details
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">
                      {itineraryQuantity}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="range"
                      min="25"
                      max="200"
                      step="25"
                      value={itineraryQuantity}
                      onChange={(e) =>
                        setItineraryQuantity(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />

                    <div className="flex justify-between text-sm text-gray-600">
                      <span>25 copies</span>
                      <span>50</span>
                      <span>100</span>
                      <span>150</span>
                      <span>200+ copies</span>
                    </div>

                    <div className="text-sm text-gray-500 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Premium paper quality included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Extra charges apply above 50 copies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Add-ons */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-600" />
                Premium Add-ons
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {addons.map((addon) => {
                  const isSelected = selectedAddons.find(
                    (a) => a.id === addon.id,
                  );
                  return (
                    <div
                      key={addon.id}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedAddons(
                            selectedAddons.filter((a) => a.id !== addon.id),
                          );
                        } else {
                          setSelectedAddons([...selectedAddons, addon]);
                        }
                      }}
                      className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${isSelected ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${isSelected ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}
                          >
                            {addon.icon}
                          </div>
                          <div>
                            <div className="font-bold">{addon.name}</div>
                            <div className="text-sm text-gray-600">
                              Min: {addon.minOrder}
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-lg">{addon.price}</div>
                      </div>

                      <div className="text-sm text-gray-600">
                        {addon.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Design Services */}
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Order Summary
              </h2>

              <div className="space-y-6">
                {/* Selected Hamper */}
                {selectedHampers.length > 0 ? (
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold">Selected Hamper</div>
                      <div className="font-bold text-blue-600">
                        {selectedHampers[0].price}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedHampers[0].name}
                    </div>
                  </div>
                ) : (
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="text-yellow-700 text-center">
                      Select a hamper package
                    </div>
                  </div>
                )}

                {/* Quantities */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Wedding Cards</div>
                      <div className="text-sm text-gray-600">
                        {cardQuantity} pieces
                      </div>
                    </div>
                    <div className="font-bold">
                      {cardQuantity > 100
                        ? `+₹${Math.floor((cardQuantity - 100) / 50) * 500}`
                        : "Included"}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Itinerary Prints</div>
                      <div className="text-sm text-gray-600">
                        {itineraryQuantity} copies
                      </div>
                    </div>
                    <div className="font-bold">
                      {itineraryQuantity > 50
                        ? `+₹${Math.floor((itineraryQuantity - 50) / 25) * 300}`
                        : "Included"}
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                {selectedAddons.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-bold mb-3">Add-ons</div>
                    <div className="space-y-2">
                      {selectedAddons.map((addon) => (
                        <div
                          key={addon.id}
                          className="flex justify-between text-sm"
                        >
                          <span>{addon.name}</span>
                          <span>{addon.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-lg">Total Package</div>
                      <div className="text-sm text-gray-600">All inclusive</div>
                    </div>
                    <div className="text-3xl font-bold text-purple-600">
                      ₹{calculateTotal().toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={selectedHampers.length === 0}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${selectedHampers.length === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-[1.02]"}`}
                >
                  <MessageCircle className="inline-block w-6 h-6 mr-2" />
                  Order Hamper Package
                </button>

                {/* Guarantee */}
                <div className="text-center text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-4 h-4" />
                    <span>Quality Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Free Delivery in Major Cities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Services */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border border-purple-200">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Design Services
              </h2>

              <div className="space-y-6">
                {designServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                        {service.icon}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{service.name}</div>
                        <div className="text-sm text-gray-600">
                          Timeline: {service.timeline}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold">{service.price}</div>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700">
                        Add Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">
                Delivery Process
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Order Confirmation",
                    desc: "Within 24 hours",
                    icon: <CheckCircle />,
                  },
                  {
                    step: 2,
                    title: "Design Finalization",
                    desc: "2-3 days",
                    icon: <Edit3 />,
                  },
                  {
                    step: 3,
                    title: "Printing",
                    desc: "3-5 days",
                    icon: <Printer />,
                  },
                  {
                    step: 4,
                    title: "Packaging",
                    desc: "1-2 days",
                    icon: <Package />,
                  },
                  {
                    step: 5,
                    title: "Delivery",
                    desc: "2-7 days",
                    icon: <Truck />,
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                    <div className="text-blue-600">{item.icon}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Box className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold">Premium Packaging</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Luxury boxes, ribbons, and protective materials
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Truck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold">Safe Delivery</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Nationwide delivery with tracking & insurance
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                {/* <Ribbon className="w-6 h-6 text-amber-600" /> */}
              </div>
              <h3 className="font-bold">Customization</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Personalized ribbons, tags, and wrapping
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold">Quality Guarantee</h3>
            </div>
            <p className="text-gray-600 text-sm">
              100% satisfaction guarantee on all deliveries
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya & Raj",
                wedding: "Mumbai Destination Wedding",
                quote:
                  "The hampers were stunning! Our guests loved the premium packaging.",
                rating: 5,
              },
              {
                name: "Ananya & Vikram",
                wedding: "Traditional Delhi Wedding",
                quote:
                  "Perfect delivery and beautiful presentation. Highly recommend!",
                rating: 5,
              },
              {
                name: "Neha & Arjun",
                wedding: "Goa Beach Wedding",
                quote:
                  "Professional service from start to finish. Exceeded expectations!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.wedding}
                    </div>
                  </div>
                  <Heart className="w-5 h-5 text-rose-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCardItineraryHamper;
