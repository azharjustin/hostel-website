import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80"
          alt="Hostel Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to MS Ladies Hostel</h1>
          <p className="text-xl mb-8">Your home away from home. Experience comfort, security, and community in our modern facility.</p>
          <a href="#contact" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg inline-block transition">
            Book Your Stay
          </a>
        </div>
      </div>
    </section>
  );
}