import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import guest1 from "@/assets/guest1.jpg";
import guest2 from "@/assets/guest2.jpg";
import guest3 from "@/assets/guest3.jpg";

const SpeakersSection = () => {
  const guests = [
    {
      name: "Dr. Grace Adebayo",
      title: "International Speaker & Author",
      image: guest1,
      bio: "A renowned international speaker with over 20 years of experience in women's ministry and leadership development. Author of 3 bestselling books on purposeful living."
    },
    {
      name: "Pastor Joy Okonkwo",
      title: "Life Coach & Entrepreneur",
      image: guest2,
      bio: "Founder of multiple successful businesses and a certified life coach. She has mentored thousands of women across Africa to discover their potential and walk in purpose."
    },
    {
      name: "Dr. Faith Okoro",
      title: "Worship Leader & Psalmist",
      image: guest3,
      bio: "An anointed worship leader and psalmist who has ministered in over 50 countries. Known for creating an atmosphere where heaven touches earth through worship."
    }
  ];

  return (
    <section id="speakers" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Our Distinguished Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the incredible women who will be sharing life-transforming messages at this year's conference
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {guests.map((guest, index) => (
            <Card key={index} className="border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-pink shadow-elegant">
                  <img 
                    src={guest.image} 
                    alt={guest.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-pink">{guest.name}</CardTitle>
                <CardDescription className="text-purple font-semibold">{guest.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground leading-relaxed">
                  {guest.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;