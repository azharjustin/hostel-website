import React from 'react';
import { Home, Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-rose-100 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-rose-600" />
            <span className="text-2xl font-semibold text-rose-600">MS Ladies Hostel</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-600">Home</a>
            <a href="#facilities" className="text-gray-700 hover:text-rose-600">Facilities</a>
            <a href="#gallery" className="text-gray-700 hover:text-rose-600">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+919965074779" className="flex items-center space-x-1 text-gray-700">
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}