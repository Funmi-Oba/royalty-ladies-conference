import React from 'react';
import { Crown, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink to-purple text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-rose-deep" />
              <h3 className="text-2xl font-bold">Royal Ladies Conference</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering women to discover their royal identity and walk in divine purpose. 
              Join us for a transformational experience that will impact your life forever.
            </p>
            <div className="flex gap-4">
              <Heart className="w-6 h-6 text-rose-deep animate-pulse" />
              <span className="text-white/80">Becoming the woman God intended</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#convener" className="text-white/80 hover:text-white transition-colors">Convener</a></li>
              <li><a href="#speakers" className="text-white/80 hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#registration" className="text-white/80 hover:text-white transition-colors">Register</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-white/80 text-sm">info@royalladiesconference.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-white/80 text-sm">+234 XXX XXXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-white/80 text-sm">Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Royal Ladies Conference. All rights reserved. 
            <span className="ml-2">Made with ❤️ for empowering women</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;