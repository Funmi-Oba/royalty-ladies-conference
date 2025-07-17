import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Calendar, MapPin, Clock, Crown, Heart, ChefHat, GraduationCap, Music, Book, Users, Star, Award } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import guest1 from "@/assets/guest1.jpg";
import guest2 from "@/assets/guest2.jpg";
import guest3 from "@/assets/guest3.jpg";
import convener from "@/assets/convener.jpg";

const Index = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-royal/80 to-gold/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-16 h-16 text-gold mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">
              Royal Ladies Conference
            </h1>
          </div>
          
          <div className="flex items-center justify-center mb-6 text-xl md:text-2xl">
            <Calendar className="w-6 h-6 mr-2" />
            <span className="font-semibold">October 29th - November 2nd, 2025</span>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 font-light">
            Where Royalty Meets Purpose - A Transformational Experience for Every Woman
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="elegant" 
              size="xl"
              onClick={scrollToRegistration}
              className="text-xl px-8 py-4"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="text-xl px-8 py-4 border-white text-white hover:bg-white hover:text-royal"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal to-gold bg-clip-text text-transparent mb-4">
              Our Vision & Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-royal/20 shadow-elegant">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-royal to-royal-deep rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-royal">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
                  To see every woman discover her royal identity, walk in divine purpose, and impact her generation 
                  through the power of God's love and grace. We envision a generation of empowered women who understand 
                  their worth and live out their God-given potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20 shadow-elegant">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
                  To create transformational experiences that inspire, educate, and empower women spiritually, 
                  emotionally, and practically. Through worship, word, fellowship, and skill development, 
                  we equip women to excel in every area of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About RLC Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal to-gold bg-clip-text text-transparent mb-4">
              About Royal Ladies Conference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A premier gathering designed to celebrate, educate, and empower women from all walks of life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-royal/20">
              <CardHeader>
                <Users className="w-12 h-12 text-royal mx-auto mb-4" />
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with like-minded women from diverse backgrounds and build lasting relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold/20">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-xl">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop spiritually, emotionally, and professionally through our comprehensive programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-royal/20">
              <CardHeader>
                <Award className="w-12 h-12 text-royal mx-auto mb-4" />
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experience world-class speakers, worship, and activities designed for maximum impact.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-royal-light/10 to-gold-light/10 rounded-lg p-8">
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

      {/* About the Convener Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal to-gold bg-clip-text text-transparent mb-4">
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
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-royal to-gold rounded-full flex items-center justify-center">
                  <Crown className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <Card className="border-royal/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl text-royal">Rev. Dr. Mercy Adelabu</CardTitle>
                  <CardDescription className="text-lg text-gold font-semibold">
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
                    <span className="px-3 py-1 bg-royal text-white rounded-full text-sm">Author</span>
                    <span className="px-3 py-1 bg-gold text-white rounded-full text-sm">International Speaker</span>
                    <span className="px-3 py-1 bg-royal text-white rounded-full text-sm">Leadership Coach</span>
                    <span className="px-3 py-1 bg-gold text-white rounded-full text-sm">Women's Advocate</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Speakers Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal to-gold bg-clip-text text-transparent mb-4">
              Our Distinguished Guests
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the incredible women who will be ministering and sharing at RLC 2025
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guests.map((guest, index) => (
              <Card key={index} className="border-royal/20 shadow-elegant hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={guest.image} 
                      alt={guest.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-royal to-gold rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-royal">{guest.name}</CardTitle>
                  <CardDescription className="text-gold font-semibold">{guest.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground leading-relaxed">{guest.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal to-gold bg-clip-text text-transparent mb-4">
              Conference Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience transformation through our carefully curated activities and sessions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-royal/20 shadow-elegant hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-royal to-gold rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-royal">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal to-gold bg-clip-text text-transparent mb-4">
              Secure Your Spot
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't miss this life-changing experience. Register now for RLC 2025
            </p>
          </div>
          
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-royal to-royal-deep text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold">Royal Ladies Conference</h3>
              </div>
              <p className="text-royal-light leading-relaxed mb-6">
                Empowering women to discover their royal identity and walk in divine purpose. 
                Join us for an unforgettable experience of transformation, growth, and empowerment.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span>Oct 29 - Nov 2, 2025</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
              <ul className="space-y-2 text-royal-light">
                <li><a href="#" className="hover:text-gold transition-colors">About RLC</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Speakers</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Features</a></li>
                <li><a href="#registration" className="hover:text-gold transition-colors">Register</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Contact Info</h4>
              <ul className="space-y-2 text-royal-light">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Conference Center, Lagos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>9:00 AM - 6:00 PM Daily</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-royal-light/20 pt-8 mt-8 text-center">
            <p className="text-royal-light">
              © 2025 Royal Ladies Conference. All rights reserved. Designed with ❤️ for royal women everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
