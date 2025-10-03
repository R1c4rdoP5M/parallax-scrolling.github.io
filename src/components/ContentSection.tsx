import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  fadeIn?: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  className,
  align = 'center',
  fadeIn = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fadeIn) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [fadeIn]);

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'relative z-20 flex flex-col gap-4 p-8 md:p-12 max-w-4xl mx-auto',
        'transition-all duration-1000 transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        alignmentClasses[align],
        className
      )}
    >
      <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
        {subtitle && (
          <span className="text-accent text-sm font-semibold tracking-wider uppercase drop-shadow-lg">
            {subtitle}
          </span>
        )}
        <h2 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-2xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
          {title}
        </h2>
        <p className="text-lg md:text-xl text-foreground/90 max-w-2xl drop-shadow-lg">
          {description}
        </p>
      </div>
    </div>
  );
};