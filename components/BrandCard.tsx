import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BrandCardProps {
    name: string;
    description: string;
    logoUrl?: string; // Optional, fallback to name
    link: string;
}

export default function BrandCard({ name, description, logoUrl, link }: BrandCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="p-6 flex items-center justify-center h-40 bg-gray-50 border-b border-gray-100">
                {logoUrl ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={logoUrl}
                            alt={`${name} Logo`}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                ) : (
                    <h3 className="text-2xl font-bold text-gray-400">{name}</h3>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-dark-blue mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {description}
                </p>
                <Link
                    href={link}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-transparent border-2 border-primary-blue text-primary-blue font-semibold rounded hover:bg-primary-blue hover:text-white transition-colors"
                >
                    Explore <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}
