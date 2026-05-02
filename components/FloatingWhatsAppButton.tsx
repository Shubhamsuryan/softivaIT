import React from 'react';
import { WhatsAppIcon } from './icons';

const FloatingWhatsAppButton: React.FC = () => {
  const phoneNumber = '917840020111'; // Replace with your number
  const message = "Hello! I'm interested in SoftivaIT's services."; // Pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-110 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
