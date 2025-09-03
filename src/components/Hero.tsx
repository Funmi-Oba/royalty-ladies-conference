import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Crown, Sparkles } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import Countdown from "@/components/Countdown";

interface HeroProps {
  scrollToRegistration: () => void;
}

const Hero = ({ scrollToRegistration }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen px-4 py-6 pt-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/royalty-ladies3.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink/30 via-purple/50 to-pink-deep/30"></div>
        {/* 3D Flower decorations */}
        <div className="absolute top-20 left-10 w-24 h-24 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-rose to-pink-light rounded-full opacity-30 animate-pulse-soft"></div>
        </div>

        {/* <div className="absolute bottom-32 right-16 w-32 h-32 animate-bounce-gentle">
          <div className="w-full h-full bg-gradient-to-br from-purple-light to-purple rounded-full opacity-25 animate-flower-bloom"></div>
        </div> */}
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <div className="flex items-center justify-center mt-8 mb-4">
          <Crown className="w-16 h-16 text-white mr-4 animate-bounce-gentle" />
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold bg-white
          bg-clip-text text-transparent bg-300% pb-2 leading-tight"
          >
            Royalty Ladies Conference 1.0
          </h1>
          <Sparkles className="w-12 h-12 text-white ml-4 animate-pulse-soft" />
        </div>

        <div className="flex items-center justify-center mb-2 text-xl md:text-xl">
          <Calendar className="w-6 h-6 mr-2" />
          <span className="font-semibold">
            October 29th - November 2nd, 2025.
          </span>
        </div>

        <div className="text-4xl md:text-5xl font-extrabold flex flex-col items-center text-center">
          <h4>
            <span className="text-white font-bold text-2xl md:text-3xl">
              Theme:
            </span>
          </h4>
          <span
            className="bg-gradient-to-r  from-white via-rose-deep
           to-white  bg-clip-text text-transparent
        animate-shimmer"
          >
            BECOMING
          </span>
          <p className="text-lg md:text-xl font-semibold italic">
            Phi 1:6 (AMPC)
          </p>
          {/* <p className="text-base max-w-xl font-normal">
            <i>
              "And I am convinced and sure of this very thing, that He Who began
              a good work in you will continue until the day of Jesus Christ
              [right up to the time of His return], developing [that good work]
              and perfecting and bringing it to full completion in you."
            </i>
          </p> */}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button
            variant="elegant"
            size="xl"
            onClick={scrollToRegistration}
            className="text-xl px-8 py-4 hover-scale bg-purple text-white animate-enter 
            shadow-glow shadow-lg shadow-white"
            aria-label="Register Now"
          >
            Register Now
          </Button>
          <Button
            variant="elegant"
            size="xl"
            onClick={() => (window.location.href = "#merch")}
            className="text-xl px-8 py-4 hover-scale bg-pink text-white animate-enter shadow-glow
            shadow-lg shadow-white"
            aria-label="Get your Event T-Shirt"
          >
            Get your Event T-Shirt
          </Button>
        </div>
        <Countdown targetDate="2025-10-29T00:00:00" />
      </div>
      <div className="bg-purple px-4 py-4 rounded-lg fixed right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 animate-float">
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-xl sm:text-2xl text-white">
          <a
            href="https://www.facebook.com/share/19SvNNyJJ1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/royalty.ladies?igsh=MTdkMGJkNHBvMnI4NA==&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@royaltyladies?si=xfT1JYPjPWKpHPRz"
            target="_blank"
            rel="noopener noreferrer"
              className="hover:text-foreground"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.tiktok.com/@royalty_ladies?_t=ZS-8ylqfZVxzH8&_r=1"
            target="_blank"
            rel="noopener noreferrer"
              className="hover:text-foreground"
            
          >
            <BsTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
