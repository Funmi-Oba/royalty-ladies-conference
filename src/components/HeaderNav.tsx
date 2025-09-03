import React, { useState } from "react";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // close menu when link is clicked
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Royalty Ladies logo"
            className="h-12 w-auto drop-shadow"
          />
          <span className="sr-only">Royal Ladies</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-purple/90">
          <li><a href="#about" className="story-link">About Us</a></li>
          <li><a href="#merch" className="story-link">Shop event items</a></li>
          <li><a href="#sponsorship" className="story-link">RLC Partners</a></li>
          <li className="bg-pink font-bold animate-bounce-gentle text-white px-4 py-2 rounded-lg">
            <a href="#registration" className="story-link">Register Now!</a>
          </li>
        </ul>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6 text-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile menu */}
          {isOpen && (
            <ul className="absolute text-center top-full right-0 w-48 items-center bg-white shadow-md rounded-md flex flex-col gap-4 px-4 py-4">
              <li><a href="#about" onClick={handleLinkClick} className="story-link">About Us</a></li>
              <li><a href="#merch" onClick={handleLinkClick} className="story-link">Shop event items</a></li>
              <li><a href="#sponsorship" onClick={handleLinkClick} className="story-link">RLC Partners</a></li>
              <li className="bg-pink text-center w-full font-bold animate-bounce-gentle text-white px-4 py-2 rounded-lg">
                <a href="#registernow" onClick={handleLinkClick} className="story-link">Register Now!</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
