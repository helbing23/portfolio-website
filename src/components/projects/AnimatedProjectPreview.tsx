// components/AnimatedProjectPreview.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface AnimatedProjectPreviewProps {
  staticImage?: string;
  animatedGif?: string;
  alt: string;
  className?: string;
}

const AnimatedProjectPreview: React.FC<AnimatedProjectPreviewProps> = ({
  staticImage,
  animatedGif,
  alt,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  // Check connection speed
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        const isSlowConn = connection.saveData || 
          ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
        setIsSlowConnection(isSlowConn);
      }
    }
  }, []);

  // Preload GIF when element is in view
  useEffect(() => {
    if (inView && animatedGif && !isSlowConnection) {
      const preloadImage = new window.Image();
      preloadImage.src = animatedGif;
      preloadImage.onload = () => setIsGifLoaded(true);
    }
  }, [inView, animatedGif, isSlowConnection]);

  // Determine which image to show
  const showGif = isHovered && animatedGif && isGifLoaded && !isSlowConnection;
  const imageToShow = showGif ? animatedGif : (staticImage || '/images/placeholder.jpg');

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden h-[176px] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Image
        src={imageToShow}
        alt={alt}
        fill
        unoptimized={!!showGif}
        className={`object-cover transition-opacity duration-300`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Loading indicator for slow connections */}
      {isHovered && animatedGif && !isGifLoaded && !isSlowConnection && (
        <div className="relative inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default AnimatedProjectPreview;