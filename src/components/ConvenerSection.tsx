import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown } from "lucide-react";
import convener from "@/assets/convener.jpg";

const ConvenerSection = () => {
  return (
    <section id="convener" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Meet the Convener
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <img 
                src={convener} 
                alt="Conference Convener" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center animate-pulse-soft">
                <Crown className="w-12 h-12 text-white animate-bounce-gentle" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl text-pink">Rev. Dr. Mercy Adelabu</CardTitle>
                <CardDescription className="text-lg text-purple font-semibold">
                  Conference Convener & Visionary Leader
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Rev. Dr. Mercy Adelabu is a dynamic leader, international speaker, and passionate advocate 
                  for women's empowerment. With over 15 years of ministry experience, she has dedicated her 
                  life to seeing women discover their royal identity and fulfill their divine destiny.
                </p>
                
                <p className="text-lg leading-relaxed">
                  As the founder of Royal Ladies Conference, Dr. Adelabu has touched thousands of lives 
                  across Africa and beyond. Her heart for mentorship and practical skill development has 
                  resulted in numerous success stories of women who have been transformed through the conference.
                </p>
                
                <p className="text-lg leading-relaxed">
                  She holds a doctorate in Christian Leadership and is the author of "Crowned for Purpose" 
                  and "The Royal Woman's Guide to Excellence." Her ministry extends beyond conferences to 
                  include leadership training, business mentorship, and community development programs.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 bg-pink text-white rounded-full text-sm animate-bounce-gentle">Author</span>
                  <span className="px-3 py-1 bg-purple text-white rounded-full text-sm animate-bounce-gentle">International Speaker</span>
                  <span className="px-3 py-1 bg-pink text-white rounded-full text-sm animate-bounce-gentle">Leadership Coach</span>
                  <span className="px-3 py-1 bg-purple text-white rounded-full text-sm animate-bounce-gentle">Women's Advocate</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvenerSection;