import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
      <div className="flex flex-col items-center gap-2 text-foreground/60">
        <span className="text-sm font-light tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </div>
  );
};