'use client';

import { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiLocationMarker } from 'react-icons/hi';
import TimeDisplay from '@/app/components/ui/TimeDisplay';
import SocialFloating from '@/app/components/ui/SocialFloating';

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const HeroImage = memo(({ src, alt, priority = false }: HeroImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={500}
    height={500}
    className="object-cover"
    priority={priority}
  />
));

HeroImage.displayName = 'HeroImage';

const LocationWidget = () => (
  <div className="absolute right-0 top-0 text-sm group xl:right-20 animate-float">
    <div className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 shadow-lg transition-colors dark:bg-neutral-800">
      <HiLocationMarker color="text-red-500" />
      <span>United Kingdom</span>
    </div>
    <div className="absolute right-0 top-full mt-2 hidden rounded-xl bg-white/90 px-3 py-2 shadow-lg group-hover:block dark:bg-neutral-800">
      <TimeDisplay timezone="Europe/London" />
    </div>
  </div>
);

const HireButton = () => (
  <Link 
    href="/services#request-form"
    className="absolute bottom-0 left-10 flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-green-700 md:left-14 lg:bottom-2 lg:left-16 xl:left-32 animate-float-delayed"
  >
    <span className="animate-pulse">💬</span>
    Hire Me
  </Link>
);

export default function HeroSection() {
  const [text, setText] = useState('Freelancer');

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => prevText === 'Freelancer' ? 'Aspiring AI Engineer' : 'Freelancer');
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col-reverse items-center justify-center gap-8 px-4 md:flex-row md:px-6 lg:px-8"
    >
      <div className="flex flex-col space-y-4 md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Hello, I&apos;m{' '}
          <span className="gradient-text whitespace-nowrap">
            Helbin Rapheal
          </span>
        </h1>
        <p className="text-lg md:text-xl">
          Software Developer | {text}
        </p>
        <SocialFloating />
      </div>

      <div className="relative flex justify-center md:w-1/2">
        <div className="relative lg:w-1/2 max-h-96 max-w-sm overflow-hidden rounded-full shadow-xl lg:w-full">
          <div className="animate-fade-in-up">
            <HeroImage
              src="/images/Banner-hero-helbin.png"
              alt="Cartoon face Helbin"
              priority
            />
          </div>
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <HeroImage
              src="/images/Banner-hero-helbin-hover.png"
              alt="Cartoon face Helbin on hover"
              priority={false}
            />
          </div>
        </div>
        
        <LocationWidget />
        <HireButton />
      </div>
    </section>
  );
}