import React, { useState } from 'react';
import Image from './Image';
import { Play, X } from 'lucide-react';

interface BrandVideoHeroProps {
  brandName: string;
  tagline: string;
  heroImage: string;
  videos: string[];
}

export default function BrandVideoHero({ brandName, tagline, heroImage, videos }: BrandVideoHeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(videos[0] || '');

  const openVideo = () => {
    if (videos.length > 0) {
      setCurrentVideoId(videos[0]);
      setIsVideoOpen(true);
    }
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={brandName}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-2 bg-[#C45C3F] text-white text-sm font-semibold tracking-wider mb-4 rounded-lg uppercase">
            Authorized Dealer
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight font-heading">
            {brandName}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-8 max-w-lg">
            {tagline}
          </p>
          {videos.length > 0 && (
            <button
              onClick={openVideo}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C45C3F] text-white font-semibold rounded-lg hover:bg-[#A84D32] transition-all hover:shadow-xl hover:shadow-[#C45C3F]/30 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
              </span>
              Watch Brand Video
            </button>
          )}
          {videos.length === 0 && (
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C45C3F] text-white font-semibold rounded-lg hover:bg-[#A84D32] transition-all"
            >
              Explore Products
            </a>
          )}
        </div>

        {videos.length > 0 && (
          <div className="hidden md:flex justify-end">
            <button
              onClick={openVideo}
              className="group relative w-full max-w-md aspect-video rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl hover:border-[#C45C3F] transition-all"
            >
              <Image
                src={`https://img.youtube.com/vi/${videos[0]}/maxresdefault.jpg`}
                alt={`${brandName} video`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                <div className="w-20 h-20 rounded-full bg-[#C45C3F] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-10 h-10 ml-1 text-white" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold">Play brand story</p>
              </div>
            </button>
          </div>
        )}
      </div>

      {isVideoOpen && currentVideoId && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 text-white hover:text-[#C45C3F] transition-colors z-10"
            aria-label="Close video"
          >
            <X size={40} />
          </button>
          <div
            className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
              title={`${brandName} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
