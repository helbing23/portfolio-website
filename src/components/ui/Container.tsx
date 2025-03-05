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
    <Component className={twMerge("relative w-full max-w-5xl mx-auto px-4", className)}>
      {children}
    </Component>
  );
}