import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual phone number
    const message = "Hello! I'd like to know more about Bean There Cafe's menu and services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-hover border-0 p-0 transition-all duration-300 hover:scale-110 group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle 
          size={24} 
          className="text-white group-hover:scale-110 transition-transform duration-200" 
        />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-coffee-dark text-cream px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-card">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-coffee-dark"></div>
      </div>
    </div>
  );
};