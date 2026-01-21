// components/WeddingItineraryHamper.jsx
import { useState } from "react";
import {
  Calendar,
  Gift,
  Clock,
  MapPin,
  Users,
  Music,
  Camera,
  ChefHat,
  Sparkles,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const WeddingItineraryHamper = () => {
  const [selectedPackage, setSelectedPackage] = useState("premium");
  const [selectedItinerary, setSelectedItinerary] = useState([]);
  const [selectedHampers, setSelectedHampers] = useState([]);

  const whatsappNumber = "918120461118";

  // Itinerary Templates
  const itineraryTemplates = [
    {
      id: "traditional",
      name: "Traditional Wedding",
      duration: "3 Days",
      events: [
        { time: "Day 1 - Evening", event: "Mehndi Ceremony", icon: "🎨" },
        { time: "Day 2 - Morning", event: "Haldi Ceremony", icon: "🌿" },
        { time: "Day 2 - Evening", event: "Sangeet Night", icon: "🎶" },
        { time: "Day 3 - Morning", event: "Baraat & Wedding", icon: "🐎" },
        { time: "Day 3 - Evening", event: "Reception", icon: "🎉" },
      ],
      description: "Complete traditional Indian wedding schedule"
    },
    {
      id: "modern",
      name: "Modern Celebration",
      duration: "2 Days",
      events: [
        { time: "Day 1 - Evening", event: "Welcome Dinner", icon: "🍽️" },
        { time: "Day 2 - Morning", event: "Wedding Ceremony", icon: "💒" },
        { time: "Day 2 - Afternoon", event: "Cocktail Hour", icon: "🍸" },
        { time: "Day 2 - Evening", event: "Reception Party", icon: "🎊" },
      ],
      description: "Contemporary wedding with modern elements"
    },
    {
      id: "destination",
      name: "Destination Wedding",
      duration: "4 Days",
      events: [
        { time: "Day 1", event: "Guest Arrival & Welcome", icon: "✈️" },
        { time: "Day 2", event: "Beachside Ceremony", icon: "🏖️" },
        { time: "Day 3", event: "Cultural Night", icon: "🌺" },
        { time: "Day 4", event: "Farewell Brunch", icon: "🥂" },
      ],
      description: "Exotic destination wedding itinerary"
    }
  ];

  // Hamper Packages
  const hamperPackages = [
    {
      id: "basic",
      name: "Essential Hamper",
      price: "₹2,999",
      items: [
        "Personalized Thank You Notes",
        "Customized Matchboxes",
        "Elegant Ribbons",
        "Basic Packaging"
      ],
      bestFor: "Small gatherings",
      image: "/images/hampers/basic.jpg"
    },
    {
      id: "premium",
      name: "Premium Luxury Hamper",
      price: "₹5,999",
      items: [
        "Gold Foil Thank You Cards",
        "Personalized Chocolates",
        "Scented Candles",
        "Silk Ribbons",
        "Custom Gift Boxes",
        "Handwritten Notes"
      ],
      bestFor: "Medium to large weddings",
      image: "/images/hampers/premium.jpg",
      popular: true
    },
    {
      id: "luxury",
      name: "Royal Experience Hamper",
      price: "₹9,999",
      items: [
        "Everything in Premium",
        "Personalized Perfumes",
        "Silver-plated Items",
        "Custom Photo Frames",
        "Luxury Wrapping",
        "Delivery Coordination",
        "VIP Tags"
      ],
      bestFor: "Grand celebrations",
      image: "/images/hampers/luxury.jpg"
    }
  ];

  // Additional Hamper Items
  const additionalItems = [
    { id: 1, name: "Personalized Mithai Box", price: "₹499", category: "food" },
    { id: 2, name: "Customized Photo Album", price: "₹799", category: "memories" },
    { id: 3, name: "Scented Candle Set", price: "₹699", category: "decor" },
    { id: 4, name: "Handmade Soaps", price: "₹399", category: "personal" },
    { id: 5, name: "Mini Champagne Bottles", price: "₹899", category: "drinks" },
    { id: 6, name: "Custom Coasters", price: "₹299", category: "utility" },
  ];

  const calculateTotal = () => {
    const hamperPrice = parseInt(hamperPackages.find(h => h.id === selectedPackage)?.price.replace(/[^0-9]/g, '') || 0);
    const additionalPrice = selectedHampers.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return sum + price;
    }, 0);
    return hamperPrice + additionalPrice;
  };

  const handleWhatsAppOrder = () => {
    const selectedHamper = hamperPackages.find(h => h.id === selectedPackage);
    const selectedItineraryTemplate = itineraryTemplates.find(i => selectedItinerary.includes(i.id));
    
    let message = "Hello! I would like to order:\n\n";
    
    if (selectedItineraryTemplate) {
      message += `📅 *Itinerary Package:* ${selectedItineraryTemplate.name}\n`;
      message += `⏰ Duration: ${selectedItineraryTemplate.duration}\n\n`;
    }
    
    message += `🎁 *Hamper Package:* ${selectedHamper.name}\n`;
    message += `💰 Price: ${selectedHamper.price}\n\n`;
    
    if (selectedHampers.length > 0) {
      message += `➕ *Additional Items:*\n`;
      selectedHampers.forEach(item => {
        message += `• ${item.name} - ${item.price}\n`;
      });
      message += `\n`;
    }
    
    message += `💰 *Total Estimated:* ₹${calculateTotal()}\n\n`;
    message += `Please contact me to discuss customization options!`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-luxury-blush  text-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8" />
            <Gift className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wedding Itinerary & Gift Hamper Combo
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Plan your perfect wedding schedule and delight your guests with beautiful gift hampers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Itinerary Planning */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Wedding Itinerary Planning</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Choose from our expertly crafted wedding timelines or customize your own
              </p>

              {/* Itinerary Templates */}
              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-lg mb-4">Select Template</h3>
                {itineraryTemplates.map(template => (
                  <div
                    key={template.id}
                    onClick={() => {
                      if (selectedItinerary.includes(template.id)) {
                        setSelectedItinerary(selectedItinerary.filter(id => id !== template.id));
                      } else {
                        setSelectedItinerary([...selectedItinerary, template.id]);
                      }
                    }}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${selectedItinerary.includes(template.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg">{template.name}</h4>
                        <p className="text-gray-600">{template.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="font-medium">{template.duration}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {template.events.map((event, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700">
                          <span className="text-2xl">{event.icon}</span>
                          <div>
                            <div className="font-medium">{event.event}</div>
                            <div className="text-sm text-gray-500">{event.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Customization Options */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Customize Your Itinerary</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Music />, label: "Music & Entertainment" },
                    { icon: <Camera />, label: "Photography Schedule" },
                    { icon: <ChefHat />, label: "Food & Beverage" },
                    { icon: <Users />, label: "Guest Management" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="text-blue-600">{item.icon}</div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hamper Selection */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold">Gift Hamper Selection</h2>
              </div>

              {/* Hamper Packages */}
              <div className="space-y-6 mb-8">
                <h3 className="font-bold text-lg">Choose Hamper Package</h3>
                {hamperPackages.map(pkg => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${selectedPackage === pkg.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-xl">{pkg.name}</h4>
                          {pkg.popular && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                              MOST POPULAR
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-purple-600 mb-2">
                          {pkg.price}
                        </div>
                        <div className="text-gray-600">Best for: {pkg.bestFor}</div>
                      </div>
                      {selectedPackage === pkg.id && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                    
                    <ul className="space-y-2">
                      {pkg.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Additional Items */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Add Extra Items</h3>
                <div className="grid grid-cols-2 gap-4">
                  {additionalItems.map(item => (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (selectedHampers.find(h => h.id === item.id)) {
                          setSelectedHampers(selectedHampers.filter(h => h.id !== item.id));
                        } else {
                          setSelectedHampers([...selectedHampers, item]);
                        }
                      }}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${selectedHampers.find(h => h.id === item.id) ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.category}</div>
                        </div>
                        <div className="font-bold">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Your Combo Package</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold">Itinerary Planning</div>
                    <div className="text-sm opacity-80">
                      {selectedItinerary.length > 0 
                        ? itineraryTemplates.find(t => selectedItinerary.includes(t.id))?.name 
                        : "Not selected"}
                    </div>
                  </div>
                  <div className="font-bold">
                    {selectedItinerary.length > 0 ? "Included" : "—"}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold">Gift Hamper</div>
                    <div className="text-sm opacity-80">
                      {hamperPackages.find(h => h.id === selectedPackage)?.name}
                    </div>
                  </div>
                  <div className="font-bold">
                    {hamperPackages.find(h => h.id === selectedPackage)?.price}
                  </div>
                </div>

                {selectedHampers.length > 0 && (
                  <div className="pt-4 border-t border-white/20">
                    <div className="font-bold mb-2">Additional Items</div>
                    {selectedHampers.map(item => (
                      <div key={item.id} className="flex justify-between text-sm mb-1">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-6 border-t border-white/20">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total Package</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Order Combo via WhatsApp
              </button>

              <p className="text-center text-sm opacity-80 mt-4">
                Customization options available. Chat with us for personalized quotes!
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow">
            <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Detailed Planning</h3>
            <p className="text-gray-600">
              Minute-by-minute scheduling for perfect execution
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow">
            <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
              <Gift className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Premium Hampers</h3>
            <p className="text-gray-600">
              Curated gift boxes that impress your guests
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow">
            <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Complete Coordination</h3>
            <p className="text-gray-600">
              End-to-end service from planning to delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingItineraryHamper;