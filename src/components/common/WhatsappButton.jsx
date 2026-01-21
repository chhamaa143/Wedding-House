import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { config } from '../../config/config';

const WhatsAppButton = () => {
  const handleWhatsAppClick = (productName = '') => {
    let message = config.whatsapp.defaultMessage;
    
    if (productName) {
      message = config.whatsapp.prefillMessage.replace('{productName}', productName);
    }
    
    const url = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => handleWhatsAppClick()}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </motion.button>
  );
};

export default WhatsAppButton;