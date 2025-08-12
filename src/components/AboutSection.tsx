import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            About Royal Ladies Conference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier gathering designed to celebrate, educate, and empower women from all walks of life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <Users className="w-12 h-12 text-pink mx-auto mb-4 animate-bounce-gentle" />
              <CardTitle className="text-xl">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect with like-minded women from diverse backgrounds and build lasting relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-purple/20 hover:shadow-purple transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <GraduationCap className="w-12 h-12 text-purple mx-auto mb-4 animate-bounce-gentle" />
              <CardTitle className="text-xl">Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Develop spiritually, emotionally, and professionally through our comprehensive programs.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <Award className="w-12 h-12 text-pink mx-auto mb-4 animate-bounce-gentle" />
              <CardTitle className="text-xl">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Experience world-class speakers, worship, and activities designed for maximum impact.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-rose/10 to-purple-light/10 rounded-lg p-8 border border-pink/10 shadow-flower">
          <p className="text-lg text-center leading-relaxed text-foreground">
            Royal Ladies Conference is more than an event—it's a movement. Since our inception, we have been 
            committed to creating spaces where women can encounter God, discover their purpose, and develop 
            practical skills for life and ministry. Our conference brings together women from universities, 
            churches, and communities across the nation for four days of intensive transformation, learning, 
            and celebration. Join us as we continue to raise a generation of women who understand their royal 
            identity in Christ and are equipped to make a lasting impact in their spheres of influence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;