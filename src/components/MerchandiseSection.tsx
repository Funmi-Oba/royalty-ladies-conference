import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Gift } from "lucide-react";

interface MerchandiseSectionProps {
  scrollToPayment: () => void;
}

const MerchandiseSection = ({ scrollToPayment }: MerchandiseSectionProps) => {
  const [shirtColor, setShirtColor] = useState<string>("Pink");
  const [shirtSize, setShirtSize] = useState<string>("M");
  const [wantCap, setWantCap] = useState<boolean>(false);
  const [capColor, setCapColor] = useState<string>("Pink");

  return (
    <section id="merch" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Conference Merchandise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your exclusive Royal Ladies Conference T-shirt and cap to commemorate this special event
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* T-shirt Section */}
          <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <Gift className="w-12 h-12 text-pink mx-auto mb-4 animate-bounce-gentle" />
              <CardTitle className="text-2xl text-pink">Conference T-Shirt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <img src="/images/brands/dpink-shirt.png" alt="Deep Pink T-shirt" className="rounded-lg shadow-md" />
                <img src="/images/brands/white-shirt.png" alt="White T-shirt" className="rounded-lg shadow-md" />
                 <img src="/images/brands/black-shirt.png" alt="Black T-shirt" className="rounded-lg shadow-md" />
                 <img src="/images/brands/lpink-shirt.png" alt="Light Pink T-shirt" className="rounded-lg shadow-md" />
                 <img src="/images/brands/purple-shirt.png" alt="Purple T-shirt" className="rounded-lg shadow-md" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="shirt-color" className="text-sm font-medium">Select Color</Label>
                  <Select value={shirtColor} onValueChange={setShirtColor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Deep Pink">Deep Pink</SelectItem>
                      <SelectItem value="Purple">Purple</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Light Pink">Light Pink</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="shirt-size" className="text-sm font-medium">Select Size</Label>
                  <Select value={shirtSize} onValueChange={setShirtSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cap Section */}
          <Card className="border-purple/20 shadow-elegant hover:shadow-purple transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center">
              <Gift className="w-12 h-12 text-purple mx-auto mb-4 animate-bounce-gentle" />
              <CardTitle className="text-2xl text-purple">Conference Cap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <img src="/images/brands/black-cap.png" alt="Black cap" className="rounded-lg shadow-md" />
                <img src="/images/brands/white-cap.png" alt="White Cap" className="rounded-lg shadow-md" />
                <img src="/images/brands/pink-cap.png" alt="Pink Cap" className="rounded-lg shadow-md" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="want-cap"
                    checked={wantCap}
                    onChange={(e) => setWantCap(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="want-cap" className="text-sm font-medium">I want a cap</Label>
                </div>

                {wantCap && (
                  <div>
                    <Label htmlFor="cap-color" className="text-sm font-medium">Select Cap Color</Label>
                    <Select value={capColor} onValueChange={setCapColor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pink">Pink</SelectItem>
                        <SelectItem value="Purple">Purple</SelectItem>
                        <SelectItem value="White">White</SelectItem>
                        <SelectItem value="Black">Black</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground">Cap size is one size fits all</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            variant="elegant" 
            size="xl"
            onClick={scrollToPayment}
            className="text-xl text-white bg-pink px-12 py-4 hover-scale animate-enter shadow-glow"
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;