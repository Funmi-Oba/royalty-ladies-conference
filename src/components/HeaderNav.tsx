import React from 'react';

const HeaderNav = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-2">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Royalty Ladies logo" className="h-16 w-auto drop-shadow" />
          <span className="sr-only">Royal Ladies</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-purple/90">
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
  );
};

export default HeaderNav;