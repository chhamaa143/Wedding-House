import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-ivory via-white to-luxury-champagne">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <div className="text-9xl font-serif font-bold text-luxury-gold/20 mb-4">
            404
          </div>
          <h1 className="text-4xl font-serif font-bold text-luxury-navy mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
            The page you're looking for seems to have wandered off. Let's get you back to exploring beautiful wedding cards.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-full text-lg font-semibold hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-luxury-gold text-luxury-gold rounded-full text-lg font-semibold hover:bg-luxury-gold hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Browse Collections
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;