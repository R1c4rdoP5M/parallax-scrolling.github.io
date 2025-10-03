import React, { useEffect } from 'react';
import { ParallaxLayer } from '@/components/ParallaxLayer';
import { FloatingElement } from '@/components/FloatingElement';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { ContentSection } from '@/components/ContentSection';
import { useParallax } from '@/hooks/use-parallax';

// Import images
import skylineBg from '@/assets/skyline-bg.jpg';
import cloudsLayer from '@/assets/clouds-layer.jpg';
import buildingGlass from '@/assets/building-glass.png';
import buildingArtdeco from '@/assets/building-artdeco.png';
import craneClean from '@/assets/crane-clean.png';
import birds from '@/assets/birds.png';
import balloon from '@/assets/balloon.png';
import airplane from '@/assets/airplane.png';

const Index: React.FC = () => {
  const { scrollY } = useParallax();

  useEffect(() => {
    // Update CSS variable for parallax calculations
    document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
  }, [scrollY]);

  return (
    <div className="relative min-h-[600vh] bg-gradient-sky overflow-hidden">
      {/* Fixed background - Layer 0 (furthest back) */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${skylineBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gradient overlay for atmosphere */}
      <div className="fixed inset-0 z-1 bg-gradient-to-b from-sky-light/30 via-transparent to-urban/20" />

      {/* Clouds layer - Layer 1 */}
      <ParallaxLayer speed={0.1} className="z-2">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${cloudsLayer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7,
          }}
        />
      </ParallaxLayer>

      {/* Far building - Layer 2 */}
      <ParallaxLayer speed={0.2} className="z-3">
        <FloatingElement 
          className="top-[25vh] right-[10vw] w-[28vw] md:w-[18vw] opacity-90"
          animationType="float-slow"
          delay={0}
        >
          <img 
            src={buildingArtdeco} 
            alt="Art deco building" 
            className="w-full h-auto drop-shadow-2xl filter contrast-110"
            style={{ 
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
              mixBlendMode: 'multiply'
            }}
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Birds flock - Layer 3 */}
      <ParallaxLayer speed={0.4} className="z-4">
        <div 
          className="absolute top-[40vh] left-[20vw] w-[40vw] h-[20vh]"
          style={{
            backgroundImage: `url(${birds})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.6,
          }}
        />
      </ParallaxLayer>

      {/* Near building - Layer 4 */}
      <ParallaxLayer speed={0.6} className="z-5">
        <FloatingElement 
          className="top-[100vh] left-[5vw] w-[32vw] md:w-[22vw]"
          animationType="float"
          delay={0.5}
        >
          <img 
            src={buildingGlass} 
            alt="Modern skyscraper" 
            className="w-full h-auto"
            style={{ 
              filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))',
              mixBlendMode: 'multiply'
            }}
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Construction crane - Layer 5 */}
      <ParallaxLayer speed={0.8} className="z-6">
        <FloatingElement 
          className="top-[160vh] right-[10vw] w-[28vw] md:w-[18vw]"
          animationType="rotate-slow"
          delay={1}
        >
          <img 
            src={craneClean} 
            alt="Construction crane" 
            className="w-full h-auto"
            style={{ 
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))',
              mixBlendMode: 'multiply'
            }}
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Hot air balloon - Layer 3 */}
      <ParallaxLayer speed={0.35} className="z-4">
        <FloatingElement 
          className="top-[200vh] left-[60vw] w-[15vw] md:w-[10vw]"
          animationType="float-slow"
          delay={1.5}
        >
          <img 
            src={balloon} 
            alt="Hot air balloon" 
            className="w-full h-auto"
            style={{ 
              filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.2))',
              mixBlendMode: 'multiply'
            }}
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Airplane - Layer 5 */}
      <ParallaxLayer speed={0.9} className="z-6">
        <FloatingElement 
          className="top-[280vh] left-[20vw] w-[20vw] md:w-[12vw]"
          animationType="float"
          delay={2}
        >
          <img 
            src={airplane} 
            alt="Small airplane" 
            className="w-full h-auto"
            style={{ 
              filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.25))',
              mixBlendMode: 'multiply'
            }}
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Additional floating elements */}
      <ParallaxLayer speed={0.3} className="z-3">
        <FloatingElement 
          className="top-[220vh] left-[30vw] w-48 h-48 md:w-64 md:h-64"
          animationType="pulse"
          delay={0.5}
        >
          <div className="w-full h-full rounded-full bg-gradient-radial blur-2xl opacity-40" />
        </FloatingElement>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} className="z-4">
        <FloatingElement 
          className="top-[320vh] right-[20vw] w-32 h-32 md:w-48 md:h-48"
          animationType="glow"
          delay={1.5}
        >
          <div className="w-full h-full rounded-full bg-sunset/20 shadow-glow" />
        </FloatingElement>
      </ParallaxLayer>

      {/* More birds in distance */}
      <ParallaxLayer speed={0.15} className="z-2">
        <FloatingElement 
          className="top-[280vh] right-[40vw] w-[25vw] h-[15vh] opacity-40"
          animationType="float-slow"
          delay={2}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${birds})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'scaleX(-1)',
            }}
          />
        </FloatingElement>
      </ParallaxLayer>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                Ascending
              </span>
              <br />
              <span className="text-urban-dark drop-shadow-lg">
                Architecture
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-urban max-w-2xl mx-auto">
              Experience the urban skyline through immersive parallax layers
            </p>
          </div>
          <ScrollIndicator />
        </section>

        {/* Foundation Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <ContentSection
            subtitle="Chapter 1"
            title="Urban Foundation"
            description="From the ground up, every building tells a story of ambition and innovation. The city's foundation is built on dreams that reach toward the sky."
            align="center"
          />
        </section>

        {/* Rising Section */}
        <section className="min-h-screen flex items-center justify-start px-4">
          <ContentSection
            subtitle="Chapter 2"
            title="Rising Heights"
            description="Steel and glass pierce the clouds as modern architecture defies gravity. Each floor represents progress, each window a different perspective on the world below."
            align="left"
            className="ml-8 md:ml-20"
          />
        </section>

        {/* Construction Section */}
        <section className="min-h-screen flex items-center justify-end px-4">
          <ContentSection
            subtitle="Chapter 3"
            title="Building Tomorrow"
            description="Cranes dance against the skyline, orchestrating the city's evolution. Every beam placed is a step toward the future, transforming blueprints into reality."
            align="right"
            className="mr-8 md:mr-20"
          />
        </section>

        {/* Skyline Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <ContentSection
            subtitle="Chapter 4"
            title="The Living Skyline"
            description="The cityscape breathes with life - windows glowing like pixels in an urban canvas. From dawn to dusk, the architecture transforms with light and shadow."
            align="center"
          />
        </section>

        {/* Final Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 space-y-8">
          <ContentSection
            subtitle="The Journey Continues"
            title="Your Urban Story"
            description="Every building has a purpose, every skyline tells a tale. As you scroll through these architectural layers, you become part of the city's ever-evolving narrative."
            align="center"
          />
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-primary/10 border border-primary text-primary rounded-full hover:bg-primary/20 transition-all duration-300 hover:shadow-glow animate-pulse"
          >
            Return to Ground Level
          </button>
        </section>
      </div>
    </div>
  );
};

export default Index;