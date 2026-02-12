import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
    const whatsappNumber = "919876543210"; // Replace with actual number
    const message = encodeURIComponent("Hello, I am interested in your products.");
    const callNumber = "+919876543210";

    return (
        <div className={styles.floatingContainer}>
            {/* Optional Call Button */}
            <a href={`tel:${callNumber}`} className={styles.callButton} aria-label="Call Us">
                <Phone size={24} />
            </a>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
            </a>
        </div>
    );
}
