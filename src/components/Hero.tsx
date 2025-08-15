import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Crown, Sparkles } from "lucide-react";

interface HeroProps {
  scrollToRegistration: () => void;
}

const Hero = ({ scrollToRegistration }: HeroProps) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/royalty-ladies.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink/50 via-purple/50 to-pink-deep/50"></div>
        {/* 3D Flower decorations */}
        <div className="absolute top-20 left-10 w-24 h-24 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-rose to-pink-light rounded-full opacity-30 animate-pulse-soft"></div>
        </div>
        <div className="absolute bottom-32 right-16 w-32 h-32 animate-bounce-gentle">
          <div className="w-full h-full bg-gradient-to-br from-purple-light to-purple rounded-full opacity-25 animate-flower-bloom"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <div className="flex items-center justify-center mb-4">
          <Crown className="w-16 h-16 text-rose-deep mr-4 animate-bounce-gentle" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-rose-deep to-white bg-clip-text text-transparent animate-shimmer bg-300%">
            Royal Ladies Conference
          </h1>
          <Sparkles className="w-12 h-12 text-rose-deep ml-4 animate-pulse-soft" />
        </div>
        
        <div className="inline-block px-4 py-1 mb-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-2xl uppercase tracking-widest">
          Royalty Ladies Conference 1.0
        </div>
        <div className="flex items-center justify-center mb-6 text-xl md:text-xl">
          <Calendar className="w-6 h-6 mr-2" />
          <span className="font-semibold">October 29th - November 2nd, 2025</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Theme: <span className="text-white">BECOMING</span>
        </h2>
        <p className="text-lg md:text-xl font-semibold mb-2 italic">Phi 1:6.</p>
        <p className="text-lg md:text-xl mb-8 font-light">Becoming the woman God intended</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="elegant" 
            size="xl"
            onClick={scrollToRegistration}
            className="text-xl px-8 py-4 hover-scale bg-purple text-white animate-enter shadow-glow"
            aria-label="Register Now"
          >
            Register Now
          </Button>
          <Button 
            variant="elegant" 
            size="xl"
            onClick={scrollToRegistration}
            className="text-xl px-8 py-4 hover-scale bg-pink text-white animate-enter shadow-glow"
            aria-label="Get your Event T-Shirt"
          >
            Get your Event T-Shirt
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;