import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({ 
  children, 
  className = "", 
  as: Component = "div" 
}: ContainerProps) {
  return (
    <Component className={twMerge("relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
}