import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Our Vision & Mission
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink to-pink-deep rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                <Star className="w-8 h-8 text-white animate-bounce-gentle" />
              </div>
              <CardTitle className="text-2xl text-pink">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg text-muted-foreground leading-relaxed">
                To see every woman discover her royal identity, walk in divine purpose, and impact her generation 
                through the power of God's love and grace. We envision a generation of empowered women who understand 
                their worth and live out their God-given potential.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple/20 shadow-elegant hover:shadow-purple transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple to-purple-deep rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                <Heart className="w-8 h-8 text-white animate-bounce-gentle" />
              </div>
              <CardTitle className="text-2xl text-purple">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg text-muted-foreground leading-relaxed">
                To create transformational experiences that inspire, educate, and empower women spiritually, 
                emotionally, and practically. Through worship, word, fellowship, and skill development, 
                we equip women to excel in every area of life.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;