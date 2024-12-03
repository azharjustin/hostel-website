import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-rose-600 mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">149/3 North extension, ganesh nagar, <br/> krishnamoorthy nagar, Indian bank colony, <br/>trichy 620021</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-rose-600 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+91 99650 75779</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-rose-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">msladieshosteltrichy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-rose-600 mt-1" />
              <div>
                <h4 className="font-semibold">Office Hours</h4>
                <p className="text-gray-600">Monday - Sunday: 24/7</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d516.6461780357151!2d78.68387820234557!3d10.77381037223695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sms%20ladies%20hsotel%20trichy!5e0!3m2!1sen!2sin!4v1733240072098!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}