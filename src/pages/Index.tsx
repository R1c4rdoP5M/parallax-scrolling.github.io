import React, { useEffect } from 'react';
import { ParallaxLayer } from '@/components/ParallaxLayer';
import { FloatingElement } from '@/components/FloatingElement';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { ContentSection } from '@/components/ContentSection';
import { StarsBackground } from '@/components/StarsBackground';
import { useParallax } from '@/hooks/use-parallax';

// Import images
import nebulaBg from '@/assets/nebula-bg.jpg';
import starsLayer from '@/assets/stars-layer.jpg';
import planet1 from '@/assets/planet-1.png';
import planet2 from '@/assets/planet-2.png';
import spacecraft from '@/assets/spacecraft.png';
import asteroids from '@/assets/asteroids.png';

const Index: React.FC = () => {
  const { scrollY } = useParallax();

  useEffect(() => {
    // Update CSS variable for parallax calculations
    document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
  }, [scrollY]);

  return (
    <div className="relative min-h-[600vh] bg-background overflow-hidden">
      {/* Canvas stars background */}
      <StarsBackground />

      {/* Fixed background - Layer 0 (furthest back) */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${nebulaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 z-1 bg-gradient-radial opacity-50" />

      {/* Stars layer - Layer 1 */}
      <ParallaxLayer speed={0.1} className="z-2">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${starsLayer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7,
          }}
        />
      </ParallaxLayer>

      {/* Large planet - Layer 2 */}
      <ParallaxLayer speed={0.3} className="z-3">
        <FloatingElement 
          className="top-[20vh] right-[-10vw] w-[50vw] md:w-[35vw] opacity-80"
          animationType="float-slow"
          delay={0}
        >
          <img 
            src={planet1} 
            alt="Gas giant planet" 
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(147,51,234,0.5)]"
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Asteroids field - Layer 3 */}
      <ParallaxLayer speed={0.5} className="z-4">
        <div 
          className="absolute top-[60vh] left-0 w-full h-[40vh]"
          style={{
            backgroundImage: `url(${asteroids})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.6,
          }}
        />
      </ParallaxLayer>

      {/* Small planet - Layer 4 */}
      <ParallaxLayer speed={0.7} className="z-5">
        <FloatingElement 
          className="top-[120vh] left-[10vw] w-[30vw] md:w-[20vw]"
          animationType="rotate-slow"
        >
          <img 
            src={planet2} 
            alt="Mars-like planet" 
            className="w-full h-auto drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]"
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Spacecraft - Layer 5 */}
      <ParallaxLayer speed={0.9} className="z-6">
        <FloatingElement 
          className="top-[180vh] right-[15vw] w-[25vw] md:w-[15vw]"
          animationType="float"
          delay={1}
        >
          <img 
            src={spacecraft} 
            alt="Spacecraft" 
            className="w-full h-auto animate-glow drop-shadow-[0_10px_30px_rgba(0,255,255,0.3)]"
            style={{ '--shadow-color': 'hsl(195 100% 50% / 0.5)' } as React.CSSProperties}
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Additional floating elements */}
      <ParallaxLayer speed={0.4} className="z-3">
        <FloatingElement 
          className="top-[250vh] left-[20vw] w-32 h-32 md:w-48 md:h-48"
          animationType="pulse"
          delay={0.5}
        >
          <div className="w-full h-full rounded-full bg-gradient-star blur-xl opacity-30" />
        </FloatingElement>
      </ParallaxLayer>

      <ParallaxLayer speed={0.6} className="z-4">
        <FloatingElement 
          className="top-[350vh] right-[25vw] w-24 h-24 md:w-32 md:h-32"
          animationType="glow"
          delay={1.5}
        >
          <div className="w-full h-full rounded-full bg-accent/20 shadow-glow" />
        </FloatingElement>
      </ParallaxLayer>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Journey Through
              </span>
              <br />
              <span className="text-star drop-shadow-[0_0_30px_hsl(45_100%_70%/0.5)]">
                The Cosmos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Explore the infinite expanse of space through immersive parallax scrolling
            </p>
          </div>
          <ScrollIndicator />
        </section>

        {/* Discovery Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <ContentSection
            subtitle="Chapter 1"
            title="Stellar Discovery"
            description="Beyond the veil of Earth's atmosphere lies an ocean of stars, each one a sun with its own story. As we journey deeper into the cosmos, we discover worlds beyond imagination."
            align="center"
          />
        </section>

        {/* Nebula Section */}
        <section className="min-h-screen flex items-center justify-start px-4">
          <ContentSection
            subtitle="Chapter 2"
            title="Nebula Gardens"
            description="Vast clouds of cosmic dust and gas paint the universe in vibrant hues. These stellar nurseries birth new stars, creating a continuous cycle of cosmic creation and destruction."
            align="left"
            className="ml-8 md:ml-20"
          />
        </section>

        {/* Exploration Section */}
        <section className="min-h-screen flex items-center justify-end px-4">
          <ContentSection
            subtitle="Chapter 3"
            title="Infinite Exploration"
            description="Humanity's greatest adventure awaits among the stars. With each passing light-year, we push the boundaries of what's possible, seeking answers to questions as old as time itself."
            align="right"
            className="mr-8 md:mr-20"
          />
        </section>

        {/* Destination Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <ContentSection
            subtitle="Chapter 4"
            title="Unknown Destinations"
            description="Every planet tells a different story. From gas giants with storms larger than Earth to rocky worlds that might harbor life, the diversity of the cosmos continues to astound us."
            align="center"
          />
        </section>

        {/* Final Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 space-y-8">
          <ContentSection
            subtitle="The Journey Continues"
            title="Your Cosmic Odyssey"
            description="The universe is vast, mysterious, and waiting to be explored. Every scroll through this cosmic journey brings new discoveries and perspectives on our place in the infinite expanse."
            align="center"
          />
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-primary/10 border border-primary text-primary rounded-full hover:bg-primary/20 transition-all duration-300 hover:shadow-glow animate-pulse"
          >
            Return to Earth
          </button>
        </section>
      </div>
    </div>
  );
};

export default Index;