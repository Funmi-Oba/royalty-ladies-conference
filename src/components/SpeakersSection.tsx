import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import guest1 from "@/assets/guest1.jpg";
import guest2 from "@/assets/guest2.jpg";
import guest3 from "@/assets/guest3.jpg";

const SpeakersSection = () => {
  const guests = [
    {
      name: "Her Excellency, Engr. (Mrs.) Noimot Salako",
      title: "Deputy Governor, Ogun State",
      image: "images/guest/DG.png",
      bio: "A civil engineer and entrepreneur with over 30 years’ experience in engineering, real estate, and project management. Serving as the Deputy Governor of Ogun State since 2019."
    },
   
    {
      name: "Lare Akinronbi",
      title: "Educationist & Public Speaker",
      image: "images/guest/akinronbi.jpg",
      bio: "Co-pastor at Father's House. Head Proprietor of Quintessential Group of Schools. She is Passionate about making every woman find their path in life."
    },
     {
      name: "Gbenga Oba",
      title: "Realtor & Author",
      image: "images/guest/AGO3.jpg",
      bio: "Senior Pastor of Destiny House, passionate about young minds. Author of several books. Holds a degree in Executive church management with McPherson University."
    },
    {
      name: "Adebimpe Adejumo",
      title: "Life Coach & Philantropist",
      image: "images/guest/adejumo.jpg",
      bio: "A communicator, women and youth empowerment advocate. Founder & CEO of Sunshine Smiles Foundation. She leads programs in education, STEM, and community development with over a decade experience in communications and fintech."
    },
    {
      name: "Ifeoluwa Odegbami",
      title: "Realtor & Nutritionist",
      image: "images/guest/odegbami.jpg",
      bio: "A public health nutritionist, realtor, pastor and entrepreneur. An advocate for health and women’s empowerment. A philanthropist and culinary content creator."
    },
    {
      name: "Bolanle Olagboye",
      title: "International Speaker & Entrepreneur",
      image: "images/guest/olagboye.png",
      bio: "Co-pastor at Reconciliation Bible Church world wide. International sought after speaker with over two decades of experience. She is passionate about young mothers, helping them to find their purpose and excel in motherhood."
    }
  ];

  return (
    <section id="speakers" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl pb-2 font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
             Our World Class Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the incredible speakers who will be sharing life-transforming messages at this year's conference
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {guests.map((guest, index) => (
            <Card key={index} className="border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-pink shadow-elegant">
                  <img 
                    src={guest.image} 
                    alt={guest.name}
                    className="w-full h-full object-cover"
                    loading='lazy'
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