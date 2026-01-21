import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Download, Package, Clock, CheckCircle } from 'lucide-react';
import { products } from '../config/data';
import { config } from '../config/config';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-luxury-rosegold hover:text-luxury-gold font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = config.whatsapp.prefillMessage
      .replace('{productName}', product.name)
      .replace('Quantity: ___', `Quantity: ${quantity}`);
    
    const url = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-luxury-gold">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-luxury-gold">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-luxury-rosegold">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? 'border-luxury-gold'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <span className="inline-block px-3 py-1 bg-luxury-blush text-luxury-rosegold rounded-full text-sm mb-3">
                {product.category}
              </span>
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-luxury-gold mb-6">
                {product.price}
              </p>
              <p className="text-gray-600">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customization Options */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Customization Options 
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.customization.map((option, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Package className="w-6 h-6 text-luxury-gold" />
                <div>
                  <p className="text-sm text-gray-500">Delivery Time</p>
                  <p className="font-semibold">{product.deliveryTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-luxury-gold" />
                <div>
                  <p className="text-sm text-gray-500">Sample Available</p>
                  <p className="font-semibold">Yes</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 w-16 text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-lg text-lg font-semibold hover:shadow-xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Now on WhatsApp
              </button>
              
              <a
                href={product.pdfPreview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold hover:text-white"
              >
                <Download className="w-5 h-5" />
                Download PDF Sample
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;