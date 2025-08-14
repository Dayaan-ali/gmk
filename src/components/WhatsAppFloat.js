import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockData } from '../mockData';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your organic manure products.";
    const whatsappUrl = `https://wa.me/${mockData.company.phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 4px 15px rgba(34, 197, 94, 0.4)",
            "0 4px 20px rgba(34, 197, 94, 0.6)",
            "0 4px 15px rgba(34, 197, 94, 0.4)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppFloat;