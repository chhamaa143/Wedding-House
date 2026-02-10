import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Download } from "lucide-react";
import { config } from "../../config/config";

const ProductCard = ({ product }) => {
  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const message = config.whatsapp.prefillMessage.replace(
      "{productName}",
      product.name,
    );
    const url = `https://wa.me/${
      config.whatsapp.number
    }?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleDownloadPDF = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(product.pdfPreview, "_blank");
  };

  return (
    <motion.div whileHover={{ y: -5 }} className="  ">
      <Link to={`/products/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
            {product.category}
          </span>
        </div>

        {/* Product Info */} 
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-serif font-semibold text-gray-900">
              {product.name}
            </h3>
            <span className="text-luxury-gold font-bold">{product.price}</span>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-luxury-blush text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white py-2 rounded-lg hover:opacity-90"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>

            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 border border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold hover:text-white"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
