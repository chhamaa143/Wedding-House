import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const StationeryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const stationeryItems = [
    { id: 1, name: 'Wedding Invitation Cards', price: '₹999+' },
    { id: 2, name: 'Save the Date Cards', price: '₹499+' },
    { id: 3, name: 'RSVP Cards', price: '₹299+' },
    { id: 4, name: 'Wedding Programs', price: '₹799+' },
    { id: 5, name: 'Menu Cards', price: '₹399+' },
    { id: 6, name: 'Place Cards', price: '₹199+' },
    { id: 7, name: 'Thank You Cards', price: '₹599+' },
    { id: 8, name: 'Favor Tags', price: '₹149+' },
    { id: 9, name: 'Guest Book', price: '₹1299+' },
    { id: 10, name: 'Seating Chart', price: '₹899+' },
  ];

  const toggleItem = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + price;
    }, 0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 bg-white border-2 border-luxury-gold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
        >
          <div className="text-left">
            <h3 className="text-xl font-semibold text-luxury-navy">
              Customize Your Wedding Stationery Package
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {selectedItems.length > 0 
                ? `${selectedItems.length} items selected • Total: ₹${calculateTotal()}+`
                : 'Select items to build your package'
              }
            </p>
          </div>
          <ChevronDown className={`w-5 h-5 text-luxury-gold transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-semibold text-luxury-navy mb-2">
                  Select Stationery Items
                </h4>
                <p className="text-gray-600 text-sm">
                  Choose items to include in your custom package
                </p>
              </div>

              <div className="space-y-2">
                {stationeryItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedItems.find(i => i.id === item.id)
                        ? 'bg-luxury-blush border-l-4 border-l-luxury-gold'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        selectedItems.find(i => i.id === item.id)
                          ? 'bg-luxury-gold border-luxury-gold'
                          : 'border-gray-300'
                      }`}>
                        {selectedItems.find(i => i.id === item.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-gray-800">{item.name}</span>
                    </div>
                    <span className="font-semibold text-luxury-gold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Selected Items Summary */}
              {selectedItems.length > 0 && (
                <div className="mt-6 p-4 bg-luxury-navy/5 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-semibold text-luxury-navy">
                      Selected Items ({selectedItems.length})
                    </h5>
                    <span className="text-lg font-bold text-luxury-gold">
                      ₹{calculateTotal()}+
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItems.map(item => (
                      <span 
                        key={item.id}
                        className="px-3 py-1 bg-luxury-gold text-white rounded-full text-sm"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    // Handle package creation
                    console.log('Selected items:', selectedItems);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-lg font-semibold hover:shadow-lg"
                >
                  Create Package
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 border border-luxury-gold text-luxury-gold rounded-lg font-semibold hover:bg-luxury-gold hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Package Preview */}
      {selectedItems.length > 0 && (
        <div className="mt-4 p-6 bg-gradient-to-r from-luxury-blush to-white rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-luxury-navy mb-3">
            Your Custom Package
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {selectedItems.map(item => (
              <div 
                key={item.id} 
                className="bg-white p-3 rounded-lg shadow-sm text-center"
              >
                <div className="text-sm text-gray-600 truncate">{item.name}</div>
                <div className="font-semibold text-luxury-gold mt-1">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StationeryDropdown;