import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface InquiryCTAProps {
    brandName?: string;
    customText?: string;
}

export default function InquiryCTA({ brandName, customText }: InquiryCTAProps) {
    const text = customText || (brandName ? `Interested in ${brandName} Products?` : 'Ready to start your project?');

    return (
        <section className="py-16 bg-light-grey text-center">
            <div className="container">
                <h2 className="text-3xl font-bold text-dark-blue mb-8">{text}</h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-red-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-blue transition-colors shadow-lg"
                >
                    Get a Quote <ArrowRight />
                </Link>
            </div>
        </section>
    );
}
