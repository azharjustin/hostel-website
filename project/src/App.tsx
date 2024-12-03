import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Facilities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;