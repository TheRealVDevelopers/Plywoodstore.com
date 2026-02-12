import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent("Hello, I am interested in your products.");
  const callNumber = "+919876543210";

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4 items-end">
      <a
        href={`tel:${callNumber}`}
        className="w-12 h-12 bg-[#0D0D0D] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
