import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Image from './Image';

interface BrandVideoHeroProps {
  brandName: string;
  tagline: string;
  heroImage: string;
  videos: string[];
}

export default function BrandVideoHero({ brandName, tagline, heroImage, videos }: BrandVideoHeroProps) {
  const hasVideo = videos && videos.length > 0;

  return (
    <>
      {/* Background - Video or Image */}
      <div className="absolute inset-0 z-0">
        {hasVideo ? (
          <iframe
            className="absolute inset-0 w-full h-full scale-[1.3] pointer-events-none"
            src={`https://www.youtube.com/embed/${videos[0]}?autoplay=1&mute=1&loop=1&playlist=${videos[0]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title={brandName}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <Image
            src={heroImage}
            alt={brandName}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-2 bg-[#A4161A] text-white text-sm font-bold tracking-wider mb-4 rounded-lg uppercase">
            Authorized Dealer
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            {brandName}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-8 max-w-lg">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#A4161A] text-white font-bold rounded-lg hover:bg-[#C41E3A] transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* Second video thumbnail on right (if 2+ videos) */}
        {hasVideo && videos.length > 1 && (
          <div className="hidden md:block">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full pointer-events-none"
                src={`https://www.youtube.com/embed/${videos[1]}?autoplay=1&mute=1&loop=1&playlist=${videos[1]}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                title={`${brandName} video 2`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        )}

        {/* If no video, show hero image on right */}
        {!hasVideo && (
          <div className="hidden md:block">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <Image
                src={heroImage}
                alt={brandName}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
