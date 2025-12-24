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

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

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
    if (typeof navigator !== 'undefined') {
      const connection = (navigator as NavigatorWithConnection).connection;
      if (connection) {
        const effectiveType = connection.effectiveType ?? '';
        const isSlowConn =
          connection.saveData === true ||
          ['slow-2g', '2g', '3g'].includes(effectiveType);
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

  // Placeholder image data URI (1x1 gray pixel)
  const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect width="400" height="200" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%239ca3af"%3ENo Preview Available%3C/text%3E%3C/svg%3E';

  // Determine which image to show
  const showGif = isHovered && animatedGif && isGifLoaded && !isSlowConnection;
  const imageToShow = showGif ? animatedGif : (staticImage || placeholderImage);

  // Check if the image is a GIF (either the current image or the static image could be a GIF)
  const isGif = imageToShow.endsWith('.gif');

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
        unoptimized={isGif}
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
