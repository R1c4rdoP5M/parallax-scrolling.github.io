import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'float' | 'float-slow' | 'rotate' | 'rotate-slow' | 'pulse' | 'glow';
  delay?: number;
  style?: React.CSSProperties;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className,
  animationType = 'float',
  delay = 0,
  style,
}) => {
  const elementStyle: React.CSSProperties = {
    animationDelay: `${delay}s`,
    ...style,
  };

  return (
    <div 
      className={cn('absolute', `animate-${animationType}`, className)}
      style={elementStyle}
    >
      {children}
    </div>
  );
};