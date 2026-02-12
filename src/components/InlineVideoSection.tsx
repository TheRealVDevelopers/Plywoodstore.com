import React from 'react';

interface InlineVideoSectionProps {
  videos: string[];
  title?: string;
  darkBg?: boolean;
  columns?: 1 | 2 | 3;
}

export default function InlineVideoSection({ videos, title, darkBg = false, columns = 2 }: InlineVideoSectionProps) {
  if (!videos || videos.length === 0) return null;

  const gridCols = columns === 1 
    ? 'grid-cols-1' 
    : columns === 3 
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
      : 'grid-cols-1 md:grid-cols-2';

  return (
    <section className={`py-20 ${darkBg ? 'bg-[#081F44]' : 'bg-[#F8FAFC]'}`}>
      <div className="container">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-12 text-center ${darkBg ? 'text-white' : 'text-[#081F44]'}`}>
            {title}
          </h2>
        )}
        <div className={`grid ${gridCols} gap-8`}>
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
      </div>
    </section>
  );
}
