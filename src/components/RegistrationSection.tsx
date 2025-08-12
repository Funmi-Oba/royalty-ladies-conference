import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Calendar, MapPin, Clock } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section id="registration" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            Register Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your spot at Royal Ladies Conference 2025 and begin your transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <Calendar className="w-12 h-12 text-pink mx-auto mb-2" />
              <CardTitle className="text-lg">Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">October 29th - November 2nd, 2025</p>
            </CardContent>
          </Card>

          <Card className="text-center border-purple/20 hover:shadow-purple transition-all duration-300 animate-fade-in">
            <CardHeader>
              <MapPin className="w-12 h-12 text-purple mx-auto mb-2" />
              <CardTitle className="text-lg">Venue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Location details will be shared with registered participants</p>
            </CardContent>
          </Card>

          <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <Clock className="w-12 h-12 text-pink mx-auto mb-2" />
              <CardTitle className="text-lg">Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">4 Days of intensive sessions and activities</p>
            </CardContent>
          </Card>
        </div>

        <RegistrationForm />
      </div>
    </section>
  );
};

export default RegistrationSection;