import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function Image({ src, alt, fill, className = '', ...props }: ImageProps) {
  const style: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : {};

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={props.priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
