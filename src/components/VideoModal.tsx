import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import Image from './Image';

interface VideoModalProps {
  videos: string[];
}

export default function VideoModal({ videos }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  if (!videos || videos.length === 0) return null;

  const openModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideoId('');
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((id, index) => (
          <div
            key={index}
            className="group relative h-64 bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/10"
            onClick={() => openModal(id)}
          >
            <Image
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#C45C3F] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play className="text-white fill-current ml-1" size={32} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-[#C45C3F] transition-colors z-10"
            aria-label="Close video"
          >
            <X size={48} />
          </button>

          <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
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
