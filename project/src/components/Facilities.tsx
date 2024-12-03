import React from 'react';
import { Wifi, Shield, Utensils, Tv, Coffee, Bed } from 'lucide-react';

const facilities = [
  { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet access throughout the building' },
  { icon: Shield, title: '24/7 Security', description: 'Round-the-clock security with CCTV surveillance' },
  { icon: Utensils, title: 'Home Food', description: 'Your home style foods' },
  { icon: Tv, title: 'Common Room', description: 'Spacious common room with entertainment facilities' },
  { icon: Coffee, title: 'Study Area', description: 'Quiet study spaces for focused learning' },
  { icon: Bed, title: 'Single cot', description: 'Single and double cots facilities' },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <facility.icon className="h-10 w-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}