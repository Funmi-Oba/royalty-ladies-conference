import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Calendar, MapPin, Clock, Crown, Heart, ChefHat, GraduationCap, Music, Book, Users, Star, Award, Sparkles, Gift, Handshake } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg"; // fallback image retained but overridden by uploaded image in hero background
import guest1 from "@/assets/guest1.jpg";
import guest2 from "@/assets/guest2.jpg";
import guest3 from "@/assets/guest3.jpg";
import convener from "@/assets/convener.jpg";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
const Index = () => {
  const [shirtColor, setShirtColor] = useState<string>("Pink");
  const [shirtSize, setShirtSize] = useState<string>("M");
  const [wantCap, setWantCap] = useState<boolean>(false);
  const [capColor, setCapColor] = useState<string>("Pink");

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPayment = () => {
    const el = document.getElementById('payment');
    el?.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Floating flower petals */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 opacity-20 animate-petal-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <header className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/10">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <a href="#home" className="flex items-center gap-3">
              <img src="/lovable-uploads/577e0bfd-163b-47e1-8148-7939b501d14a.png" alt="Royalty Ladies logo" className="h-10 w-auto drop-shadow" />
              <span className="sr-only">Royal Ladies</span>
            </a>
            <ul className="hidden md:flex items-center gap-6 text-white/90">
              <li><a href="#about" className="story-link">About</a></li>
              <li><a href="#convener" className="story-link">Convener</a></li>
              <li><a href="#speakers" className="story-link">Speakers</a></li>
              <li><a href="#features" className="story-link">Features</a></li>
              <li><a href="#merch" className="story-link">Merch</a></li>
              <li><a href="#payment" className="story-link">Payment</a></li>
              <li><a href="#sponsorship" className="story-link">Sponsorship</a></li>
              <li><a href="#registration" className="story-link">Register</a></li>
            </ul>
          </nav>
        </header>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/lovable-uploads/0b7588ff-00bb-43f7-ab02-0ac0fe79410d.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink/80 via-purple/70 to-purple-deep/60"></div>
          {/* 3D Flower decorations */}
          <div className="absolute top-20 left-10 w-24 h-24 animate-float">
            <div className="w-full h-full bg-gradient-to-br from-rose to-pink-light rounded-full opacity-30 animate-pulse-soft"></div>
          </div>
          <div className="absolute bottom-32 right-16 w-32 h-32 animate-bounce-gentle">
            <div className="w-full h-full bg-gradient-to-br from-purple-light to-purple rounded-full opacity-25 animate-flower-bloom"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-16 h-16 text-rose-deep mr-4 animate-bounce-gentle" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-rose-deep to-white bg-clip-text text-transparent animate-shimmer bg-300%">
              Royal Ladies Conference
            </h1>
            <Sparkles className="w-12 h-12 text-rose-deep ml-4 animate-pulse-soft" />
          </div>
          
          <div className="inline-block px-4 py-1 mb-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm uppercase tracking-widest">
            Royalty Conference 1.0
          </div>
          <div className="flex items-center justify-center mb-6 text-xl md:text-2xl">
            <Calendar className="w-6 h-6 mr-2" />
            <span className="font-semibold">October 29th - November 2nd, 2025</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Theme: <span className="text-white">BECOMING</span>
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-2 italic">Phi 1:6.</p>
          <p className="text-lg md:text-xl mb-8 font-light">Becoming the woman God intended</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="elegant" 
              size="xl"
              onClick={scrollToRegistration}
              className="text-xl px-8 py-4 hover-scale animate-enter shadow-glow"
              aria-label="Register Now"
            >
              Register Now
            </Button>
            <Button 
              variant="elegant" 
              size="xl"
              onClick={scrollToRegistration}
              className="text-xl px-8 py-4 hover-scale animate-enter shadow-glow"
              aria-label="Get your Event T-Shirt"
            >
              Get your Event T-Shirt
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
              Our Vision & Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink to-pink-deep rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                  <Star className="w-8 h-8 text-white animate-bounce-gentle" />
                </div>
                <CardTitle className="text-2xl text-pink">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
                  To see every woman discover her royal identity, walk in divine purpose, and impact her generation 
                  through the power of God's love and grace. We envision a generation of empowered women who understand 
                  their worth and live out their God-given potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple/20 shadow-elegant hover:shadow-purple transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-purple-deep rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                  <Heart className="w-8 h-8 text-white animate-bounce-gentle" />
                </div>
                <CardTitle className="text-2xl text-purple">Our Mission</CardTitle>
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
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
              About Royal Ladies Conference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A premier gathering designed to celebrate, educate, and empower women from all walks of life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <CardHeader>
                <Users className="w-12 h-12 text-pink mx-auto mb-4 animate-bounce-gentle" />
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with like-minded women from diverse backgrounds and build lasting relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple/20 hover:shadow-purple transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-purple mx-auto mb-4 animate-bounce-gentle" />
                <CardTitle className="text-xl">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop spiritually, emotionally, and professionally through our comprehensive programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-pink/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <CardHeader>
                <Award className="w-12 h-12 text-pink mx-auto mb-4 animate-bounce-gentle" />
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experience world-class speakers, worship, and activities designed for maximum impact.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-rose/10 to-purple-light/10 rounded-lg p-8 border border-pink/10 shadow-flower">
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

      {/* Guest Speakers Section */}
      <section id="speakers" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
              Our Distinguished Guests
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the incredible women who will be ministering and sharing at RLC 2025
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guests.map((guest, index) => (
              <Card key={index} className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={guest.image} 
                      alt={guest.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center animate-pulse-soft">
                      <Star className="w-5 h-5 text-white animate-bounce-gentle" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-pink">{guest.name}</CardTitle>
                  <CardDescription className="text-purple font-semibold">{guest.title}</CardDescription>
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
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
              Conference Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience transformation through our carefully curated activities and sessions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center animate-pulse-soft">
                      <feature.icon className="w-8 h-8 text-white animate-bounce-gentle" />
                    </div>
                    <CardTitle className="text-xl text-pink">{feature.title}</CardTitle>
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

      {/* Merchandise Section */}
      <section id="merch" className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
              Event Merch: T‑Shirts & Caps
            </h2>
            <p className="text-xl text-muted-foreground">Choose your preferred T‑shirt color and size, and optionally add a cap.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            {/* T‑Shirts Gallery */}
            <Card className="border-pink/20 shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="text-pink">T‑Shirt Gallery</CardTitle>
                <CardDescription>Select your favorite color</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <img src="/lovable-uploads/9c4c8975-d67c-47af-929b-e4ed02911cee.png" alt="RLC T‑Shirt Pink color" className="rounded-lg shadow hover-scale" />
                  <img src="/lovable-uploads/d5f18021-4086-4495-a1a6-c58ab95f1dba.png" alt="RLC T‑Shirt Purple color" className="rounded-lg shadow hover-scale" />
                  <img src="/lovable-uploads/39ac62ab-1587-4f35-9fb5-069759c50cf2.png" alt="RLC T‑Shirt Light Pink color" className="rounded-lg shadow hover-scale" />
                  <img src="/lovable-uploads/aceefe2f-4a87-4cfa-954d-6c1d3d5828d9.png" alt="RLC T‑Shirt Black color" className="rounded-lg shadow hover-scale" />
                  <img src="/lovable-uploads/d16f7a5e-2d55-4d3a-9d0e-03214e6db218.png" alt="RLC T‑Shirt White color" className="rounded-lg shadow hover-scale" />
                </div>
              </CardContent>
            </Card>

            {/* Caps Gallery */}
            <Card className="border-purple/20 shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="text-purple">Face Cap Gallery</CardTitle>
                <CardDescription>Optional add‑on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <img src="/lovable-uploads/938d0120-cc49-4f79-8679-8b275a583abe.png" alt="RLC Cap Pink color" className="rounded-lg shadow hover-scale" />
                  <img src="/lovable-uploads/aee0adb1-250a-4719-98f1-f37e6769fdc6.png" alt="RLC Cap Black color" className="rounded-lg shadow hover-scale" />
                  <img src="/lovable-uploads/bd038f02-7214-4e13-b884-a6c2e9d7ae43.png" alt="RLC Cap White color" className="rounded-lg shadow hover-scale" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selectors */}
          <Card className="border-pink/20 shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-pink">Customize Your Order</CardTitle>
              <CardDescription>Pick T‑shirt color and size, and cap color if desired</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="shirt-color">T‑Shirt Color</Label>
                  <Select value={shirtColor} onValueChange={(v) => setShirtColor(v)}>
                    <SelectTrigger id="shirt-color" className="w-full"><SelectValue placeholder="Select color" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pink">Pink</SelectItem>
                      <SelectItem value="Purple">Purple</SelectItem>
                      <SelectItem value="Light Pink">Light Pink</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shirt-size">T‑Shirt Size</Label>
                  <Select value={shirtSize} onValueChange={(v) => setShirtSize(v)}>
                    <SelectTrigger id="shirt-size" className="w-full"><SelectValue placeholder="Select size" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="2XL">2XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cap-color">Cap (optional)</Label>
                  <Select value={wantCap ? capColor : "None"} onValueChange={(v) => { if (v === "None") { setWantCap(false); } else { setWantCap(true); setCapColor(v); } }}>
                    <SelectTrigger id="cap-color" className="w-full"><SelectValue placeholder="Select cap color" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="None">No Cap</SelectItem>
                      <SelectItem value="Pink">Pink</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="elegant" size="xl" className="px-10 py-4 hover-scale shadow-glow" onClick={scrollToPayment}>
                  Order Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
              Make Your Payment
            </h2>
            <p className="text-muted-foreground">Transfer and confirm via WhatsApp with your receipt.</p>
          </div>

          <Card className="border-purple/20 shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-purple">Account Details</CardTitle>
              <CardDescription>Please pay using the account below, then confirm.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4 text-lg">
                <div className="p-4 rounded-lg bg-accent/40"><span className="block text-sm text-muted-foreground">Account No</span>1308014283</div>
                <div className="p-4 rounded-lg bg-accent/40"><span className="block text-sm text-muted-foreground">Account Name</span>Royalty Ladies</div>
                <div className="p-4 rounded-lg bg-accent/40"><span className="block text-sm text-muted-foreground">Bank</span>Providus Bank</div>
              </div>

              <div className="p-4 rounded-lg bg-background border">
                <p className="text-sm text-muted-foreground mb-1">Order Summary</p>
                <p className="font-medium">T‑Shirt: {shirtColor} • Size: {shirtSize}{wantCap ? ` • Cap: ${capColor}` : ''}</p>
                <p className="text-xs text-muted-foreground">Cap size is general.</p>
              </div>

              <div className="pt-2 flex justify-center">
                <Button
                  variant="elegant"
                  size="lg"
                  className="px-8 py-3 hover-scale shadow-glow"
                  onClick={() => {
                    const summary = `RLC Merch Order%0A- T-Shirt: ${shirtColor}%0A- Size: ${shirtSize}${wantCap ? `%0A- Cap: ${capColor}` : ''}%0A----%0AI have made my payment to:%0AAccount: 1308014283 (Royalty Ladies, Providus Bank).%0APlease find my receipt attached.`;
                    window.open(`https://wa.me/?text=${summary}`, '_blank');
                  }}
                >
                  I have made my payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorship" className="py-20 px-4 bg-gradient-to-r from-rose/5 to-purple-light/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
              Sponsorship & Support
            </h2>
            <p className="text-xl text-muted-foreground">
              Partner with us to empower the next generation of royal ladies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink to-pink-deep rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                  <Gift className="w-8 h-8 text-white animate-bounce-gentle" />
                </div>
                <CardTitle className="text-xl text-pink">Platinum Sponsor</CardTitle>
                <CardDescription className="text-lg font-semibold text-purple">₦500,000+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">• Logo on all promotional materials</p>
                <p className="text-sm">• Speaking opportunity</p>
                <p className="text-sm">• VIP seating for 10 guests</p>
                <p className="text-sm">• Exhibition booth space</p>
                <p className="text-sm">• Social media promotion</p>
              </CardContent>
            </Card>

            <Card className="border-purple/20 shadow-elegant hover:shadow-purple transition-all duration-300 transform hover:scale-105 animate-fade-in text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-purple-deep rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                  <Star className="w-8 h-8 text-white animate-bounce-gentle" />
                </div>
                <CardTitle className="text-xl text-purple">Gold Sponsor</CardTitle>
                <CardDescription className="text-lg font-semibold text-pink">₦200,000+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">• Logo on event banners</p>
                <p className="text-sm">• VIP seating for 5 guests</p>
                <p className="text-sm">• Product display table</p>
                <p className="text-sm">• Website recognition</p>
                <p className="text-sm">• Program acknowledgment</p>
              </CardContent>
            </Card>

            <Card className="border-pink/20 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-rose to-pink rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                  <Handshake className="w-8 h-8 text-white animate-bounce-gentle" />
                </div>
                <CardTitle className="text-xl text-pink">Silver Sponsor</CardTitle>
                <CardDescription className="text-lg font-semibold text-purple">₦100,000+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">• Logo in program booklet</p>
                <p className="text-sm">• VIP seating for 2 guests</p>
                <p className="text-sm">• Social media mention</p>
                <p className="text-sm">• Certificate of appreciation</p>
                <p className="text-sm">• Networking opportunities</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in becoming a sponsor? Contact us to discuss custom packages.
            </p>
            <Button 
              variant="elegant" 
              size="lg"
              className="bg-gradient-to-r from-pink to-purple hover:from-pink-deep hover:to-purple-deep transform hover:scale-105 transition-all duration-300 animate-bounce-gentle"
            >
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent mb-4 animate-shimmer bg-300%">
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
      <footer className="bg-gradient-to-r from-pink to-purple-deep text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-8 h-8 text-rose-deep animate-bounce-gentle" />
                <h3 className="text-2xl font-bold">Royal Ladies Conference</h3>
                <Sparkles className="w-6 h-6 text-rose-deep animate-pulse-soft" />
              </div>
              <p className="text-pink-light leading-relaxed mb-6">
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
