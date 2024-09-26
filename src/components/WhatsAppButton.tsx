'use client'
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '573125225009'; // Cambia este número por el tuyo (formato: código de país + número)

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank'); // Abre en una nueva pestaña
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      Contact me on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
