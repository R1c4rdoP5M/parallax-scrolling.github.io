import React from 'react';
import { cn } from '@/lib/utils';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  offset = 0,
  className,
  style,
}) => {
  const layerStyle: React.CSSProperties = {
    transform: `translateY(calc(var(--scroll-y, 0) * ${speed}px + ${offset}px))`,
    willChange: 'transform',
    ...style,
  };

  return (
    <div 
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={layerStyle}
    >
      {children}
    </div>
  );
};