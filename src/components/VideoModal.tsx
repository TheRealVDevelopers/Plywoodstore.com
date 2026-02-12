import React from 'react';

interface VideoModalProps {
  videos: string[];
}

/**
 * Now renders inline autoplaying muted videos instead of a modal.
 * Kept as VideoModal for backward compatibility but behavior is inline.
 */
export default function VideoModal({ videos }: VideoModalProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((id, index) => (
        <div key={index} className="video-embed-container shadow-xl">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title={`Video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}
