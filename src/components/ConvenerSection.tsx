import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Crown } from "lucide-react";

const ConvenerSection = () => {
  return (
    <section id="convener" className="py-10 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in p-6">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl pb-2 md:text-4xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent animate-shimmer bg-300%">
                Meet the Convener
              </h2>
            </div>
            <CardTitle className="text-center text-3xl text-pink">
              Funmilayo Oba
            </CardTitle>
            <CardDescription className="text-center text-lg text-purple font-semibold">
              The Visionary Leader
            </CardDescription>
          </CardHeader>

          <CardContent className="text-lg leading-relaxed">
            {/* Floated Image */}
            <div className="relative float-left mr-6  w-64">
              <img
                src="/images/guest/pfun2.jpg
                "
                alt="Conference Convener"
                loading="lazy"
                className="rounded-tl-3xl rounded-br-3xl max-w-full h-auto"
              />
              {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center animate-pulse-soft">
                <Crown className="w-10 h-10 text-white animate-bounce-gentle" />
              </div> */}
            </div>

            <p className="mb-4 text-justify text-muted-foreground">
              Funmilayo Oba is a dynamic woman of grace and vision. She
              serves as the Co-Lead Pastor of Destiny House, breeding lives and
              nurturing destinies. As the convener of the Royalty Ladies, she
              empowers young women to walk boldly in purpose, excel in marriage,
              and stay rooted with God.
            </p>

            <p className="mb-4 text-justify text-muted-foreground">
              Beyond ministry, she is the CEO of Kharis Foods, a thriving
              company exporting Ofada rice to different parts of the world. She
              is also a passionate Software Engineer creating digital tools that
              transform life and businesses. She is a graduate of Computer
              Science and a Certified Entrepreneur through the Cherie Blair
              Foundation. She is joyfully married to Apostle Gbenga Oba and they
              are blessed with two wonderful sons.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 clear-both">
              <span className="px-3 py-1 bg-pink text-white rounded-full text-sm animate-bounce-gentle">
                Tech Enthusiast
              </span>
              <span className="px-3 py-1 bg-purple text-white rounded-full text-sm animate-bounce-gentle">
                Public Speaker
              </span>
              <span className="px-3 py-1 bg-pink text-white rounded-full text-sm animate-bounce-gentle">
                Entrepreneur
              </span>
              <span className="px-3 py-1 bg-purple text-white rounded-full text-sm animate-bounce-gentle">
                Kingdom Advocate
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConvenerSection;
