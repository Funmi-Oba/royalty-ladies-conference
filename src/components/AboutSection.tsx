import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Sprout, Award,  } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="mt-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl pb-2 font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
            About Royalty Ladies Conference
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            A premier gathering designed to celebrate, educate, and empower
            women from all walks of life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <Users className="w-12 h-12 text-pink mx-auto animate-bounce-gentle" />
              <CardTitle className="text-xl">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect with like-minded women from diverse backgrounds and
                build lasting relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-purple/20 hover:shadow-purple transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <Sprout className="w-12 h-12 text-purple mx-auto animate-bounce-gentle" />
              <CardTitle className="text-xl">Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Develop spiritually, emotionally, and professionally through our
                comprehensive programs.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <Award className="w-12 h-12 mb-4 text-pink mx-auto animate-bounce-gentle" />
              <CardTitle className="text-xl">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Experience world-class speakers, worship, and activities
                designed for maximum impact.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col px-10 md:flex-row items-center ">
          {/* Text Section */}
          <div className="md:w-2/3">
            <p className="text-lg text-center md:text-left leading-relaxed text-muted-foreground">
              <p>
                <b>
                  Royalty Ladies Conference is more than an event, it’s a
                  movement.{" "}
                </b>
              </p>
              We create spaces where women encounter God, discover purpose, and
              gain practical skills for life and ministry. For four days, women
              from universities, churches, and communities gather for
              transformation, learning, and celebration. Together, we are
              raising a generation who know their royal identity in Christ and
              are equipped to make lasting impact in their world.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center ">
            <motion.img
              src="images/women.png"
              alt="Women Gathering"
              loading="lazy"
              className="w-52 h-52 md:w-96 md:h-96 object-contain"
              initial={{ opacity: 0, x: 200 }} // start off-screen (from right)
              whileInView={{ opacity: 1, x: 0 }} // end at normal position
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }} // trigger when 30% of the component is in view
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
