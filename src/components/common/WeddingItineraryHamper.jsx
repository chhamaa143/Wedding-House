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
  ArrowLeft,
  X,
  ChevronRight,
  Eye,
  Crown,
  Gem,
  Flower2,
  Leaf,
} from "lucide-react";

const WeddingCardItineraryHamper = () => {
  const [selectedHamper, setSelectedHamper] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [cardQuantity, setCardQuantity] = useState(100);
  const [itineraryQuantity, setItineraryQuantity] = useState(50);
  const [showItemDetails, setShowItemDetails] = useState(null);

  const whatsappNumber = "918120461118";

  // Sample images for items (replace with your actual images)
  const itemImages = {
    box: "/images/products/kon.png",
    ribbon: "/images/products/ribbon.png",
    card: "/images/products/card.png",
    envelope: "/images/products/silverfoil.png",
    itinerary: "/images/products/itinerery.png",
    thankYou: "/images/products/card.png",
  };

  // Wedding Card & Itinerary Hampers with detailed items
  const hampers = [
    {
      id: "essential",
      name: "Classic  Delivery    Hamper",
      type: "cards",
      price: "₹1,499",
      originalPrice: "₹2,499",
      discount: "40% OFF",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-200",
      icon: <Package className="w-8 h-8" />,
      description: "Perfect for intimate weddings and local deliveries",
      rating: 4.5,
      reviews: 128,
      deliveryTime: "3-5 days",
      minOrder: 50,
      popular: false,
      items: [
        {
          id: "essential-box",
          name: "Premium Cardboard Gift Box",
          type: "packaging",
          category: "Box",
          image: itemImages.box,
          description: "High-quality cardboard box with magnetic closure",
          quantity: 1,
          price: "₹499",
          details: [
            "Size: 12x9x3 inches",
            "Material: Premium cardboard (350 GSM)",
            "Color: Kraft brown with white interior",
            "Magnetic flap closure",
            "Ribbon handle included",
            "Can hold up to 150 cards",
          ],
        },
        {
          id: "essential-tissue",
          name: "Custom Tissue Paper",
          type: "packaging",
          category: "Wrapping",
          image: itemImages.ribbon,
          description: "Tissue paper with your logo or monogram",
          quantity: 50,
          price: "₹299",
          details: [
            "Size: 20x20 inches",
            "Material: Acid-free tissue (20 GSM)",
            "Custom printed with your design",
            "Pack of 50 sheets",
            "Available in 10 colors",
            "Eco-friendly and biodegradable",
          ],
        },
        {
          id: "essential-thankyou",
          name: "Basic Thank You Cards",
          type: "cards",
          category: "Stationery",
          image: itemImages.thankYou,
          description: "Simple elegant thank you cards with envelopes",
          quantity: 50,
          price: "₹399",
          details: [
            "Size: 5x7 inches",
            "Paper: 300gsm matte finish",
            "Includes matching envelopes",
            "Blank inside for personal message",
            "Available in 5 colors",
            "Premium quality printing",
          ],
        },
        {
          id: "essential-envelope",
          name: "Plain Delivery Envelopes",
          type: "packaging",
          category: "Envelopes",
          image: itemImages.envelope,
          description: "Sturdy envelopes for safe card delivery",
          quantity: 100,
          price: "₹249",
          details: [
            "Size: 6x9 inches",
            "Material: Kraft paper (120 GSM)",
            "Self-seal adhesive strip",
            "Water-resistant coating",
            "Pack of 100",
            "Eco-friendly material",
          ],
        },
        {
          id: "essential-labels",
          name: "Custom Address Labels",
          type: "accessories",
          category: "Labels",
          image: itemImages.ribbon,
          description: "Personalized address labels for each envelope",
          quantity: 100,
          price: "₹199",
          details: [
            "Size: 2x4 inches",
            "Material: White matte sticker paper",
            "Custom printed with your address",
            "Peel and stick application",
            "Waterproof and smudge-proof",
            "Pack of 100 labels",
          ],
        },
      ],
    },
    {
      id: "premium",
      name: "Premium Presentation Hamper",
      type: "cards-itinerary",
      price: "₹3,999",
      originalPrice: "₹5,999",
      discount: "33% OFF",
      color: "from-yellow-500 to-pink-500",
      borderColor: "border-yellow-300",
      icon: <Gift className="w-8 h-8" />,
      description: "Ideal for medium weddings with elegant presentation",
      rating: 4.8,
      reviews: 256,
      deliveryTime: "5-7 days",
      minOrder: 100,
      popular: true,
      items: [
        {
          id: "premium-box",
          name: "Luxury Rigid Gift Box",
          type: "packaging",
          category: "Box",
          image: itemImages.box,
          description: "Premium rigid box with magnetic closure and window",
          quantity: 1,
          price: "₹999",
          details: [
            "Size: 14x10x4 inches",
            "Material: Rigid cardboard with linen finish (2mm thick)",
            "Clear acrylic window on lid",
            "Magnetic closure system",
            "Available in 5 premium colors",
            "Gold foil embossing option",
            "Can hold up to 250 cards",
          ],
        },
        {
          id: "premium-ribbon",
          name: "Personalized Silk Ribbon",
          type: "packaging",
          category: "Ribbon",
          image: itemImages.ribbon,
          description: "Silk ribbon with custom printed names and date",
          quantity: 2,
          price: "₹399",
          details: [
            "Length: 2 meters each",
            "Material: 100% silk (40mm width)",
            "Custom printed with gold foil",
            "Available in 15 colors",
            "Fray-resistant edges",
            "Can be personalized with names",
          ],
        },
        {
          id: "premium-thankyou",
          name: "Premium Thank You Cards",
          type: "cards",
          category: "Stationery",
          image: itemImages.thankYou,
          description: "Luxury thank you cards with gold foil printing",
          quantity: 100,
          price: "₹699",
          details: [
            "Size: 5x7 inches",
            "Paper: 350gsm premium textured",
            "Gold foil printing",
            "Matching envelopes with liner",
            "Handwritten calligraphy option",
            "Premium quality finish",
          ],
        },
        {
          id: "premium-tissue",
          name: "Custom Printed Tissue Paper",
          type: "packaging",
          category: "Wrapping",
          image: itemImages.ribbon,
          description: "Premium tissue with gold foil accents",
          quantity: 100,
          price: "₹399",
          details: [
            "Size: 20x20 inches",
            "Material: Acid-free premium tissue (25 GSM)",
            "Gold foil printed design",
            "Scented option available (Rose/Lavender)",
            "Pack of 100 sheets",
            "Eco-friendly material",
          ],
        },
        {
          id: "premium-envelope",
          name: "Embossed Premium Envelopes",
          type: "packaging",
          category: "Envelopes",
          image: itemImages.envelope,
          description: "Envelopes with embossed monogram",
          quantity: 250,
          price: "₹599",
          details: [
            "Size: 6x9 inches",
            "Material: Premium textured paper (140 GSM)",
            "Embossed monogram on flap",
            "Gold foil inner liner",
            "Peel and seal closure",
            "Water-resistant coating",
          ],
        },
        {
          id: "premium-itinerary",
          name: "Premium Itinerary Booklet",
          type: "itinerary",
          category: "Booklet",
          image: itemImages.itinerary,
          description: "Hardcover itinerary booklet with gold foil",
          quantity: 100,
          price: "₹899",
          details: [
            "Size: 8x10 inches",
            "Cover: Hardcover with linen finish",
            "Gold foil title printing",
            "20 pages interior",
            "Satin ribbon bookmark",
            "Custom illustrations included",
          ],
        },
      ],
    },
    {
      id: "luxury",
      name: "Luxury Experience Hamper",
      type: "complete-package",
      price: "₹7,999",
      originalPrice: "₹10,999",
      discount: "27% OFF",
      color: "from-amber-500 to-yellow-500",
      borderColor: "border-amber-300",
      icon: <Crown className="w-8 h-8" />,
      description: "The ultimate luxury experience for destination weddings",
      rating: 4.9,
      reviews: 89,
      deliveryTime: "7-10 days",
      minOrder: 150,
      popular: false,
      items: [
        {
          id: "luxury-box",
          name: "Wooden Keepsake Gift Box",
          type: "packaging",
          category: "Box",
          image: itemImages.box,
          description: "Handcrafted wooden box with velvet interior",
          quantity: 1,
          price: "₹2,499",
          details: [
            "Size: 16x12x5 inches",
            "Material: Premium sheesham wood",
            "Velvet lined interior (plush finish)",
            "Brass hardware with antique finish",
            "Custom engraving on lid",
            "Laser-cut monogram option",
            "Can be used as keepsake box",
            "Hand-polished finish",
          ],
        },
        {
          id: "luxury-velvet",
          name: "Velvet Pouch Set",
          type: "packaging",
          category: "Pouches",
          image: itemImages.ribbon,
          description: "Set of velvet pouches for individual cards",
          quantity: 150,
          price: "₹1,299",
          details: [
            "Size: 4x6 inches",
            "Material: Premium velvet (crush-resistant)",
            "Gold drawstring closure",
            "Custom embroidered monogram",
            "Available in 10 colors",
            "Pack of 150 pouches",
            "Luxury feel and finish",
          ],
        },
        {
          id: "luxury-calligraphy",
          name: "Handwritten Calligraphy Notes",
          type: "cards",
          category: "Stationery",
          image: itemImages.thankYou,
          description: "Personal handwritten calligraphy thank you notes",
          quantity: 150,
          price: "₹1,999",
          details: [
            "Size: 4x6 inches",
            "Paper: Handmade cotton paper (320 GSM)",
            "Real gold leaf accents",
            "Handwritten calligraphy by expert",
            "Sealed with wax seal",
            "Each note is unique",
            "Comes with protective sleeve",
          ],
        },
        {
          id: "luxury-wrapping",
          name: "Gold Foil Wrapping Paper",
          type: "packaging",
          category: "Wrapping",
          image: itemImages.ribbon,
          description: "Premium wrapping paper with real gold foil",
          quantity: 10,
          price: "₹599",
          details: [
            "Size: 30x40 inches per sheet",
            "Material: Premium acid-free paper (120 GSM)",
            "Real gold foil printing",
            "Custom pattern design",
            "10 sheets included",
            "Suitable for gift wrapping",
          ],
        },
        {
          id: "luxury-monogram",
          name: "Custom Monogrammed Envelopes",
          type: "packaging",
          category: "Envelopes",
          image: itemImages.envelope,
          description: "Envelopes with custom monogram in gold foil",
          quantity: 500,
          price: "₹1,499",
          details: [
            "Size: 6x9 inches",
            "Material: Premium cotton paper (160 GSM)",
            "Gold foil monogram",
            "Silk inner lining",
            "Wax seal compatible",
            "Unlimited quantity",
            "Handmade paper option available",
          ],
        },
        {
          id: "luxury-itinerary",
          name: "Luxury Itinerary Hardcover Book",
          type: "itinerary",
          category: "Booklet",
          image: itemImages.itinerary,
          description: "Premium hardcover itinerary book with photos",
          quantity: 150,
          price: "₹1,999",
          details: [
            "Size: 9x12 inches",
            "Cover: Leather-bound with gold embossing",
            "100 pages premium paper (170 GSM)",
            "Full color photo printing",
            "Custom illustrations",
            "Satin ribbon bookmark",
            "Presentation slipcase included",
            "Acid-free archival paper",
          ],
        },
        {
          id: "luxury-guide",
          name: "Wedding Coordination Guide",
          type: "guide",
          category: "Guide",
          image: itemImages.itinerary,
          description: "Complete wedding guide for guests",
          quantity: 150,
          price: "₹899",
          details: [
            "Size: 6x9 inches",
            "Cover: Soft-touch laminate",
            "50 pages guide (120 GSM paper)",
            "Vendor contacts section",
            "Local attraction guide",
            "Emergency contacts",
            "QR codes for digital access",
            "Pocket-sized format",
          ],
        },
        {
          id: "luxury-gift-tags",
          name: "Personalized Gift Tags",
          type: "accessories",
          category: "Tags",
          image: itemImages.ribbon,
          description: "Custom die-cut gift tags with ribbons",
          quantity: 150,
          price: "₹499",
          details: [
            "Size: 3x4 inches",
            "Material: Premium cardstock (350 GSM)",
            "Custom die-cut shape",
            "Gold foil printing",
            "Satin ribbon attached",
            "Pack of 150",
            "Matching envelopes available",
          ],
        },
      ],
    },
  ];

  // Additional Hamper Add-ons
  const addons = [
    {
      id: "ribbon",
      name: "Personalized Silk Ribbon",
      price: "₹299",
      icon: <Gem className="w-6 h-6" />,
      description: "Custom printed ribbon with couple's names",
      category: "packaging",
      minOrder: 50,
      image: itemImages.ribbon,
    },
    {
      id: "wax-seal",
      name: "Custom Wax Seal",
      price: "₹499",
      icon: <Star className="w-6 h-6" />,
      description: "Personalized wax seal for envelopes",
      category: "packaging",
      minOrder: 100,
      image: itemImages.waxSeal,
    },
    {
      id: "scented",
      name: "Scented Tissue Paper",
      price: "₹199",
      icon: <Flower2 className="w-6 h-6" />,
      description: "Rose or sandalwood scented tissue paper",
      category: "packaging",
      minOrder: 50,
      image: itemImages.ribbon,
    },
    {
      id: "thank-you",
      name: "Premium Thank You Cards",
      price: "₹699",
      icon: <Heart className="w-6 h-6" />,
      description: "Matching thank you card set",
      category: "cards",
      minOrder: 50,
      image: itemImages.thankYou,
    },
    {
      id: "booklet",
      name: "Itinerary Presentation Booklet",
      price: "₹899",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Hardcover itinerary presentation",
      category: "itinerary",
      minOrder: 25,
      image: itemImages.itinerary,
    },
    {
      id: "map",
      name: "Custom Wedding Map",
      price: "₹599",
      icon: <MapPin className="w-6 h-6" />,
      description: "Illustrated venue map for guests",
      category: "itinerary",
      minOrder: 50,
      image: itemImages.itinerary,
    },
  ];

  // Design Services
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
    if (selectedHamper) {
      total += parseInt(selectedHamper.price.replace(/[^0-9]/g, "") || 0);
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

    if (selectedHamper) {
      message += `📦 *SELECTED HAMPER:*\n`;
      message += `${selectedHamper.name} - ${selectedHamper.price}\n\n`;

      message += `📦 *HAMPER CONTENTS (${selectedHamper.items.length} items):*\n`;
      selectedHamper.items.forEach((item) => {
        message += `• ${item.name} - ${item.quantity} pcs\n`;
      });
      message += "\n";
    }

    message += `📊 *QUANTITIES:*\n`;
    message += `Wedding Cards: ${cardQuantity} pieces\n`;
    message += `Itineraries: ${itineraryQuantity} pieces\n`;

    if (selectedAddons.length > 0) {
      message += `\n✨ *ADDITIONAL ADD-ONS:*\n`;
      selectedAddons.forEach((addon) => {
        message += `• ${addon.name} - ${addon.price}\n`;
      });
    }

    message += `\n💰 *ESTIMATED TOTAL:* ₹${calculateTotal().toLocaleString()}\n\n`;
    message += `Please contact me to discuss details and place order!`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleBackToHampers = () => {
    setSelectedHamper(null);
    setShowItemDetails(null);
  };

  // If a hamper is selected, show its detailed contents
  if (selectedHamper) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackToHampers}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to All Hampers</span>
              </button>

              <div className="text-lg font-bold text-yellow-600">
                Total: ₹{calculateTotal().toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Hamper Hero */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={selectedHamper.items[0]?.image}
            alt={selectedHamper.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                    {selectedHamper.discount}
                  </span>
                  <span className="text-white/80 flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    {selectedHamper.rating} ({selectedHamper.reviews})
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {selectedHamper.name}
                </h1>
                <p className="text-white/90 text-lg max-w-2xl">
                  {selectedHamper.description}
                </p>
              </div>

              <div className="text-right text-white">
                <div className="text-3xl font-bold">{selectedHamper.price}</div>
                <div className="text-white/70 line-through">
                  {selectedHamper.originalPrice}
                </div>
                <div className="text-sm mt-1">
                  {selectedHamper.items.length} Items Included
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Package className="w-6 h-6 text-yellow-600" />
            What's Inside This Hamper ({selectedHamper.items.length} Premium
            Items)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedHamper.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setShowItemDetails(item)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {item.quantity} pcs
                  </div>
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-yellow-600">
                    {item.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-yellow-600 font-medium flex items-center gap-1">
                      View Details <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quantity Controls */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">Customize Quantities</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2">Wedding Cards</label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="50"
                  value={cardQuantity}
                  onChange={(e) => setCardQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>50</span>
                  <span>100</span>
                  <span>200</span>
                  <span>300</span>
                  <span>400</span>
                  <span>500</span>
                </div>
                <div className="mt-2 font-bold text-yellow-600">
                  Selected: {cardQuantity} cards
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Itinerary Prints
                </label>
                <input
                  type="range"
                  min="25"
                  max="200"
                  step="25"
                  value={itineraryQuantity}
                  onChange={(e) =>
                    setItineraryQuantity(parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>25</span>
                  <span>50</span>
                  <span>100</span>
                  <span>150</span>
                  <span>200</span>
                </div>
                <div className="mt-2 font-bold text-yellow-600">
                  Selected: {itineraryQuantity} copies
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-16 bg-gradient-to-br from-luxury-blush rounded-2xl p-8 text-center text-black">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Order?</h3>
                <p>
                  {selectedHamper.name} with {cardQuantity} cards
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">
                  ₹{calculateTotal().toLocaleString()}
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="mt-4 px-8 py-3 bg-white text-yellow-600 rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  <MessageCircle className="inline-block w-5 h-5 mr-2" />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Item Details Modal */}
        {showItemDetails && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowItemDetails(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setShowItemDetails(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-gray-100 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <img
                  src={showItemDetails.image}
                  alt={showItemDetails.name}
                  className="w-full h-96 object-cover"
                />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-bold">
                        {showItemDetails.category}
                      </span>
                      <h2 className="text-3xl font-bold mt-4">
                        {showItemDetails.name}
                      </h2>
                      <p className="text-gray-600 mt-2">
                        {showItemDetails.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-yellow-600">
                        {showItemDetails.price}
                      </div>
                      <div className="text-gray-500">per item</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-4">Specifications</h3>
                    <ul className="space-y-3">
                      {showItemDetails.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800">
                      <span className="font-bold">
                        {showItemDetails.quantity} pieces
                      </span>{" "}
                      included in this hamper
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Main hamper selection view
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-rose-50/20">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-luxury-blush via-white to-luxury-champagne">
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

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
            Wedding Card & Itinerary
            {/* <span className="block text-amber-300">Premium Hamper Service</span> */}
          </h1>

          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Beautifully packaged wedding cards and itineraries delivered with
            care. Make your wedding stationery unforgettable.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm ">
              <Shield className="w-8 h-8 text-yellow-600" />
              <span>Safe Packaging</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Truck className="w-8 h-8 text-yellow-600" />
              <span>Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Award className="w-8 h-8 text-yellow-600" />
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
                <Gift className="w-8 h-8 text-yellow-600" />
                <h2 className="text-2xl font-bold">Select Hamper Package</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hampers.map((hamper) => (
                  <div
                    key={hamper.id}
                    onClick={() => setSelectedHamper(hamper)}
                    className="cursor-pointer rounded-xl border-2 border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden"
                  >
                    <div className={`p-6 bg-gradient-to-r ${hamper.color}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white rounded-lg">
                          {hamper.icon}
                        </div>
                        {hamper.popular && (
                          <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-full">
                            POPULAR
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {hamper.name}
                      </h3>
                      <div className="text-2xl font-bold text-white mb-2">
                        {hamper.price}
                      </div>
                      <div className="text-white/80 text-sm line-through">
                        {hamper.originalPrice}
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-sm text-white/90">
                        <Clock className="w-4 h-4" />
                        <span>{hamper.deliveryTime}</span>
                      </div>
                    </div>

                    <div className="p-6 bg-white">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">
                          {hamper.items.length} Premium Items Inside
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {hamper.items.slice(0, 3).map((item, idx) => (
                            <div
                              key={idx}
                              className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                            >
                              <img
                                src={item.image}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                          {hamper.items.length > 3 && (
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-yellow-100 flex items-center justify-center text-xs font-bold text-yellow-600">
                              +{hamper.items.length - 3}
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          Min: {hamper.minOrder} cards
                        </span>
                      </div>

                      <button className="w-full mt-4 py-2 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-lg font-medium hover:bg-yellow-700 transition-colors">
                        View Hamper Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            {/* <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Tag className="w-6 h-6 text-blue-600" />
                Select Quantities
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <span>50</span>
                      <span>100</span>
                      <span>200</span>
                      <span>300</span>
                      <span>400</span>
                      <span>500</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-lg">Itinerary Prints</div>
                      <div className="text-sm text-gray-600">
                        Wedding schedule & details
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">
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
                      <span>25</span>
                      <span>50</span>
                      <span>100</span>
                      <span>150</span>
                      <span>200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

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
                      className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              isSelected
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-100 text-gray-600"
                            }`}
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
                {selectedHamper ? (
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold">Selected Hamper</div>
                      <div className="font-bold text-blue-600">
                        {selectedHamper.price}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedHamper.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {selectedHamper.items.length} items included
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
                    <div className="text-3xl font-bold text-yellow-600">
                      ₹{calculateTotal().toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={!selectedHamper}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    !selectedHamper
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-yellow-600 text-white hover:shadow-xl hover:scale-[1.02]"
                  }`}
                >
                  <MessageCircle className="inline-block w-6 h-6 mr-2" />
                  Order Hamper Package
                </button>
              </div>
            </div>

            {/* Design Services */}
            <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl shadow-xl p-8 border border-yellow-200">
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
                      <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">
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
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-rosegold-700">
                        Add Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCardItineraryHamper;
