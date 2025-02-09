import React, { ComponentProps } from 'react';
import { cn } from '@/lib/util';

interface ContainerProps extends ComponentProps<any> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
} 

const Container = ({children, as = 'div', className, ...props}:ContainerProps) => {
  const Element = as;
  return (
    <Element className={cn('mx-auto w-full max-w-5xl lg:max-w-7xl px-8 md:px-12',className)} {...props}>
        {children}
    </Element>
  )
}

export default Container