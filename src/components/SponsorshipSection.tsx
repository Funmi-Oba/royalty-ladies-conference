import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Star, Crown, Heart } from "lucide-react";

const SponsorshipSection = () => {
  const sponsorshipTiers = [
    {
      title: "Platinum Sponsor",
      amount: "₦500,000+",
      icon: Crown,
      color: "pink",
      benefits: [
        "Prime logo placement on all materials",
        "10 VIP seats at the conference",
        "Speaking opportunity (5 minutes)",
        "Social media mentions",
        "Booth space for product display"
      ]
    },
    {
      title: "Gold Sponsor",
      amount: "₦250,000+",
      icon: Star,
      color: "purple",
      benefits: [
        "Logo placement on conference materials",
        "5 VIP seats at the conference",
        "Social media mentions",
        "Booth space for product display",
        "Conference program advertisement"
      ]
    },
    {
      title: "Silver Sponsor",
      amount: "₦100,000+",
      icon: Heart,
      color: "pink",
      benefits: [
        "Logo on conference banners",
        "2 VIP seats at the conference",
        "Social media mentions",
        "Conference program listing"
      ]
    }
  ];

  return (
    <section id="sponsorship" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Partner With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in empowering women and making a lasting impact. Your sponsorship helps create transformational experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sponsorshipTiers.map((tier, index) => (
            <Card key={index} className={`border-${tier.color}/20 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r from-${tier.color} to-${tier.color}-deep rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft`}>
                  <tier.icon className="w-8 h-8 text-white animate-bounce-gentle" />
                </div>
                <CardTitle className={`text-2xl text-${tier.color}`}>{tier.title}</CardTitle>
                <CardDescription className="text-lg font-bold text-purple">{tier.amount}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <span className={`text-${tier.color} mr-2`}>✓</span>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="border-pink/20 shadow-elegant max-w-2xl mx-auto">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                <Handshake className="w-8 h-8 text-white animate-bounce-gentle" />
              </div>
              <CardTitle className="text-2xl text-pink">Become a Sponsor Today</CardTitle>
              <CardDescription>
                Contact us to discuss custom sponsorship packages that align with your organization's goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Contact:</strong> sponsor@royalladiesconference.com
                </p>
                <p className="text-lg">
                  <strong>Phone:</strong> +234 XXX XXXX XXX
                </p>
                <Button 
                  variant="elegant" 
                  size="lg"
                  className="text-lg px-8 py-3 hover-scale animate-enter shadow-glow"
                >
                  Get Sponsorship Package
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;