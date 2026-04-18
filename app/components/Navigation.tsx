"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/facilities", label: "FACILITIES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Fast Forward Sport Logo"
              className="h-12 w-auto rounded-md object-cover"
            />
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-white">FAST Forward</span>
              <span className="text-accent-yellow ml-2">Sport</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-accent-yellow transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent-yellow text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-lime transition-colors duration-200"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-zinc-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-accent-yellow hover:bg-zinc-900 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-accent-yellow text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-accent-lime transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
