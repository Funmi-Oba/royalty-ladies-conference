import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Book, ChefHat, GraduationCap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Music,
      title: "Powerful Worship Atmosphere",
      description: "Experience heaven-touching worship sessions led by anointed psalmists and worship leaders."
    },
    {
      icon: Book,
      title: "Word and Prayer",
      description: "Receive life-transforming messages and participate in powerful prayer sessions that break barriers."
    },
    {
      icon: ChefHat,
      title: "Cooking Competition",
      description: "Showcase your culinary skills in our exciting cooking competition with amazing prizes for winners."
    },
    {
      icon: GraduationCap,
      title: "Free Vocational Skills Training",
      description: "Learn valuable skills including Adire making, pastries, toiletries production, makeup, and bead making."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Conference Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a divine blend of worship, learning, skill development, and fellowship
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-pink">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;